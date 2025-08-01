'use client'

import { ReactNode } from 'react'

interface SolutionCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

export default function SolutionCard({ icon, title, description, features }: SolutionCardProps) {
  return (
    <div
      style={{
        background: 'white',
        padding: '40px 30px',
        borderRadius: '20px',
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
      <div style={{
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: '15px'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#64748b',
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {features.map((feature, index) => (
          <span
            key={index}
            style={{
              background: 'linear-gradient(45deg, #e0e7ff, #c7d2fe)',
              color: '#3730a3',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  )
}
