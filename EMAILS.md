# 📧 Sistema de Envio de Emails - InovaMente Labs

## Visão Geral

O sistema de envio de emails foi integrado usando **Brevo (Sendinblue)** como provedor de email transacional. A implementação é completa, profissional e inclui templates HTML responsivos.

---

## 🔧 Configuração

### Variáveis de Ambiente

Certifique-se de que as seguintes variáveis estão configuradas no arquivo `.env`:

```env
# Email (Brevo/Sendinblue)
BREVO_API_KEY="your-brevo-api-key-here"
FROM_EMAIL="inovamentelabs@outlook.com"
FROM_NAME="Inovamente Labs"
ADMIN_EMAIL="contato@inovamentelabs.com.br"
```

> **Nota:** A API Key real está configurada no arquivo `.env` (não versionado no Git por segurança).

### Dependências

**Nenhuma dependência externa necessária!**

O sistema usa a **API HTTP nativa do Brevo**, fazendo requisições diretas via `fetch()`. Isso garante:
- ✅ Compatibilidade total com Next.js 15
- ✅ Sem dependências deprecated
- ✅ Build mais rápido e leve
- ✅ Menos vulnerabilidades de segurança

---

## 📁 Estrutura de Arquivos

```
src/
├── lib/
│   ├── email.ts              # Classe EmailService principal
│   └── email-templates.ts    # Templates HTML de emails
├── app/api/
│   ├── contact/route.ts      # Integração com formulário de contato
│   ├── chatbot/conversation/route.ts  # Integração com chatbot
│   └── tickets/
│       ├── route.ts          # Integração com criação de tickets
│       └── [id]/status/route.ts  # Integração com atualização de status
```

---

## 🚀 Como Usar

### 1. Classe EmailService

A classe `EmailService` está disponível em `src/lib/email.ts` e oferece vários métodos:

#### Envio Básico

```typescript
import { emailService } from '@/lib/email'

// Enviar email HTML
await emailService.sendHTML(
  { email: 'cliente@example.com', name: 'Cliente' },
  'Assunto do Email',
  '<h1>Conteúdo HTML</h1>'
)

// Enviar email de texto simples
await emailService.sendText(
  { email: 'cliente@example.com', name: 'Cliente' },
  'Assunto do Email',
  'Conteúdo em texto simples'
)
```

#### Envio Avançado

```typescript
import { emailService } from '@/lib/email'

const result = await emailService.send({
  to: { email: 'cliente@example.com', name: 'Cliente' },
  subject: 'Assunto do Email',
  htmlContent: '<h1>Conteúdo HTML</h1>',
  textContent: 'Conteúdo em texto simples',
  replyTo: { email: 'resposta@example.com', name: 'Equipe' },
  cc: [{ email: 'copia@example.com' }],
  bcc: [{ email: 'copia-oculta@example.com' }],
})

if (result.success) {
  console.log('Email enviado com sucesso:', result.messageId)
} else {
  console.error('Erro ao enviar email:', result.error)
}
```

#### Notificar Administrador

```typescript
await emailService.notifyAdmin(
  'Novo evento importante',
  'Descrição do evento em texto simples',
  '<p>Descrição do evento em HTML</p>' // opcional
)
```

---

## 📨 Templates Disponíveis

Todos os templates estão em `src/lib/email-templates.ts` e são responsivos e profissionais.

### 1. Template de Lead do Chatbot

```typescript
import { chatbotLeadTemplate } from '@/lib/email-templates'

const html = chatbotLeadTemplate({
  name: 'João Silva',
  email: 'joao@example.com',
  phone: '(11) 99999-9999',
  company: 'Empresa ABC',
  messages: [
    { isBot: true, content: 'Olá! Como posso ajudar?' },
    { isBot: false, content: 'Quero saber sobre seus serviços' },
  ],
})
```

**Recursos:**
- Destaca dados do lead com ícones
- Exibe histórico completo da conversa
- Botões de ação (Responder por Email, WhatsApp)
- Alertas para ação imediata

### 2. Template de Novo Ticket

