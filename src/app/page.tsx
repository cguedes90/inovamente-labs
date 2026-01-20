import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Chatbot from '@/components/Chatbot'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { VoiceSearchOptimizer } from '@/components/SEO/VoiceSearchOptimizer'

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
        <FloatingWhatsApp />

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
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: '900',
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              padding: '0 20px'
            }}>
              ⚡ InovaMente Labs
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#64748b',
              marginBottom: '40px',
              padding: '0 20px'
            }}>
              Transformamos ideias em soluções digitais inovadoras
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              padding: '0 20px'
            }}>
              Somos uma fábrica de software especializada em desenvolvimento de aplicações web, mobile e soluções de automação para empresas que querem se destacar no mercado digital.
            </p>
          </div>

          {/* Cases de Sucesso */}
          <div style={{
            marginBottom: '80px',
            padding: '0 20px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#1e293b'
            }}>
              🏆 Cases de Sucesso
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#334155' }}>🍺 Chopp Villa Alemã - Taubaté/SP</h3>
                <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '0.95rem' }}><strong>Sistema completo de gestão para bar/restaurante</strong></p>

                <div style={{ marginBottom: '15px', color: '#475569', fontSize: '0.9rem' }}>
                  <p style={{ marginBottom: '8px' }}>❌ <strong>Desafio:</strong> Controlar comandas manualmente causava erros e perda de vendas</p>
                  <p style={{ marginBottom: '8px' }}>✅ <strong>Solução:</strong> Sistema integrado com cardápio digital via QR Code, controle de mesas e estoque em tempo real</p>
                  <p>📈 <strong>Resultado:</strong> Redução de 90% em erros de pedidos, aumento de 30% na agilidade do atendimento</p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  color: '#334155',
                  border: '1px solid #e2e8f0'
                }}>
                  📅 Entregue em 4 meses | 💰 Investimento: R$ 8.000
                </div>

                <div style={{
                  fontStyle: 'italic',
                  color: '#475569',
                  fontSize: '0.9rem',
                  borderLeft: '4px solid #22c55e',
                  paddingLeft: '12px',
                  marginBottom: '15px'
                }}>
                  "Sistema funcionando perfeitamente, recomendamos!"<br />
                  <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>- Thais Lamosa, Proprietária</span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <a
                    href="/Atestado_Capacidade_Tecnica_Chopp_Villa_Alema.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#2563eb',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    📄 Ver atestado técnico completo →
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>React Mobile</span>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>Real-time DB</span>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#334155' }}>👗 Zest Moda - Tremembé/SP</h3>
                <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '0.95rem' }}><strong>Sistema completo de gestão comercial para loja de confecções</strong></p>

                <div style={{ marginBottom: '15px', color: '#475569', fontSize: '0.9rem' }}>
                  <p style={{ marginBottom: '8px' }}>❌ <strong>Desafio:</strong> Controle manual de estoque por grade causava perdas e rupturas</p>
                  <p style={{ marginBottom: '8px' }}>✅ <strong>Solução:</strong> Controle de estoque por especificações, PDV integrado e programa de fidelidade</p>
                  <p>📈 <strong>Resultado:</strong> Gestão de 2.000+ produtos, redução de erros e relatórios automáticos</p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  color: '#334155',
                  border: '1px solid #e2e8f0'
                }}>
                  📅 Entregue em 6 meses | 💰 Investimento: R$ 2.500
                </div>

                <div style={{
                  fontStyle: 'italic',
                  color: '#475569',
                  fontSize: '0.9rem',
                  borderLeft: '4px solid #22c55e',
                  paddingLeft: '12px',
                  marginBottom: '15px'
                }}>
                  "Atendeu plenamente às necessidades operacionais do nosso comércio varejista!"<br />
                  <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>- Aryelle Faria, Proprietária</span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <a
                    href="/Atestado_Capacidade_Tecnica_Zest_Moda.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#2563eb',
                      fontWeight: '600',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    📄 Ver atestado técnico completo →
                  </a>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>Python (FastAPI)</span>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>React</span>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>PostgreSQL</span>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '10px', color: '#334155' }}>🏢 Empresa de Serviços - São José dos Campos/SP</h3>
                <p style={{ color: '#64748b', marginBottom: '15px', fontSize: '0.95rem' }}><strong>Sistema de gestão de contratos e faturamento</strong></p>

                <div style={{ marginBottom: '15px', color: '#475569', fontSize: '0.9rem' }}>
                  <p style={{ marginBottom: '8px' }}>❌ <strong>Desafio:</strong> Processos manuais de notas fiscais e cobranças geravam atrasos</p>
                  <p style={{ marginBottom: '8px' }}>✅ <strong>Solução:</strong> Plataforma customizada para contratos, faturas automáticas e dashboard financeiro</p>
                  <p>📈 <strong>Resultado:</strong> Automação de 80% dos processos, redução de 50% no tempo de fechamento</p>
                </div>

                <div style={{
                  background: '#f8fafc',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  color: '#334155',
                  border: '1px solid #e2e8f0'
                }}>
                  📅 Entregue em 5 meses | 💰 Investimento: R$ 12.000
                </div>

                <div style={{
                  fontStyle: 'italic',
                  color: '#475569',
                  fontSize: '0.9rem',
                  borderLeft: '4px solid #22c55e',
                  paddingLeft: '12px',
                  marginBottom: '15px'
                }}>
                  "Transformou nossa operação administrativa!"<br />
                  <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>- Cliente verificado</span>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>Python</span>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>React</span>
                  <span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>APIs RESTful</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nosso Processo de Criação */}
          <div style={{
            background: 'white',
            padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px)',
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
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: '800',
                marginBottom: '20px',
                color: '#1e293b'
              }}>
                Nosso Processo de Criação
              </h2>
              <p style={{
                fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '0 20px'
              }}>
                Ao contrário do desenvolvimento tradicional, com a InovaMente você pode
                rapidamente projetar, desenvolver, lançar e escalar a sua ideia.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'clamp(20px, 3vw, 30px)',
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
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'clamp(60px, 15vw, 80px)',
                    borderRadius: '50%',
                    background: etapa.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    margin: '0 auto 20px auto',
                    boxShadow: `0 10px 30px ${etapa.color}30`
                  }}>
                    {etapa.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '12px'
                  }}>
                    {etapa.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
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
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#1e293b',
              padding: '0 20px'
            }}>
              🚀 Nossos Serviços
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(20px, 3vw, 30px)'
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
                    padding: 'clamp(20px, 4vw, 30px)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    marginBottom: '20px'
                  }}>
                    {servico.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '15px'
                  }}>
                    {servico.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    {servico.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência Profissional */}
          <div style={{ marginBottom: '80px', textAlign: 'center', padding: '0 20px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', marginBottom: '30px', color: '#1e293b' }}>Experiência Profissional</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
              Mais de 10 anos liderando projetos de alta complexidade para grandes empresas do mercado.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
              {[
                { name: 'Totvs', desc: 'ERP e Gestão' },
                { name: 'SAP', desc: 'Integração' },
                { name: 'Bridgestone', desc: 'Automação' }
              ].map(item => (
                <div key={item.name} style={{
                  padding: '12px 24px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                  <span style={{ fontWeight: '700', color: '#334155' }}>{item.name}</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.desc}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {['CSPO', 'SAFe POPM', 'ITIL'].map(cert => (
                <span key={cert} style={{
                  background: '#eff6ff', color: '#1d4ed8', padding: '6px 16px', borderRadius: '20px',
                  fontSize: '0.9rem', fontWeight: '600', border: '1px solid #bfdbfe'
                }}>
                  🎖️ {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Investimento */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #f0fdf4 0%, #dcfce7 100%)',
              color: '#166534',
              padding: '12px 24px',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '1px solid #86efac',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)'
            }}>
              💰 Projetos a partir de R$ 1.000 ou <span style={{ textDecoration: 'underline' }}>Consulta Gratuita</span>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            textAlign: 'center',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            padding: 'clamp(40px, 6vw, 60px) clamp(20px, 4vw, 40px)',
            borderRadius: '24px',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '800',
              marginBottom: '20px'
            }}>
              Pronto para inovar?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              marginBottom: '40px',
              opacity: '0.9',
              padding: '0 20px'
            }}>
              Vamos transformar sua ideia em uma solução digital de sucesso
            </p>

            <div style={{
              display: 'flex',
              gap: 'clamp(12px, 2vw, 20px)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '0 20px'
            }}>
              <Link
                href="/contato"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
                  padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
                  padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
