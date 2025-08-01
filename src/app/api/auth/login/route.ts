import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email, password, type } = await request.json()

    console.log('Login attempt:', { email, type, passwordLength: password?.length })

    if (!email || !password || !type) {
      return NextResponse.json(
        { error: 'Email, senha e tipo são obrigatórios' },
        { status: 400 }
      )
    }

    let user
    
    if (type === 'admin') {
      console.log('Searching admin with email/username:', email)
      // Login como admin (usando username ou email)
      user = await prisma.admin.findFirst({
        where: {
          OR: [
            { email: email },
            { username: email }
          ]
        }
      })
      console.log('Admin found:', user ? 'YES' : 'NO')
    } else if (type === 'client') {
      // Login como cliente
      user = await prisma.client.findUnique({
        where: { email }
      })
    } else {
      return NextResponse.json(
        { error: 'Tipo de usuário inválido' },
        { status: 400 }
      )
    }

    if (!user) {
      console.log('User not found for:', email, 'type:', type)
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 401 }
      )
    }

    console.log('User found, checking password...')
    // Verificar senha
    const passwordMatch = await bcrypt.compare(password, user.password)
    console.log('Password match:', passwordMatch)
    
    if (!passwordMatch) {
      console.log('Password mismatch for user:', user.email)
      return NextResponse.json(
        { error: 'Senha incorreta' },
        { status: 401 }
      )
    }

    // Gerar JWT
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        type,
        name: user.name 
      },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    )

    // Remover senha da resposta
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      message: 'Login realizado com sucesso',
      token,
      user: userWithoutPassword,
      type
    })

  } catch (error) {
    console.error('Erro no login:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