```typescript
import { newTicketTemplate } from '@/lib/email-templates'

const html = newTicketTemplate({
  ticketId: 'cm123456789',
  clientName: 'João Silva',
  clientEmail: 'joao@example.com',
  subject: 'Problema no sistema',
  description: 'Descrição detalhada do problema...',
  priority: 'ALTA',
})
```

**Recursos:**
- Badge de prioridade colorido
- Informações do cliente
- Botão direto para o sistema
- Timestamp automático

### 3. Template de Confirmação de Ticket (Cliente)

```typescript
import { ticketConfirmationTemplate } from '@/lib/email-templates'

const html = ticketConfirmationTemplate({
  ticketId: 'cm123456789',
  clientName: 'João Silva',
  subject: 'Problema no sistema',
})
```

**Recursos:**
- Design amigável e tranquilizador
- Número do ticket destacado
- Próximos passos explicados
- Botão para portal de tickets

### 4. Template de Atualização de Status

```typescript
import { ticketStatusUpdateTemplate } from '@/lib/email-templates'

const html = ticketStatusUpdateTemplate({
  ticketId: 'cm123456789',
  clientName: 'João Silva',
  subject: 'Problema no sistema',
  oldStatus: 'ABERTO',
  newStatus: 'EM_ANDAMENTO',
  message: 'Estamos trabalhando na solução!', // opcional
})
```

**Recursos:**
- Status visual com cores e ícones
- Mensagem personalizada da equipe
- Link direto para o ticket
- Design consistente com outros emails

---

## 🎯 Situações de Envio Automático

### 1. Formulário de Contato (`/contato`)

**Quando:** Visitante envia formulário de contato

**Emails enviados:**
- ✅ **Admin:** Notificação com dados do contato
- ✅ **Cliente:** Confirmação de recebimento

**Arquivo:** `src/app/api/contact/route.ts`

**Função utilizada:**
```typescript
await emailService.sendContactFormNotification(data)
await emailService.sendContactConfirmation({ email, name })
```

---

### 2. Chatbot - Captura de Leads

**Quando:** Visitante completa conversa no chatbot

**Emails enviados:**
- ✅ **Admin:** Lead qualificado com histórico completo da conversa

**Arquivo:** `src/app/api/chatbot/conversation/route.ts`

**Função utilizada:**
```typescript
await emailService.send({
  to: { email: process.env.ADMIN_EMAIL, name: 'Administrador' },
  subject: `[LEAD CHATBOT] ${leadData.name}`,
  htmlContent: chatbotLeadTemplate(data),
  replyTo: { email: leadData.email, name: leadData.name },
})
```

**Recursos:**
- Reply-to configurado para email do lead (facilita resposta)
- Link direto para WhatsApp (se telefone fornecido)
- Botões de ação rápida

---

### 3. Sistema de Tickets - Criação

**Quando:** Cliente cria novo ticket

**Emails enviados:**
- ✅ **Admin:** Notificação de novo ticket com prioridade
- ✅ **Cliente:** Confirmação de criação com número do ticket

**Arquivo:** `src/app/api/tickets/route.ts`

**Funções utilizadas:**
```typescript
await emailService.send({
  to: admin,
  subject: `[NOVO TICKET] #${ticket.id} - ${ticket.title}`,
  htmlContent: newTicketTemplate(data),
})

await emailService.send({
  to: client,
  subject: `Ticket #${ticket.id} criado com sucesso`,
  htmlContent: ticketConfirmationTemplate(data),
})
```

---

### 4. Sistema de Tickets - Atualização de Status

**Quando:** Admin altera status do ticket

**Emails enviados:**
- ✅ **Cliente:** Notificação de mudança de status

**Arquivo:** `src/app/api/tickets/[id]/status/route.ts`

**Função utilizada:**
```typescript
await emailService.send({
  to: { email: client.email, name: client.name },
  subject: `Ticket #${ticket.id} atualizado`,
  htmlContent: ticketStatusUpdateTemplate({
    ticketId,
    clientName,
    subject,
    oldStatus,
    newStatus,
    message, // Opcional: mensagem personalizada do admin
  }),
})
```

**Recursos:**
- Apenas envia se status realmente mudou
- Suporta mensagem personalizada opcional do admin
- Status coloridos com ícones (ABERTO 🆕, EM_ANDAMENTO ⚙️, RESOLVIDO ✅, etc.)

---

## 🎨 Personalização de Templates

### Cores do Gradiente Principal

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Para alterar as cores, edite no arquivo `src/lib/email-templates.ts`:
- `#667eea` - Azul/roxo claro
- `#764ba2` - Roxo escuro

