import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // Buscar leads do formulário de contato
    const contactLeadsQuery = await pool.query(`
      SELECT 
        id,
        name,
        email,
        subject,
        message,
        phone,
        company,
        status,
        priority,
        'CONTACT_FORM' as source,
        "createdAt",
        "updatedAt"
      FROM contact_forms
      ORDER BY "createdAt" DESC
    `);

    // Buscar leads do chatbot
    const chatLeadsQuery = await pool.query(`
      SELECT 
        c.id,
        c.name,
        c.email,
        c.phone,
        c.company,
        c.status,
        'CHATBOT' as source,
        c."createdAt",
        c."updatedAt",
        COUNT(m.id) as message_count
      FROM chat_conversations c
      LEFT JOIN chat_messages m ON c.id = m."conversationId"
      WHERE c.email IS NOT NULL OR c.name IS NOT NULL
      GROUP BY c.id, c.name, c.email, c.phone, c.company, c.status, c."createdAt", c."updatedAt"
      ORDER BY c."createdAt" DESC
    `);

    // Combinar e formatar leads
    const contactLeads = contactLeadsQuery.rows.map(lead => ({
      ...lead,
      type: 'contact_form',
      details: {
        subject: lead.subject,
        message: lead.message
      }
    }));

    const chatLeads = chatLeadsQuery.rows.map(lead => ({
      ...lead,
      type: 'chatbot',
      subject: `Conversa via Chatbot (${lead.message_count} mensagens)`,
      message: `Lead capturado durante conversa com ${lead.message_count} mensagens trocadas.`,
      details: {
        message_count: lead.message_count
      }
    }));

    // Combinar todos os leads e ordenar por data
    const allLeads = [...contactLeads, ...chatLeads]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Estatísticas
    const stats = {
      total: allLeads.length,
      contactForm: contactLeads.length,
      chatbot: chatLeads.length,
      pending: allLeads.filter(lead => 
        lead.status === 'PENDING' || lead.status === 'ACTIVE'
      ).length,
      responded: allLeads.filter(lead => 
        lead.status === 'RESPONDED' || lead.status === 'COMPLETED'
      ).length
    };

    return NextResponse.json({
      leads: allLeads,
      stats
    });

  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}