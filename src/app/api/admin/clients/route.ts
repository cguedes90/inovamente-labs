import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin, hashPassword } from '@/lib/auth';
import { createClientSchema } from '@/lib/validations';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const admin = await authenticateAdmin(req);
    if (!admin) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const result = await pool.query(
      'SELECT id, name, email, company, phone, status, last_login, created_at FROM clients ORDER BY created_at DESC'
    );

    return NextResponse.json(result.rows);

  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = await authenticateAdmin(req);
    if (!admin) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, email, password, company, phone } = createClientSchema.parse(body);

    // Verificar se email já existe
    const existingClient = await pool.query(
      'SELECT id FROM clients WHERE email = $1',
      [email]
    );

    if (existingClient.rows.length > 0) {
      return NextResponse.json(
        { message: 'Email já está em uso' },
        { status: 409 }
      );
    }

    // Hash da senha
    const hashedPassword = await hashPassword(password);

    // Criar cliente
    const result = await pool.query(
      `INSERT INTO clients (name, email, password, company, phone, status)
       VALUES ($1, $2, $3, $4, $5, 'active')
       RETURNING id, name, email, company, phone, status, created_at`,
      [name, email, hashedPassword, company, phone]
    );

    return NextResponse.json(result.rows[0], { status: 201 });

  } catch (error: any) {
    console.error('Erro ao criar cliente:', error);
    
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
