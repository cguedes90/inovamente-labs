import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Chatbot from '@/components/Chatbot'
import { VoiceSearchOptimizer } from '@/components/SEO/VoiceSearchOptimizer'
import { SEODashboard } from '@/components/SEO/SEODashboard'

export const metadata: Metadata = {
  title: 'InovaMente Labs - Página Inicial | Soluções Tecnológicas Inovadoras',
  description: 'Bem-vindo à InovaMente Labs. Oferecemos portal de clientes, sistema de tickets, desenvolvimento de software e soluções tecnológicas inovadoras. Acesse nossos serviços agora!',
  openGraph: {
    title: 'InovaMente Labs - Soluções Tecnológicas Inovadoras',
    description: 'Portal de clientes, sistema de tickets e desenvolvimento de software. Soluções tecnológicas completas para sua empresa.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'InovaMente Labs - Portal de entrada',
      }
    ],
  },
}

const primaryKeyword = 'desenvolvimento de software';
const pageContent = `
InovaMente Labs oferece soluções completas em desenvolvimento de software, aplicativos mobile, automação de processos e infraestrutura em nuvem. Nossa equipe especializada utiliza tecnologias modernas como React, Next.js, Python e AWS para criar soluções inovadoras.
`;

export default function HomePage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        content={pageContent}
        title="InovaMente Labs - Soluções Tecnológicas Inovadoras"
        description="Portal de clientes, sistema de tickets e desenvolvimento de software. Soluções tecnológicas completas para sua empresa."
        url="https://www.inovamentelabs.com.br"
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
        color: '#1e293b',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <Navbar />
        <Chatbot />
        <SEODashboard showFloating={true} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚡ InovaMente Labs
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#64748b',
            marginBottom: '40px'
          }}>
            Transformamos ideias em soluções digitais inovadoras
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Somos uma fábrica de software especializada em desenvolvimento de aplicações web, mobile e soluções de automação para empresas que querem se destacar no mercado digital.
          </p>
        </div>

        {/* Nosso Processo de Criação */}
        <div style={{
          background: 'white',
          padding: '60px 40px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '80px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#1e293b'
            }}>
              Nosso Processo de Criação
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Ao contrário do desenvolvimento tradicional, com a InovaMente você pode 
              rapidamente projetar, desenvolver, lançar e escalar a sua ideia.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '30px',
            alignItems: 'start'
          }}>
            {[
              {
                icon: '💡',
                color: '#3b82f6',
                title: 'Ideação',
                description: 'Coletamos e analisamos suas ideias para criar a base sólida do projeto.'
              },
              {
                icon: '🧪',
                color: '#22c55e',
                title: 'Prototipagem',
                description: 'Criamos protótipos funcionais para validar conceitos e obter feedback.'
              },
              {
                icon: '⚙️',
                color: '#f59e0b',
                title: 'Desenvolvimento',
                description: 'Construímos o sistema com as melhores práticas e tecnologias.'
              },
              {
                icon: '🔍',
                color: '#8b5cf6',
                title: 'QA',
                description: 'Testamos rigorosamente para garantir qualidade e performance.'
              },
              {
                icon: '🚀',
                color: '#ef4444',
                title: 'Lançamento',
                description: 'Implantamos com segurança e acompanhamos o resultado.'
              }
            ].map((etapa, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: etapa.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 20px auto',
                  boxShadow: `0 10px 30px ${etapa.color}30`
                }}>
                  {etapa.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '12px'
                }}>
                  {etapa.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#1e293b'
          }}>
            🚀 Nossos Serviços
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '💻',
                title: 'Desenvolvimento Web',
                description: 'Aplicações web modernas e responsivas com React, Next.js e tecnologias de ponta.'
              },
              {
                icon: '📱',
                title: 'Apps Mobile',
                description: 'Aplicativos nativos e híbridos para iOS e Android com excelente UX.'
              },
              {
                icon: '🤖',
                title: 'Automação & IA',
                description: 'Soluções inteligentes para automatizar processos e otimizar resultados.'
              },
              {
                icon: '☁️',
                title: 'Cloud & DevOps',
                description: 'Infraestrutura escalável na nuvem com deploy automatizado.'
              }
            ].map((servico, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {servico.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>
                  {servico.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  {servico.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          padding: '60px 40px',
          borderRadius: '24px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            Pronto para inovar?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Vamos transformar sua ideia em uma solução digital de sucesso
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/contato"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              📞 Fale Conosco
            </Link>
            <Link
              href="/chamados"
              style={{
                background: '#22c55e',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)'
              }}
            >
              🔧 Portal Cliente
            </Link>
            <Link
              href="/admin"
              style={{
                background: '#1d4ed8',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(29, 78, 216, 0.3)'
              }}
            >
              👑 Admin
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
