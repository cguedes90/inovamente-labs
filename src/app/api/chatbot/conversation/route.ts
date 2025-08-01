import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { sessionId, leadData, messages } = await request.json()

    // Criar conversa
    const conversation = await prisma.chatConversation.create({
      data: {
        sessionId,
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        company: leadData.company,
        status: 'COMPLETED'
      }
    })

    // Salvar mensagens
    for (const message of messages) {
      await prisma.chatMessage.create({
        data: {
          conversationId: conversation.id,
          content: message.content,
          isBot: message.isBot,
          messageType: message.messageType
        }
      })
    }

    return NextResponse.json({ 
      success: true, 
      conversationId: conversation.id 
    })

  } catch (error) {
    console.error('Erro ao salvar conversa do chatbot:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const conversations = await prisma.chatConversation.findMany({
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc'
          }
        },
        _count: {
          select: {
            messages: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ conversations })

  } catch (error) {
    console.error('Erro ao buscar conversas:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
