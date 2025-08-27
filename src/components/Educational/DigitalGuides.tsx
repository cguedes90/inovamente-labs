'use client';

import React, { useState } from 'react';

interface Guide {
  id: number;
  title: string;
  description: string;
  category: 'mvp' | 'automation' | 'integration' | 'scalability' | 'general';
  pages: number;
  downloadCount: number;
  thumbnail: string;
  topics: string[];
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  estimatedReadTime: string;
}

const guides: Guide[] = [
  {
    id: 1,
    title: 'Guia Completo para MVP: Do Conceito ao Lançamento',
    description: 'Manual passo-a-passo para validar suas ideias rapidamente com investimento mínimo. Inclui templates, checklists e estudos de caso reais.',
    category: 'mvp',
    pages: 45,
    downloadCount: 1250,
    thumbnail: '📱',
    topics: ['Definição de MVP', 'Metodologia Lean', 'Priorização Features', 'Métricas de Validação', 'Case Studies'],
    level: 'Iniciante',
    estimatedReadTime: '2h 30min'
  },
  {
    id: 2,
    title: 'Automação de Processos Empresariais: ROI Garantido',
    description: 'Estratégias comprovadas para identificar, implementar e mensurar automações que geram retorno real. Com calculadora de ROI exclusiva.',
    category: 'automation',
    pages: 38,
    downloadCount: 980,
    thumbnail: '🤖',
    topics: ['Mapeamento de Processos', 'RPA vs Low-Code', 'Cálculo de ROI', 'Implementação Gradual', 'Ferramentas'],
    level: 'Intermediário',
    estimatedReadTime: '2h'
  },
  {
    id: 3,
    title: 'Arquitetura de Microserviços: Guia Prático',
    description: 'Transforme aplicações monolíticas em arquiteturas escaláveis. Padrões, anti-padrões, ferramentas e implementação real.',
    category: 'scalability',
    pages: 62,
    downloadCount: 750,
    thumbnail: '🏗️',
    topics: ['Domain-Driven Design', 'API Gateway', 'Service Mesh', 'Observabilidade', 'Deployment Strategies'],
    level: 'Avançado',
    estimatedReadTime: '3h 15min'
  },
  {
    id: 4,
    title: 'Integração de Sistemas: Conectando seu Ecossistema',
    description: 'Metodologias e ferramentas para integrar sistemas legados e modernos. ETL, APIs, middleware e casos práticos.',
    category: 'integration',
    pages: 41,
    downloadCount: 690,
    thumbnail: '🔗',
    topics: ['APIs RESTful', 'ETL Pipelines', 'Message Brokers', 'Data Mapping', 'Error Handling'],
    level: 'Intermediário',
    estimatedReadTime: '2h 15min'
  },
  {
    id: 5,
    title: 'Transformação Digital para PMEs: Primeiro Passos',
    description: 'Roadmap completo para pequenas e médias empresas iniciarem sua jornada digital de forma estruturada e econômica.',
    category: 'general',
    pages: 28,
    downloadCount: 1850,
    thumbnail: '🚀',
    topics: ['Diagnóstico Digital', 'Priorização Investimentos', 'Quick Wins', 'Roadmap Tecnológico', 'Gestão da Mudança'],
    level: 'Iniciante',
    estimatedReadTime: '1h 30min'
  },
  {
    id: 6,
    title: 'Cloud Migration: Estratégias e Melhores Práticas',
    description: 'Plano detalhado para migrar sistemas para cloud com segurança, eficiência e controle de custos. Inclui checklists e templates.',
    category: 'scalability',
    pages: 55,
    downloadCount: 540,
    thumbnail: '☁️',
    topics: ['Assessment Inicial', 'Estratégias de Migração', 'Cost Optimization', 'Security Best Practices', 'Monitoring'],
    level: 'Avançado',
    estimatedReadTime: '3h'
  },
  {
    id: 7,
    title: 'DevOps para Startups: Acelere suas Entregas',
    description: 'Implementação prática de DevOps em ambientes ágeis. CI/CD, containerização, monitoramento e cultura DevOps.',
    category: 'general',
    pages: 33,
    downloadCount: 820,
    thumbnail: '⚙️',
    topics: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring', 'Team Culture'],
    level: 'Intermediário',
    estimatedReadTime: '1h 45min'
  },
  {
    id: 8,
    title: 'Performance Optimization: Aplicações que Voam',
    description: 'Técnicas avançadas para otimizar performance de aplicações web e mobile. Frontend, backend, banco de dados e caching.',
    category: 'scalability',
    pages: 47,
    downloadCount: 430,
    thumbnail: '⚡',
    topics: ['Profiling & Benchmarking', 'Database Optimization', 'Caching Strategies', 'CDN Implementation', 'Code Optimization'],
    level: 'Avançado',
    estimatedReadTime: '2h 30min'
  }
];

