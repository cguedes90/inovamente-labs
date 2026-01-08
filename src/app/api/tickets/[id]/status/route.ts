import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { emailService } from '@/lib/email'
import { ticketStatusUpdateTemplate } from '@/lib/email-templates'

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params
    const { id } = params
    const { status, message } = await request.json()

    console.log('Updating ticket status:', { id, status })

    // Validar status
    const validStatuses = ['ABERTO', 'EM_ANDAMENTO', 'AGUARDANDO_CLIENTE', 'RESOLVIDO', 'FECHADO']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Status inválido' },
        { status: 400 }
      )
    }

    // Buscar ticket atual para comparar status
    const currentTicket = await prisma.ticket.findUnique({
      where: { id },
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

    if (!currentTicket) {
      return NextResponse.json(
        { error: 'Ticket não encontrado' },
        { status: 404 }
      )
    }

    const oldStatus = currentTicket.status

    // Atualizar ticket
    const updatedTicket = await prisma.ticket.update({
      where: { id },
      data: {
        status,
        updatedAt: new Date()
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

    console.log('Ticket updated successfully:', updatedTicket)

    // Enviar email de notificação ao cliente sobre mudança de status
    if (oldStatus !== status) {
      emailService.send({
        to: { email: updatedTicket.client.email, name: updatedTicket.client.name },
        subject: `Ticket #${updatedTicket.id.substring(0, 8)} atualizado - InovaMente Labs`,
        htmlContent: ticketStatusUpdateTemplate({
          ticketId: updatedTicket.id,
          clientName: updatedTicket.client.name,
          subject: updatedTicket.title,
          oldStatus,
          newStatus: status,
          message,
        }),
      })
        .then(result => {
          console.log('📧 Email de atualização de status enviado:', result.success ? '✅' : '❌')
        })
        .catch(error => {
          console.error('❌ Erro ao enviar email de atualização (não bloqueante):', error)
        })
    }

    return NextResponse.json(updatedTicket)
  } catch (error) {
    console.error('Error updating ticket status:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
