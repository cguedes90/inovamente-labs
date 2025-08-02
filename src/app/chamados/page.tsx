'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginData } from '@/lib/validations';
import { apiRequest } from '@/lib/queryClient';
import Link from 'next/link';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-client-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f0f23 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          borderRadius: '20px',
          padding: '60px 40px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center'
        }}>
          <Link href="/" style={{
            color: '#8a2be2',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '30px',
            display: 'inline-block'
          }}>
            ← InovaMente Labs
          </Link>

          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            Portal do Cliente
          </h1>

          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Acesse sua conta para gerenciar seus chamados
          </p>

          <form onSubmit={handleSubmit(onSubmit)} style={{textAlign: 'left'}}>
            <div style={{marginBottom: '25px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600'
              }}>
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="seu@email.com"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid rgba(138, 43, 226, 0.3)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8a2be2'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(138, 43, 226, 0.3)'}
              />
              {errors.email && (
                <span style={{color: '#ff6b6b', fontSize: '14px', marginTop: '5px', display: 'block'}}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div style={{marginBottom: '30px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600'
              }}>
                Senha
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid rgba(138, 43, 226, 0.3)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8a2be2'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(138, 43, 226, 0.3)'}
              />
              {errors.password && (
                <span style={{color: '#ff6b6b', fontSize: '14px', marginTop: '5px', display: 'block'}}>
                  {errors.password.message}
                </span>
              )}
            </div>

            {loginError && (
              <div style={{
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                padding: '15px',
                borderRadius: '12px',
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                <span style={{color: '#ff6b6b'}}>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
                color: 'white',
                padding: '18px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '700',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'all 0.3s ease',
                marginBottom: '25px'
              }}
            >
              {isSubmitting ? 'Entrando...' : '🔧 Entrar'}
            </button>
          </form>

          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '14px',
            marginBottom: '25px'
          }}>
            Não tem acesso? Entre em contato com nosso suporte.
          </p>

          <div style={{
            background: 'rgba(138, 43, 226, 0.1)',
            border: '1px solid rgba(138, 43, 226, 0.3)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3 style={{
              color: '#ff1493',
              marginBottom: '15px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Credenciais de Teste:
            </h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', margin: '5px 0'}}>
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
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header Moderno */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
                InovaMente Labs
              </Link>
              <div className="hidden sm:block">
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                  Portal do Cliente
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">{clientData.name}</p>
                <p className="text-white/70 text-sm">{clientData.email}</p>
              </div>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da seção */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Central de Suporte
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Gerencie seus tickets de suporte e acompanhe o andamento das suas solicitações em tempo real.
          </p>
        </div>

        {/* Cards de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">+</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Novo Chamado</h3>
            <p className="text-white/70 text-sm mb-4">Abra um novo ticket de suporte</p>
            <button 
              onClick={() => setShowNewTicketModal(true)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Criar Ticket
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">📋</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Meus Tickets</h3>
            <p className="text-white/70 text-sm mb-4">Visualize todos os seus chamados</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className={`w-full font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                activeFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Ver Todos
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">💬</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Suporte</h3>
            <p className="text-white/70 text-sm mb-4">Precisa de ajuda imediata?</p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 block text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Filtros Modernos */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { key: 'all', label: 'Todos', icon: '📋' },
              { key: 'open', label: 'Em Aberto', icon: '🔵' },
              { key: 'progress', label: 'Em Progresso', icon: '🟡' },
              { key: 'resolved', label: 'Resolvidos', icon: '✅' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === filter.key
                    ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Tickets */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
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

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'OPEN': { class: 'bg-blue-500/20 text-blue-300 border-blue-500/30', icon: '🔵' },
      'IN_PROGRESS': { class: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', icon: '🟡' },
      'RESOLVED': { class: 'bg-green-500/20 text-green-300 border-green-500/30', icon: '✅' },
      'CLOSED': { class: 'bg-gray-500/20 text-gray-300 border-gray-500/30', icon: '⚫' }
    };
    return statusMap[status as keyof typeof statusMap] || statusMap['OPEN'];
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      'OPEN': 'Aberto',
      'IN_PROGRESS': 'Em Progresso',
      'RESOLVED': 'Resolvido', 
      'CLOSED': 'Fechado'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  const getPriorityText = (priority: string) => {
    const priorityMap = {
      'LOW': 'Baixa',
      'MEDIUM': 'Média',
      'HIGH': 'Alta',
      'URGENT': 'Urgente'
    };
    return priorityMap[priority as keyof typeof priorityMap] || priority;
  };

  const getCategoryText = (category: string) => {
    const categoryMap = {
      'TECHNICAL': 'Técnico',
      'BILLING': 'Financeiro',
      'GENERAL': 'Geral'
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
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
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-white/30 border-t-white"></div>
          <p className="text-white/70">Carregando seus tickets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-red-300 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (filteredTickets.length === 0) {
    const messages = {
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

    const message = messages[filter as keyof typeof messages] || messages.all;

    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{message.title}</h3>
          <p className="text-white/70 mb-2">{message.subtitle}</p>
          <p className="text-white/50 text-sm">{message.action}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTickets.length > 0 && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {filter === 'all' ? `Todos os Tickets` : 
             filter === 'open' ? `Tickets em Aberto` :
             filter === 'progress' ? `Tickets em Progresso` : 
             `Tickets Resolvidos`}
          </h2>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
            {filteredTickets.length} {filteredTickets.length === 1 ? 'ticket' : 'tickets'}
          </span>
        </div>
      )}
      
      {filteredTickets.map((ticket) => {
        const statusInfo = getStatusBadge(ticket.status);
        return (
          <div key={ticket.id} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white transition-all duration-200 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    #{ticket.id.toString().padStart(3, '0')} - {ticket.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusInfo.class}`}>
                    <span className="mr-1">{statusInfo.icon}</span>
                    {getStatusText(ticket.status)}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {ticket.description}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>{getCategoryText(ticket.category)}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Prioridade: {getPriorityText(ticket.priority)}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formatDate(ticket.createdAt)}</span>
              </div>
            </div>
          </div>
        );
      })}
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Novo Chamado</h2>
              <p className="text-gray-500">Descreva seu problema ou solicitação</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Título do Chamado *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900"
              placeholder="Ex: Problema no sistema de vendas"
            />
          </div>

          {/* Categoria e Prioridade */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Categoria *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900"
              >
                <option value="TECHNICAL">🔧 Técnico</option>
                <option value="BILLING">💰 Financeiro</option>
                <option value="GENERAL">📋 Geral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Prioridade
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900"
              >
                <option value="LOW">🟢 Baixa</option>
                <option value="MEDIUM">🟡 Média</option>
                <option value="HIGH">🟠 Alta</option>
                <option value="URGENT">🔴 Urgente</option>
              </select>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Descrição Detalhada *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={5}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 resize-none"
              placeholder="Descreva detalhadamente seu problema, incluindo quando começou, que ações você já tentou, e qualquer informação relevante..."
            />
          </div>

          {/* Erro */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 px-6 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                  <span>Criando...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
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