### Cores de Prioridade (Tickets)

```typescript
const priorityColors = {
  BAIXA: { bg: '#d4edda', text: '#155724', label: '🟢 Baixa' },
  MEDIA: { bg: '#fff3cd', text: '#856404', label: '🟡 Média' },
  ALTA: { bg: '#f8d7da', text: '#721c24', label: '🔴 Alta' },
  URGENTE: { bg: '#f5c6cb', text: '#721c24', label: '🚨 Urgente' },
}
```

### Cores de Status (Tickets)

```typescript
const statusLabels = {
  ABERTO: { icon: '🆕', label: 'Aberto', color: '#17a2b8' },
  EM_ANDAMENTO: { icon: '⚙️', label: 'Em Andamento', color: '#ffc107' },
  AGUARDANDO_CLIENTE: { icon: '⏳', label: 'Aguardando Cliente', color: '#ff9800' },
  RESOLVIDO: { icon: '✅', label: 'Resolvido', color: '#28a745' },
  FECHADO: { icon: '🔒', label: 'Fechado', color: '#6c757d' },
}
```

---

## 🔍 Logs e Monitoramento

### Logs de Sucesso

Todos os emails bem-sucedidos geram logs detalhados no console:

```
✅ Email enviado com sucesso: {
  messageId: 'abc123',
  to: 'cliente@example.com',
  subject: 'Assunto do Email'
}
```

### Logs de Erro

Erros são capturados e logados sem bloquear a operação:

```
❌ Erro ao enviar email: Error message here
```

### Logs Específicos

#### Formulário de Contato
```
📧 Emails enviados: {
  admin: '✅',
  client: '✅'
}
```

#### Chatbot
```
📧 NOVO LEAD VIA CHATBOT - EMAIL ENVIADO COM SUCESSO
====================================================
📝 Nome: João Silva
📧 Email: joao@example.com
📱 Telefone: (11) 99999-9999
🏢 Empresa: Empresa ABC
✉️  Message ID: abc123
====================================================
```

#### Tickets
```
📧 Emails de novo ticket enviados: {
  admin: '✅',
  client: '✅',
  ticketId: 'cm123456789'
}

📧 Email de atualização de status enviado: ✅
```

---

## ⚙️ Comportamento Não-Bloqueante

**IMPORTANTE:** Todos os envios de email são **não-bloqueantes**, ou seja:

- A resposta da API é enviada imediatamente ao cliente
- Os emails são enviados em background (Promise não aguardada)
- Se houver erro no envio, não afeta a operação principal
- Logs são gerados para monitoramento

### Exemplo de Implementação Não-Bloqueante

```typescript
// Salvar dados no banco
const ticket = await prisma.ticket.create({ ... })

// Enviar emails (não bloqueia)
Promise.all([
  emailService.send(...),
  emailService.send(...),
])
  .then(results => console.log('Emails enviados'))
  .catch(error => console.error('Erro (não bloqueante)'))

// Responder imediatamente
return NextResponse.json({ success: true, ticket })
```

---

## 🧪 Testando o Sistema

### Teste Manual

1. **Formulário de Contato:**
   - Acesse `/contato`
   - Preencha e envie o formulário
   - Verifique emails em `contato@inovamentelabs.com.br` e no email fornecido

2. **Chatbot:**
   - Complete uma conversa no chatbot
   - Forneça email, telefone e empresa
   - Verifique email em `contato@inovamentelabs.com.br`

3. **Tickets:**
   - Faça login como cliente
   - Crie um novo ticket
   - Verifique email de confirmação
   - Altere status do ticket (como admin)
   - Verifique email de atualização

### Teste Programático

