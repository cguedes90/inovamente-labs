import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import WhatsAppCtaButton from '@/components/WhatsAppCtaButton'
import ProjectCard from '@/components/ProjectCard'

export default function DesenvolvimentoPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Navbar />
      <WhatsAppButton />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚙️ Desenvolvimento
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Desenvolvimento de software sob medida com tecnologias de ponta e metodologias ágeis.
          </p>
        </div>

        {/* Tecnologias */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            🛠️ Tecnologias que Dominamos
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Frontend',
                icon: '🎨',
                techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
              },
              {
                category: 'Backend',
                icon: '⚙️',
                techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
              },
              {
                category: 'Mobile',
                icon: '📱',
                techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'PWA']
              },
              {
                category: 'Cloud',
                icon: '☁️',
                techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
              }
            ].map((categoria, index) => (
              <div
                key={index}
                style={{
                  padding: '25px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  background: 'linear-gradient(135deg, #f8fafc, #ffffff)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{categoria.icon}</span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    margin: '0'
                  }}>
                    {categoria.category}
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {categoria.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metodologias */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            📋 Metodologias Ágeis
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Scrum',
                icon: '🔄',
                description: 'Desenvolvimento iterativo com sprints de 2-4 semanas, garantindo entregas constantes e feedback contínuo.',
                benefits: ['Transparência total', 'Entregas rápidas', 'Adaptação a mudanças', 'ROI acelerado']
              },
              {
                title: 'DevOps',
                icon: '🚀',
                description: 'Integração contínua e deploy automatizado para releases mais frequentes e confiáveis.',
                benefits: ['Deploy automatizado', 'Monitoramento 24/7', 'Rollback rápido', 'Escalabilidade']
              },
              {
                title: 'Design Thinking',
                icon: '💭',
                description: 'Abordagem centrada no usuário para criar soluções inovadoras e experiências excepcionais.',
                benefits: ['Foco no usuário', 'Inovação constante', 'Prototipagem rápida', 'Validação contínua']
              }
            ].map((metodologia, index) => (
              <div
                key={index}
                style={{
                  padding: '30px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  background: 'linear-gradient(135deg, #f8fafc, #ffffff)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                  }}>
                    {metodologia.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    margin: '0'
                  }}>
                    {metodologia.title}
                  </h3>
                </div>
                <p style={{
                  color: '#64748b',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {metodologia.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {metodologia.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #22c55e, #16a34a)'
                      }} />
                      <span style={{
                        fontSize: '14px',
                        color: '#374151',
                        fontWeight: '500'
                      }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfólio */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            🎯 Projetos de Destaque
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'E-commerce Multivendor',
                category: 'Marketplace',
                description: 'Plataforma completa de marketplace com gestão de vendedores, produtos e pedidos.',
                tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
                metrics: ['500+ vendedores', 'R$ 2M+ em vendas', '99.9% uptime']
              },
              {
                title: 'App de Delivery',
                category: 'Mobile',
                description: 'Aplicativo de delivery com tracking em tempo real e múltiplas formas de pagamento.',
                tech: ['React Native', 'Express', 'MongoDB', 'Socket.io'],
                metrics: ['50K+ downloads', '4.8⭐ rating', '< 3s loading']
              },
              {
                title: 'Sistema de CRM',
                category: 'Enterprise',
                description: 'CRM corporativo com automação de vendas e analytics avançados.',
                tech: ['React', 'Python', 'PostgreSQL', 'Redis'],
                metrics: ['1000+ usuários', '40% ↑ vendas', 'ROI 300%']
              }
            ].map((projeto, index) => (
              <ProjectCard
                key={index}
                title={projeto.title}
                category={projeto.category}
                description={projeto.description}
                tech={projeto.tech}
                metrics={projeto.metrics}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          padding: '50px 40px',
          borderRadius: '24px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            marginBottom: '20px'
          }}>
            Vamos desenvolver seu próximo projeto juntos?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Nossa equipe está pronta para transformar sua visão em um produto digital de alta qualidade.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
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
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              💼 Solicitar Orçamento
            </a>
            <WhatsAppCtaButton 
              message="Olá! Gostaria de discutir um projeto de desenvolvimento com a InovaMente Labs."
              text="Falar no WhatsApp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
