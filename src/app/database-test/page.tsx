import Link from 'next/link'

export default function DatabaseTestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🗄️ Teste do Banco de Dados
          </h1>
          
          <p style={{
            textAlign: 'center',
            color: '#64748b',
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Banco Neon PostgreSQL integrado com sucesso!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {/* Credenciais Admin */}
            <div style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                👑 Login Admin
              </h3>
              <p><strong>Usuário:</strong> admin</p>
              <p><strong>Senha:</strong> admin123</p>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>
                Acesso completo ao painel administrativo
              </p>
            </div>

            {/* Credenciais Cliente */}
            <div style={{
              background: 'linear-gradient(45deg, #22c55e, #16a34a)',
              padding: '20px',
              borderRadius: '16px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                👤 Login Cliente
              </h3>
              <p><strong>Email:</strong> cliente@exemplo.com</p>
              <p><strong>Senha:</strong> 123456</p>
              <p style={{ fontSize: '14px', opacity: '0.9' }}>
                Portal do cliente com tickets
              </p>
            </div>
          </div>

          {/* APIs Disponíveis */}
          <div style={{
            background: '#f8fafc',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#1e293b'
            }}>
              🔌 APIs Implementadas
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <code style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
                  POST /api/auth/login
                </code> - Autenticação
              </li>
              <li style={{ marginBottom: '8px' }}>
                <code style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
                  GET /api/tickets
                </code> - Listar tickets
              </li>
              <li style={{ marginBottom: '8px' }}>
                <code style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
                  POST /api/tickets
                </code> - Criar ticket
              </li>
              <li style={{ marginBottom: '8px' }}>
                <code style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
                  GET /api/blog
                </code> - Posts do blog
              </li>
              <li>
                <code style={{ background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
                  GET /api/blog/[id]
                </code> - Post específico
              </li>
            </ul>
          </div>

          {/* Links de Navegação */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/admin"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              👑 Painel Admin
            </Link>
            <Link
              href="/chamados"
              style={{
                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🔧 Portal Cliente
            </Link>
            <Link
              href="/blog"
              style={{
                background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📝 Blog
            </Link>
            <Link
              href="/"
              style={{
                background: '#64748b',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🏠 Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
