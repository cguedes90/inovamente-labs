'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginData } from '@/lib/validations';
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
  client: {
    name: string;
    company?: string;
    email: string;
  };
}

interface Client {
  id: number;
  name: string;
  email: string;
  company?: string;
  isActive: boolean;
  lastLogin?: string;
  ticketCount?: number;
}

interface ChatMessage {
  id: number;
  content: string;
  isBot: boolean;
  createdAt: string;
}

interface ChatConversation {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  status: string;
  createdAt: string;
  messages: ChatMessage[];
}

interface ContactForm {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema)
  });

  useEffect(() => {
    // Verificar se já está logado como admin
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const onSubmit = async (data: AdminLoginData) => {
    try {
      setLoginError('');
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email, // Usar email do formulário
          password: data.password,
          type: 'admin'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao fazer login');
      }

      localStorage.setItem('admin_token', result.token);
      localStorage.setItem('admin', JSON.stringify(result.user));
      
      setIsLoggedIn(true);
    } catch (error: any) {
      setLoginError(error.message || 'Erro ao fazer login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin');
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-admin-600"></div>
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
          border: '1px solid rgba(0, 191, 255, 0.3)',
          borderRadius: '20px',
          padding: '60px 40px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center'
        }}>
          <Link href="/" style={{
            color: '#00bfff',
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
            background: 'linear-gradient(45deg, #00bfff, #7777c6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            Área Administrativa
          </h1>

          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Acesse o painel de administração
          </p>

          <form onSubmit={handleSubmit(onSubmit)} style={{textAlign: 'left'}}>
            <div style={{marginBottom: '25px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: '600'
              }}>
                Usuário
              </label>
              <input
                {...register('email')}
                type="text"
                placeholder="admin"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  border: '2px solid rgba(0, 191, 255, 0.3)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00bfff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)'}
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
                  border: '2px solid rgba(0, 191, 255, 0.3)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#00bfff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)'}
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
                background: 'linear-gradient(45deg, #00bfff, #7777c6)',
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
              {isSubmitting ? 'Entrando...' : '👑 Entrar'}
            </button>
          </form>

          <div style={{
            background: 'rgba(0, 191, 255, 0.1)',
            border: '1px solid rgba(0, 191, 255, 0.3)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3 style={{
              color: '#00bfff',
              marginBottom: '15px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              Credenciais de Teste:
            </h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', margin: '5px 0'}}>
              Acesso administrativo
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <AdminDashboard onLogout={handleLogout} />;
}

// Componente do Dashboard do Admin
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error'; link?: string } | null>(null);

  // Auto-remove notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
  };

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'clients', label: 'Clientes', icon: '👥' },
    { key: 'tickets', label: 'Tickets', icon: '🎫' },
    { key: 'blog', label: 'Blog', icon: '📝' },
    { key: 'chatbot', label: 'Chatbot', icon: '🤖' },
    { key: 'contacts', label: 'Contatos', icon: '📞' },
    { key: 'messages', label: 'Conteúdo', icon: '✏️' }
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)'
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
                  👑 Painel Administrativo
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">Administrador</p>
                <p className="text-white/70 text-sm">Acesso Total</p>
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

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg border max-w-md ${
          notification.type === 'success' 
            ? 'bg-green-500 border-green-400 text-white' 
            : 'bg-red-500 border-red-400 text-white'
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="font-medium mb-1">{notification.message}</p>
              {notification.link && (
                <a 
                  href={notification.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-sm underline flex items-center gap-1"
                >
                  🔗 Ver Post Publicado
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
            <button 
              onClick={() => setNotification(null)}
              className="text-white/70 hover:text-white ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Navigation Moderna */}
      <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-6 font-medium text-sm transition-all duration-200 rounded-t-lg flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'bg-white/20 text-white border-b-2 border-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-h-[600px]">
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'clients' && <ClientsContent showNotification={showNotification} />}
          {activeTab === 'tickets' && <TicketsContent showNotification={showNotification} />}
          {activeTab === 'blog' && <BlogContent />}
          {activeTab === 'chatbot' && <ChatbotContent />}
          {activeTab === 'contacts' && <ContactsContent />}
          {activeTab === 'messages' && <MessagesContent />}
        </div>
      </main>
    </div>
  );
}

// Componentes de conteúdo (placeholders)
function DashboardContent() {
  const [stats, setStats] = useState({
    totalTickets: 0,
    openTickets: 0,
    totalClients: 0,
    isLoading: true
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const token = localStorage.getItem('admin_token');
        
        // Buscar tickets
        const ticketsResponse = await fetch('/api/tickets', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        // Buscar clientes
        const clientsResponse = await fetch('/api/clients', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (ticketsResponse.ok && clientsResponse.ok) {
          const ticketsData = await ticketsResponse.json();
          const clientsData = await clientsResponse.json();
          const tickets = ticketsData.tickets || [];
          const openTickets = tickets.filter((ticket: Ticket) => ticket.status === 'OPEN').length;
          
          setStats(prev => ({
            ...prev,
            totalTickets: tickets.length,
            openTickets: openTickets,
            totalClients: clientsData.length,
            isLoading: false
          }));
        }
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    }

    fetchStats();
  }, []);

  if (stats.isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-admin-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Total de Tickets</h3>
          <p className="text-3xl font-bold text-admin-600 mt-2">{stats.totalTickets}</p>
          <p className="text-sm text-gray-500 mt-1">Todos os chamados</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Tickets Abertos</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.openTickets}</p>
          <p className="text-sm text-gray-500 mt-1">Aguardando resposta</p>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900">Total de Clientes</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{stats.totalClients}</p>
          <p className="text-sm text-gray-500 mt-1">Cadastrados</p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Sistema integrado com banco de dados real</span>
            <span className="text-sm text-gray-500">Agora</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">APIs de tickets e autenticação implementadas</span>
            <span className="text-sm text-gray-500">Hoje</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Banco PostgreSQL configurado</span>
            <span className="text-sm text-gray-500">Hoje</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientsContent({ showNotification }: { showNotification: (message: string, type: 'success' | 'error') => void }) {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNewClientModal, setShowNewClientModal] = useState(false);
  const [isCreatingClient, setIsCreatingClient] = useState(false);
  const [newClientData, setNewClientData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    phone: ''
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      
      const response = await fetch('/api/clients', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Erro ao carregar clientes');
      }
      
      const data = await response.json();
      setClients(data);
    } catch (error: any) {
      setError(error.message || 'Erro ao carregar clientes');
      console.error('Erro ao carregar clientes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsCreatingClient(true);
      const token = localStorage.getItem('admin_token');
      
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newClientData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar cliente');
      }

      const result = await response.json();
      
      // Atualizar lista de clientes
      await fetchClients();
      
      // Resetar formulário e fechar modal
      setNewClientData({
        name: '',
        email: '',
        password: '',
        company: '',
        phone: ''
      });
      setShowNewClientModal(false);
      
      showNotification('Cliente criado com sucesso!', 'success');
    } catch (error: any) {
      console.error('Erro ao criar cliente:', error);
      showNotification(error.message || 'Erro ao criar cliente', 'error');
    } finally {
      setIsCreatingClient(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gerenciar Clientes</h1>
          <button className="btn-admin">
            Novo Cliente
          </button>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-admin-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gerenciar Clientes</h1>
          <button className="btn-admin">
            Novo Cliente
          </button>
        </div>
        <div className="card">
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gerenciar Clientes</h1>
        <button 
          onClick={() => setShowNewClientModal(true)}
          className="btn-admin bg-admin-600 hover:bg-admin-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          + Novo Cliente
        </button>
      </div>

      {/* Modal para Novo Cliente */}
      {showNewClientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Criar Novo Cliente</h2>
            
            <form onSubmit={handleCreateClient} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  value={newClientData.name}
                  onChange={(e) => setNewClientData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-admin-500 focus:border-admin-500"
                  placeholder="Nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={newClientData.email}
                  onChange={(e) => setNewClientData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-admin-500 focus:border-admin-500"
                  placeholder="cliente@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha *
                </label>
                <input
                  type="password"
                  required
                  value={newClientData.password}
                  onChange={(e) => setNewClientData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-admin-500 focus:border-admin-500"
                  placeholder="Senha do cliente"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  value={newClientData.company}
                  onChange={(e) => setNewClientData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-admin-500 focus:border-admin-500"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={newClientData.phone}
                  onChange={(e) => setNewClientData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-admin-500 focus:border-admin-500"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewClientModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isCreatingClient}
                  className="flex-1 px-4 py-2 bg-admin-600 text-white rounded-md hover:bg-admin-700 disabled:opacity-50 transition-colors"
                >
                  {isCreatingClient ? 'Criando...' : 'Criar Cliente'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        {clients.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum cliente encontrado</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empresa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tickets
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {client.company || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={client.isActive ? 'badge-active' : 'badge-inactive'}>
                        {client.isActive ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.ticketCount || 0} tickets
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-admin-600 hover:text-admin-900 mr-3">
                        Editar
                      </button>
                      <button className={`${client.isActive ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}>
                        {client.isActive ? 'Desativar' : 'Ativar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function TicketsContent({ showNotification }: { showNotification: (message: string, type: 'success' | 'error') => void }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      
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
  };

  const updateTicketStatus = async (ticketId: number, newStatus: string) => {
    try {
      setUpdatingStatus(ticketId.toString());
      const token = localStorage.getItem('admin_token');
      
      const response = await fetch(`/api/tickets/${ticketId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar status');
      }

      const updatedTicket = await response.json();
      
      // Atualizar ticket na lista local
      setTickets(prevTickets => 
        prevTickets.map(ticket => 
          ticket.id === ticketId 
            ? { ...ticket, status: updatedTicket.status }
            : ticket
        )
      );

      showNotification('Status atualizado com sucesso!', 'success');
    } catch (error: any) {
      console.error('Erro ao atualizar status:', error);
      showNotification('Erro ao atualizar status do ticket', 'error');
    } finally {
      setUpdatingStatus(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'ABERTO': 'badge-open',
      'EM_ANDAMENTO': 'badge-progress', 
      'AGUARDANDO_CLIENTE': 'badge-waiting',
      'RESOLVIDO': 'badge-resolved',
      'FECHADO': 'badge-closed'
    };
    return statusMap[status as keyof typeof statusMap] || 'badge-open';
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      'ABERTO': 'Aberto',
      'EM_ANDAMENTO': 'Em Progresso',
      'AGUARDANDO_CLIENTE': 'Aguardando Cliente',
      'RESOLVIDO': 'Resolvido', 
      'FECHADO': 'Fechado'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  const getStatusOptions = (currentStatus: string) => {
    const allStatuses = [
      { value: 'ABERTO', label: 'Aberto' },
      { value: 'EM_ANDAMENTO', label: 'Em Progresso' },
      { value: 'AGUARDANDO_CLIENTE', label: 'Aguardando Cliente' },
      { value: 'RESOLVIDO', label: 'Resolvido' },
      { value: 'FECHADO', label: 'Fechado' }
    ];
    
    return allStatuses.filter(status => status.value !== currentStatus);
  };

  const getPriorityText = (priority: string) => {
    const priorityMap = {
      'BAIXA': 'Baixa',
      'MEDIA': 'Média',
      'ALTA': 'Alta',
      'URGENTE': 'Urgente'
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

  if (isLoading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Todos os Tickets</h1>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-admin-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Todos os Tickets</h1>
        <div className="card">
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Todos os Tickets</h1>

      <div className="card">
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Carregando tickets...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum ticket encontrado</p>
            <p className="text-sm text-gray-400 mt-2">
              Os clientes podem criar tickets através do portal em <a href="/chamados" className="text-blue-600 hover:underline">/chamados</a>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">
                        #{ticket.id.toString().padStart(4, '0')} - {ticket.title}
                      </h3>
                      <span className={getStatusBadge(ticket.status)}>
                        {getStatusText(ticket.status)}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Cliente:</strong> {ticket.client.name} {ticket.client.company && `(${ticket.client.company})`}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> {ticket.client.email}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {ticket.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        {getCategoryText(ticket.category)}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Prioridade: {getPriorityText(ticket.priority)}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8l6-6m0 0v6m0-6H6" />
                        </svg>
                        {new Date(ticket.createdAt).toLocaleDateString('pt-BR', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <div className="ml-6 flex flex-col space-y-3">
                    <div className="text-right">
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Alterar Status
                      </label>
                      <select
                        value=""
                        onChange={(e) => {
                          if (e.target.value) {
                            updateTicketStatus(ticket.id, e.target.value);
                            e.target.value = '';
                          }
                        }}
                        disabled={updatingStatus === ticket.id.toString()}
                        className="min-w-[160px] text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {updatingStatus === ticket.id.toString() ? 'Atualizando...' : 'Selecionar status'}
                        </option>
                        {getStatusOptions(ticket.status).map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => updateTicketStatus(ticket.id, 'RESOLVIDO')}
                        disabled={updatingStatus === ticket.id.toString() || ticket.status === 'RESOLVIDO'}
                        className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        ✓ Resolver
                      </button>
                      
                      <button
                        onClick={() => updateTicketStatus(ticket.id, 'FECHADO')}
                        disabled={updatingStatus === ticket.id.toString() || ticket.status === 'FECHADO'}
                        className="w-full px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        🔒 Fechar
                      </button>
                      
                      <button
                        onClick={() => updateTicketStatus(ticket.id, 'AGUARDANDO_CLIENTE')}
                        disabled={updatingStatus === ticket.id.toString() || ticket.status === 'AGUARDANDO_CLIENTE'}
                        className="w-full px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        ⏳ Aguardar Cliente
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MessagesContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gerenciar Conteúdo</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Propostas</h3>
          <p className="text-sm text-gray-600 mb-4">
            Formulários de contato do site
          </p>
          <button className="btn-admin w-full">
            Ver Propostas
          </button>
        </div>

        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Chat</h3>
          <p className="text-sm text-gray-600 mb-4">
            Conversas do chatbot
          </p>
          <button className="btn-admin w-full">
            Ver Conversas
          </button>
        </div>

        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Todas</h3>
          <p className="text-sm text-gray-600 mb-4">
            Visão unificada de todas as interações
          </p>
          <button className="btn-admin w-full">
            Ver Todas
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente para conversas do chatbot
function ChatbotContent() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/chatbot/conversation');
      const data = await response.json();
      setConversations(data.conversations || []);
    } catch (error) {
      console.error('Erro ao carregar conversas:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteConversation = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta conversa?')) return;

    try {
      await fetch(`/api/chatbot/conversation/${id}`, {
        method: 'DELETE'
      });
      fetchConversations();
      setSelectedConversation(null);
    } catch (error) {
      console.error('Erro ao deletar conversa:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🤖 Conversas do Chatbot</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {conversations.length} conversas
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de conversas */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Lista de Conversas</h3>
          
          {conversations.length === 0 ? (
            <div className="text-center py-8 bg-white/5 rounded-lg">
              <p className="text-white/70">Nenhuma conversa encontrada</p>
            </div>
          ) : (
            conversations.map((conversation: any) => (
              <div
                key={conversation.id}
                className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{conversation.name || 'Anônimo'}</h4>
                    <p className="text-sm text-white/70">{conversation.email}</p>
                    {conversation.company && (
                      <p className="text-sm text-white/70">{conversation.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/70">
                      {new Date(conversation.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                    <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">
                      {conversation._count.messages} mensagens
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/70">
                    📞 {conversation.phone || 'Não informado'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteConversation(conversation.id);
                    }}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Detalhes da conversa */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Detalhes da Conversa</h3>
          
          {selectedConversation ? (
            <div className="bg-white/10 rounded-lg p-4">
              <div className="mb-4">
                <h4 className="font-medium text-lg mb-2">
                  {selectedConversation.name || 'Anônimo'}
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/70">Email:</span>
                    <p>{selectedConversation.email}</p>
                  </div>
                  <div>
                    <span className="text-white/70">Telefone:</span>
                    <p>{selectedConversation.phone || 'Não informado'}</p>
                  </div>
                  <div>
                    <span className="text-white/70">Empresa:</span>
                    <p>{selectedConversation.company || 'Não informado'}</p>
                  </div>
                  <div>
                    <span className="text-white/70">Data:</span>
                    <p>{new Date(selectedConversation.createdAt).toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <h5 className="font-medium mb-3">Mensagens:</h5>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedConversation.messages.map((message: any) => (
                    <div
                      key={message.id}
                      className={`p-2 rounded ${
                        message.isBot
                          ? 'bg-blue-500/20 text-blue-200'
                          : 'bg-green-500/20 text-green-200'
                      }`}
                    >
                      <div className="flex justify-between items-start text-xs mb-1">
                        <span>{message.isBot ? '🤖 Bot' : '👤 Usuário'}</span>
                        <span>{new Date(message.createdAt).toLocaleTimeString('pt-BR')}</span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 rounded-lg p-8 text-center">
              <p className="text-white/70">Selecione uma conversa para ver os detalhes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Componente para formulários de contato
function ContactsContent() {
  const [contacts, setContacts] = useState([]);
  const [groupedContacts, setGroupedContacts] = useState<Record<string, ContactForm[]>>({});
  const [selectedSubject, setSelectedSubject] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      setContacts(data.contacts || []);
      setGroupedContacts(data.groupedBySubject || {});
    } catch (error) {
      console.error('Erro ao carregar contatos:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este contato?')) return;

    try {
      await fetch(`/api/contact/${id}`, {
        method: 'DELETE'
      });
      fetchContacts();
    } catch (error) {
      console.error('Erro ao deletar contato:', error);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      fetchContacts();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  const subjects = Object.keys(groupedContacts);

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📞 Formulários de Contato</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
          {contacts.length} contatos
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filtro por assunto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Filtrar por Assunto</h3>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedSubject('')}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedSubject === ''
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              📋 Todos ({contacts.length})
            </button>
            
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedSubject === subject
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/15'
                }`}
              >
                📁 {subject} ({groupedContacts[subject].length})
              </button>
            ))}
          </div>
        </div>

        {/* Lista de contatos */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">
            {selectedSubject ? `Contatos: ${selectedSubject}` : 'Todos os Contatos'}
          </h3>
          
          <div className="space-y-4">
            {(selectedSubject ? groupedContacts[selectedSubject] || [] : contacts).length === 0 ? (
              <div className="text-center py-8 bg-white/5 rounded-lg">
                <p className="text-white/70">Nenhum contato encontrado</p>
              </div>
            ) : (
              (selectedSubject ? groupedContacts[selectedSubject] || [] : contacts).map((contact: any) => (
                <div
                  key={contact.id}
                  className="bg-white/10 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{contact.name}</h4>
                      <p className="text-white/70">{contact.email}</p>
                      <p className="text-sm text-white/80 font-medium mt-1">
                        📋 {contact.subject}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/70 mb-2">
                        {new Date(contact.createdAt).toLocaleString('pt-BR')}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        contact.status === 'PENDING' 
                          ? 'bg-yellow-500/20 text-yellow-200'
                          : contact.status === 'REVIEWED'
                          ? 'bg-blue-500/20 text-blue-200'
                          : contact.status === 'RESPONDED'
                          ? 'bg-green-500/20 text-green-200'
                          : 'bg-gray-500/20 text-gray-200'
                      }`}>
                        {contact.status === 'PENDING' && '⏳ Pendente'}
                        {contact.status === 'REVIEWED' && '👀 Analisado'}
                        {contact.status === 'RESPONDED' && '✅ Respondido'}
                        {contact.status === 'ARCHIVED' && '📦 Arquivado'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 mb-3">
                    <p className="text-sm text-white/90">{contact.message}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateContactStatus(contact.id, 'REVIEWED')}
                        className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded hover:bg-blue-500/30"
                      >
                        👀 Marcar como Analisado
                      </button>
                      <button
                        onClick={() => updateContactStatus(contact.id, 'RESPONDED')}
                        className="text-xs bg-green-500/20 text-green-200 px-3 py-1 rounded hover:bg-green-500/30"
                      >
                        ✅ Marcar como Respondido
                      </button>
                      <button
                        onClick={() => updateContactStatus(contact.id, 'ARCHIVED')}
                        className="text-xs bg-gray-500/20 text-gray-200 px-3 py-1 rounded hover:bg-gray-500/30"
                      >
                        📦 Arquivar
                      </button>
                    </div>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      🗑️ Excluir
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de Blog
function BlogContent() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    slug: '',
    image: '',
    category: '',
    author: 'Equipe InovaMente',
    readTime: '',
    published: true
  });

  // Carregar posts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/blog/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Gerar slug automaticamente
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Estimar tempo de leitura
  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  // Manipular mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Auto-gerar slug quando título mudar
      if (name === 'title' && value) {
        setFormData(prev => ({
          ...prev,
          slug: generateSlug(value)
        }));
      }

      // Auto-calcular tempo de leitura quando conteúdo mudar
      if (name === 'content' && value) {
        setFormData(prev => ({
          ...prev,
          readTime: estimateReadTime(value)
        }));
      }
    }
  };

  // Estado para notificações
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error'; link?: string } | null>(null);

  // Mostrar notificação
  const showNotification = (message: string, type: 'success' | 'error', link?: string) => {
    setNotification({ message, type, link });
    setTimeout(() => setNotification(null), 5000);
  };

  // Salvar post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.excerpt || !formData.category) {
      showNotification('❌ Preencha todos os campos obrigatórios', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const url = editingPost 
        ? `/api/blog/posts/${editingPost.id}`
        : '/api/blog/posts';
      
      const method = editingPost ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const savedPost = await response.json();
        await fetchPosts();
        
        const blogLink = `/blog/${formData.slug}`;
        const successMessage = editingPost 
          ? '✅ Post atualizado com sucesso!' 
          : '🎉 Post criado e publicado com sucesso!';
        
        showNotification(successMessage, 'success', blogLink);
        resetForm();
      } else {
        const error = await response.json();
        showNotification(`❌ Erro ao salvar: ${error.error || 'Erro desconhecido'}`, 'error');
      }
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      showNotification('❌ Erro de conexão ao salvar post', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resetar formulário
  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      slug: '',
      image: '',
      category: '',
      author: 'Equipe InovaMente',
      readTime: '',
      published: true
    });
    setEditingPost(null);
    setShowForm(false);
  };

  // Editar post
  const handleEdit = (post: any) => {
    setFormData(post);
    setEditingPost(post);
    setShowForm(true);
  };

  // Deletar post
  const handleDelete = async (postId: string) => {
    if (!confirm('Tem certeza que deseja deletar este post?')) return;

    try {
      const response = await fetch(`/api/blog/posts/${postId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        await fetchPosts();
        alert('Post deletado com sucesso!');
      } else {
        alert('Erro ao deletar post');
      }
    } catch (error) {
      console.error('Erro ao deletar post:', error);
      alert('Erro ao deletar post');
    }
  };

  // Toggle publicação
  const togglePublished = async (post: any) => {
    try {
      const response = await fetch(`/api/blog/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          published: !post.published
        })
      });

      if (response.ok) {
        await fetchPosts();
      }
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="text-white/70">Carregando posts...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">📝 Gerenciar Blog</h2>
          <p className="text-white/70">Criar e gerenciar posts do blog</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
        >
          {showForm ? '❌ Cancelar' : '✏️ Novo Post'}
        </button>
      </div>

      {/* Formulário */}
      {showForm && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">
            {editingPost ? '✏️ Editar Post' : '➕ Novo Post'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Título */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Título *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Digite o título do post"
                  required
                />
              </div>

              {/* Categoria */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Categoria *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Desenvolvimento">Desenvolvimento</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="IA">Inteligência Artificial</option>
                  <option value="Negócios">Negócios</option>
                  <option value="Inovação">Inovação</option>
                </select>
              </div>

              {/* Slug */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="url-do-post"
                  required
                />
              </div>

              {/* Tempo de leitura */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Tempo de leitura
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Ex: 5 min"
                />
              </div>

              {/* Imagem */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Emoji/Imagem
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="💻 ou URL da imagem"
                />
              </div>

              {/* Autor */}
              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Autor
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>

            {/* Resumo */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Resumo *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Breve descrição do post para SEO"
                required
              />
            </div>

            {/* Conteúdo */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Conteúdo *
              </label>
              
              {/* Toolbar para inserção de imagens */}
              <div className="mb-2 p-3 bg-white/5 border border-white/10 rounded-t-lg flex items-center space-x-3">
                <span className="text-white/70 text-sm font-medium">Ferramentas:</span>
                
                <button
                  type="button"
                  onClick={() => {
                    const imageUrl = prompt('Digite a URL da imagem:');
                    if (imageUrl) {
                      const imageMarkdown = `![Descrição da imagem](${imageUrl})\n\n`;
                      setFormData(prev => ({
                        ...prev,
                        content: prev.content + imageMarkdown
                      }));
                    }
                  }}
                  className="flex items-center space-x-1 px-3 py-1 bg-white/10 hover:bg-white/20 text-white/80 rounded-lg text-sm transition-colors"
                  title="Inserir imagem via URL"
                >
                  <span>🖼️</span>
                  <span>Imagem</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    const markdowns = [
                      { label: '**Negrito**', syntax: '**texto**' },
                      { label: '_Itálico_', syntax: '_texto_' },
                      { label: '# Título', syntax: '# ' },
                      { label: '## Subtítulo', syntax: '## ' },
                      { label: '- Lista', syntax: '- ' },
                      { label: '> Citação', syntax: '> ' },
                      { label: '`Código`', syntax: '`código`' },
                      { label: '[Link](url)', syntax: '[texto](url)' }
                    ];
                    
                    const choice = prompt(
                      'Escolha o formato:\n\n' + 
                      markdowns.map((m, i) => `${i + 1}. ${m.label}`).join('\n') +
                      '\n\nDigite o número:'
                    );
                    
                    const index = parseInt(choice || '0') - 1;
                    if (index >= 0 && index < markdowns.length) {
                      const selected = markdowns[index];
                      setFormData(prev => ({
                        ...prev,
                        content: prev.content + selected.syntax + '\n'
                      }));
                    }
                  }}
                  className="flex items-center space-x-1 px-3 py-1 bg-white/10 hover:bg-white/20 text-white/80 rounded-lg text-sm transition-colors"
                  title="Inserir formatação Markdown"
                >
                  <span>📝</span>
                  <span>Markdown</span>
                </button>
                
                <div className="text-white/50 text-xs">
                  💡 Suporte a Markdown: **negrito**, _itálico_, # títulos, ![imagem](url), etc.
                </div>
              </div>
              
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={12}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-b-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Conteúdo completo do post (suporte completo a Markdown)&#10;&#10;Exemplos:&#10;# Título Principal&#10;## Subtítulo&#10;**Texto em negrito**&#10;_Texto em itálico_&#10;![Imagem](https://exemplo.com/imagem.jpg)&#10;[Link](https://exemplo.com)&#10;> Citação&#10;`código`&#10;- Item de lista"
                required
              />
            </div>

            {/* Opções */}
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-white/90">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="mr-2 rounded"
                />
                Publicar imediatamente
              </label>
            </div>

            {/* Botões */}
            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {isSubmitting ? '⏳ Salvando...' : (editingPost ? '💾 Atualizar' : '📝 Publicar')}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                ❌ Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Posts */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-white mb-4">
          📄 Posts ({posts.length})
        </h3>

        {posts.length === 0 ? (
          <div className="text-center py-8 text-white/70">
            Nenhum post encontrado. Crie seu primeiro post!
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post: any) => (
              <div
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{post.image || '📝'}</span>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{post.title}</h4>
                        <div className="flex items-center space-x-3 text-sm text-white/70">
                          <span>📁 {post.category}</span>
                          <span>👤 {post.author}</span>
                          <span>⏱️ {post.readTime}</span>
                          <span>📅 {new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.published 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {post.published ? '✅ Publicado' : '📝 Rascunho'}
                      </span>
                      <span className="text-white/50 text-xs">🔗 /{post.slug}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => togglePublished(post)}
                      className="text-yellow-400 hover:text-yellow-300 text-sm px-3 py-1 bg-white/10 rounded-lg transition-colors"
                      title={post.published ? 'Despublicar' : 'Publicar'}
                    >
                      {post.published ? '👁️‍🗨️' : '👁️'}
                    </button>
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-blue-400 hover:text-blue-300 text-sm px-3 py-1 bg-white/10 rounded-lg transition-colors"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-400 hover:text-red-300 text-sm px-3 py-1 bg-white/10 rounded-lg transition-colors"
                    >
                      🗑️ Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
