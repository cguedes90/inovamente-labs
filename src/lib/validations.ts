import { z } from 'zod';

// Schemas básicos reutilizáveis
const emailSchema = z.string().email('Email inválido');
const passwordSchema = z.string().min(6, 'Senha deve ter pelo menos 6 caracteres');
const strongPasswordSchema = z.string()
  .min(8, 'Senha deve ter pelo menos 8 caracteres')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
    'Senha deve conter pelo menos: 1 letra minúscula, 1 maiúscula, 1 número e 1 caractere especial');

const phoneSchema = z.string()
  .regex(/^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Telefone inválido')
  .optional();

// Enums
export const TicketStatus = z.enum(['ABERTO', 'EM_ANDAMENTO', 'AGUARDANDO_CLIENTE', 'RESOLVIDO', 'FECHADO']);
export const TicketPriority = z.enum(['BAIXA', 'MEDIA', 'ALTA', 'URGENTE']);
export const TicketCategory = z.enum(['TECHNICAL', 'BILLING', 'GENERAL']);
export const ContactStatus = z.enum(['PENDING', 'REVIEWED', 'RESPONDED', 'ARCHIVED']);
export const UserType = z.enum(['admin', 'client']);

// Client validation schemas
export const clientRegistrationSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  email: emailSchema,
  password: strongPasswordSchema,
  confirmPassword: z.string(),
  company: z.string().max(100, 'Nome da empresa deve ter no máximo 100 caracteres').optional(),
  phone: phoneSchema
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"],
});

export const clientLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Senha é obrigatória'),
});

export const clientUpdateSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  email: emailSchema.optional(),
  company: z.string().max(100).optional(),
  phone: phoneSchema,
  currentPassword: z.string().optional(),
  newPassword: strongPasswordSchema.optional()
}).refine((data) => {
  // Se nova senha for fornecida, senha atual é obrigatória
  if (data.newPassword && !data.currentPassword) {
    return false;
  }
  return true;
}, {
  message: "Senha atual é obrigatória para alterar a senha",
  path: ["currentPassword"]
});

// Admin validation schemas
export const adminLoginSchema = z.object({
  email: z.string().min(1, 'Email/usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export const adminCreateClientSchema = z.object({
  name: z.string().min(2).max(100),
  email: emailSchema,
  password: passwordSchema,
  company: z.string().max(100).optional(),
  phone: phoneSchema
});

// Ticket validation schemas
export const ticketCreationSchema = z.object({
  title: z.string()
    .min(5, 'Título deve ter pelo menos 5 caracteres')
    .max(200, 'Título deve ter no máximo 200 caracteres'),
  description: z.string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres')
    .max(5000, 'Descrição deve ter no máximo 5000 caracteres'),
  category: TicketCategory,
  priority: TicketPriority.default('MEDIA'),
});

export const ticketUpdateSchema = z.object({
  title: z.string().min(5).max(200).optional(),
  description: z.string().min(10).max(5000).optional(),
  status: TicketStatus.optional(),
  priority: TicketPriority.optional(),
});

export const ticketStatusUpdateSchema = z.object({
  status: TicketStatus
});

// Message validation schema
export const messageCreationSchema = z.object({
  content: z.string()
    .min(1, 'Mensagem não pode estar vazia')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
  ticketId: z.string().cuid('ID do ticket inválido'),
});

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: emailSchema,
  subject: z.string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(200, 'Assunto deve ter no máximo 200 caracteres'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
});

// Blog post validation schemas
export const blogPostCreationSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(50),
  excerpt: z.string().min(10).max(300),
  slug: z.string()
    .min(5)
    .regex(/^[a-z0-9-]+$/, 'Slug deve conter apenas letras minúsculas, números e hífens'),
  image: z.string().url('URL da imagem inválida').optional(),
  category: z.string().min(2).max(50),
  author: z.string().min(2).max(100),
  published: z.boolean().default(true),
  readTime: z.string().regex(/^\d+\s?(min|minutos?)$/, 'Formato de tempo inválido')
});

export const blogPostUpdateSchema = blogPostCreationSchema.partial();

// Chat conversation schemas
export const chatMessageSchema = z.object({
  content: z.string().min(1).max(1000),
  isBot: z.boolean().default(false),
  conversationId: z.string().cuid()
});

export const chatConversationSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  email: emailSchema.optional(),
  phone: phoneSchema,
  company: z.string().max(100).optional()
});

// Pagination schema
export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1).max(100),
  filter: z.record(z.any()).optional()
});

// Generic ID schema
export const idSchema = z.object({
  id: z.string().cuid('ID inválido')
});

// Legacy schemas (manter compatibilidade)
export const loginSchema = clientLoginSchema;
export const createTicketSchema = ticketCreationSchema;
export const createClientSchema = adminCreateClientSchema;
export const replyTicketSchema = messageCreationSchema;
export const contactSchema = contactFormSchema;

// Types - Export all inferred types
export type ClientRegistrationData = z.infer<typeof clientRegistrationSchema>;
export type ClientLoginData = z.infer<typeof clientLoginSchema>;
export type ClientUpdateData = z.infer<typeof clientUpdateSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
export type AdminCreateClientData = z.infer<typeof adminCreateClientSchema>;
export type TicketCreationData = z.infer<typeof ticketCreationSchema>;
export type TicketUpdateData = z.infer<typeof ticketUpdateSchema>;
export type TicketStatusUpdateData = z.infer<typeof ticketStatusUpdateSchema>;
export type MessageCreationData = z.infer<typeof messageCreationSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BlogPostCreationData = z.infer<typeof blogPostCreationSchema>;
export type BlogPostUpdateData = z.infer<typeof blogPostUpdateSchema>;
export type ChatMessageData = z.infer<typeof chatMessageSchema>;
export type ChatConversationData = z.infer<typeof chatConversationSchema>;
export type PaginationData = z.infer<typeof paginationSchema>;
export type SearchData = z.infer<typeof searchSchema>;

// Legacy types (manter compatibilidade)
export type LoginData = z.infer<typeof loginSchema>;
export type CreateTicketData = z.infer<typeof createTicketSchema>;
export type CreateClientData = z.infer<typeof createClientSchema>;
export type ReplyTicketData = z.infer<typeof replyTicketSchema>;
export type ContactData = z.infer<typeof contactSchema>;

// Utility functions for validation
export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validatePassword(password: string, strong: boolean = false): boolean {
  const schema = strong ? strongPasswordSchema : passwordSchema;
  return schema.safeParse(password).success;
}

export function validatePhone(phone: string): boolean {
  return phoneSchema.safeParse(phone).success;
}
