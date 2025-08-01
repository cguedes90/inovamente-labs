import { NextRequest, NextResponse } from 'next/server';
import { comparePassword, generateToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validations';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    // Buscar cliente no banco
    const result = await pool.query(
      'SELECT * FROM clients WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    const client = result.rows[0];

    // Verificar se o cliente está ativo
    if (client.status !== 'active') {
      return NextResponse.json(
        { message: 'Conta inativa. Entre em contato com o suporte.' },
        { status: 401 }
      );
    }

    // Verificar senha
    const isValidPassword = await comparePassword(password, client.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Atualizar last_login
    await pool.query(
      'UPDATE clients SET last_login = NOW() WHERE id = $1',
      [client.id]
    );

    // Gerar token
    const token = generateToken({
      id: client.id,
      email: client.email,
      role: 'client'
    });

    // Remover senha da resposta
    const { password: _, ...clientData } = client;

    return NextResponse.json({
      token,
      client: clientData
    });

  } catch (error: any) {
    console.error('Erro no login do cliente:', error);
    
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
