'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/solucoes', label: 'Soluções', icon: '💡' },
    { href: '/desenvolvimento', label: 'Desenvolvimento', icon: '⚙️' },
    { href: '/blog', label: 'Blog', icon: '📝' },
    { href: '/contato', label: 'Contato', icon: '📞' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: '0',
      zIndex: '50',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '0 20px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
        flexWrap: 'wrap'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          fontWeight: '800',
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          ⚡ InovaMente Labs
        </Link>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
          className="mobile-menu-button"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Menu de navegação - Desktop */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: isActive(item.href)
                  ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                  : 'transparent',
                color: isActive(item.href) ? 'white' : '#64748b',
                border: isActive(item.href) ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: isActive(item.href) ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              <span>{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Botões de ação - Desktop */}
        <div
          className="desktop-actions"
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <div style={{
            color: '#64748b',
            fontWeight: '600',
            fontSize: '14px',
            marginRight: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>📱</span> (11) 97450-8168
          </div>
          <Link
            href="/chamados"
            style={{
              background: 'linear-gradient(45deg, #22c55e, #16a34a)',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
            }}
          >
            🔧 <span className="action-label">Portal Cliente</span>
          </Link>
          <Link
            href="/admin"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}
          >
            👑 <span className="action-label">Admin</span>
          </Link>
        </div>

        {/* Menu Mobile - Dropdown */}
        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              width: '100%',
              marginTop: '16px',
              padding: '16px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              display: 'none'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: isActive(item.href)
                      ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                      : '#f8fafc',
                    color: isActive(item.href) ? 'white' : '#64748b',
                    border: isActive(item.href) ? 'none' : '1px solid #e2e8f0'
                  }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div style={{
                borderTop: '1px solid #e2e8f0',
                paddingTop: '12px',
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <Link
                  href="/chamados"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  🔧 Portal Cliente
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  👑 Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-actions {
            display: none !important;
          }
          .action-label {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}

// Exportações para compatibilidade
export { Navbar };
export default Navbar;
