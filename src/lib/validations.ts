import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export const adminLoginSchema = z.object({
  email: z.string().min(1, 'Usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export const createTicketSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  category: z.enum(['technical', 'billing', 'general']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
});

export const createClientSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  company: z.string().min(1, 'Empresa é obrigatória'),
  phone: z.string().optional(),
});

export const replyTicketSchema = z.object({
  message: z.string().min(1, 'Mensagem é obrigatória'),
  is_internal: z.boolean().optional().default(false),
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'Assunto é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export type LoginData = z.infer<typeof loginSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
export type CreateTicketData = z.infer<typeof createTicketSchema>;
export type CreateClientData = z.infer<typeof createClientSchema>;
export type ReplyTicketData = z.infer<typeof replyTicketSchema>;
export type ContactData = z.infer<typeof contactSchema>;
