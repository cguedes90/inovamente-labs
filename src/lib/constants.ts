// Constantes da aplicação

// Status de tickets
export const TICKET_STATUS = {
  ABERTO: 'ABERTO',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  AGUARDANDO_CLIENTE: 'AGUARDANDO_CLIENTE',
  RESOLVIDO: 'RESOLVIDO',
  FECHADO: 'FECHADO',
} as const;

// Prioridades
export const PRIORITY = {
  BAIXA: 'BAIXA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE',
} as const;

// Categorias de tickets
export const TICKET_CATEGORY = {
  TECHNICAL: 'TECHNICAL',
  BILLING: 'BILLING',
  GENERAL: 'GENERAL',
} as const;

// Status de contatos
export const CONTACT_STATUS = {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  RESPONDED: 'RESPONDED',
  ARCHIVED: 'ARCHIVED',
} as const;

// Tipos de usuário
export const USER_TYPE = {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
} as const;

// Configurações de paginação
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Configurações de rate limiting
export const RATE_LIMIT = {
  LOGIN: { max: 5, window: 15 * 60 * 1000 }, // 5 tentativas por 15 min
  CONTACT: { max: 3, window: 10 * 60 * 1000 }, // 3 por 10 min
  API_GENERAL: { max: 100, window: 60 * 1000 }, // 100 por minuto
  API_ADMIN: { max: 20, window: 60 * 1000 }, // 20 por minuto
} as const;

// Configurações de upload
export const UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'text/plain',
  ],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.txt'],
} as const;

// URLs da aplicação
export const ROUTES = {
  // Públicas
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CONTACT: '/contato',
  BLOG: '/blog',
  SERVICES: '/solucoes',
  DEVELOPMENT: '/desenvolvimento',
  TICKETS_PUBLIC: '/chamados',
  
  // Admin
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin',
  
  // Cliente
  CLIENT_DASHBOARD: '/dashboard',
  CLIENT_TICKETS: '/dashboard/tickets',
  CLIENT_PROFILE: '/dashboard/profile',
  
  // API
  API_AUTH: '/api/auth',
  API_CLIENTS: '/api/clients',
  API_TICKETS: '/api/tickets',
  API_CONTACT: '/api/contact',
  API_BLOG: '/api/blog',
} as const;

// Mensagens de erro
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Acesso não autorizado',
  FORBIDDEN: 'Acesso negado',
  NOT_FOUND: 'Recurso não encontrado',
  VALIDATION_ERROR: 'Dados inválidos',
  INTERNAL_ERROR: 'Erro interno do servidor',
  RATE_LIMIT_EXCEEDED: 'Limite de requisições excedido',
  TOKEN_EXPIRED: 'Token expirado',
  TOKEN_INVALID: 'Token inválido',
  EMAIL_EXISTS: 'Email já está em uso',
  INVALID_CREDENTIALS: 'Credenciais inválidas',
  ACCOUNT_INACTIVE: 'Conta inativa',
} as const;

// Mensagens de sucesso
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login realizado com sucesso',
  LOGOUT_SUCCESS: 'Logout realizado com sucesso',
  REGISTER_SUCCESS: 'Conta criada com sucesso',
  UPDATE_SUCCESS: 'Dados atualizados com sucesso',
  CREATE_SUCCESS: 'Criado com sucesso',
  DELETE_SUCCESS: 'Excluído com sucesso',
  EMAIL_SENT: 'Email enviado com sucesso',
} as const;

// Configurações de email templates
export const EMAIL_TEMPLATES = {
  TICKET_CREATED: 'ticket-created',
  TICKET_UPDATED: 'ticket-updated',
  TICKET_RESOLVED: 'ticket-resolved',
  WELCOME: 'welcome',
  PASSWORD_RESET: 'password-reset',
  CONTACT_CONFIRMATION: 'contact-confirmation',
} as const;

// Configurações de notificações
export const NOTIFICATION_TYPES = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

// Configurações do sistema
export const SYSTEM_CONFIG = {
  APP_NAME: 'InovaMente Labs',
  APP_VERSION: '1.0.0',
  SUPPORT_EMAIL: 'suporte@inovamentelabs.com.br',
  CONTACT_EMAIL: 'contato@inovamentelabs.com.br',
  PHONE: '+55 (11) 99999-9999',
  ADDRESS: 'São Paulo, SP, Brasil',
  SOCIAL: {
    WEBSITE: 'https://inovamentelabs.com.br',
    LINKEDIN: 'https://linkedin.com/company/inovamente-labs',
    GITHUB: 'https://github.com/inovamente-labs',
  },
} as const;

// Validações regex
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
  PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  SLUG: /^[a-z0-9-]+$/,
  CUID: /^c[a-z0-9]{24}$/,
} as const;

// Temas e cores
export const COLORS = {
  PRIMARY: '#3B82F6',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
} as const;

export type TicketStatus = keyof typeof TICKET_STATUS;
export type Priority = keyof typeof PRIORITY;
export type TicketCategory = keyof typeof TICKET_CATEGORY;
export type ContactStatus = keyof typeof CONTACT_STATUS;
export type UserType = keyof typeof USER_TYPE;