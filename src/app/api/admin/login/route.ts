import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';
import { adminLoginSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = adminLoginSchema.parse(body);

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
      id: '1',
      email: 'admin@inovamentelabs.com',
      type: 'admin' as const,
      name: 'Administrador'
    });

    return NextResponse.json({
      token,
      user: {
        id: '1',
        email: 'admin@inovamentelabs.com',
        type: 'admin',
        name: 'Administrador'
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
