import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import WhatsAppCtaButton from '@/components/WhatsAppCtaButton'

export default function ContatoPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Navbar />
      <WhatsAppButton />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📞 Entre em Contato
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Estamos prontos para transformar suas ideias em realidade digital. 
            Fale conosco e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Formulário */}
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '30px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ✉️
              </div>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0'
              }}>
                Nos envie sua solicitação
              </h2>
            </div>
            
            <p style={{
              color: '#64748b',
              marginBottom: '30px',
              fontSize: '16px'
            }}>
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>

            <form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '14px'
                  }}>
                    Nome Completo <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '14px'
                  }}>
                    Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '14px'
                  }}>
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#374151',
                    fontSize: '14px'
                  }}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151',
                  fontSize: '14px'
                }}>
                  Assunto <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  background: 'white'
                }}>
                  <option value="">Selecione o assunto da sua solicitação</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="suporte">Suporte</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="outros">Outros Temas</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#374151',
                  fontSize: '14px'
                }}>
                  Mensagem
                </label>
                <textarea
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                ✉️ Enviar Solicitação
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '10px'
            }}>
              Informações de Contato
            </h3>

            {/* Telefone */}
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: '0'
              }}>
                📞
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: '0 0 8px 0'
                }}>
                  Telefone
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#3b82f6',
                  margin: '0 0 4px 0'
                }}>
                  (11) 9 7450-8168
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '0'
                }}>
                  Segunda a Sexta, 9h às 18h
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: '0'
              }}>
                ✉️
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: '0 0 8px 0'
                }}>
                  Email
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#22c55e',
                  margin: '0 0 4px 0'
                }}>
                  contato@inovamentelabs.com.br
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '0'
                }}>
                  Respondemos em até 24 horas
                </p>
              </div>
            </div>

            {/* Localização */}
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: '0'
              }}>
                📍
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: '0 0 8px 0'
                }}>
                  Localização
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#8b5cf6',
                  margin: '0 0 4px 0'
                }}>
                  São José dos Campos, SP
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '0'
                }}>
                  Atendemos todo o Brasil
                </p>
              </div>
            </div>

            {/* Horário */}
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flexShrink: '0'
              }}>
                🕒
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: '0 0 8px 0'
                }}>
                  Horário de Funcionamento
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  margin: '0 0 4px 0'
                }}>
                  Segunda a Sexta: 9h às 18h
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  margin: '0 0 4px 0'
                }}>
                  Sábado: 9h às 12h
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '0'
                }}>
                  Fuso horário: GMT-3 (Brasília)
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{
              background: 'linear-gradient(45deg, #25d366, #20ba5a)',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(37, 211, 102, 0.3)',
              color: 'white'
            }}>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                margin: '0 0 12px 0'
              }}>
                WhatsApp
              </h4>
              <p style={{
                fontSize: '16px',
                margin: '0 0 20px 0',
                opacity: '0.9'
              }}>
                Para um atendimento mais rápido, entre em contato pelo WhatsApp:
              </p>
              <WhatsAppCtaButton 
                message="Olá! Gostaria de mais informações sobre os serviços da InovaMente Labs."
                text="Falar no WhatsApp"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  width: '100%',
                  justifyContent: 'center',
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
