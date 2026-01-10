import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

interface BlogPostProps {
  params: Promise<{
    id: string;
  }>;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
  createdAt?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
}

const DEFAULT_BASE_URL = 'https://www.inovamentelabs.com.br';

async function fetchPost(id: string): Promise<BlogPost | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || DEFAULT_BASE_URL;
  const response = await fetch(`${baseUrl}/api/blog/${encodeURIComponent(id)}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.post || data;
}

function buildBlocks(content: string) {
  const blocks: ReactElement[] = [];
  const lines = content.split('\n');
  let paragraph: string[] = [];
  let list: string[] = [];
  let keyIndex = 0;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push(
      <p
        key={`p-${keyIndex++}`}
        style={{
          fontSize: '1.1rem',
          color: '#475569',
          marginBottom: '24px'
        }}
      >
        {paragraph.join(' ')}
      </p>
    );
    paragraph = [];
  };

  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul
        key={`ul-${keyIndex++}`}
        style={{
          paddingLeft: '20px',
          marginBottom: '24px',
          color: '#475569'
        }}
      >
        {list.map((item, index) => (
          <li key={`li-${keyIndex++}-${index}`} style={{ marginBottom: '10px' }}>
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      flushParagraph();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h3
          key={`h3-${keyIndex++}`}
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#0f172a',
            marginTop: '32px',
            marginBottom: '16px'
          }}
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h2
          key={`h2-${keyIndex++}`}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0f172a',
            marginTop: '40px',
            marginBottom: '20px'
          }}
        >
          {trimmed.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h1
          key={`h1-${keyIndex++}`}
          style={{
            fontSize: '2.4rem',
            fontWeight: '800',
            color: '#0f172a',
            marginTop: '40px',
            marginBottom: '20px'
          }}
        >
          {trimmed.slice(2)}
        </h1>
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    paragraph.push(trimmed);
  });

  flushList();
  flushParagraph();

  return blocks;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPost(id);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || DEFAULT_BASE_URL;

  if (!post) {
    return {
      title: 'Post nao encontrado - InovaMente Labs'
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const url = `${baseUrl}/blog/${post.slug || id}`;
  const image = post.image && post.image.startsWith('http') ? post.image : `${baseUrl}/og-blog.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString('pt-BR')
    : '';
  const heroImage = post.image || 'IA';
  const showImage = heroImage.startsWith('http');

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
              &lt;- Voltar ao Blog
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
            <span>{date}</span>
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
          <div style={{ marginBottom: '40px' }}>
            {showImage ? (
              <img
                src={heroImage}
                alt={post.title}
                style={{
                  width: '100%',
                  maxHeight: '420px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '30px'
                }}
              />
            ) : (
              <div style={{
                background: 'linear-gradient(135deg, #eef2ff, #e2e8f0)',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'center',
                fontSize: '3rem',
                marginBottom: '30px'
              }}>
                {heroImage}
              </div>
            )}
          </div>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#374151'
          }}>
            {buildBlocks(post.content)}
          </div>

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
              Pronto para acelerar sua transformacao digital?
            </h3>
            <p style={{
              marginBottom: '20px',
              opacity: '0.9'
            }}>
              Fale com a InovaMente Labs e descubra como aplicar automacao e IA com foco em ROI.
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
                  background: 'white',
                  color: '#3b82f6',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Fale Conosco
              </Link>
              <Link
                href="/solucoes"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                Ver Solucoes
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
