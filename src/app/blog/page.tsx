'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import BlogCard from '@/components/BlogCard';
import SidebarPostLink from '@/components/SidebarPostLink';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/public');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Navbar />
      <Chatbot />
      
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
            {isLoading ? (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                color: '#64748b'
              }}>
                Carregando posts...
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gap: '30px'
              }}>
                {posts.map((post) => (
                  <BlogCard 
                    key={post.id} 
                    post={{
                      ...post,
                      id: parseInt(post.id),
                      date: formatDate(post.createdAt),
                      image: post.image || '📝'
                    }} 
                  />
                ))}
              </div>
            )}
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
                  <SidebarPostLink 
                    key={index} 
                    post={{
                      id: parseInt(post.id),
                      title: post.title,
                      date: formatDate(post.createdAt),
                      readTime: post.readTime
                    }} 
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
