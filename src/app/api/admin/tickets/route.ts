import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // Buscar todos os tickets com informações completas
    const ticketsQuery = await pool.query(`
      SELECT 
        t.id,
        t.title,
        t.description,
        t.status,
        t.priority,
        t.category,
        t."clientId",
        t."assignedTo",
        t."resolvedAt",
        t."closedAt",
        t."createdAt",
        t."updatedAt",
        c.name as client_name,
        c.email as client_email,
        c.phone as client_phone,
        c.company as client_company,
        COUNT(m.id) as message_count,
        MAX(m."createdAt") as last_message_at
      FROM tickets t
      LEFT JOIN clients c ON t."clientId" = c.id
      LEFT JOIN messages m ON t.id = m."ticketId"
      GROUP BY t.id, c.name, c.email, c.phone, c.company
      ORDER BY 
        CASE t.status 
          WHEN 'ABERTO' THEN 1
          WHEN 'EM_ANDAMENTO' THEN 2
          WHEN 'AGUARDANDO_CLIENTE' THEN 3
          WHEN 'RESOLVIDO' THEN 4
          WHEN 'FECHADO' THEN 5
        END,
        CASE t.priority
          WHEN 'URGENTE' THEN 1
          WHEN 'ALTA' THEN 2
          WHEN 'MEDIA' THEN 3
          WHEN 'BAIXA' THEN 4
        END,
        t."createdAt" DESC
    `);

    const tickets = ticketsQuery.rows.map(ticket => ({
      ...ticket,
      client: {
        id: ticket.clientId,
        name: ticket.client_name,
        email: ticket.client_email,
        phone: ticket.client_phone,
        company: ticket.client_company
      }
    }));

    // Calcular estatísticas
    const stats = {
      total: tickets.length,
      open: tickets.filter(t => ['ABERTO', 'EM_ANDAMENTO'].includes(t.status)).length,
      pending: tickets.filter(t => t.status === 'AGUARDANDO_CLIENTE').length,
      resolved: tickets.filter(t => t.status === 'RESOLVIDO').length,
      closed: tickets.filter(t => t.status === 'FECHADO').length,
      urgent: tickets.filter(t => t.priority === 'URGENTE').length,
      high: tickets.filter(t => t.priority === 'ALTA').length
    };

    return NextResponse.json({
      tickets,
      stats
    });

  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Atualizar status do ticket
export async function PUT(req: NextRequest) {
  try {
    const { id, status, assignedTo, notes } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID e status são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se o status é válido
    const validStatuses = ['ABERTO', 'EM_ANDAMENTO', 'AGUARDANDO_CLIENTE', 'RESOLVIDO', 'FECHADO'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Status inválido' },
        { status: 400 }
      );
    }

    // Atualizar ticket
    const updateQuery = `
      UPDATE tickets 
      SET 
        status = $1,
        "assignedTo" = $2,
        "resolvedAt" = CASE WHEN $1 = 'RESOLVIDO' THEN NOW() ELSE "resolvedAt" END,
        "closedAt" = CASE WHEN $1 = 'FECHADO' THEN NOW() ELSE "closedAt" END,
        "updatedAt" = NOW()
      WHERE id = $3
      RETURNING *
    `;

    const result = await pool.query(updateQuery, [status, assignedTo || null, id]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Ticket não encontrado' },
        { status: 404 }
      );
    }

    // Se há notas do admin, adicionar como mensagem
    if (notes && notes.trim()) {
      await pool.query(
        `INSERT INTO messages (content, author, "authorId", "isAdmin", "ticketId", "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, $5, NOW(), NOW())`,
        [notes, 'Administrador', 'admin', true, id]
      );
    }

    return NextResponse.json({
      message: 'Ticket atualizado com sucesso',
      ticket: result.rows[0]
    });

  } catch (error) {
    console.error('Erro ao atualizar ticket:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