```typescript
import { emailService } from '@/lib/email'

// Teste simples
const result = await emailService.sendText(
  { email: 'seu-email@example.com', name: 'Teste' },
  'Email de Teste',
  'Este é um email de teste do sistema InovaMente Labs'
)

console.log(result.success ? 'Sucesso!' : `Erro: ${result.error}`)
```

---

## 🚨 Solução de Problemas

### Email não está sendo enviado

1. **Verifique as variáveis de ambiente:**
   ```bash
   # No terminal
   echo $BREVO_API_KEY
   ```

2. **Verifique os logs do console:**
   - Procure por mensagens de erro
   - Verifique se a API Key é válida

3. **Teste a configuração do Brevo:**
   - Acesse [app.brevo.com](https://app.brevo.com)
   - Verifique se o email remetente está verificado
   - Verifique limite de envios da conta

### Emails estão indo para spam

1. **Configure SPF, DKIM e DMARC:**
   - Acesse configurações do domínio
   - Adicione registros DNS fornecidos pelo Brevo

2. **Use domínio verificado:**
   - Certifique-se de que `FROM_EMAIL` está verificado no Brevo

3. **Evite palavras de spam:**
   - Revise os templates de email
   - Evite palavras como "grátis", "urgente", etc.

### Erro: "BREVO_API_KEY não configurada"

```typescript
// Verifique se a variável está definida no .env
BREVO_API_KEY="sua-api-key-aqui"
```

### Templates não renderizando corretamente

- Teste em diferentes clientes de email (Gmail, Outlook, Apple Mail)
- Use HTML inline styles (já implementado nos templates)
- Evite JavaScript e CSS complexo

---

## 📊 Estatísticas e Métricas

### Monitoramento no Brevo

Acesse [app.brevo.com](https://app.brevo.com) para ver:

- Taxa de entrega
- Taxa de abertura
- Taxa de cliques
- Bounces e complaints
- Histórico de envios

### Logs da Aplicação

Todos os envios são logados com:
- Timestamp
- Destinatário
- Assunto
- Message ID (para rastreamento no Brevo)
- Status (sucesso/erro)

---

## 🔐 Segurança

### Boas Práticas Implementadas

1. **API Key em variável de ambiente** (nunca hardcoded)
2. **Validação de emails** antes do envio
3. **Rate limiting** (configurável via Brevo)
4. **Logs sem informações sensíveis**
5. **Reply-to apropriado** (facilita comunicação)

### Proteção contra Spam

- Apenas emails de ações legítimas (formulário, tickets)
- Não há endpoint público de envio de email
- Todos os envios passam por validação

---

## 📚 Recursos Adicionais

### Documentação do Brevo

- [API Documentation](https://developers.brevo.com/)
- [SDK Node.js](https://github.com/sendinblue/APIv3-nodejs-library)

### Melhores Práticas de Email

- [Email Design Guide](https://www.campaignmonitor.com/resources/guides/email-design/)
- [HTML Email Guidelines](https://templates.mailchimp.com/resources/email-client-css-support/)

---

## 🎯 Próximas Melhorias Sugeridas

1. **Templates dinâmicos no banco de dados**
   - Permitir edição de templates pelo admin
   - Versionamento de templates

2. **Agendamento de emails**
   - Enviar emails em horários específicos
   - Follow-ups automáticos

3. **Email analytics**
   - Dashboard de métricas no admin
   - Rastreamento de aberturas e cliques

4. **Anexos**
   - Suporte para envio de arquivos
   - PDFs de relatórios

5. **Múltiplos idiomas**
   - Templates em PT, EN, ES
   - Detecção automática de idioma

6. **A/B Testing**
   - Testar diferentes assuntos
   - Testar diferentes templates

---

## 📞 Suporte

Para problemas ou dúvidas sobre o sistema de emails:

1. Verifique os logs da aplicação
2. Consulte esta documentação
3. Acesse o painel do Brevo para métricas
4. Entre em contato com o time de desenvolvimento

---

**Última atualização:** ${new Date().toLocaleDateString('pt-BR')}
**Versão:** 1.0.0
**Autor:** Claude AI (InovaMente Labs Integration)
