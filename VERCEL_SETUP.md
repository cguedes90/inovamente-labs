# 🚀 Configuração do Vercel - Variáveis de Ambiente

## Opção 1: Via Dashboard do Vercel (Recomendado) ✨

### Passo a Passo:

1. **Acesse o Vercel Dashboard**
   - Vá para: https://vercel.com/dashboard
   - Faça login com sua conta
   - Selecione o projeto: **inovamente-labs**

2. **Entre nas Configurações**
   - Clique na aba **Settings** (menu superior)
   - No menu lateral esquerdo, clique em **Environment Variables**

3. **Adicione as Variáveis do Email (Brevo)**

   Clique em **Add New** e adicione cada variável abaixo:

   ### Variável 1: BREVO_API_KEY
   - **Name:** `BREVO_API_KEY`
   - **Value:** `[SUA_API_KEY_DO_BREVO_AQUI]` (copie do arquivo `.env`)
   - **Environments:** Selecione todos ✅
     - [x] Production
     - [x] Preview
     - [x] Development
   - Clique em **Save**

   ### Variável 2: FROM_EMAIL
   - **Name:** `FROM_EMAIL`
   - **Value:** `inovamentelabs@outlook.com`
   - **Environments:** Selecione todos ✅
     - [x] Production
     - [x] Preview
     - [x] Development
   - Clique em **Save**

   ### Variável 3: FROM_NAME
   - **Name:** `FROM_NAME`
   - **Value:** `Inovamente Labs`
   - **Environments:** Selecione todos ✅
     - [x] Production
     - [x] Preview
     - [x] Development
   - Clique em **Save**

   ### Variável 4: ADMIN_EMAIL
   - **Name:** `ADMIN_EMAIL`
   - **Value:** `contato@inovamentelabs.com.br`
   - **Environments:** Selecione todos ✅
     - [x] Production
     - [x] Preview
     - [x] Development
   - Clique em **Save**

