/**
 * Templates de emails profissionais e responsivos
 * Todos os templates seguem as melhores práticas de HTML para email
 */

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://inovamentelabs.com.br';

/**
 * Estilo base para todos os emails
 */
const baseStyles = {
  body: 'margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;',
  container: 'background-color: #f4f4f4; padding: 20px;',
  card: 'background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);',
  header: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;',
  content: 'padding: 30px;',
  footer: 'background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;',
};

/**
 * Template para notificação de novo lead do chatbot
 */
export function chatbotLeadTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  messages: Array<{ isBot: boolean; content: string }>;
}): string {
  const conversationHtml = data.messages
    .map(
      msg => `
    <div style="margin: 10px 0; padding: 10px; background-color: ${msg.isBot ? '#e7f3ff' : '#f8f9fa'}; border-radius: 6px; border-left: 3px solid ${msg.isBot ? '#667eea' : '#28a745'};">
      <strong style="color: ${msg.isBot ? '#004085' : '#155724'};">${msg.isBot ? '🤖 Chatbot' : '👤 Visitante'}:</strong>
      <p style="margin: 5px 0 0 0; color: #333;">${msg.content}</p>
    </div>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novo Lead via Chatbot - InovaMente Labs</title>
      </head>
      <body style="${baseStyles.body}">
        <table width="100%" cellpadding="0" cellspacing="0" style="${baseStyles.container}">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="${baseStyles.card}">
                <!-- Header -->
                <tr>
                  <td style="${baseStyles.header}">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🤖 Novo Lead Capturado pelo Chatbot</h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="${baseStyles.content}">
                    <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                      <p style="color: #ffffff; margin: 0; font-weight: bold; text-align: center;">
                        ⚡ LEAD QUALIFICADO - REQUER AÇÃO IMEDIATA
                      </p>
                    </div>

                    <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                      📊 Dados do Lead
                    </h2>

                    <table width="100%" cellpadding="8" style="border-collapse: collapse; margin-bottom: 20px;">
                      <tr style="background-color: #f8f9fa;">
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057; width: 30%;">👤 Nome:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📧 Email:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">
                          <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      ${
                        data.phone
                          ? `
                      <tr style="background-color: #f8f9fa;">
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📱 Telefone:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">
                          <a href="https://wa.me/${data.phone.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      `
                          : ''
                      }
                      ${
                        data.company
                          ? `
                      <tr${!data.phone ? ' style="background-color: #f8f9fa;"' : ''}>
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">🏢 Empresa:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.company}</td>
                      </tr>
                      `
                          : ''
                      }
                    </table>

                    <h2 style="color: #333; font-size: 18px; margin: 30px 0 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                      💬 Histórico da Conversa
                    </h2>

                    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                      ${conversationHtml}
                    </div>

                    <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%); border-radius: 6px; border-left: 4px solid #ff9800;">
                      <p style="margin: 0; color: #e65100; font-weight: bold;">⏰ Próximos Passos Recomendados:</p>
                      <ul style="color: #bf360c; margin: 10px 0 0 20px; padding: 0;">
                        <li>Responder em até 1 hora para maximizar conversão</li>
                        <li>Verificar interesse específico na conversa</li>
                        <li>Preparar proposta personalizada</li>
                        <li>Agendar reunião de apresentação</li>
                      </ul>
                    </div>

                    <table width="100%" cellpadding="10" style="margin: 30px 0 20px 0;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="mailto:${data.email}?subject=Resposta ao seu contato - InovaMente Labs"
                             style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px;">
                            📧 Responder por Email
                          </a>
                          ${
                            data.phone
                              ? `
                          <a href="https://wa.me/${data.phone.replace(/\D/g, '')}"
                             style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                            💬 Enviar WhatsApp
                          </a>
                          `
                              : ''
                          }
                        </td>
                      </tr>
                    </table>

                    <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                      ⏰ Lead capturado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="${baseStyles.footer}">
                    <p style="color: #6c757d; font-size: 12px; margin: 0;">
                      Este é um email automático do Chatbot InovaMente Labs.<br>
                      Lead salvo automaticamente no painel administrativo.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

/**
 * Template para notificação de novo ticket
 */
