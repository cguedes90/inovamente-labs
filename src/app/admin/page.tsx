'use client';

import { useState } from 'react';
import CreatePostForm from '@/components/CreatePostForm';
import LeadsModal from '@/components/LeadsModal';
import TicketsModal from '@/components/TicketsModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Link from 'next/link';
import {
  Shield,
  LogIn,
  LogOut,
  LayoutDashboard,
  FileEdit,
  Ticket,
  Users,
  Globe,
  Lock,
  Loader2,
  CheckCircle,
  PenLine,
} from 'lucide-react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showLeads, setShowLeads] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        setIsLoggedIn(true);
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro no login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePostSuccess = (response: any) => {
    setShowCreatePost(false);
    setSuccessMessage(`✅ Post criado com sucesso! <a href="${response.url}" target="_blank" style="color: #3b82f6; text-decoration: underline;">Clique aqui para ver</a>`);

    // Remover mensagem após 8 segundos
    setTimeout(() => setSuccessMessage(''), 8000);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-5">
        {/* Subtle gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-primary/5 pointer-events-none" />

        <div className="glass-card rounded-2xl p-10 sm:p-14 max-w-md w-full text-center relative z-10">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-7 h-7 text-primary" />
          </div>

          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Admin <span className="gradient-text">Login</span>
          </h1>

          <p className="text-muted-foreground mb-8 text-sm">
            Painel de administração InovaMente Labs
          </p>

          <form onSubmit={handleLogin} className="text-left space-y-5">
            <div>
              <label className="block mb-2 text-foreground font-semibold text-sm">
                Email/Usuário
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="admin ou admin@inovamentelabs.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-foreground font-semibold text-sm">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
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

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-xs flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Entre com suas credenciais de administrador
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary px-3 py-1.5 rounded-full border border-border hover:border-primary/30 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              Voltar ao Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="glass-card rounded-2xl p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Painel <span className="gradient-text">Administrativo</span>
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all hover-lift"
              >
                <Globe className="w-4 h-4" />
                Voltar para o Site
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('adminToken');
                  setIsLoggedIn(false);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-semibold transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            </div>
          </div>

          {/* Mensagem de Sucesso */}
          {successMessage && (
            <div className="glass-card rounded-xl p-5 mb-8 border-green-200 bg-green-50">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-green-700 text-sm" dangerouslySetInnerHTML={{ __html: successMessage }} />
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dashboard Card */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-5">
                <LayoutDashboard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Dashboard</h2>
              <p className="text-muted-foreground text-sm">
                Bem-vindo ao painel administrativo da InovaMente Labs!
              </p>
            </div>

            {/* Blog Card */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-5">
                <FileEdit className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Blog</h2>
              <p className="text-muted-foreground text-sm mb-5">Gerencie os posts do seu blog.</p>
              <button
                onClick={() => setShowCreatePost(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all"
              >
                <PenLine className="w-4 h-4" />
                Criar Novo Post
              </button>
            </div>

            {/* Tickets Card */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="p-3 bg-purple-100 rounded-xl w-fit mb-5">
                <Ticket className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Tickets</h2>
              <p className="text-muted-foreground text-sm mb-5">Gerencie todos os tickets de suporte criados pelos clientes.</p>
              <button
                onClick={() => setShowTickets(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all"
              >
                <Ticket className="w-4 h-4" />
                Ver Tickets de Suporte
              </button>
            </div>

            {/* Clientes Card */}
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="p-3 bg-green-100 rounded-xl w-fit mb-5">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Clientes</h2>
              <p className="text-muted-foreground text-sm mb-5">Visualize todos os leads capturados pelo formulário de contato e chatbot.</p>
              <button
                onClick={() => setShowLeads(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all"
              >
                <Users className="w-4 h-4" />
                Ver Leads e Clientes
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Modal de Criar Post */}
      {showCreatePost && (
        <CreatePostForm
          onClose={() => setShowCreatePost(false)}
          onSuccess={handleCreatePostSuccess}
        />
      )}

      {/* Modal de Leads */}
      {showLeads && (
        <LeadsModal
          onClose={() => setShowLeads(false)}
        />
      )}

      {/* Modal de Tickets */}
      {showTickets && (
        <TicketsModal
          onClose={() => setShowTickets(false)}
        />
      )}
    </div>
  );
}
