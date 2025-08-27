import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Função para enviar email de notificação
async function sendEmailNotification(leadData: any, messages: any[]) {
  try {
    // Preparar conteúdo do email
    const emailContent = `
Nova conversa via Chatbot InovaMente Labs
=========================================

DADOS DO LEAD:
Nome: ${leadData.name}
Email: ${leadData.email}
Telefone: ${leadData.phone}
Empresa: ${leadData.company}

HISTÓRICO DA CONVERSA:
${messages.map(msg => `${msg.isBot ? '🤖 Bot' : '👤 Cliente'}: ${msg.content}`).join('\n')}

---
Data: ${new Date().toLocaleString('pt-BR')}
Sessão: ${leadData.sessionId || 'N/A'}
    `.trim();

    // Criar objeto de contato para API de contato
    const contactData = {
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone || '',
      company: leadData.company || '',
      subject: '🤖 Nova conversa via Chatbot - Lead qualificado',
      message: emailContent,
      source: 'chatbot'
    };

    // Salvar via API de contato (que será exibido no admin)
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });

    if (response.ok) {
      // Log detalhado para administradores
      console.log('📧 NOVO LEAD VIA CHATBOT - AÇÃO NECESSÁRIA');
      console.log('===========================================');
      console.log(`📝 Nome: ${leadData.name}`);
      console.log(`📧 Email: ${leadData.email}`);
      console.log(`📱 Telefone: ${leadData.phone}`);
      console.log(`🏢 Empresa: ${leadData.company}`);
      console.log('🗣️ Conversa:', messages.map(msg => `${msg.isBot ? '🤖' : '👤'} ${msg.content}`));
      console.log('');
      console.log('⚠️  IMPORTANTE: Notificar contato@inovamentelabs.com.br');
      console.log('📋 Lead salvo no sistema admin para acompanhamento');
      console.log('===========================================');
      
      // TODO: Implementar envio real de email quando servidor SMTP estiver configurado
      // nodemailer.sendMail({
      //   to: 'contato@inovamentelabs.com.br',
      //   subject: contactData.subject,
      //   text: emailContent
      // });
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
