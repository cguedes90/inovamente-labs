import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    // Credenciais fixas do admin
    if (email !== 'admin' && email !== 'admin@inovamentelabs.com') {
      return NextResponse.json(
        { message: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    if (password !== 'InovaAdmin2025!') {
      return NextResponse.json(
        { message: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Gerar token
    const token = generateToken({
      id: 1,
      username: 'admin',
      role: 'admin'
    });

    return NextResponse.json({
      token,
      admin: {
        id: 1,
        username: 'admin',
        role: 'admin'
      }
    });

  } catch (error: any) {
    console.error('Erro no login do admin:', error);
    
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
