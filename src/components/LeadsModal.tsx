'use client';

import { useState, useEffect } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  status: string;
  type: 'contact_form' | 'chatbot';
  createdAt: string;
  details?: any;
}

interface LeadsModalProps {
  onClose: () => void;
}

export default function LeadsModal({ onClose }: LeadsModalProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads');
      if (!response.ok) {
        throw new Error('Erro ao buscar leads');
      }
      const data = await response.json();
      setLeads(data.leads);
      setStats(data.stats);
    } catch (error: any) {
      console.error('Erro ao carregar leads:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (filter === 'all') return true;
    if (filter === 'contact') return lead.type === 'contact_form';
    if (filter === 'chatbot') return lead.type === 'chatbot';
    if (filter === 'pending') return ['PENDING', 'ACTIVE'].includes(lead.status);
    if (filter === 'responded') return ['RESPONDED', 'COMPLETED'].includes(lead.status);
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getStatusBadge = (status: string, type: string) => {
    const statusColors: any = {
      'PENDING': { bg: '#fef3c7', color: '#92400e', text: 'Pendente' },
      'ACTIVE': { bg: '#dbeafe', color: '#1e40af', text: 'Ativo' },
      'REVIEWED': { bg: '#e0e7ff', color: '#3730a3', text: 'Analisado' },
      'RESPONDED': { bg: '#dcfce7', color: '#166534', text: 'Respondido' },
      'COMPLETED': { bg: '#dcfce7', color: '#166534', text: 'Concluído' },
      'ARCHIVED': { bg: '#f3f4f6', color: '#374151', text: 'Arquivado' }
    };

    const config = statusColors[status] || statusColors['PENDING'];
    
    return (
      <span style={{
        background: config.bg,
        color: config.color,
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '600'
      }}>
        {config.text}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    return type === 'contact_form' ? '📧' : '🤖';
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            👥 Clientes e Leads
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#64748b'
            }}
          >
            ✕
          </button>
        </div>

        {/* Stats Cards */}
        {!isLoading && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.total}</div>
              <div>Total de Leads</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #10b981, #059669)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.contactForm}</div>
              <div>📧 Formulário</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.chatbot}</div>
              <div>🤖 Chatbot</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #f59e0b, #d97706)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.pending}</div>
              <div>⏳ Pendentes</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {[
            { key: 'all', label: 'Todos' },
            { key: 'contact', label: '📧 Formulário' },
            { key: 'chatbot', label: '🤖 Chatbot' },
            { key: 'pending', label: '⏳ Pendentes' },
            { key: 'responded', label: '✅ Respondidos' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                padding: '8px 16px',
                background: filter === key ? '#3b82f6' : '#f1f5f9',
                color: filter === key ? 'white' : '#64748b',
                border: 'none',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#dc2626',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            border: '1px solid #fecaca'
          }}>
            {error}
          </div>
        )}

        {isLoading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            color: '#64748b'
          }}>
            Carregando leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#64748b'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Nenhum lead encontrado</h3>
            <p>Os leads aparecerão aqui quando houver submissões do formulário ou conversas no chatbot.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '15px',
                  padding: '20px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{getTypeIcon(lead.type)}</span>
                    <div>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        margin: 0
                      }}>
                        {lead.name || 'Nome não informado'}
                      </h3>
                      <p style={{
                        color: '#64748b',
                        margin: 0,
                        fontSize: '14px'
                      }}>
                        {lead.email} {lead.phone && `• ${lead.phone}`}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {getStatusBadge(lead.status, lead.type)}
                    <span style={{
                      color: '#64748b',
                      fontSize: '12px'
                    }}>
                      {formatDate(lead.createdAt)}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    margin: '0 0 5px 0'
                  }}>
                    {lead.subject}
                  </h4>
                  <p style={{
                    color: '#6b7280',
                    margin: 0,
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {lead.message}
                  </p>
                </div>

                {lead.company && (
                  <div style={{
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    🏢 {lead.company}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}