'use client'

import Link from 'next/link'

interface BlogCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    author: string
    category: string
    date: string
    image: string
    readTime: string
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
  )
}
