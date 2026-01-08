'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import WhatsAppCtaButton from '@/components/WhatsAppCtaButton'
import styles from './contact.module.css'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Mostrar mensagem de sucesso
      setShowSuccess(true);
      
      // Ocultar mensagem após 5 segundos
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error: any) {
      console.error('Erro ao enviar:', error);
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <WhatsAppButton />

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            📞 Entre em Contato
          </h1>
          <p className={styles.subtitle}>
            Estamos prontos para transformar suas ideias em realidade digital.
            Fale conosco e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Formulário */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>
                ✉️
              </div>
              <h2 className={styles.formTitle}>
                Nos envie sua solicitação
              </h2>
            </div>

            <p className={styles.formDescription}>
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>

            {/* Mensagem de Sucesso */}
            {showSuccess && (
              <div className={styles.successMessage}>
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {/* Mensagem de Erro */}
            {error && (
              <div className={styles.errorMessage}>
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Nome Completo <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da empresa"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Assunto <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="">Selecione o assunto da sua solicitação</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="suporte">Suporte</option>
                  <option value="orcamento">Orçamento</option>
                  <option value="outros">Outros Temas</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  rows={5}
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? '⏳ Enviando...' : '✉️ Enviar Solicitação'}
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className={styles.infoSection}>
            <h3 className={styles.formTitle}>
              Informações de Contato
            </h3>

            {/* Telefone */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon} style={{ background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)' }}>
                  📞
                </div>
                <h4 className={styles.infoTitle}>
                  Telefone
                </h4>
              </div>
              <p className={styles.infoContent}>
                <a href="tel:+5511974508168" className={styles.infoLink}>(11) 9 7450-8168</a>
                <br />
                Segunda a Sexta, 9h às 18h
              </p>
            </div>

            {/* Email */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon} style={{ background: 'linear-gradient(45deg, #22c55e, #16a34a)' }}>
                  ✉️
                </div>
                <h4 className={styles.infoTitle}>
                  Email
                </h4>
              </div>
              <p className={styles.infoContent}>
                <a href="mailto:contato@inovamentelabs.com.br" className={styles.infoLink}>contato@inovamentelabs.com.br</a>
                <br />
                Respondemos em até 24 horas
              </p>
            </div>

            {/* Localização */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon} style={{ background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)' }}>
                  📍
                </div>
                <h4 className={styles.infoTitle}>
                  Localização
                </h4>
              </div>
              <p className={styles.infoContent}>
                São José dos Campos, SP
                <br />
                Atendemos todo o Brasil
              </p>
            </div>

            {/* Horário */}
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon} style={{ background: 'linear-gradient(45deg, #f59e0b, #d97706)' }}>
                  🕒
                </div>
                <h4 className={styles.infoTitle}>
                  Horário de Funcionamento
                </h4>
              </div>
              <p className={styles.infoContent}>
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 12h
                <br />
                <span style={{ fontSize: '14px' }}>Fuso horário: GMT-3 (Brasília)</span>
              </p>
            </div>

            {/* WhatsApp */}
            <div className={styles.whatsappCta}>
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
