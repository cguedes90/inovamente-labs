/**
 * Serviço de envio de emails usando Brevo (Sendinblue)
 *
 * Configuração necessária no .env:
 * - BREVO_API_KEY: API Key do Brevo
 * - FROM_EMAIL: Email remetente verificado
 * - FROM_NAME: Nome do remetente
 * - ADMIN_EMAIL: Email do administrador para notificações
 */

// Brevo API endpoint
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

// Tipos para melhor experiência de desenvolvimento
export interface EmailRecipient {
  email: string;
  name?: string;
}

export interface EmailOptions {
  to: EmailRecipient | EmailRecipient[];
  subject: string;
  htmlContent?: string;
  textContent?: string;
  replyTo?: EmailRecipient;
  cc?: EmailRecipient[];
  bcc?: EmailRecipient[];
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Classe principal para gerenciamento de emails
 */
export class EmailService {
  private fromEmail: string;
  private fromName: string;
  private adminEmail: string;

  constructor() {
    this.fromEmail = process.env.FROM_EMAIL || 'inovamentelabs@outlook.com';
    this.fromName = process.env.FROM_NAME || 'Inovamente Labs';
    this.adminEmail = process.env.ADMIN_EMAIL || 'contato@inovamentelabs.com.br';
  }

  /**
   * Valida se o serviço de email está configurado corretamente
   */
  private validateConfiguration(): void {
    if (!process.env.BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY não configurada nas variáveis de ambiente');
    }
    if (!this.fromEmail) {
      throw new Error('FROM_EMAIL não configurado nas variáveis de ambiente');
    }
  }

  /**
   * Envia um email
   * @param options Opções do email
   * @returns Promise com resposta do envio
   */
  async send(options: EmailOptions): Promise<EmailResponse> {
    try {
      this.validateConfiguration();

      // Preparar destinatários
      const recipients = Array.isArray(options.to) ? options.to : [options.to];

      // Criar payload para a API do Brevo
      const payload: any = {
        sender: {
          email: this.fromEmail,
          name: this.fromName,
        },
        to: recipients.map(r => ({
          email: r.email,
          name: r.name || r.email,
        })),
        subject: options.subject,
      };

      // Adicionar conteúdo HTML ou texto
      if (options.htmlContent) {
        payload.htmlContent = options.htmlContent;
      }
      if (options.textContent) {
        payload.textContent = options.textContent;
      }

      // Adicionar reply-to se fornecido
      if (options.replyTo) {
        payload.replyTo = {
          email: options.replyTo.email,
          name: options.replyTo.name || options.replyTo.email,
        };
      }

      // Adicionar CC se fornecido
      if (options.cc && options.cc.length > 0) {
        payload.cc = options.cc.map(r => ({
          email: r.email,
          name: r.name || r.email,
        }));
      }

      // Adicionar BCC se fornecido
      if (options.bcc && options.bcc.length > 0) {
        payload.bcc = options.bcc.map(r => ({
          email: r.email,
          name: r.name || r.email,
        }));
      }

      // Enviar email via API HTTP do Brevo
      const response = await fetch(BREVO_API_URL, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Brevo API Error: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();

      console.log('✅ Email enviado com sucesso:', {
        messageId: data.messageId,
        to: recipients.map(r => r.email).join(', '),
        subject: options.subject,
      });

      return {
        success: true,
        messageId: data.messageId,
      };
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido ao enviar email',
      };
    }
  }

  /**
   * Envia um email de texto simples
   */
  async sendText(to: EmailRecipient | EmailRecipient[], subject: string, text: string): Promise<EmailResponse> {
    return this.send({
      to,
      subject,
      textContent: text,
      htmlContent: `<p>${text.replace(/\n/g, '<br>')}</p>`,
    });
  }

  /**
   * Envia um email HTML
   */
  async sendHTML(to: EmailRecipient | EmailRecipient[], subject: string, html: string): Promise<EmailResponse> {
    return this.send({
      to,
      subject,
      htmlContent: html,
      textContent: html.replace(/<[^>]*>/g, ''), // Remove tags HTML para versão texto
    });
  }

