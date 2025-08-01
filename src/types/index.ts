export interface Client {
  id: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  status: 'active' | 'inactive';
  last_login?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Ticket {
  id: number;
  client_id: number;
  title: string;
  description: string;
  category: 'technical' | 'billing' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  assigned_to?: number;
  created_at: Date;
  updated_at: Date;
  resolved_at?: Date;
  client?: Client;
}

export interface TicketReply {
  id: number;
  ticket_id: number;
  author_id: number;
  author_type: 'client' | 'admin';
  message: string;
  is_internal: boolean;
  created_at: Date;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'proposal' | 'support' | 'general';
  created_at: Date;
}

export interface ChatMessage {
  id: number;
  session_id: string;
  message: string;
  response: string;
  created_at: Date;
}

export interface AuthResponse {
  token: string;
  client?: Client;
  admin?: {
    id: number;
    username: string;
    role: string;
  };
}

export interface ApiError {
  message: string;
  status: number;
}

export interface CreateTicketData {
  title: string;
  description: string;
  category: 'technical' | 'billing' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface CreateClientData {
  name: string;
  email: string;
  password: string;
  company: string;
  phone?: string;
}
