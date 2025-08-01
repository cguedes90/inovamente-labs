import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Salvar no banco de dados
    const contact = await prisma.contactForm.create({
      data: {
        name,
        email,
        subject,
        message,
        status: 'PENDING'
      }
    })

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

    let contacts

    if (subject) {
      // Buscar por assunto específico
      contacts = await prisma.contactForm.findMany({
        where: {
          subject: {
            contains: subject,
            mode: 'insensitive'
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
    } else {
      // Buscar todos os contatos agrupados por assunto
      contacts = await prisma.contactForm.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })
    }

    // Agrupar por assunto
    const groupedBySubject = contacts.reduce((acc, contact) => {
      const subject = contact.subject
      if (!acc[subject]) {
        acc[subject] = []
      }
      acc[subject].push(contact)
      return acc
    }, {} as Record<string, any[]>)

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
