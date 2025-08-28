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
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const handleEdit = (lead: Lead) => {
    setEditingLead(lead);
  };

  const handleDelete = async (leadId: string, leadType: string) => {
    if (!confirm('Tem certeza que deseja deletar este lead? Esta ação não pode ser desfeita.')) {
      return;
    }

    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: leadType })
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar lead');
      }

      // Remover da lista local
      setLeads(prevLeads => prevLeads.filter(lead => lead.id !== leadId));
      
      // Atualizar estatísticas
      fetchLeads();
      
    } catch (error: any) {
      console.error('Erro ao deletar lead:', error);
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleArchive = async (leadId: string, leadType: string) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          type: leadType,
          status: 'ARCHIVED'
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao arquivar lead');
      }

      // Atualizar na lista local
      setLeads(prevLeads => 
        prevLeads.map(lead => 
          lead.id === leadId 
            ? { ...lead, status: 'ARCHIVED' }
            : lead
        )
      );
      
    } catch (error: any) {
      console.error('Erro ao arquivar lead:', error);
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateLead = async (updatedLead: Lead) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/leads/${updatedLead.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: updatedLead.type,
          name: updatedLead.name,
          email: updatedLead.email,
          phone: updatedLead.phone,
          company: updatedLead.company,
          subject: updatedLead.subject,
          message: updatedLead.message,
          status: updatedLead.status
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar lead');
      }

      // Atualizar na lista local
      setLeads(prevLeads => 
        prevLeads.map(lead => 
          lead.id === updatedLead.id ? updatedLead : lead
        )
      );
      
      setEditingLead(null);
      
    } catch (error: any) {
      console.error('Erro ao atualizar lead:', error);
      setError(error.message);
    } finally {
      setIsUpdating(false);
    }
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

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '15px'
                }}>
                  <div>
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
                  
                  {/* Botões de Ação */}
                  <div style={{
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <button
                      onClick={() => handleEdit(lead)}
                      disabled={isUpdating}
                      style={{
                        background: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: isUpdating ? 'not-allowed' : 'pointer',
                        opacity: isUpdating ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isUpdating) {
                          e.currentTarget.style.background = '#2563eb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isUpdating) {
                          e.currentTarget.style.background = '#3b82f6';
                        }
                      }}
                    >
                      ✏️ Editar
                    </button>

                    <button
                      onClick={() => handleArchive(lead.id, lead.type)}
                      disabled={isUpdating || lead.status === 'ARCHIVED'}
                      style={{
                        background: lead.status === 'ARCHIVED' ? '#9ca3af' : '#f59e0b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: (isUpdating || lead.status === 'ARCHIVED') ? 'not-allowed' : 'pointer',
                        opacity: (isUpdating || lead.status === 'ARCHIVED') ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isUpdating && lead.status !== 'ARCHIVED') {
                          e.currentTarget.style.background = '#d97706';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isUpdating && lead.status !== 'ARCHIVED') {
                          e.currentTarget.style.background = '#f59e0b';
                        }
                      }}
                    >
                      {lead.status === 'ARCHIVED' ? '📦 Arquivado' : '📦 Arquivar'}
                    </button>

                    <button
                      onClick={() => handleDelete(lead.id, lead.type)}
                      disabled={isUpdating}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: isUpdating ? 'not-allowed' : 'pointer',
                        opacity: isUpdating ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => {
                        if (!isUpdating) {
                          e.currentTarget.style.background = '#dc2626';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isUpdating) {
                          e.currentTarget.style.background = '#ef4444';
                        }
                      }}
                    >
                      🗑️ Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Edição */}
      {editingLead && (
        <EditLeadModal 
          lead={editingLead}
          onClose={() => setEditingLead(null)}
          onUpdate={handleUpdateLead}
          isUpdating={isUpdating}
        />
      )}
    </div>
  );
}

// Componente Modal de Edição
interface EditLeadModalProps {
  lead: Lead;
  onClose: () => void;
  onUpdate: (lead: Lead) => void;
  isUpdating: boolean;
}

function EditLeadModal({ lead, onClose, onUpdate, isUpdating }: EditLeadModalProps) {
  const [formData, setFormData] = useState({
    name: lead.name || '',
    email: lead.email || '',
    phone: lead.phone || '',
    company: lead.company || '',
    subject: lead.subject || '',
    message: lead.message || '',
    status: lead.status || 'PENDING'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedLead: Lead = {
      ...lead,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
      status: formData.status
    };

    onUpdate(updatedLead);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            ✏️ Editar Lead
          </h3>
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

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '15px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Nome *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '15px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Empresa
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '15px'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Assunto *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#374151',
                fontSize: '14px'
              }}>
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              >
                <option value="PENDING">Pendente</option>
                <option value="ACTIVE">Ativo</option>
                <option value="REVIEWED">Analisado</option>
                <option value="RESPONDED">Respondido</option>
                <option value="COMPLETED">Concluído</option>
                <option value="ARCHIVED">Arquivado</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: '600',
              color: '#374151',
              fontSize: '14px'
            }}>
              Mensagem
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end'
          }}>
            <button
              type="button"
              onClick={onClose}
              disabled={isUpdating}
              style={{
                padding: '10px 20px',
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isUpdating ? 'not-allowed' : 'pointer',
                opacity: isUpdating ? 0.6 : 1
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              style={{
                padding: '10px 20px',
                background: isUpdating ? '#9ca3af' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isUpdating ? 'not-allowed' : 'pointer',
                opacity: isUpdating ? 0.6 : 1
              }}
            >
              {isUpdating ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}