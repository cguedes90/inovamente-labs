import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'
import { emailService } from '@/lib/email'
import { newTicketTemplate, ticketConfirmationTemplate } from '@/lib/email-templates'

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

    // Enviar emails de notificação (não bloqueia a resposta)
    Promise.all([
      // Email para o administrador
      emailService.send({
        to: { email: process.env.ADMIN_EMAIL || 'contato@inovamentelabs.com.br', name: 'Administrador' },
        subject: `[NOVO TICKET] #${ticket.id.substring(0, 8)} - ${ticket.title}`,
        htmlContent: newTicketTemplate({
          ticketId: ticket.id,
          clientName: ticket.client.name,
          clientEmail: ticket.client.email,
          subject: ticket.title,
          description: ticket.description,
          priority: ticket.priority,
        }),
        replyTo: { email: ticket.client.email, name: ticket.client.name },
      }),
      // Email de confirmação para o cliente
      emailService.send({
        to: { email: ticket.client.email, name: ticket.client.name },
        subject: `Ticket #${ticket.id.substring(0, 8)} criado com sucesso - InovaMente Labs`,
        htmlContent: ticketConfirmationTemplate({
          ticketId: ticket.id,
          clientName: ticket.client.name,
          subject: ticket.title,
        }),
      }),
    ])
      .then(([adminResult, clientResult]) => {
        console.log('📧 Emails de novo ticket enviados:', {
          admin: adminResult.success ? '✅' : '❌',
          client: clientResult.success ? '✅' : '❌',
          ticketId: ticket.id,
        })
      })
      .catch(error => {
        console.error('❌ Erro ao enviar emails de ticket (não bloqueante):', error)
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
