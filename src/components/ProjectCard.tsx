'use client'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  tech: string[]
  metrics: string[]
}

export default function ProjectCard({ title, category, description, tech, metrics }: ProjectCardProps) {
  return (
    <div
      style={{
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '15px'
      }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: '#1e293b',
          margin: '0'
        }}>
          {title}
        </h3>
        <span style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {category}
        </span>
      </div>
      <p style={{
        color: '#64748b',
        marginBottom: '20px',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '20px'
      }}>
        {tech.map((technology, index) => (
          <span
            key={index}
            style={{
              background: 'linear-gradient(45deg, #e0e7ff, #c7d2fe)',
              color: '#3730a3',
              padding: '4px 10px',
              borderRadius: '16px',
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            {technology}
          </span>
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#22c55e',
        fontWeight: '600'
      }}>
        {metrics.map((metric, index) => (
          <span key={index}>{metric}</span>
        ))}
      </div>
    </div>
  )
}
