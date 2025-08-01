'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

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
        padding: '16px 0'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.8rem',
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

        {/* Menu de navegação */}
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
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
              {item.label}
            </Link>
          ))}
        </div>

        {/* Botões de ação */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
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
            🔧 Portal Cliente
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
            👑 Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
