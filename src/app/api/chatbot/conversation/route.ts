import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { emailService } from '@/lib/email'
import { chatbotLeadTemplate } from '@/lib/email-templates'

// Função para enviar email de notificação
async function sendEmailNotification(leadData: any, messages: any[]) {
  try {
    // Enviar email ao administrador com template HTML profissional
    const htmlContent = chatbotLeadTemplate({
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      company: leadData.company,
      messages: messages,
    })

    const result = await emailService.send({
      to: { email: process.env.ADMIN_EMAIL || 'contato@inovamentelabs.com.br', name: 'Administrador' },
      subject: `[LEAD CHATBOT] ${leadData.name} - ${leadData.company || 'Sem empresa'}`,
      htmlContent,
      replyTo: { email: leadData.email, name: leadData.name },
    })

    if (result.success) {
      console.log('📧 NOVO LEAD VIA CHATBOT - EMAIL ENVIADO COM SUCESSO');
      console.log('====================================================');
      console.log(`📝 Nome: ${leadData.name}`);
      console.log(`📧 Email: ${leadData.email}`);
      console.log(`📱 Telefone: ${leadData.phone}`);
      console.log(`🏢 Empresa: ${leadData.company}`);
      console.log(`✉️  Message ID: ${result.messageId}`);
      console.log('====================================================');
    } else {
      console.error('❌ Erro ao enviar email de notificação:', result.error);
    }
  } catch (error) {
    console.error('Erro ao processar notificação de lead:', error);
    // Não falhar o processo se houver erro
  }
}

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

    // Enviar email de notificação
    await sendEmailNotification({ ...leadData, sessionId }, messages);

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
