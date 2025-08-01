import Link from 'next/link';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

interface BlogPostProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  
  // Simulação de dados do post (em produção viria do banco de dados)
  const post = {
    id: parseInt(id),
    title: 'No-Code e Low-Code: A Revolução do Desenvolvimento sem Programação [2025]',
    author: 'Equipe InovaMente',
    date: '23/07/2025',
    readTime: '8 min',
    category: 'Tecnologia',
    image: '💻'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Navbar />
      <WhatsAppButton />
      
      {/* Article Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        padding: '80px 20px 60px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(45deg, #10b981, #059669)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '24px'
          }}>
            {post.category}
          </div>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            {post.title}
          </h1>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px',
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            <span>✍️ {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime} de leitura</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              🔗 Compartilhar no Twitter
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              � Compartilhar no LinkedIn
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              🔗 Copiar link
            </button>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
            borderRadius: '20px',
            padding: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '400px'
          }}>
            <span style={{
              fontSize: '5rem',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {post.image}
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <main style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.8'
        }}>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            marginBottom: '40px',
            fontStyle: 'italic',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
            borderRadius: '12px',
            borderLeft: '4px solid #3b82f6'
          }}>
            No cenário atual de transformação digital acelerada, as plataformas No-Code e Low-Code emergiram como verdadeiras disruptoras do setor de desenvolvimento de software. Essas tecnologias democratizam a criação de aplicações, permitindo que profissionais sem formação técnica tradicional desenvolvam soluções robustas e escaláveis.
          </p>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginTop: '60px',
            marginBottom: '30px',
            borderBottom: '3px solid #3b82f6',
            paddingBottom: '10px'
          }}>
            O Que São Plataformas No-Code e Low-Code?
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '30px'
          }}>
            <strong style={{ color: '#1e293b' }}>No-Code</strong> são plataformas que permitem criar aplicações completas através de interfaces visuais intuitivas, sem escrever uma única linha de código. Utilizando drag-and-drop, configurações visuais e automações pré-construídas, usuários empresariais podem desenvolver desde simples formulários até sistemas complexos de gestão.
          </p>

          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '50px'
          }}>
            <strong style={{ color: '#1e293b' }}>Low-Code</strong> mantém a mesma filosofia de desenvolvimento visual, mas oferece flexibilidade adicional através da possibilidade de inserir código personalizado quando necessário. Essa abordagem híbrida é ideal para projetos que exigem customizações específicas ou integrações complexas.
          </p>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginTop: '60px',
            marginBottom: '30px',
            borderBottom: '3px solid #10b981',
            paddingBottom: '10px'
          }}>
            Casos de Sucesso na InovaMente Labs
          </h2>

          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#0369a1',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            🏢 Mystica CRM - Gestão 360° de Relacionamento
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '20px'
          }}>
            Desenvolvido utilizando tecnologias low-code, o Mystica CRM demonstra como é possível criar soluções empresariais robustas em tempo recorde. Nossa plataforma integra:
          </p>
          
          <ul style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '40px',
            paddingLeft: '20px'
          }}>
            <li style={{ marginBottom: '10px' }}>📊 Dashboard executivo com métricas em tempo real</li>
            <li style={{ marginBottom: '10px' }}>🤖 Automação de processos de vendas e marketing</li>
            <li style={{ marginBottom: '10px' }}>📱 Interface responsiva para equipes móveis</li>
            <li style={{ marginBottom: '10px' }}>🔗 Integração nativa com WhatsApp Business e redes sociais</li>
          </ul>

          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#0369a1',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            💳 Fidelizaa - Programa de Fidelidade Inteligente
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '20px'
          }}>
            Um exemplo perfeito de como No-Code pode acelerar a inovação. O Fidelizaa foi desenvolvido em apenas 30 dias, incluindo:
          </p>
          
          <ul style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '50px',
            paddingLeft: '20px'
          }}>
            <li style={{ marginBottom: '10px' }}>🎯 Sistema de pontuação gamificado</li>
            <li style={{ marginBottom: '10px' }}>📲 App mobile nativo</li>
            <li style={{ marginBottom: '10px' }}>💳 Cartão de fidelidade digital</li>
            <li style={{ marginBottom: '10px' }}>📈 Analytics avançado de comportamento do cliente</li>
          </ul>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginTop: '60px',
            marginBottom: '30px',
            borderBottom: '3px solid #8b5cf6',
            paddingBottom: '10px'
          }}>
            ROI Comprovado: Números que Impressionam
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#475569',
            marginBottom: '40px'
          }}>
            Nossos clientes experimentam resultados extraordinários com a implementação de soluções No-Code/Low-Code:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '50px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '10px'
              }}>75%</div>
              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9'
              }}>Redução no tempo de desenvolvimento</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '10px'
              }}>60%</div>
              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9'
              }}>Economia de custos operacionais</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '10px'
              }}>300%</div>
              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9'
              }}>Aumento na produtividade da equipe</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '10px'
              }}>90%</div>
              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9'
              }}>Satisfação dos usuários finais</div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '60px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              🚀 Pronto para Revolucionar seu Negócio?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '30px',
              opacity: '0.9'
            }}>
              Converse com nossos especialistas e descubra como as soluções No-Code/Low-Code podem acelerar seu crescimento.
            </p>
            <Link 
              href="/#contato"
              style={{
                background: 'white',
                color: '#3b82f6',
                padding: '15px 30px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'inline-block'
              }}
            >
              Falar com Especialista
            </Link>
          </div>
        </div>

        {/* Posts Relacionados */}
        <div style={{
          marginTop: '80px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            📖 Artigos Relacionados
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <Link href="/blog/2" style={{
              display: 'block',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                Desenvolvimento de Software Empresarial: Prateleira vs Sob Demanda
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b'
              }}>
                Como escolher a melhor estratégia para seu negócio...
              </p>
            </Link>
            
            <Link href="/blog/3" style={{
              display: 'block',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                Blockchain para Empresas: Revolucionando Negócios Tradicionais
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b'
              }}>
                Aplicações práticas e ROI comprovado...
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        color: 'white',
        padding: '60px 20px 40px',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
              marginRight: '8px'
            }}>⚡</span>
            <h4 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              margin: '0'
            }}>
              InovaMente Labs
            </h4>
          </div>
          <p style={{
            color: '#94a3b8',
            marginBottom: '30px'
          }}>
            Transformando ideias em soluções digitais inovadoras.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '30px'
          }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <Link href="/chamados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Portal Cliente</Link>
            <Link href="/#contato" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contato</Link>
          </div>
          <div style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '20px'
          }}>
            <p style={{
              color: '#64748b',
              margin: '0'
            }}>
              © 2025 InovaMente Labs - Revolucionando o mercado digital
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
