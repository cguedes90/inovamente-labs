import Link from 'next/link';

export default function HomePage() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #0f0f23 25%, #1a0b3d 50%, #2d1b69 75%, #0a0a23 100%)
        `,
      }}
    >
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '147, 51, 234'}, 0.6)`,
              borderRadius: '50%',
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Ultra Premium Animated Orbs */}
      <div 
        className="absolute"
        style={{
          top: '15%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: `
            radial-gradient(circle, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(147, 51, 234, 0.3) 30%, 
              rgba(236, 72, 153, 0.2) 60%, 
              transparent 100%)
          `,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 8s ease-in-out infinite, float 12s ease-in-out infinite',
        }}
      />
      
      <div 
        className="absolute"
        style={{
          bottom: '5%',
          right: '15%',
          width: '600px',
          height: '600px',
          background: `
            radial-gradient(circle, 
              rgba(16, 185, 129, 0.3) 0%, 
              rgba(59, 130, 246, 0.25) 40%, 
              rgba(147, 51, 234, 0.2) 70%, 
              transparent 100%)
          `,
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 10s ease-in-out infinite reverse, float 15s ease-in-out infinite reverse',
          animationDelay: '2s',
        }}
      />
      
      <div 
        className="absolute"
        style={{
          top: '40%',
          right: '25%',
          width: '350px',
          height: '350px',
          background: `
            radial-gradient(circle, 
              rgba(236, 72, 153, 0.35) 0%, 
              rgba(251, 146, 60, 0.25) 50%, 
              transparent 100%)
          `,
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'pulse 6s ease-in-out infinite, float 10s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />

      {/* Ultra Premium Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ 
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(25px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div 
                  className="absolute -inset-3 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #10b981)',
                    filter: 'blur(12px)',
                    animation: 'pulse 3s ease-in-out infinite',
                  }}
                />
                <div 
                  className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #10b981)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <span className="text-white font-black text-2xl">IM</span>
                </div>
              </div>
              <div>
                <h1 
                  className="text-3xl font-black transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  InovaMente Labs
                </h1>
                <p 
                  className="text-sm font-semibold"
                  style={{ 
                    color: '#93c5fd',
                    textShadow: '0 0 10px rgba(147, 197, 253, 0.5)',
                  }}
                >
                  ✨ Digital Innovation Lab
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <Link 
                href="#home" 
                className="text-white/90 hover:text-white font-semibold transition-all duration-300 hover:scale-110 relative group"
              >
                Home
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                />
              </Link>
              <Link 
                href="#services" 
                className="text-white/90 hover:text-white font-semibold transition-all duration-300 hover:scale-110 relative group"
              >
                Serviços
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #10b981, #06d6a0)' }}
                />
              </Link>
              <Link 
                href="#about" 
                className="text-white/90 hover:text-white font-semibold transition-all duration-300 hover:scale-110 relative group"
              >
                Sobre
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #ec4899, #f472b6)' }}
                />
              </Link>
              <Link 
                href="#contact" 
                className="text-white/90 hover:text-white font-semibold transition-all duration-300 hover:scale-110 relative group"
              >
                Contato
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #f59e0b, #f97316)' }}
                />
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  href="/chamados" 
                  className="group relative overflow-hidden font-bold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    border: '2px solid rgba(16, 185, 129, 0.3)',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <span className="relative z-10 text-white flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Portal Cliente</span>
                  </span>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  />
                </Link>
                <Link 
                  href="/admin" 
                  className="group relative overflow-hidden font-bold px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                    border: '2px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <span className="relative z-10 text-white flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Admin</span>
                  </span>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Ultra Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-6 text-center relative z-30">
          <div className="max-w-7xl mx-auto">
            {/* Floating Premium Badge */}
            <div className="mb-16 animate-bounce">
              <span 
                className="inline-flex items-center px-12 py-4 rounded-full font-bold text-lg shadow-2xl group hover:scale-105 transition-all duration-500"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(59, 130, 246, 0.2), 
                      rgba(147, 51, 234, 0.2), 
                      rgba(16, 185, 129, 0.2))
                  `,
                  backdropFilter: 'blur(25px) saturate(180%)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)',
                  color: 'white',
                }}
              >
                <span 
                  className="w-4 h-4 rounded-full mr-4"
                  style={{ 
                    background: 'linear-gradient(45deg, #10b981, #06d6a0)',
                    animation: 'pulse 2s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
                  }}
                />
                ✨ Transformação Digital de Última Geração ✨
              </span>
            </div>
            
            {/* Ultra Premium Main Title */}
            <h1 className="text-5xl lg:text-8xl font-black mb-12 leading-tight">
              <div className="mb-4">
                <span 
                  className="inline-block transition-all duration-700 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff, #f0f9ff, #e0f2fe)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  O laboratório que está
                </span>
              </div>
              <div className="mb-4">
                <span 
                  className="inline-block transition-all duration-700 hover:scale-105 animate-pulse"
                  style={{ 
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6, #fb923c)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                  }}
                >
                  revolucionando
                </span>
              </div>
              <div>
                <span 
                  className="inline-block transition-all duration-700 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #34d399, #10b981, #06d6a0, #0891b2)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(52, 211, 153, 0.3)',
                  }}
                >
                  o futuro digital!
                </span>
              </div>
            </h1>
            
            <p 
              className="text-2xl lg:text-3xl mb-20 leading-relaxed font-medium max-w-5xl mx-auto"
              style={{ 
                color: 'rgba(191, 219, 254, 0.95)',
                textShadow: '0 0 20px rgba(191, 219, 254, 0.2)',
              }}
            >
              Desenvolvemos <span 
                className="font-black"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                soluções inovadoras
              </span> com Inteligência Artificial e tecnologias de ponta 
              para transformar ideias em <span 
                className="font-black"
                style={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                realidade digital extraordinária
              </span>.
            </p>
            
            {/* Ultra Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
              <Link 
                href="/chamados" 
                className="group relative overflow-hidden font-black text-2xl px-16 py-6 rounded-3xl transition-all duration-700 transform hover:scale-110 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 60px rgba(59, 130, 246, 0.4)',
                }}
              >
                <span className="relative z-10 text-white flex items-center space-x-4">
                  <span className="text-4xl">🚀</span>
                  <span>Começar Revolução</span>
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                />
              </Link>
              <Link 
                href="#services" 
                className="group font-black text-2xl px-16 py-6 rounded-3xl transition-all duration-700 transform hover:scale-110"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="flex items-center space-x-4">
                  <span className="text-4xl">⚡</span>
                  <span>Explorar Poderes</span>
                </span>
              </Link>
            </div>

            {/* Ultra Premium Stats with Glow Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div 
                className="group relative overflow-hidden p-10 text-center transition-all duration-700 hover:scale-110 rounded-3xl"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(59, 130, 246, 0.1), 
                      rgba(147, 51, 234, 0.1))
                  `,
                  backdropFilter: 'blur(25px) saturate(180%)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)',
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="text-8xl font-black mb-6 animate-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                    }}
                  >
                    500+
                  </div>
                  <div 
                    className="font-black text-xl"
                    style={{ 
                      color: '#bfdbfe',
                      textShadow: '0 0 10px rgba(191, 219, 254, 0.3)',
                    }}
                  >
                    Projetos Revolucionários
                  </div>
                </div>
              </div>
              
              <div 
                className="group relative overflow-hidden p-10 text-center transition-all duration-700 hover:scale-110 rounded-3xl"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(16, 185, 129, 0.1), 
                      rgba(6, 182, 212, 0.1))
                  `,
                  backdropFilter: 'blur(25px) saturate(180%)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 0 50px rgba(16, 185, 129, 0.2)',
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="text-8xl font-black mb-6 animate-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #34d399, #14b8a6, #06d6a0)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(52, 211, 153, 0.3)',
                    }}
                  >
                    99%
                  </div>
                  <div 
                    className="font-black text-xl"
                    style={{ 
                      color: '#bfdbfe',
                      textShadow: '0 0 10px rgba(191, 219, 254, 0.3)',
                    }}
                  >
                    Satisfação Absoluta
                  </div>
                </div>
              </div>
              
              <div 
                className="group relative overflow-hidden p-10 text-center transition-all duration-700 hover:scale-110 rounded-3xl"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(236, 72, 153, 0.1), 
                      rgba(251, 146, 60, 0.1))
                  `,
                  backdropFilter: 'blur(25px) saturate(180%)',
                  border: '2px solid rgba(236, 72, 153, 0.3)',
                  boxShadow: '0 0 50px rgba(236, 72, 153, 0.2)',
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="text-8xl font-black mb-6 animate-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #f472b6, #fb923c, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(244, 114, 182, 0.3)',
                    }}
                  >
                    24/7
                  </div>
                  <div 
                    className="font-black text-xl"
                    style={{ 
                      color: '#bfdbfe',
                      textShadow: '0 0 10px rgba(191, 219, 254, 0.3)',
                    }}
                  >
                    Suporte Épico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium Floating Action Button */}
      <div className="fixed bottom-10 right-10 z-50 group">
        <div className="relative">
          <div 
            className="absolute -inset-6 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-700"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #10b981)',
              filter: 'blur(20px)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />
          
          <button 
            className="relative p-6 rounded-full shadow-2xl transition-all transform hover:scale-125 active:scale-95 duration-500"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #10b981)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.4)',
            }}
          >
            <span 
              className="text-5xl animate-bounce"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
              }}
            >
              💬
            </span>
          </button>
          
          <div 
            className="absolute bottom-full right-0 mb-6 px-6 py-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap transform translate-y-4 group-hover:translate-y-0 font-bold text-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(25px) saturate(180%)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span 
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              🚀 Vamos Revolucionar Juntos! ⚡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