4. **Variáveis Existentes (Verifique)**

   Certifique-se de que estas variáveis já existem (foram configuradas anteriormente):

   - ✅ `DATABASE_URL` - String de conexão do Neon PostgreSQL
   - ✅ `JWT_SECRET` - Chave secreta para autenticação JWT
   - ✅ `NEXT_PUBLIC_APP_URL` - URL da aplicação (https://inovamente-labs.vercel.app ou domínio customizado)

5. **Fazer Redeploy**

   Após adicionar todas as variáveis:

   - Vá para a aba **Deployments**
   - Clique nos **três pontos (...)** ao lado do deployment mais recente
   - Selecione **Redeploy**
   - ✅ Marque **Use existing Build Cache** (para ser mais rápido)
   - Clique em **Redeploy**

6. **Verificar o Deploy**

   - Aguarde o deploy finalizar (1-3 minutos)
   - Acesse seu site: https://seu-dominio.vercel.app
   - Teste o formulário de contato para verificar se os emails estão funcionando

---

## Opção 2: Via Vercel CLI (Avançado) 🔧

### Pré-requisitos:

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login no Vercel
vercel login

# Conectar ao projeto (executar na raiz do projeto)
vercel link
```

### Adicionar Variáveis:

Execute os comandos abaixo um por um:

```bash
# BREVO_API_KEY
vercel env add BREVO_API_KEY production preview development
# Quando solicitado, cole a API Key do arquivo .env

# FROM_EMAIL
vercel env add FROM_EMAIL production preview development
# Quando solicitado, cole: inovamentelabs@outlook.com

# FROM_NAME
vercel env add FROM_NAME production preview development
# Quando solicitado, cole: Inovamente Labs

# ADMIN_EMAIL
vercel env add ADMIN_EMAIL production preview development
# Quando solicitado, cole: contato@inovamentelabs.com.br
```

### Fazer Deploy:

```bash
# Deploy para produção
vercel --prod
```

---

## Opção 3: Script Automatizado (Mais Rápido) ⚡

### Windows (PowerShell):

```powershell
# Executar na raiz do projeto
npm i -g vercel
vercel login
vercel link

# Adicionar variáveis automaticamente
vercel env add BREVO_API_KEY production
# Cole a API Key do arquivo .env quando solicitado

vercel env add FROM_EMAIL production
# Cole: inovamentelabs@outlook.com

vercel env add FROM_NAME production
# Cole: Inovamente Labs

vercel env add ADMIN_EMAIL production
# Cole: contato@inovamentelabs.com.br

# Deploy
vercel --prod
```

### Linux/Mac (Bash):

```bash
# Executar na raiz do projeto
bash setup-vercel-env.sh
vercel --prod
```

---

## ✅ Checklist Final

Após configurar, verifique se:

- [ ] Todas as 4 variáveis de email foram adicionadas
- [ ] Cada variável está configurada para Production, Preview e Development
- [ ] Redeploy foi feito com sucesso
- [ ] Site está acessível e funcionando
- [ ] Formulário de contato envia email corretamente
- [ ] Chatbot captura leads e envia email
- [ ] Sistema de tickets envia notificações

---

## 🧪 Como Testar

### 1. Testar Formulário de Contato

1. Acesse: `https://seu-dominio.vercel.app/contato`
2. Preencha e envie o formulário
3. Verifique os emails em:
   - ✅ Sua caixa de entrada (email de confirmação)
   - ✅ `contato@inovamentelabs.com.br` (notificação ao admin)

### 2. Testar Chatbot

1. Acesse a página inicial
2. Interaja com o chatbot
3. Complete a conversa fornecendo dados
4. Verifique email em `contato@inovamentelabs.com.br`

### 3. Testar Sistema de Tickets

1. Faça login como cliente
2. Crie um novo ticket
3. Verifique emails de confirmação
4. Como admin, altere o status do ticket
5. Verifique email de atualização

---

## 🐛 Solução de Problemas

### Erro: "BREVO_API_KEY não configurada"

**Solução:**
- Verifique se a variável foi adicionada no Vercel
- Faça redeploy do projeto
- Verifique os logs no Vercel Dashboard

### Emails não estão sendo enviados

**Verifique:**
1. Logs do Vercel: `vercel logs`
2. Console do navegador (Network tab)
3. Painel do Brevo: https://app.brevo.com
4. Verifique se o email remetente está verificado no Brevo

### Variáveis não estão sendo reconhecidas

**Solução:**
- Certifique-se de selecionar todos os ambientes (Production, Preview, Development)
- Faça um redeploy COMPLETO (sem cache)
- Aguarde 1-2 minutos para propagação

---

## 📊 Monitoramento

### Verificar Logs do Vercel:

```bash
# Ver logs em tempo real
vercel logs --follow

# Ver logs do último deployment
vercel logs
```

### Verificar Envios no Brevo:

1. Acesse: https://app.brevo.com
2. Vá em **Transactional** → **Emails**
3. Veja estatísticas de envio, abertura e cliques

---

## 🔐 Segurança

### Importante:

- ✅ Nunca commite o arquivo `.env` no Git
- ✅ API Key do Brevo está configurada apenas no Vercel
- ✅ `.env.example` não contém valores reais
- ✅ Variáveis sensíveis estão ocultas no código

### Rotação de API Key:

Se precisar trocar a API Key do Brevo:

1. Gere nova API Key no painel do Brevo
2. Atualize no Vercel Dashboard
3. Faça redeploy do projeto
4. Revogue a API Key antiga no Brevo

---

## 📞 Suporte

Se tiver problemas:

1. **Verifique a documentação:** [EMAILS.md](./EMAILS.md)
2. **Logs do Vercel:** Procure por erros relacionados a email
3. **Painel do Brevo:** Verifique se há problemas com a conta
4. **GitHub Issues:** Reporte problemas no repositório

---

**Última atualização:** ${new Date().toLocaleDateString('pt-BR')}
**Versão:** 1.0.0
