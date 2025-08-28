import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// GET individual lead
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Try to find in contact_forms first
    let result = await pool.query(`
      SELECT *, 'contact_form' as type FROM contact_forms 
      WHERE id = $1
    `, [id])

    if (result.rows.length === 0) {
      // Try to find in chat_conversations
      result = await pool.query(`
        SELECT *, 'chatbot' as type FROM chat_conversations 
        WHERE id = $1
      `, [id])
    }

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead não encontrado' },
        { status: 404 }
      )
    }

    const lead = result.rows[0]
    return NextResponse.json({ lead })

  } catch (error) {
    console.error('Erro ao buscar lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PUT - Update lead
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { 
      type, 
      name, 
      email, 
      phone, 
      company, 
      subject, 
      message, 
      status 
    } = await request.json()

    if (!type) {
      return NextResponse.json(
        { error: 'Tipo do lead é obrigatório' },
        { status: 400 }
      )
    }

    let result
    
    if (type === 'contact_form') {
      result = await pool.query(`
        UPDATE contact_forms 
        SET 
          name = $2,
          email = $3,
          phone = $4,
          company = $5,
          subject = $6,
          message = $7,
          status = $8,
          "updatedAt" = NOW()
        WHERE id = $1
        RETURNING *
      `, [id, name, email, phone, company, subject, message, status])
    } else if (type === 'chatbot') {
      result = await pool.query(`
        UPDATE chat_conversations 
        SET 
          name = $2,
          email = $3,
          phone = $4,
          company = $5,
          subject = $6,
          status = $7,
          "updatedAt" = NOW()
        WHERE id = $1
        RETURNING *
      `, [id, name, email, phone, company, subject || 'Conversa via Chatbot', status])
    } else {
      return NextResponse.json(
        { error: 'Tipo de lead inválido' },
        { status: 400 }
      )
    }

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead não encontrado' },
        { status: 404 }
      )
    }

    const updatedLead = result.rows[0]
    return NextResponse.json({ 
      success: true,
      message: 'Lead atualizado com sucesso',
      lead: updatedLead 
    })

  } catch (error) {
    console.error('Erro ao atualizar lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// PATCH - Update specific fields (like status for archiving)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { type, status } = await request.json()

    if (!type || !status) {
      return NextResponse.json(
        { error: 'Tipo e status são obrigatórios' },
        { status: 400 }
      )
    }

    let result
    
    if (type === 'contact_form') {
      result = await pool.query(`
        UPDATE contact_forms 
        SET 
          status = $2,
          "updatedAt" = NOW()
        WHERE id = $1
        RETURNING *
      `, [id, status])
    } else if (type === 'chatbot') {
      result = await pool.query(`
        UPDATE chat_conversations 
        SET 
          status = $2,
          "updatedAt" = NOW()
        WHERE id = $1
        RETURNING *
      `, [id, status])
    } else {
      return NextResponse.json(
        { error: 'Tipo de lead inválido' },
        { status: 400 }
      )
    }

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead não encontrado' },
        { status: 404 }
      )
    }

    const updatedLead = result.rows[0]
    const action = status === 'ARCHIVED' ? 'arquivado' : 'atualizado'
    
    return NextResponse.json({ 
      success: true,
      message: `Lead ${action} com sucesso`,
      lead: updatedLead 
    })

  } catch (error) {
    console.error('Erro ao atualizar status do lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// DELETE - Delete lead
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { type } = await request.json()

    if (!type) {
      return NextResponse.json(
        { error: 'Tipo do lead é obrigatório' },
        { status: 400 }
      )
    }

    let result
    
    if (type === 'contact_form') {
      result = await pool.query(`
        DELETE FROM contact_forms 
        WHERE id = $1
        RETURNING id
      `, [id])
    } else if (type === 'chatbot') {
      // First delete related messages
      await pool.query(`
        DELETE FROM chat_messages 
        WHERE "conversationId" = $1
      `, [id])
      
      // Then delete the conversation
      result = await pool.query(`
        DELETE FROM chat_conversations 
        WHERE id = $1
        RETURNING id
      `, [id])
    } else {
      return NextResponse.json(
        { error: 'Tipo de lead inválido' },
        { status: 400 }
      )
    }

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead deletado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao deletar lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}