const categories = [
  { key: 'all', label: 'Todos os Guias', icon: '📚' },
  { key: 'mvp', label: 'MVP & Startups', icon: '🚀' },
  { key: 'automation', label: 'Automação', icon: '🤖' },
  { key: 'integration', label: 'Integração', icon: '🔗' },
  { key: 'scalability', label: 'Escalabilidade', icon: '📈' },
  { key: 'general', label: 'Geral', icon: '💡' }
];

export const DigitalGuides: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });

  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const handleDownload = (guide: Guide) => {
    setSelectedGuide(guide);
    setShowDownloadForm(true);
  };

  const submitDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria integrado com o sistema de email/CRM
    console.log('Download requested:', { guide: selectedGuide, userData: formData });
    
    // Simular download
    alert(`Obrigado ${formData.name}! O guia "${selectedGuide?.title}" será enviado para ${formData.email} em alguns minutos.`);
    
    setShowDownloadForm(false);
    setSelectedGuide(null);
    setFormData({ name: '', email: '', company: '', role: '' });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-blue-100 text-blue-800';
      case 'Avançado': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          📚 Biblioteca Digital Gratuita
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Guias práticos, templates e checklists desenvolvidos pela nossa equipe. 
          Baseados em +200 projetos reais para acelerar sua transformação digital.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(category => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {guides.length}
          </div>
          <div className="text-gray-600">Guias Disponíveis</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {guides.reduce((sum, guide) => sum + guide.downloadCount, 0).toLocaleString()}
          </div>
          <div className="text-gray-600">Downloads Realizados</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {guides.reduce((sum, guide) => sum + guide.pages, 0)}
          </div>
          <div className="text-gray-600">Páginas de Conteúdo</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            100%
          </div>
          <div className="text-gray-600">Gratuito</div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map(guide => (
          <div key={guide.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div className="p-6 text-center border-b border-gray-100">
              <div className="text-6xl mb-4">{guide.thumbnail}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(guide.level)}`}>
                {guide.level}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {guide.description}
              </p>

              {/* Topics */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {guide.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                  {guide.topics.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{guide.topics.length - 3} mais
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-4">
                  <span>📄 {guide.pages} páginas</span>
                  <span>⏱️ {guide.estimatedReadTime}</span>
                </div>
                <div>
                  ⬇️ {guide.downloadCount.toLocaleString()}
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(guide)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-4-4m4 4l4-4M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                </svg>
                Baixar Gratuitamente
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Download Form Modal */}
      {showDownloadForm && selectedGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Download Gratuito
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {selectedGuide.title}
                  </p>
                </div>
                <button
                  onClick={() => setShowDownloadForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <form onSubmit={submitDownload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Profissional *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu.email@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cargo/Função
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="CEO/Fundador">CEO/Fundador</option>
                    <option value="CTO/Diretor Técnico">CTO/Diretor Técnico</option>
                    <option value="Gerente TI">Gerente de TI</option>
                    <option value="Desenvolvedor">Desenvolvedor</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Consultor">Consultor</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <div className="text-sm text-blue-700">
                      <div className="font-medium">100% Gratuito e Sem Spam</div>
                      <div>
                        Enviamos apenas conteúdo relevante e você pode cancelar a qualquer momento.
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  📥 Enviar Guia por Email
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🎯 Precisa de Algo Mais Específico?
        </h3>
        <p className="text-gray-600 mb-6">
          Criamos materiais educativos personalizados para sua empresa. 
          Workshops, treinamentos e consultoria especializada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Material Personalizado
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
            Agendar Workshop
          </button>
        </div>
      </div>
    </div>
  );
};