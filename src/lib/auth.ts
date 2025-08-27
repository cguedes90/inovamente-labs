import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';
import { z } from 'zod';
import prisma from './prisma';

// Validar se JWT_SECRET existe
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

// Schemas de validação
const TokenPayloadSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  type: z.enum(['admin', 'client']),
  name: z.string(),
  iat: z.number().optional(),
  exp: z.number().optional()
});

const PasswordSchema = z.string().min(6, 'Senha deve ter pelo menos 6 caracteres');

export type TokenPayload = z.infer<typeof TokenPayloadSchema>;

// Funções de hash de senha
export async function hashPassword(password: string): Promise<string> {
  const validPassword = PasswordSchema.parse(password);
  return bcrypt.hash(validPassword, 12);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Funções de JWT
export function generateToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const validatedPayload = TokenPayloadSchema.omit({ iat: true, exp: true }).parse(payload);
  return jwt.sign(validatedPayload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): TokenPayload {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return TokenPayloadSchema.parse(decoded);
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
}

// Função genérica de autenticação
export async function authenticateRequest(
  req: NextRequest, 
  requiredType?: 'admin' | 'client'
): Promise<TokenPayload> {
  const authHeader = req.headers.get('authorization');
  
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Token de autorização requerido');
  }

  const token = authHeader.substring(7);
  const payload = verifyToken(token);

  if (requiredType && payload.type !== requiredType) {
    throw new Error(`Acesso negado. Tipo de usuário requerido: ${requiredType}`);
  }

  return payload;
}

// Autenticação específica para clientes
export async function authenticateClient(req: NextRequest): Promise<TokenPayload & { client: any }> {
  try {
    const payload = await authenticateRequest(req, 'client');

    // Verificar se cliente existe e está ativo
    const client = await prisma.client.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        phone: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!client) {
      throw new Error('Cliente não encontrado');
    }

    return { ...payload, client };
  } catch (error) {
    throw new Error(`Falha na autenticação do cliente: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
  }
}

// Autenticação específica para admins
export async function authenticateAdmin(req: NextRequest): Promise<TokenPayload & { admin: any }> {
  try {
    const payload = await authenticateRequest(req, 'admin');

    // Verificar se admin existe
    const admin = await prisma.admin.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!admin) {
      throw new Error('Administrador não encontrado');
    }

    return { ...payload, admin };
  } catch (error) {
    throw new Error(`Falha na autenticação do administrador: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
  }
}

// Validação de senha forte
export function validateStrongPassword(password: string): boolean {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

// Rate limiting simples em memória (para produção usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}
