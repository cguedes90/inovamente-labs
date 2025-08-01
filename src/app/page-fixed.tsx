'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%)`,
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Partículas estáticas (sem Math.random) */}
      {[
        { top: '10%', left: '15%', size: '3px', delay: '0s' },
        { top: '20%', left: '85%', size: '2px', delay: '2s' },
        { top: '70%', left: '10%', size: '4px', delay: '4s' },
        { top: '30%', left: '70%', size: '2px', delay: '1s' },
        { top: '80%', left: '90%', size: '3px', delay: '3s' },
        { top: '50%', left: '30%', size: '2px', delay: '5s' },
        { top: '15%', left: '60%', size: '4px', delay: '2.5s' },
        { top: '90%', left: '40%', size: '3px', delay: '1.5s' },
        { top: '60%', left: '80%', size: '2px', delay: '4.5s' },
        { top: '25%', left: '20%', size: '3px', delay: '3.5s' }
      ].map((particle, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(138, 43, 226, 0.6))',
            borderRadius: '50%',
            top: particle.top,
            left: particle.left,
            animation: `particleFloat${i % 3} 15s infinite linear`,
            animationDelay: particle.delay,
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Orbs estáticos */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '80%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, rgba(255, 20, 147, 0.1) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'orbFloat1 20s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(120, 119, 198, 0.15) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(35px)',
        animation: 'orbFloat2 25s ease-in-out infinite reverse'
      }} />

      {/* Navegação ultra-premium */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(30px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        padding: '15px 30px',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 0 50px rgba(138, 43, 226, 0.3)`,
        animation: 'slideDown 1s ease-out',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ffffff, #8a2be2, #ff1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
          }}>
            ✨ InovaMente Labs
          </div>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {['Home', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(138, 43, 226, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {item}
              </Link>
            ))}
            
            <Link
              href="/chamados"
              style={{
                background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(138, 43, 226, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 43, 226, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(138, 43, 226, 0.4)'
              }}
            >
              🔧 Portal Cliente
            </Link>
            
            <Link
              href="/admin"
              style={{
                background: 'linear-gradient(45deg, #00bfff, #7777c6)',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 191, 255, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 191, 255, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              👑 Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero section ultra-premium */}
      <main style={{ 
        paddingTop: '140px',
        paddingLeft: '60px',
        paddingRight: '60px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(45deg, #8a2be2, #ff1493, #00bfff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '30px',
          textAlign: 'center',
          animation: 'slideUp 1.2s ease-out',
          textShadow: '0 0 30px rgba(138, 43, 226, 0.8)'
        }}>
          ✨ Transformação Digital de Última Geração ✨
        </div>

        <h1 style={{
          fontSize: 'clamp(4rem, 8vw, 12rem)',
          fontWeight: '900',
          lineHeight: '0.9',
          textAlign: 'center',
          marginBottom: '40px',
          animation: 'slideUp 1.4s ease-out, gradientShift 8s ease-in-out infinite',
          background: `linear-gradient(45deg, 
            #ffffff 0%, 
            #8a2be2 25%, 
            #ff1493 50%, 
            #00bfff 75%, 
            #ffffff 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '400% 400%',
          filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
          textShadow: '0 0 50px rgba(138, 43, 226, 0.5)'
        }}>
          O laboratório que está<br />
          <span style={{
            background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>revolucionando</span><br />
          <span style={{
            background: 'linear-gradient(45deg, #00bfff, #7777c6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>o futuro digital!</span>
        </h1>

        <p style={{
          fontSize: '24px',
          lineHeight: '1.6',
          textAlign: 'center',
          marginBottom: '60px',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '900px',
          margin: '0 auto 60px',
          animation: 'slideUp 1.6s ease-out',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          Desenvolvemos <span style={{
            background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>soluções extraordinárias</span> com Inteligência Artificial e tecnologias de ponta para transformar 
          ideias em <span style={{
            background: 'linear-gradient(45deg, #00bfff, #7777c6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>realidade digital épica</span>.
        </p>

        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '100px',
          animation: 'slideUp 1.8s ease-out'
        }}>
          <Link
            href="/chamados"
            style={{
              background: `linear-gradient(45deg, #8a2be2, #ff1493)`,
              color: 'white',
              padding: '20px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: '700',
              transition: 'all 0.4s ease',
              boxShadow: `
                0 10px 30px rgba(138, 43, 226, 0.4),
                0 0 60px rgba(255, 20, 147, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
              e.currentTarget.style.boxShadow = `
                0 20px 50px rgba(138, 43, 226, 0.6),
                0 0 80px rgba(255, 20, 147, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = `
                0 10px 30px rgba(138, 43, 226, 0.4),
                0 0 60px rgba(255, 20, 147, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)`
            }}
          >
            🚀 Começar Revolução
          </Link>

          <Link
            href="/sobre"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              padding: '20px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: '600',
              transition: 'all 0.4s ease',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            💡 Descobrir Mais
          </Link>
        </div>

        {/* Stats ultra-premium */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '100px',
          animation: 'slideUp 2s ease-out'
        }}>
          {[
            { number: '500+', label: 'Projetos Revolucionários', icon: '🚀' },
            { number: '98%', label: 'Satisfação Épica', icon: '⭐' },
            { number: '24/7', label: 'Suporte Infinito', icon: '🛡️' },
            { number: '5★', label: 'Avaliação Máxima', icon: '👑' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.2),
                  0 0 60px rgba(138, 43, 226, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                animation: `slideUp ${2 + index * 0.2}s ease-out`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                e.currentTarget.style.boxShadow = `
                  0 20px 60px rgba(0, 0, 0, 0.3),
                  0 0 100px rgba(138, 43, 226, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = `
                  0 8px 32px rgba(0, 0, 0, 0.2),
                  0 0 60px rgba(138, 43, 226, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{
                fontSize: '60px',
                marginBottom: '15px',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '48px',
                fontWeight: '900',
                background: 'linear-gradient(45deg, #8a2be2, #ff1493, #00bfff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px',
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Botão flutuante ultra-premium */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000
      }}>
        <Link
          href="/chamados"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '70px',
            background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '28px',
            boxShadow: `
              0 8px 25px rgba(138, 43, 226, 0.4),
              0 0 60px rgba(255, 20, 147, 0.3),
              0 0 100px rgba(138, 43, 226, 0.2)`,
            transition: 'all 0.4s ease',
            animation: 'pulse 3s ease-in-out infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotate(360deg)'
            e.currentTarget.style.boxShadow = `
              0 15px 40px rgba(138, 43, 226, 0.6),
              0 0 80px rgba(255, 20, 147, 0.5),
              0 0 120px rgba(138, 43, 226, 0.4)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
            e.currentTarget.style.boxShadow = `
              0 8px 25px rgba(138, 43, 226, 0.4),
              0 0 60px rgba(255, 20, 147, 0.3),
              0 0 100px rgba(138, 43, 226, 0.2)`
          }}
        >
          💬
        </Link>
      </div>

      <style jsx>{`
        @keyframes particleFloat0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes particleFloat1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateX(15px) rotate(90deg); opacity: 1; }
        }
        
        @keyframes particleFloat2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translate(-10px, -10px) rotate(270deg); opacity: 1; }
        }
        
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.6; }
          25% { transform: translate(20px, -20px) scale(1.05); opacity: 0.8; }
          50% { transform: translate(-15px, -30px) scale(0.95); opacity: 1; }
          75% { transform: translate(-25px, 15px) scale(1.02); opacity: 0.7; }
        }
        
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.5; }
          25% { transform: translate(-15px, 25px) scale(1.08); opacity: 0.9; }
          50% { transform: translate(20px, 10px) scale(0.92); opacity: 0.8; }
          75% { transform: translate(10px, -20px) scale(1.03); opacity: 0.6; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideDown {
          0% { transform: translateX(-50%) translateY(-100px); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}
