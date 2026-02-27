import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { authenticateAdmin } from '@/lib/auth';
import { 
  withErrorHandling, 
  createSuccessResponse, 
  validateRequest, 
  ConflictError,
  AuthorizationError
} from '@/lib/api-response';
import { adminCreateClientSchema, paginationSchema } from '@/lib/validations';

// Schema para query parameters de listagem
const listClientsSchema = paginationSchema.extend({
  search: z.string().optional(),
  status: z.enum(['active', 'inactive', 'all']).default('all'),
  company: z.string().optional()
});

// Handler para GET - Listar clientes
async function getClientsHandler(request: NextRequest) {
  // Verificar autenticação de admin
  const { admin } = await authenticateAdmin(request);
  
  // Validar query parameters
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams);
  const validatedParams = validateRequest(listClientsSchema, queryParams);
  const { page, limit, sortBy, sortOrder, search, status, company } = validatedParams as z.infer<typeof listClientsSchema>;

  // Construir filtros
  const where: any = {};
  
  if (status !== 'all') {
    where.isActive = status === 'active';
  }
  
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { company: { contains: search, mode: 'insensitive' } }
    ];
  }
  
  if (company) {
    where.company = { contains: company, mode: 'insensitive' };
  }

  // Buscar clientes com paginação
  const [clients, total] = await Promise.all([
    prisma.client.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        phone: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            tickets: true
          }
        }
      },
      orderBy: sortBy ? { [sortBy]: sortOrder } : { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit
    }),
    prisma.client.count({ where })
  ]);

  const formattedClients = clients.map((client: any) => ({
    ...client,
    ticketCount: client._count.tickets,
    _count: undefined
  }));

  return createSuccessResponse({
    clients: formattedClients,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
}

// Handler para POST - Criar cliente
async function createClientHandler(request: NextRequest) {
  // Verificar autenticação de admin
  const { admin } = await authenticateAdmin(request);
  
  // Validar dados de entrada
  const requestData = await request.json();
  const validatedClientData = validateRequest(adminCreateClientSchema, requestData);
  const clientData = validatedClientData as z.infer<typeof adminCreateClientSchema>;

  // Verificar se email já existe
  const existingClient = await prisma.client.findUnique({
    where: { email: clientData.email }
  });

  if (existingClient) {
    throw new ConflictError('Email já está em uso');
  }

  // Criptografar senha
  const hashedPassword = await bcrypt.hash(clientData.password, 12);

  // Criar cliente
  const newClient = await prisma.client.create({
    data: {
      name: clientData.name,
      email: clientData.email,
      password: hashedPassword,
      company: clientData.company || null,
      phone: clientData.phone || null,
      isActive: true
    },
    select: {
      id: true,
      name: true,
      email: true,
      company: true,
      phone: true,
      isActive: true,
      createdAt: true
    }
  });

  // Log da ação para auditoria
  await prisma.auditLog.create({
    data: {
      adminId: admin.id,
      action: 'CREATE',
      resource: 'client',
      resourceId: newClient.id,
      details: { 
        clientName: newClient.name, 
        clientEmail: newClient.email 
      }
    }
  });

  console.log(`Cliente criado com sucesso pelo admin ${admin.email}:`, newClient.email);

  return createSuccessResponse(
    {
      message: 'Cliente criado com sucesso',
      client: newClient
    },
    'Cliente criado com sucesso',
    201
  );
}

export const GET = withErrorHandling(getClientsHandler);
export const POST = withErrorHandling(createClientHandler);
