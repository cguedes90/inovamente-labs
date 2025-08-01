import Link from 'next/link';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'No-Code e Low-Code: A Revolução do Desenvolvimento sem Programação [2025]',
      excerpt: 'Descubra como No-Code e Low-Code estão revolucionando o desenvolvimento em 2025.',
      author: 'Equipe InovaMente',
      date: '23/07/2025',
      category: 'Tecnologia',
      readTime: '8 min',
      image: '💻'
    },
    {
      id: 2,
      title: 'Desenvolvimento de Software Empresarial: Prateleira vs Sob Demanda [2025]',
      excerpt: 'Descubra como escolher entre software de prateleira e desenvolvimento sob demanda.',
      author: 'Equipe InovaMente',
      date: '14/07/2025',
      category: 'Desenvolvimento',
      readTime: '6 min',
      image: '🌍'
    },
    {
      id: 3,
      title: 'Blockchain para Empresas: Revolucionando Negócios Tradicionais [Guia 2025]',
      excerpt: 'Guia completo de blockchain para empresas: aplicações práticas e casos de sucesso.',
      author: 'Equipe InovaMente',
      date: '07/07/2025',
      category: 'Blockchain',
      readTime: '10 min',
      image: '🔗'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '24px'
          }}>
            📝 Blog InovaMente
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Insights, tendências e conhecimento sobre tecnologia e inovação digital
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '60px'
        }}>
          {/* Posts Grid */}
          <div>
            <div style={{
              display: 'grid',
              gap: '30px'
            }}>
              {posts.map((post) => (
                <article
                  key={post.id}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.transform = 'translateY(-5px)';
                    target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <Link
                    href={`/blog/${post.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block'
                    }}
                  >
                    <div style={{
                      padding: '30px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        <span style={{
                          fontSize: '2rem'
                        }}>
                          {post.image}
                        </span>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <span style={{
                            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}>
                            {post.category}
                          </span>
                          <span style={{
                            color: '#64748b',
                            fontSize: '14px'
                          }}>
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '15px',
                        lineHeight: '1.4'
                      }}>
                        {post.title}
                      </h2>
                      
                      <p style={{
                        color: '#64748b',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}>
                        {post.excerpt}
                      </p>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span style={{
                            fontSize: '14px',
                            color: '#64748b'
                          }}>
                            Por {post.author}
                          </span>
                          <span style={{
                            color: '#d1d5db'
                          }}>
                            •
                          </span>
                          <span style={{
                            fontSize: '14px',
                            color: '#64748b'
                          }}>
                            {post.date}
                          </span>
                        </div>
                        
                        <span style={{
                          color: '#3b82f6',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          Ler mais →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {/* Categorias */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px'
              }}>
                📂 Categorias
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {[
                  { name: 'Tecnologia', count: 8 },
                  { name: 'Desenvolvimento', count: 12 },
                  { name: 'Blockchain', count: 5 },
                  { name: 'IA & Automação', count: 7 }
                ].map((categoria, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{
                      color: '#374151',
                      fontSize: '14px'
                    }}>
                      {categoria.name}
                    </span>
                    <span style={{
                      background: '#f3f4f6',
                      color: '#6b7280',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {categoria.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              padding: '30px',
              borderRadius: '20px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '15px'
              }}>
                📬 Newsletter
              </h3>
              <p style={{
                fontSize: '14px',
                marginBottom: '20px',
                opacity: '0.9'
              }}>
                Receba nossos últimos artigos e insights direto no seu email.
              </p>
              <input
                type="email"
                placeholder="Seu email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  marginBottom: '15px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                ✉️ Inscrever-se
              </button>
            </div>

            {/* Posts Populares */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px'
              }}>
                🔥 Posts Populares
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {posts.slice(0, 3).map((post, index) => (
                  <Link
                    key={index}
                    href={`/blog/${post.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      padding: '12px',
                      borderRadius: '12px',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '6px',
                      lineHeight: '1.4'
                    }}>
                      {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                    </h4>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        color: '#64748b'
                      }}>
                        {post.date}
                      </span>
                      <span style={{
                        color: '#d1d5db'
                      }}>
                        •
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: '#64748b'
                      }}>
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
