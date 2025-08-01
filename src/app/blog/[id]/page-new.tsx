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
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <Link
              href="/blog"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              ← Voltar ao Blog
            </Link>
            <span style={{
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              •
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
          </div>
          
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            fontSize: '14px',
            opacity: '0.9'
          }}>
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <article style={{
          background: 'white',
          padding: '60px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#374151'
          }}>
            <p style={{ marginBottom: '30px' }}>
              O cenário do desenvolvimento de software está passando por uma transformação radical. 
              As plataformas No-Code e Low-Code estão democratizando a criação de aplicações, 
              permitindo que pessoas sem conhecimento técnico profundo desenvolvam soluções sofisticadas.
            </p>

            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#1e293b',
              marginTop: '40px',
              marginBottom: '20px'
            }}>
              O que são No-Code e Low-Code?
            </h2>

            <p style={{ marginBottom: '30px' }}>
              <strong>No-Code:</strong> Plataformas que permitem criar aplicações completas 
              sem escrever uma única linha de código, usando interfaces visuais e drag-and-drop.
            </p>

            <p style={{ marginBottom: '30px' }}>
              <strong>Low-Code:</strong> Ambientes que minimizam a quantidade de código necessário, 
              oferecendo componentes pré-construídos e automação de processos repetitivos.
            </p>

            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#1e293b',
              marginTop: '40px',
              marginBottom: '20px'
            }}>
              Benefícios para Empresas
            </h2>

            <div style={{
              background: '#f8fafc',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              marginBottom: '30px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
              }}>
                📊 Impacto nos Resultados:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  <span>Redução de 60% no tempo de desenvolvimento</span>
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  <span>Economia de até 75% nos custos de projeto</span>
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  <span>ROI médio de 300% no primeiro ano</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  <span>Democratização da inovação tecnológica</span>
                </li>
              </ul>
            </div>

            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#1e293b',
              marginTop: '40px',
              marginBottom: '20px'
            }}>
              Casos de Uso Práticos
            </h2>

            <p style={{ marginBottom: '20px' }}>
              Empresas de todos os portes estão adotando essas tecnologias para:
            </p>

            <ul style={{
              paddingLeft: '20px',
              marginBottom: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Automação de processos internos</strong> - Workflows, aprovações e gestão de tarefas
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Aplicações mobile</strong> - Apps corporativos e de atendimento ao cliente
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Dashboards e relatórios</strong> - Visualização de dados em tempo real
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>E-commerce e marketplaces</strong> - Lojas online completas
              </li>
              <li>
                <strong>Sistemas de CRM e ERP</strong> - Gestão empresarial personalizada
              </li>
            </ul>

            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '30px',
              borderRadius: '16px',
              marginTop: '40px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                🚀 Pronto para Revolucionar seu Negócio?
              </h3>
              <p style={{
                marginBottom: '20px',
                opacity: '0.9'
              }}>
                A InovaMente Labs pode ajudar sua empresa a implementar soluções No-Code e Low-Code 
                que aceleram resultados e reduzem custos.
              </p>
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link
                  href="/contato"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📞 Falar com Especialista
                </Link>
                <button
                  onClick={() => {
                    const phoneNumber = "5511974508168";
                    const message = "Olá! Vi o artigo sobre No-Code/Low-Code e gostaria de saber mais sobre como podem ajudar minha empresa.";
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  style={{
                    background: '#25d366',
                    border: 'none',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  📱 WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section style={{
          marginTop: '60px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            📚 Artigos Relacionados
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                id: 2,
                title: 'Desenvolvimento de Software Empresarial',
                excerpt: 'Prateleira vs Sob Demanda - Como escolher a melhor opção',
                category: 'Desenvolvimento',
                readTime: '6 min'
              },
              {
                id: 3,
                title: 'Blockchain para Empresas',
                excerpt: 'Revolucionando negócios tradicionais com tecnologia descentralizada',
                category: 'Blockchain',
                readTime: '10 min'
              }
            ].map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <article style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-5px)';
                  target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '15px'
                  }}>
                    <span style={{
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: '600'
                    }}>
                      {relatedPost.category}
                    </span>
                    <span style={{
                      color: '#64748b',
                      fontSize: '12px'
                    }}>
                      {relatedPost.readTime}
                    </span>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '10px',
                    lineHeight: '1.4'
                  }}>
                    {relatedPost.title}
                  </h3>
                  
                  <p style={{
                    color: '#64748b',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {relatedPost.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
