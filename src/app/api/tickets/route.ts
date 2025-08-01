import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

interface JWTPayload {
  id: string
  email: string
  type: string
  name: string
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token de autorização necessário' },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)
    
    let decoded: JWTPayload
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    } catch (error) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 401 }
      )
    }

    let tickets

    if (decoded.type === 'admin') {
      // Admin vê todos os tickets
      tickets = await prisma.ticket.findMany({
        include: {
          client: {
            select: {
              id: true,
              name: true,
              email: true,
              company: true
            }
          },
          messages: {
            orderBy: { createdAt: 'desc' },
            take: 1
          },
          _count: {
            select: { messages: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
    } else {
      // Cliente vê apenas seus tickets
      tickets = await prisma.ticket.findMany({
        where: { clientId: decoded.id },
        include: {
          messages: {
            orderBy: { createdAt: 'desc' },
            take: 1
          },
          _count: {
            select: { messages: true }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
    }

    return NextResponse.json({ tickets })

  } catch (error) {
    console.error('Erro ao buscar tickets:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token de autorização necessário' },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7)
    
    let decoded: JWTPayload
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    } catch (error) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 401 }
      )
    }

    if (decoded.type !== 'client') {
      return NextResponse.json(
        { error: 'Apenas clientes podem criar tickets' },
        { status: 403 }
      )
    }

    const { title, description, category, priority = 'MEDIA' } = await request.json()

    if (!title || !description || !category) {
      return NextResponse.json(
        { error: 'Título, descrição e categoria são obrigatórios' },
        { status: 400 }
      )
    }

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        category,
        priority,
        clientId: decoded.id
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            company: true
          }
        }
      }
    })

    return NextResponse.json({ 
      message: 'Ticket criado com sucesso',
      ticket 
    })

  } catch (error) {
    console.error('Erro ao criar ticket:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
