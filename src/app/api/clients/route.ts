import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token de acesso requerido' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    
    if (!payload || payload.type !== 'admin') {
      return NextResponse.json(
        { error: 'Acesso negado. Apenas administradores podem listar clientes.' },
        { status: 403 }
      );
    }

    // Buscar todos os clientes
    const clients = await prisma.client.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            tickets: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedClients = clients.map((client: any) => ({
      id: client.id,
      name: client.name,
      email: client.email,
      company: client.company,
      isActive: client.isActive,
      createdAt: client.createdAt.toISOString(),
      lastLogin: client.updatedAt.toISOString(),
      ticketCount: client._count.tickets
    }));

    return NextResponse.json(formattedClients);

  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