export function newTicketTemplate(data: {
  ticketId: string;
  clientName: string;
  clientEmail: string;
  subject: string;
  description: string;
  priority: string;
}): string {
  const priorityColors: Record<string, { bg: string; text: string; label: string }> = {
    BAIXA: { bg: '#d4edda', text: '#155724', label: '🟢 Baixa' },
    MEDIA: { bg: '#fff3cd', text: '#856404', label: '🟡 Média' },
    ALTA: { bg: '#f8d7da', text: '#721c24', label: '🔴 Alta' },
    URGENTE: { bg: '#f5c6cb', text: '#721c24', label: '🚨 Urgente' },
  };

  const priority = priorityColors[data.priority] || priorityColors.MEDIA;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novo Ticket - InovaMente Labs</title>
      </head>
      <body style="${baseStyles.body}">
        <table width="100%" cellpadding="0" cellspacing="0" style="${baseStyles.container}">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="${baseStyles.card}">
                <!-- Header -->
                <tr>
                  <td style="${baseStyles.header}">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🎫 Novo Ticket Criado</h1>
                    <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Ticket #${data.ticketId}</p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="${baseStyles.content}">
                    <div style="background-color: ${priority.bg}; padding: 15px; border-radius: 6px; margin-bottom: 20px; text-align: center;">
                      <p style="color: ${priority.text}; margin: 0; font-weight: bold; font-size: 16px;">
                        Prioridade: ${priority.label}
                      </p>
                    </div>

                    <table width="100%" cellpadding="8" style="border-collapse: collapse; margin-bottom: 20px;">
                      <tr style="background-color: #f8f9fa;">
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057; width: 30%;">👤 Cliente:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.clientName}</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📧 Email:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">
                          <a href="mailto:${data.clientEmail}" style="color: #667eea; text-decoration: none;">${data.clientEmail}</a>
                        </td>
                      </tr>
                      <tr style="background-color: #f8f9fa;">
                        <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📋 Assunto:</td>
                        <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.subject}</td>
                      </tr>
                    </table>

                    <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
                      <p style="margin: 0; color: #495057; font-weight: bold; margin-bottom: 10px;">📝 Descrição:</p>
                      <p style="margin: 0; color: #333; white-space: pre-wrap;">${data.description}</p>
                    </div>

                    <table width="100%" cellpadding="10" style="margin: 30px 0 20px 0;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="${baseUrl}/admin/tickets"
                             style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                            Ver Ticket no Sistema
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                      ⏰ Criado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="${baseStyles.footer}">
                    <p style="color: #6c757d; font-size: 12px; margin: 0;">
                      Sistema de Tickets - InovaMente Labs<br>
                      Este é um email automático de notificação.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

/**
 * Template para confirmação de ticket criado (enviado ao cliente)
 */
