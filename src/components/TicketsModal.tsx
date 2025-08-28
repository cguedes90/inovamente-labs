'use client';

import { useState, useEffect } from 'react';

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  clientId: string;
  assignedTo?: string;
  resolvedAt?: string;
  closedAt?: string;
  createdAt: string;
  updatedAt: string;
  client: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
  };
  message_count: number;
  last_message_at?: string;
}

interface TicketsModalProps {
  onClose: () => void;
}

export default function TicketsModal({ onClose }: TicketsModalProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [stats, setStats] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [error, setError] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [newStatus, setNewStatus] = useState('');
  const [adminNotes, setAdminNotes] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('/api/admin/tickets');
      if (!response.ok) {
        throw new Error('Erro ao buscar tickets');
      }
      const data = await response.json();
      setTickets(data.tickets || []);
      setStats(data.stats || {});
    } catch (error: any) {
      console.error('Erro ao carregar tickets:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTicketStatus = async (ticketId: string, status: string, notes: string = '') => {
    setIsUpdating(true);
    try {
      const response = await fetch('/api/admin/tickets', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: ticketId,
          status,
          assignedTo: 'admin',
          notes: notes.trim()
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar ticket');
      }

      // Recarregar tickets
      await fetchTickets();
      setSelectedTicket(null);
      setNewStatus('');
      setAdminNotes('');
      
    } catch (error: any) {
      console.error('Erro ao atualizar ticket:', error);
      alert('Erro ao atualizar ticket: ' + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') return true;
    if (filter === 'open') return ['ABERTO', 'EM_ANDAMENTO'].includes(ticket.status);
    if (filter === 'pending') return ticket.status === 'AGUARDANDO_CLIENTE';
    if (filter === 'urgent') return ticket.priority === 'URGENTE';
    if (filter === 'high') return ticket.priority === 'ALTA';
    if (filter === 'resolved') return ticket.status === 'RESOLVIDO';
    if (filter === 'closed') return ticket.status === 'FECHADO';
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getStatusBadge = (status: string) => {
    const statusColors: any = {
      'ABERTO': { bg: '#dbeafe', color: '#1e40af', text: '🆕 Aberto' },
      'EM_ANDAMENTO': { bg: '#fef3c7', color: '#92400e', text: '⚡ Em Andamento' },
      'AGUARDANDO_CLIENTE': { bg: '#e0e7ff', color: '#3730a3', text: '⏳ Aguardando Cliente' },
      'RESOLVIDO': { bg: '#dcfce7', color: '#166534', text: '✅ Resolvido' },
      'FECHADO': { bg: '#f3f4f6', color: '#374151', text: '🔒 Fechado' }
    };

    const config = statusColors[status] || statusColors['ABERTO'];
    
    return (
      <span style={{
        background: config.bg,
        color: config.color,
        padding: '6px 12px',
        borderRadius: '15px',
        fontSize: '12px',
        fontWeight: '600'
      }}>
        {config.text}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityColors: any = {
      'BAIXA': { bg: '#f3f4f6', color: '#374151', text: '🟢 Baixa' },
      'MEDIA': { bg: '#fef3c7', color: '#92400e', text: '🟡 Média' },
      'ALTA': { bg: '#fed7d7', color: '#c53030', text: '🟠 Alta' },
      'URGENTE': { bg: '#fecaca', color: '#dc2626', text: '🔴 Urgente' }
    };

    const config = priorityColors[priority] || priorityColors['MEDIA'];
    
    return (
      <span style={{
        background: config.bg,
        color: config.color,
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: '600'
      }}>
        {config.text}
      </span>
    );
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
            🎫 Tickets de Suporte
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
              color: 'white',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.total}</div>
              <div style={{ fontSize: '12px' }}>Total</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #f59e0b, #d97706)',
              color: 'white',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.open}</div>
              <div style={{ fontSize: '12px' }}>🆕 Abertos</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.pending}</div>
              <div style={{ fontSize: '12px' }}>⏳ Pendentes</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #ef4444, #dc2626)',
              color: 'white',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.urgent}</div>
              <div style={{ fontSize: '12px' }}>🔴 Urgentes</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #10b981, #059669)',
              color: 'white',
              padding: '15px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.resolved}</div>
              <div style={{ fontSize: '12px' }}>✅ Resolvidos</div>
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
            { key: 'open', label: '🆕 Abertos' },
            { key: 'pending', label: '⏳ Pendentes' },
            { key: 'urgent', label: '🔴 Urgentes' },
            { key: 'high', label: '🟠 Alta Prioridade' },
            { key: 'resolved', label: '✅ Resolvidos' }
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
            Carregando tickets...
          </div>
        ) : filteredTickets.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#64748b'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎫</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Nenhum ticket encontrado</h3>
            <p>Os tickets criados em /chamados aparecerão aqui.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
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
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        margin: 0
                      }}>
                        {ticket.title}
                      </h3>
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <p style={{
                      color: '#64748b',
                      margin: 0,
                      fontSize: '14px'
                    }}>
                      📧 {ticket.client.email} {ticket.client.phone && `• 📱 ${ticket.client.phone}`}
                      {ticket.client.company && ` • 🏢 ${ticket.client.company}`}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {getStatusBadge(ticket.status)}
                    <span style={{
                      color: '#64748b',
                      fontSize: '12px'
                    }}>
                      {formatDate(ticket.createdAt)}
                    </span>
                  </div>
                </div>

                <p style={{
                  color: '#6b7280',
                  margin: '0 0 15px 0',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {ticket.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: '#64748b' }}>
                    <span>📂 {ticket.category}</span>
                    <span>💬 {ticket.message_count} mensagens</span>
                    {ticket.last_message_at && (
                      <span>🕒 Última: {formatDate(ticket.last_message_at)}</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setNewStatus(ticket.status);
                    }}
                    style={{
                      padding: '8px 16px',
                      background: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    ⚙️ Gerenciar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal de Atualização de Ticket */}
        {selectedTicket && (
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
            zIndex: 1001
          }}>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              width: '100%',
              maxWidth: '500px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px'
              }}>
                Atualizar Ticket
              </h3>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Status:
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                >
                  <option value="ABERTO">🆕 Aberto</option>
                  <option value="EM_ANDAMENTO">⚡ Em Andamento</option>
                  <option value="AGUARDANDO_CLIENTE">⏳ Aguardando Cliente</option>
                  <option value="RESOLVIDO">✅ Resolvido</option>
                  <option value="FECHADO">🔒 Fechado</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Notas do Administrador (opcional):
                </label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Adicione observações sobre esta atualização..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    setSelectedTicket(null);
                    setNewStatus('');
                    setAdminNotes('');
                  }}
                  style={{
                    padding: '10px 20px',
                    background: '#f1f5f9',
                    color: '#64748b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => updateTicketStatus(selectedTicket.id, newStatus, adminNotes)}
                  disabled={isUpdating}
                  style={{
                    padding: '10px 20px',
                    background: isUpdating ? '#94a3b8' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isUpdating ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isUpdating ? 'Atualizando...' : 'Atualizar Ticket'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}