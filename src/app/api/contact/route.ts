import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } = await request.json()

    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: 'Nome, email e assunto são obrigatórios' },
        { status: 400 }
      )
    }

    // Salvar no banco de dados
    const result = await pool.query(`
      INSERT INTO contact_forms (name, email, phone, company, subject, message, status, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
      RETURNING *
    `, [name, email, phone || null, company || null, subject, message || '', 'PENDING'])

    const contact = result.rows[0]

    return NextResponse.json({ 
      success: true,
      message: 'Contato enviado com sucesso!',
      contactId: contact.id
    })

  } catch (error) {
    console.error('Erro ao salvar contato:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subject = searchParams.get('subject')

    let result

    if (subject) {
      // Buscar por assunto específico
      result = await pool.query(`
        SELECT * FROM contact_forms 
        WHERE subject ILIKE $1
        ORDER BY "createdAt" DESC
      `, [`%${subject}%`])
    } else {
      // Buscar todos os contatos
      result = await pool.query(`
        SELECT * FROM contact_forms 
        ORDER BY "createdAt" DESC
      `)
    }

    const contacts = result.rows

    // Agrupar por assunto
    const groupedBySubject = contacts.reduce((acc: any, contact: any) => {
      const subject = contact.subject
      if (!acc[subject]) {
        acc[subject] = []
      }
      acc[subject].push(contact)
      return acc
    }, {})

    return NextResponse.json({ 
      contacts,
      groupedBySubject
    })

  } catch (error) {
    console.error('Erro ao buscar contatos:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
