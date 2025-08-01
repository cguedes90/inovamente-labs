import { NextRequest, NextResponse } from 'next/server';
import { authenticateClient } from '@/lib/auth';
import { createTicketSchema } from '@/lib/validations';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const client = await authenticateClient(req);
    if (!client) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const result = await pool.query(
      `SELECT * FROM tickets 
       WHERE client_id = $1 
       ORDER BY created_at DESC`,
      [client.id]
    );

    return NextResponse.json(result.rows);

  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await authenticateClient(req);
    if (!client) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, description, category, priority } = createTicketSchema.parse(body);

    const result = await pool.query(
      `INSERT INTO tickets (client_id, title, description, category, priority, status)
       VALUES ($1, $2, $3, $4, $5, 'open')
       RETURNING *`,
      [client.id, title, description, category, priority]
    );

    return NextResponse.json(result.rows[0], { status: 201 });

  } catch (error: any) {
    console.error('Erro ao criar ticket:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