export function ticketConfirmationTemplate(data: {
  ticketId: string;
  clientName: string;
  subject: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ticket Recebido - InovaMente Labs</title>
      </head>
      <body style="${baseStyles.body}">
        <table width="100%" cellpadding="0" cellspacing="0" style="${baseStyles.container}">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="${baseStyles.card}">
                <!-- Header -->
                <tr>
                  <td style="${baseStyles.header}">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">✅ Ticket Recebido com Sucesso!</h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="${baseStyles.content}">
                    <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                      Olá, <strong>${data.clientName}</strong>!
                    </p>

                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                      Seu ticket foi registrado com sucesso em nosso sistema de suporte.
                      Nossa equipe já foi notificada e está trabalhando para resolver sua solicitação.
                    </p>

                    <div style="background: linear-gradient(135deg, #e7f3ff 0%, #cfe2ff 100%); padding: 20px; border-radius: 6px; margin: 20px 0;">
                      <p style="margin: 0; color: #004085; font-size: 14px; text-align: center;">
                        <strong>🎫 Número do Ticket</strong>
                      </p>
                      <p style="margin: 10px 0 0 0; color: #004085; font-size: 24px; text-align: center; font-weight: bold;">
                        #${data.ticketId}
                      </p>
                      <p style="margin: 10px 0 0 0; color: #004085; font-size: 14px; text-align: center;">
                        ${data.subject}
                      </p>
                    </div>

                    <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
                      <p style="margin: 0; color: #856404;">
                        <strong>📌 Guarde este número!</strong><br><br>
                        Use o número do ticket para acompanhar o status e adicionar informações adicionais.
                      </p>
                    </div>

                    <p style="color: #333; font-size: 16px; line-height: 1.6;">
                      <strong>O que acontece agora?</strong>
                    </p>

                    <ul style="color: #333; line-height: 1.8; margin: 10px 0;">
                      <li>Nossa equipe analisará sua solicitação</li>
                      <li>Você receberá atualizações por email</li>
                      <li>Pode acompanhar o progresso no portal de clientes</li>
                      <li>Tempo médio de resposta: 24 horas úteis</li>
                    </ul>

                    <table width="100%" cellpadding="10" style="margin: 30px 0 20px 0;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="${baseUrl}/chamados"
                             style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                            Acessar Portal de Tickets
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                      Se tiver alguma dúvida, responda este email ou acesse nosso portal de suporte.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="${baseStyles.footer}">
                    <p style="color: #6c757d; font-size: 12px; margin: 0;">
                      © ${new Date().getFullYear()} InovaMente Labs. Todos os direitos reservados.<br>
                      Sistema de Suporte ao Cliente
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

/**
 * Template para atualização de status de ticket
 */
export function ticketStatusUpdateTemplate(data: {
  ticketId: string;
  clientName: string;
  subject: string;
  oldStatus: string;
  newStatus: string;
  message?: string;
}): string {
  const statusLabels: Record<string, { icon: string; label: string; color: string }> = {
    ABERTO: { icon: '🆕', label: 'Aberto', color: '#17a2b8' },
    EM_ANDAMENTO: { icon: '⚙️', label: 'Em Andamento', color: '#ffc107' },
    AGUARDANDO_CLIENTE: { icon: '⏳', label: 'Aguardando Cliente', color: '#ff9800' },
    RESOLVIDO: { icon: '✅', label: 'Resolvido', color: '#28a745' },
    FECHADO: { icon: '🔒', label: 'Fechado', color: '#6c757d' },
  };

  const newStatusInfo = statusLabels[data.newStatus] || statusLabels.ABERTO;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Atualização de Ticket - InovaMente Labs</title>
      </head>
      <body style="${baseStyles.body}">
        <table width="100%" cellpadding="0" cellspacing="0" style="${baseStyles.container}">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="${baseStyles.card}">
                <!-- Header -->
                <tr>
                  <td style="${baseStyles.header}">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🔔 Ticket Atualizado</h1>
                    <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Ticket #${data.ticketId}</p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="${baseStyles.content}">
                    <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                      Olá, <strong>${data.clientName}</strong>!
                    </p>

                    <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                      O status do seu ticket foi atualizado:
                    </p>

                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center;">
                      <p style="margin: 0 0 15px 0; color: #6c757d; font-size: 14px;">
                        <strong>📋 Assunto:</strong> ${data.subject}
                      </p>
                      <div style="display: inline-block; background-color: ${newStatusInfo.color}; color: #ffffff; padding: 15px 30px; border-radius: 25px; font-size: 18px; font-weight: bold;">
                        ${newStatusInfo.icon} ${newStatusInfo.label}
                      </div>
                    </div>

                    ${
                      data.message
                        ? `
                    <div style="background-color: #e7f3ff; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
                      <p style="margin: 0; color: #004085; font-weight: bold; margin-bottom: 10px;">💬 Mensagem da equipe:</p>
                      <p style="margin: 0; color: #004085; white-space: pre-wrap;">${data.message}</p>
                    </div>
                    `
                        : ''
                    }

                    <table width="100%" cellpadding="10" style="margin: 30px 0 20px 0;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="${baseUrl}/chamados"
                             style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                            Ver Detalhes do Ticket
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                      ⏰ Atualizado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="${baseStyles.footer}">
                    <p style="color: #6c757d; font-size: 12px; margin: 0;">
                      © ${new Date().getFullYear()} InovaMente Labs. Todos os direitos reservados.<br>
                      Para responder, acesse o portal ou responda este email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