  /**
   * Envia notificação para o administrador
   */
  async notifyAdmin(subject: string, message: string, htmlContent?: string): Promise<EmailResponse> {
    return this.send({
      to: { email: this.adminEmail, name: 'Administrador' },
      subject: `[InovaMente Labs] ${subject}`,
      textContent: message,
      htmlContent: htmlContent || `<p>${message.replace(/\n/g, '<br>')}</p>`,
    });
  }

  /**
   * Envia notificação de novo contato via formulário
   */
  async sendContactFormNotification(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
    company?: string;
  }): Promise<EmailResponse> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Novo Contato - InovaMente Labs</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📬 Novo Contato Recebido</h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                        Você recebeu uma nova mensagem através do formulário de contato do site.
                      </p>

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
                        ${data.phone ? `
                        <tr style="background-color: #f8f9fa;">
                          <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📱 Telefone:</td>
                          <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.phone}</td>
                        </tr>
                        ` : ''}
                        ${data.company ? `
                        <tr${!data.phone ? ' style="background-color: #f8f9fa;"' : ''}>
                          <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">🏢 Empresa:</td>
                          <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.company}</td>
                        </tr>
                        ` : ''}
                        <tr${data.company || data.phone ? '' : ' style="background-color: #f8f9fa;"'}>
                          <td style="border: 1px solid #dee2e6; padding: 12px; font-weight: bold; color: #495057;">📋 Assunto:</td>
                          <td style="border: 1px solid #dee2e6; padding: 12px; color: #333;">${data.subject}</td>
                        </tr>
                      </table>

                      <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #495057; font-weight: bold; margin-bottom: 10px;">💬 Mensagem:</p>
                        <p style="margin: 0; color: #333; white-space: pre-wrap;">${data.message || 'Nenhuma mensagem adicional.'}</p>
                      </div>

                      <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                        ⏰ Recebido em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                      <p style="color: #6c757d; font-size: 12px; margin: 0;">
                        Este é um email automático do sistema InovaMente Labs.<br>
                        Responda diretamente ao cliente através do email: ${data.email}
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

    return this.send({
      to: { email: this.adminEmail, name: 'Administrador' },
      subject: `[Novo Contato] ${data.subject} - ${data.name}`,
      htmlContent,
      replyTo: { email: data.email, name: data.name },
    });
  }

  /**
   * Envia confirmação ao cliente após envio do formulário de contato
   */
  async sendContactConfirmation(to: EmailRecipient): Promise<EmailResponse> {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmação de Contato - InovaMente Labs</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">✅ Mensagem Recebida!</h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
                        Olá, <strong>${to.name || 'Cliente'}</strong>!
                      </p>

                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                        Recebemos sua mensagem e nossa equipe já está analisando seu contato.
                        Agradecemos por entrar em contato com a <strong>InovaMente Labs</strong>!
                      </p>

                      <div style="background-color: #e7f3ff; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #004085;">
                          <strong>📌 O que acontece agora?</strong><br><br>
                          Nossa equipe irá analisar sua mensagem e retornar em breve com uma resposta personalizada.
                          Geralmente respondemos em até 24 horas úteis.
                        </p>
                      </div>

                      <p style="color: #333; font-size: 16px; line-height: 1.6;">
                        Enquanto isso, conheça mais sobre nossos serviços:
                      </p>

                      <table width="100%" cellpadding="10" style="margin: 20px 0;">
                        <tr>
                          <td style="text-align: center;">
                            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://inovamentelabs.com.br'}/servicos"
                               style="display: inline-block; background-color: #667eea; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                              Conhecer Nossos Serviços
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="color: #6c757d; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                        Se preferir, você também pode nos contatar por:<br>
                        📧 Email: <a href="mailto:${this.adminEmail}" style="color: #667eea;">${this.adminEmail}</a><br>
                        🌐 Site: <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://inovamentelabs.com.br'}" style="color: #667eea;">${process.env.NEXT_PUBLIC_APP_URL || 'https://inovamentelabs.com.br'}</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                      <p style="color: #6c757d; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} InovaMente Labs. Todos os direitos reservados.<br>
                        Você recebeu este email porque entrou em contato conosco.
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

    return this.send({
      to,
      subject: 'Recebemos sua mensagem - InovaMente Labs',
      htmlContent,
    });
  }
}

// Exportar instância singleton
export const emailService = new EmailService();
