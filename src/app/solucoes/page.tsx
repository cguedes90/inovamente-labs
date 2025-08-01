import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import SolutionCard from '@/components/SolutionCard';
import WhatsAppCtaButton from '@/components/WhatsAppCtaButton';

export default function SolucoesPage() {
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
            💡 Nossas Soluções
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Oferecemos soluções digitais completas para transformar seu negócio e acelerar seus resultados.
          </p>
        </div>

        {/* Grid de Soluções */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {[
            {
              icon: '🚀',
              title: 'Desenvolvimento de Software',
              description: 'Aplicações web e mobile personalizadas com as mais modernas tecnologias.',
              features: ['React & Next.js', 'Node.js & TypeScript', 'Apps Mobile', 'APIs Robustas']
            },
            {
              icon: '🎨',
              title: 'Design UX/UI',
              description: 'Interfaces intuitivas e experiências digitais que encantam seus usuários.',
              features: ['Design System', 'Prototipagem', 'Testes de Usabilidade', 'Design Responsivo']
            },
            {
              icon: '☁️',
              title: 'Cloud & DevOps',
              description: 'Infraestrutura na nuvem escalável e segura para seu negócio crescer.',
              features: ['AWS & Azure', 'Kubernetes', 'CI/CD Pipeline', 'Monitoramento']
            },
            {
              icon: '📊',
              title: 'Analytics & BI',
              description: 'Dados transformados em insights estratégicos para tomada de decisão.',
              features: ['Dashboards Interativos', 'KPIs Personalizados', 'Big Data', 'Machine Learning']
            },
            {
              icon: '🛡️',
              title: 'Cibersegurança',
              description: 'Proteção completa para seus dados e sistemas contra ameaças digitais.',
              features: ['Auditorias de Segurança', 'Pentest', 'Conformidade LGPD', 'SOC 24/7']
            },
            {
              icon: '🤖',
              title: 'Automação & IA',
              description: 'Inteligência artificial e automação para otimizar seus processos.',
              features: ['RPA', 'Chatbots Inteligentes', 'ML Models', 'Processamento de Linguagem']
            }
          ].map((solucao, index) => (
            <SolutionCard
              key={index}
              icon={solucao.icon}
              title={solucao.title}
              description={solucao.description}
              features={solucao.features}
            />
          ))}
        </div>

        {/* Nosso Processo de Criação */}
        <div style={{
          background: 'white',
          padding: '60px 40px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '60px'
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
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            opacity: '0.9'
          }}>
            Entre em contato conosco e vamos juntos criar a solução perfeita para seu negócio.
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
              📞 Falar com Especialista
            </a>
            <WhatsAppCtaButton 
              message="Olá! Gostaria de conhecer mais sobre as soluções da InovaMente Labs."
              text="WhatsApp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
