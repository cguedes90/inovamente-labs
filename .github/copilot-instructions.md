<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# InovaMente Labs - Sistema de Gestão de Clientes e Tickets

Este é um projeto Next.js com TypeScript que implementa um sistema completo de gestão de clientes e tickets de suporte para a InovaMente Labs.

## Arquitetura do Projeto

- **Frontend**: Next.js 14+ com App Router, TypeScript, Tailwind CSS
- **Backend**: API Routes do Next.js
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT com bcrypt
- **Validação**: Zod schemas
- **Estado**: TanStack React Query
- **Formulários**: React Hook Form

## Estrutura de Funcionalidades

### Portal do Cliente (/chamados)
- Sistema de login para clientes
- Dashboard de tickets
- Criação e acompanhamento de chamados
- Filtros por status e categoria

### Painel Administrativo (/admin)
- Login administrativo (admin/admin123)
- Gestão completa de clientes
- Visualização de todos os tickets
- Dashboard com métricas

### Website Corporativo (/)
- Landing page da empresa
- Links para portal e admin
- Informações sobre serviços

### Blog (/blog)
- Sistema de blog SEO otimizado
- Categorias e posts
- Sidebar com navegação

## Padrões de Código

### Tipos TypeScript
- Usar interfaces definidas em `/src/types/index.ts`
- Sempre tipar props e estados
- Usar tipos derivados do Zod quando possível

### Componentes React
- Usar 'use client' apenas quando necessário
- Preferir Server Components quando possível
- Usar hooks personalizados para lógica complexa

### APIs
- Validar entrada com schemas Zod
- Usar middleware de autenticação
- Retornar erros estruturados
- Logs detalhados para debugging

### Banco de Dados
- Usar prepared statements (placeholders $1, $2)
- Sempre fazer SELECT explícito (evitar *)
- Tratar erros de conexão adequadamente

### Autenticação
- Tokens JWT com expiração de 7 dias
- Senhas hasheadas com bcrypt
- Middleware para verificação de tokens
- Separação de contextos (client/admin)

### Estilos
- Usar classes do Tailwind CSS
- Aproveitar componentes pré-definidos (.btn-primary, .card, etc.)
- Manter consistência de cores (admin=azul, client=verde)

## Variáveis de Ambiente Requeridas

```
DATABASE_URL="postgresql://username:password@localhost:5432/inovamente_db"
JWT_SECRET="sua_chave_secreta_jwt"
```

## Comandos Importantes

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run db:push` - Inicializar banco de dados
- `npm run check` - Verificação TypeScript

## Credenciais de Teste

- **Admin**: admin / admin123 (acesso em /admin)
- **Cliente**: cliente@teste.com / 123456 (acesso em /chamados)
