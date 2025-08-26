# 🚀 Guia de Deploy Seguro - InovaMente Labs

## 📋 Resumo das Mudanças

Este deploy inclui várias melhorias importantes no sistema:

### ✅ Novas Funcionalidades
- **Sistema de alteração de status de tickets**: Admins podem alterar status diretamente na interface
- **Criação de clientes no painel admin**: Formulário modal para adicionar novos clientes
- **Notificações visuais**: Feedback em tempo real para ações do usuário
- **Interface redesenhada**: Melhor organização e usabilidade dos tickets
- **Badges coloridos**: Status dos tickets com cores distintivas

### 🔧 Melhorias Técnicas
- Endpoints de API criados: `/api/tickets/[id]/status` e `/api/clients`
- Validação com schemas Zod
- Autenticação JWT para operações sensíveis
- Sistema de notificações com timeout automático
- Mapeamento correto dos status em português

## 🛡️ Estratégia de Deploy Seguro

### 1. **Backup Automático**
Antes de qualquer deploy, um backup completo dos dados de produção é criado automaticamente.

### 2. **Scripts Disponíveis**

```bash
# Deploy seguro com backup automático
npm run deploy:safe

# Fazer backup manual dos dados de produção
npm run backup:prod

# Restaurar backup no ambiente local
npm run restore:backup

# Criar dados de teste locais
npm run test:data
```

### 3. **Fluxo de Deploy Recomendado**

#### Passo 1: Preparar o Ambiente Local
```bash
# 1. Fazer backup dos dados de produção
npm run backup:prod

# 2. Restaurar dados localmente para testar
npm run restore:backup

# 3. Testar todas as funcionalidades
npm run dev
```

#### Passo 2: Verificar Funcionalidades
- ✅ Login admin funciona (`admin` / `admin123`)
- ✅ Alteração de status de tickets
- ✅ Criação de novos clientes
- ✅ Notificações aparecem corretamente
- ✅ Badges de status com cores corretas

#### Passo 3: Deploy Seguro
```bash
# Deploy com backup automático e confirmação
npm run deploy:safe
```

## 📊 Dados de Teste

Para desenvolvimento local, você pode usar:

```bash
npm run test:data
```

Isso criará:
- 1 admin de teste (admin/admin123)
- 3 clientes de teste
- 10 tickets com status variados
- 2 posts de blog
- Dados de contato e chat

## 🔒 Credenciais Padrão

### Ambiente de Produção
- **Admin**: `admin` / `admin123`
- **Clientes**: Senhas existentes preservadas

### Ambiente Local (após restore)
- **Admin**: `admin` / `admin123`
- **Clientes**: Todas as senhas resetadas para `123456`

## 🚨 Procedimentos de Emergência

### Se algo der errado na produção:

1. **Verificar logs da Vercel**
   - Acessar dashboard da Vercel
   - Verificar logs de build e runtime

2. **Rollback rápido**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Restaurar dados (se necessário)**
   - Os backups ficam salvos em `backups/`
   - Executar script de restauração se necessário

## 📁 Estrutura de Arquivos Modificados

```
src/
├── app/
│   ├── admin/page.tsx           # ✅ Interface admin melhorada
│   ├── api/
│   │   ├── clients/route.ts     # 🆕 API de criação de clientes
│   │   └── tickets/[id]/status/ # 🆕 API de alteração de status
│   └── globals.css              # ✅ Estilos para badges
├── types/index.ts               # ✅ Tipos atualizados
└── scripts/                     # 🆕 Scripts de deploy seguro
    ├── backup-production.js
    ├── restore-backup.js
    ├── safe-deploy.js
    └── test-data.js
```

## 🔍 Validação Pós-Deploy

Após o deploy, verificar:

1. **Site principal**: https://inovamente-labs.vercel.app/
2. **Painel admin**: https://inovamente-labs.vercel.app/admin
3. **Portal cliente**: https://inovamente-labs.vercel.app/chamados

### Testes a realizar:
- [ ] Login admin funciona
- [ ] Lista de tickets carrega
- [ ] Alteração de status funciona
- [ ] Criação de cliente funciona
- [ ] Notificações aparecem
- [ ] Badges com cores corretas
- [ ] Portal do cliente inalterado

## 💡 Dicas Importantes

1. **Sempre fazer backup antes de deploy**
2. **Testar localmente com dados de produção**
3. **Verificar se há mudanças não commitadas**
4. **Usar deploy seguro com confirmação**
5. **Validar funcionalidades após deploy**

## 📞 Suporte

Em caso de problemas:
- Verificar logs da Vercel
- Consultar backups em `backups/`
- Executar rollback se necessário
- Restaurar dados localmente para investigação

---

**Último update**: ${new Date().toISOString()}
**Versão**: 2.0 - Sistema completo de gestão
