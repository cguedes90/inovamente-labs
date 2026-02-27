'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginData } from '@/lib/validations';
import { apiRequest } from '@/lib/queryClient';
import Link from 'next/link';
import {
  ArrowLeft,
  LogIn,
  LogOut,
  Plus,
  ClipboardList,
  MessageCircle,
  Filter,
  Clock,
  Tag,
  ShieldAlert,
  AlertTriangle,
  Loader2,
  FileText,
  X,
  Info,
  CircleDot,
  Timer,
  CheckCircle2,
  XCircle,
  Send,
} from 'lucide-react';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  createdAt: string;
}

export default function ClientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  });

  useEffect(() => {
    // Verificar se já está logado
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const onSubmit = async (data: LoginData) => {
    try {
      setLoginError('');

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          type: 'client'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao fazer login');
      }

      localStorage.setItem('token', result.token);
      localStorage.setItem('client', JSON.stringify(result.user));

      setIsLoggedIn(true);
    } catch (error: any) {
      setLoginError(error.message || 'Erro ao fazer login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('client');
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-5">
        {/* Subtle gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="glass-card rounded-2xl p-10 sm:p-14 max-w-md w-full text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-8 hover:underline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            InovaMente Labs
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Portal do <span className="gradient-text">Cliente</span>
          </h1>

          <p className="text-muted-foreground mb-10">
            Acesse sua conta para gerenciar seus chamados
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-6">
            <div>
              <label className="block mb-2 text-foreground font-semibold text-sm">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block mb-2 text-foreground font-semibold text-sm">
                Senha
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password.message}
                </span>
              )}
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                <span className="text-red-600 text-sm font-medium">{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Entrar
                </>
              )}
            </button>
          </form>

          <p className="text-muted-foreground text-sm mt-8 mb-6">
            Não tem acesso? Entre em contato com nosso suporte.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-left">
            <h3 className="text-primary font-semibold text-sm mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Credenciais de Teste:
            </h3>
            <p className="text-muted-foreground text-sm">
              Faça login com suas credenciais
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <ClientDashboard onLogout={handleLogout} />;
}

// Componente do Dashboard do Cliente
function ClientDashboard({ onLogout }: { onLogout: () => void }) {
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [refreshTickets, setRefreshTickets] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const clientData = JSON.parse(localStorage.getItem('client') || '{}');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
                InovaMente Labs
              </Link>
              <span className="hidden sm:inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                Portal do Cliente
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-foreground font-medium text-sm">{clientData.name}</p>
                <p className="text-muted-foreground text-xs">{clientData.email}</p>
              </div>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header da seção */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Central de <span className="gradient-text">Suporte</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gerencie seus tickets de suporte e acompanhe o andamento das suas solicitações em tempo real.
          </p>
        </div>

        {/* Cards de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Plus className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-foreground font-semibold mb-1">Novo Chamado</h3>
            <p className="text-muted-foreground text-sm mb-5">Abra um novo ticket de suporte</p>
            <button
              onClick={() => setShowNewTicketModal(true)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-xl transition-all"
            >
              Criar Ticket
            </button>
          </div>

          <div className="glass-card rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-foreground font-semibold mb-1">Meus Tickets</h3>
            <p className="text-muted-foreground text-sm mb-5">Visualize todos os seus chamados</p>
            <button
              onClick={() => setActiveFilter('all')}
              className={`w-full font-medium py-3 px-4 rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              Ver Todos
            </button>
          </div>

          <div className="glass-card rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
            </div>
            <h3 className="text-foreground font-semibold mb-1">Suporte</h3>
            <p className="text-muted-foreground text-sm mb-5">Precisa de ajuda imediata?</p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all block text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { key: 'all', label: 'Todos', Icon: Filter },
              { key: 'open', label: 'Em Aberto', Icon: CircleDot },
              { key: 'progress', label: 'Em Progresso', Icon: Timer },
              { key: 'resolved', label: 'Resolvidos', Icon: CheckCircle2 }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
                }`}
              >
                <filter.Icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Tickets */}
        <div className="glass-card rounded-2xl p-6">
          <TicketsList key={refreshTickets} filter={activeFilter} />
        </div>
      </main>

      {/* Modal para novo ticket */}
      {showNewTicketModal && (
        <NewTicketModal
          onClose={() => setShowNewTicketModal(false)}
          onSuccess={() => {
            setShowNewTicketModal(false);
            setRefreshTickets(prev => prev + 1);
          }}
        />
      )}
    </div>
  );
}

// Componente da lista de tickets
function TicketsList({ filter = 'all' }: { filter?: string }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTickets() {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('/api/tickets', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao carregar tickets');
        }

        const data = await response.json();
        setTickets(data.tickets || []);
      } catch (error: any) {
        setError(error.message || 'Erro ao carregar tickets');
        console.error('Erro ao carregar tickets:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTickets();
  }, []);

  // Filtrar tickets baseado no filtro ativo
  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') return true;
    if (filter === 'open') return ticket.status === 'OPEN';
    if (filter === 'progress') return ticket.status === 'IN_PROGRESS';
    if (filter === 'resolved') return ['RESOLVED', 'CLOSED'].includes(ticket.status);
    return true;
  });

  const getStatusBadgeClass = (status: string) => {
    const statusMap: Record<string, string> = {
      'OPEN': 'badge-open',
      'IN_PROGRESS': 'badge-progress',
      'RESOLVED': 'badge-resolved',
      'CLOSED': 'badge-closed',
    };
    return statusMap[status] || 'badge-open';
  };

  const getStatusIcon = (status: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'OPEN': <CircleDot className="w-3.5 h-3.5" />,
      'IN_PROGRESS': <Timer className="w-3.5 h-3.5" />,
      'RESOLVED': <CheckCircle2 className="w-3.5 h-3.5" />,
      'CLOSED': <XCircle className="w-3.5 h-3.5" />,
    };
    return iconMap[status] || <CircleDot className="w-3.5 h-3.5" />;
  };

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      'OPEN': 'Aberto',
      'IN_PROGRESS': 'Em Progresso',
      'RESOLVED': 'Resolvido',
      'CLOSED': 'Fechado'
    };
    return statusMap[status] || status;
  };

  const getPriorityText = (priority: string) => {
    const priorityMap: Record<string, string> = {
      'LOW': 'Baixa',
      'MEDIUM': 'Média',
      'HIGH': 'Alta',
      'URGENT': 'Urgente'
    };
    return priorityMap[priority] || priority;
  };

  const getCategoryText = (category: string) => {
    const categoryMap: Record<string, string> = {
      'TECHNICAL': 'Técnico',
      'BILLING': 'Financeiro',
      'GENERAL': 'Geral'
    };
    return categoryMap[category] || category;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `Criado há ${diffInHours} horas`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `Criado há ${diffInDays} dias`;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-muted-foreground">Carregando seus tickets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
          <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-4" />
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (filteredTickets.length === 0) {
    const messages: Record<string, { title: string; subtitle: string; action: string }> = {
      all: {
        title: "Nenhum ticket encontrado",
        subtitle: "Você ainda não possui nenhum chamado.",
        action: "Clique em 'Criar Ticket' para abrir seu primeiro chamado."
      },
      open: {
        title: "Nenhum ticket em aberto",
        subtitle: "Você não possui tickets abertos no momento.",
        action: "Seus chamados resolvidos podem ser encontrados em 'Resolvidos'."
      },
      progress: {
        title: "Nenhum ticket em progresso",
        subtitle: "Nenhum ticket está sendo processado no momento.",
        action: "Aguarde ou abra um novo chamado se necessário."
      },
      resolved: {
        title: "Nenhum ticket resolvido",
        subtitle: "Você ainda não possui tickets resolvidos.",
        action: "Seus futuros tickets resolvidos aparecerão aqui."
      }
    };

    const message = messages[filter] || messages.all;

    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{message.title}</h3>
          <p className="text-muted-foreground mb-1">{message.subtitle}</p>
          <p className="text-muted-foreground text-sm">{message.action}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTickets.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-foreground">
            {filter === 'all' ? 'Todos os Tickets' :
             filter === 'open' ? 'Tickets em Aberto' :
             filter === 'progress' ? 'Tickets em Progresso' :
             'Tickets Resolvidos'}
          </h2>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            {filteredTickets.length} {filteredTickets.length === 1 ? 'ticket' : 'tickets'}
          </span>
        </div>
      )}

      {filteredTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-semibold text-foreground">
                  #{ticket.id.toString().padStart(3, '0')} - {ticket.title}
                </h3>
                <span className={`${getStatusBadgeClass(ticket.status)} inline-flex items-center gap-1`}>
                  {getStatusIcon(ticket.status)}
                  {getStatusText(ticket.status)}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ticket.description}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-border">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                {getCategoryText(ticket.category)}
              </span>
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Prioridade: {getPriorityText(ticket.priority)}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatDate(ticket.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Modal para criar novo ticket
function NewTicketModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'TECHNICAL',
    priority: 'MEDIUM'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Título e descrição são obrigatórios');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem('token');

      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao criar ticket');
      }

      onSuccess();
    } catch (error: any) {
      setError(error.message || 'Erro ao criar ticket');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card bg-card rounded-2xl max-w-lg w-full p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary rounded-xl">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Novo Chamado</h2>
              <p className="text-muted-foreground text-sm">Descreva seu problema ou solicitação</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Título */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Título do Chamado *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-3.5 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
              placeholder="Ex: Problema no sistema de vendas"
            />
          </div>

          {/* Categoria e Prioridade */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Categoria *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3.5 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="TECHNICAL">Técnico</option>
                <option value="BILLING">Financeiro</option>
                <option value="GENERAL">Geral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Prioridade
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
                className="w-full p-3.5 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="LOW">Baixa</option>
                <option value="MEDIUM">Média</option>
                <option value="HIGH">Alta</option>
                <option value="URGENT">Urgente</option>
              </select>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Descrição Detalhada *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={5}
              className="w-full p-3.5 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground"
              placeholder="Descreva detalhadamente seu problema, incluindo quando começou, que ações você já tentou, e qualquer informação relevante..."
            />
          </div>

          {/* Erro */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3.5 px-6 border-2 border-border rounded-xl text-foreground font-semibold hover:bg-muted transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3.5 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Criando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Criar Chamado</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
