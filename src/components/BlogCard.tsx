'use client'

import Link from 'next/link'

interface BlogCardProps {
  post: {
    title: string
    excerpt: string
    author: string
    category: string
    date: string
    image: string
    readTime: string
    slug: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
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
        href={`/blog/${post.slug}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block'
        }}
      >
        {/* Image Header */}
        <div style={{
          width: '100%',
          height: '200px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img 
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.transform = 'scale(1)';
            }}
          />
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            display: 'flex',
            gap: '8px'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              backdropFilter: 'blur(10px)'
            }}>
              {post.category}
            </span>
            <span style={{
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              {post.readTime}
            </span>
          </div>
        </div>

        <div style={{
          padding: '30px'
        }}>
          
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
  )
}
