# 🚀 InovaMente Labs - Sistema Completo de Gestão

Uma plataforma completa de gestão empresarial construída com **Next.js 15**, **TypeScript**, **Neon PostgreSQL** e **Tailwind CSS**.

## ✨ Funcionalidades Principais

### 👥 **Portal do Cliente**
- 🎫 **Sistema de Tickets** - Criação e acompanhamento de chamados
- 🔐 **Autenticação Segura** - Login com JWT
- 📱 **Interface Responsiva** - Funciona em todos os dispositivos
- 📊 **Dashboard Personalizado** - Visão geral dos chamados
- 💬 **Sistema de Respostas** - Comunicação direta com suporte

### 👨‍💼 **Painel Administrativo**
- 📈 **Dashboard Completo** - Métricas e estatísticas
- 👥 **Gestão de Clientes** - CRUD completo de usuários
- 🎫 **Gestão de Tickets** - Visualização e resposta a chamados
- 📝 **Sistema de Blog** - CMS completo para posts
- 🤖 **Gestão de Chatbot** - Visualização de conversas e leads
- 📞 **Gestão de Contatos** - Organização por assunto
- 🔒 **Acesso Restrito** - Autenticação administrativa

### 🤖 **Chatbot Inteligente**
- 💬 **Captura de Leads** - Coleta automática de dados
- 📋 **Fluxo Conversacional** - Interação natural
- 💾 **Persistência de Dados** - Todas as conversas salvas
- 📊 **Analytics** - Métricas de engajamento

### 📝 **Sistema de Blog**
- ✏️ **Editor Completo** - Criação e edição de posts
- 🎯 **SEO Otimizado** - Meta tags e URLs amigáveis
- 📷 **Suporte a Imagens** - Upload e emojis
- 🏷️ **Sistema de Categorias** - Organização por temas
- ⏱️ **Tempo de Leitura** - Cálculo automático
- 📱 **Design Responsivo** - Perfeito em todos os dispositivos
- ✅ Filtros por status e categoria
- ✅ Interface responsiva e intuitiva

### Painel Administrativo (/admin)
- ✅ Login administrativo seguro
- ✅ Gestão completa de clientes
- ✅ Visualização de todos os tickets
- ✅ Dashboard com métricas em tempo real
- ✅ Criação e edição de clientes

### Website Corporativo (/)
- ✅ Landing page moderna e responsiva
- ✅ Seções de serviços e portfólio
- ✅ Links diretos para portal e admin
- ✅ Design profissional otimizado para conversão

### Blog (/blog)
- ✅ Sistema de blog SEO otimizado
- ✅ Categorias e filtros
- ✅ Sidebar com posts recentes
- ✅ Newsletter integrada

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT + bcrypt
- **Validação**: Zod
- **Estado**: TanStack React Query
- **Formulários**: React Hook Form

## 📋 Pré-requisitos

- Node.js 18+ 
- PostgreSQL 13+
- npm ou yarn

## 🚀 Instalação e Configuração

### 1. Clone e instale dependências
```bash
git clone <repository-url>
cd inovamente-labs
npm install
```

### 2. Configure as variáveis de ambiente
Crie o arquivo `.env.local`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/inovamente_db"
JWT_SECRET="sua_chave_secreta_jwt_muito_segura"
```

### 3. Inicialize o banco de dados
```bash
npm run db:push
```

### 4. Execute o projeto
```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🔐 Credenciais de Teste

### Administrador
- **URL**: `/admin`
- **Usuário**: `admin`
- **Senha**: `admin123`

### Cliente
- **URL**: `/chamados`
- **Email**: `cliente@teste.com`
- **Senha**: `123456`

## 📖 Estrutura do Banco de Dados

### Tabelas Principais

- **clients**: Informações dos clientes
- **tickets**: Chamados de suporte
- **ticket_replies**: Respostas dos tickets
- **contact_messages**: Mensagens de contato
- **chat_messages**: Histórico do chatbot

## 🎯 Endpoints da API

### Autenticação
- `POST /api/clients/login` - Login de clientes
- `POST /api/admin/login` - Login administrativo

### Clientes
- `GET /api/clients/tickets` - Lista tickets do cliente
- `POST /api/clients/tickets` - Cria novo ticket

### Admin
- `GET /api/admin/clients` - Lista todos os clientes
- `POST /api/admin/clients` - Cria novo cliente
- `GET /api/admin/tickets` - Lista todos os tickets

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run check        # Verificação TypeScript
npm run db:push      # Inicializar banco de dados
```

## 🏗️ Arquitetura

```
src/
├── app/                 # App Router pages
│   ├── api/            # API Routes
│   ├── chamados/       # Portal do cliente
│   ├── admin/          # Painel administrativo
│   ├── blog/           # Sistema de blog
│   └── globals.css     # Estilos globais
├── components/         # Componentes reutilizáveis
├── lib/               # Utilitários
│   ├── auth.ts        # Funções de autenticação
│   ├── db.ts          # Conexão com banco
│   ├── validations.ts # Schemas Zod
│   └── queryClient.tsx # Config React Query
└── types/             # Tipos TypeScript
```

## 🔐 Segurança

- ✅ Senhas hasheadas com bcrypt
- ✅ Tokens JWT com expiração
- ✅ Validação de entrada com Zod
- ✅ Middleware de autenticação
- ✅ Sanitização de dados
- ✅ Headers de segurança

## 🎨 Design System

### Cores
- **Admin**: Azul (#3B82F6) - Área administrativa
- **Cliente**: Verde (#10B981) - Portal do cliente
- **Status**: Cores semânticas para estados

### Componentes
- `.btn-primary`, `.btn-secondary` - Botões
- `.btn-admin`, `.btn-client` - Botões específicos
- `.card` - Cartões de conteúdo
- `.badge-*` - Status badges
- `.input-field` - Campos de formulário

## 📱 Responsividade

- ✅ Design mobile-first
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Menu hambúrguer em telas pequenas
- ✅ Scroll horizontal em tabelas

## 🔄 Fluxos de Trabalho

### Onboarding de Cliente
1. Admin cria cliente no painel
2. Cliente recebe credenciais
3. Cliente acessa `/chamados`
4. Login e dashboard de tickets

### Ciclo de Vida do Ticket
1. Cliente cria ticket
2. Status: Open
3. Admin visualiza e responde
4. Status: In Progress → Resolved → Closed

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas:
- Email: contato@inovamentelabs.com
- Website: [inovamentelabs.com](https://inovamentelabs.com)

---

Desenvolvido com ❤️ pela equipe InovaMente Labs
