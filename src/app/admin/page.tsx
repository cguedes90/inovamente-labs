'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h1 style={{
            color: 'white',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            👑 Admin Login
          </h1>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                Email/Usuário:
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="admin ou admin@inovamentelabs.com"
                required
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                Senha:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px',
                background: isLoading ? '#64748b' : 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '14px'
          }}>
            🔐 Entre com suas credenciais de administrador
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'white'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            👑 Painel Administrativo
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem('adminToken');
              setIsLoggedIn(false);
            }}
            style={{
              padding: '10px 20px',
              background: 'rgba(239, 68, 68, 0.8)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Sair
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📋 Dashboard</h2>
            <p>Bem-vindo ao painel administrativo da InovaMente Labs!</p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📝 Blog</h2>
            <p>Em breve: Sistema completo de gerenciamento de blog.</p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🎫 Tickets</h2>
            <p>Em breve: Gerenciamento de tickets de suporte.</p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>👥 Clientes</h2>
            <p>Em breve: Gerenciamento de clientes.</p>
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '10px'
        }}>
          <p style={{ margin: 0, color: '#22c55e' }}>
            ✅ Painel Admin funcionando corretamente! Versão simplificada temporária ativa.
          </p>
        </div>
      </div>
    </div>
  );
}