'use client'

import Link from 'next/link'

interface SidebarPostLinkProps {
  post: {
    id: number
    title: string
    date: string
    readTime: string
  }
}

export default function SidebarPostLink({ post }: SidebarPostLinkProps) {
  return (
    <Link
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
  )
}
