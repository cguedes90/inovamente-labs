'use client';

import React, { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: string;
  }[];
  technologies: string[];
  timeline: string;
  teamSize: number;
  featured: boolean;
  thumbnail: string;
  category: 'mvp' | 'automation' | 'integration' | 'scalability' | 'transformation';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Marketplace B2B: De Startup a Unicórnio",
    client: "TechCommerce",
    industry: "E-commerce B2B",
    challenge: "Startup precisava validar rapidamente seu MVP de marketplace B2B e escalar para milhões de usuários em 18 meses para atingir meta de investimento.",
    solution: "Desenvolvimento de MVP em 30 dias + arquitetura escalável com microserviços, implementação de CI/CD, monitoramento avançado e otimização contínua.",
    results: [
      { metric: "Usuários Ativos", value: "2.5M", improvement: "De 0 para 2.5M", icon: "👥" },
      { metric: "Transações/mês", value: "R$ 150M", improvement: "Crescimento 800%", icon: "💰" },
      { metric: "Uptime", value: "99.99%", improvement: "Zero downtime", icon: "⚡" },
      { metric: "Time to Market", value: "30 dias", improvement: "75% mais rápido", icon: "🚀" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    timeline: "18 meses",
    teamSize: 8,
    featured: true,
    thumbnail: "🏪",
    category: "scalability"
  },
  {
    id: 2, 
    title: "Automação Total: Indústria 4.0",
    client: "Metalúrgica Precision",
    industry: "Manufatura",
    challenge: "Processos 100% manuais, alta taxa de erro, desperdício de material e impossibilidade de rastreamento em tempo real da produção.",
    solution: "Implementação de IoT sensors, dashboard de monitoramento em tempo real, automação de controle de qualidade e integração com ERP existente.",
    results: [
      { metric: "Redução Erros", value: "92%", improvement: "De 15% para 1.2%", icon: "🎯" },
      { metric: "Eficiência", value: "+48%", improvement: "Produção otimizada", icon: "⚙️" },
      { metric: "Desperdício", value: "-65%", improvement: "Controle material", icon: "♻️" },
      { metric: "ROI", value: "420%", improvement: "Primeiro ano", icon: "📊" }
    ],
    technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Docker", "Azure IoT"],
    timeline: "8 meses",
    teamSize: 5,
    featured: true,
    thumbnail: "🏭",
    category: "automation"
  },
  {
    id: 3,
    title: "Fintech: Pagamentos em Tempo Real",
    client: "PayFlow",
    industry: "Fintech",
    challenge: "Processar milhões de transações com latência <100ms, compliance PCI-DSS e integração com 50+ bancos brasileiros.",
    solution: "Arquitetura event-driven com Apache Kafka, API Gateway Kong, criptografia end-to-end e sistema de monitoramento em tempo real.",
    results: [
      { metric: "Transações/dia", value: "15M", improvement: "Capacidade ilimitada", icon: "💳" },
      { metric: "Latência", value: "45ms", improvement: "Abaixo do target", icon: "⚡" },
      { metric: "Compliance", value: "PCI-DSS L1", improvement: "Máxima segurança", icon: "🔒" },
      { metric: "Bancos", value: "73", improvement: "Cobertura total", icon: "🏦" }
    ],
    technologies: ["Go", "Kafka", "PostgreSQL", "Kong", "Kubernetes", "GCP"],
    timeline: "12 meses",
    teamSize: 6,
    featured: true,
    thumbnail: "💰",
    category: "scalability"
  },
  {
    id: 4,
    title: "Saúde Digital: Telemedicina Escalável",
    client: "MedConnect",
    industry: "Healthcare",
    challenge: "Pandemia aumentou demanda 1000%. Sistema não suportava carga e médicos perdiam consultas por instabilidade.",
    solution: "Migração para cloud, implementação de auto-scaling, CDN global, otimização de banco de dados e sistema de filas.",
    results: [
      { metric: "Consultas/dia", value: "50K", improvement: "Crescimento 2000%", icon: "👨‍⚕️" },
      { metric: "Médicos", value: "5K", improvement: "Rede expandida", icon: "🩺" },
      { metric: "Uptime", value: "99.97%", improvement: "De 85% para 99.97%", icon: "📈" },
      { metric: "Satisfação", value: "4.8/5", improvement: "Net Promoter Score", icon: "⭐" }
    ],
    technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS", "WebRTC"],
    timeline: "6 meses",
    teamSize: 7,
    featured: false,
    thumbnail: "🏥",
    category: "scalability"
  },
  {
    id: 5,
    title: "AgriTech: Fazendas Inteligentes",
    client: "SmartFarm Solutions", 
    industry: "Agronegócio",
    challenge: "Fazendeiros não tinham visibilidade das condições das culturas, resultando em perdas de 30% da produção por problemas não detectados.",
    solution: "Rede de sensores IoT, machine learning para predição, dashboard mobile e sistema de alertas automáticos por WhatsApp.",
    results: [
      { metric: "Redução Perdas", value: "78%", improvement: "De 30% para 6.6%", icon: "🌾" },
      { metric: "Produtividade", value: "+35%", improvement: "Otimização recursos", icon: "📈" },
      { metric: "Fazendas", value: "180", improvement: "Rede expandindo", icon: "🚜" },
      { metric: "Economia", value: "R$ 2.8M", improvement: "Por safra", icon: "💰" }
    ],
    technologies: ["Python", "TensorFlow", "MongoDB", "MQTT", "React Native", "AWS IoT"],
    timeline: "10 meses",
    teamSize: 4,
    featured: false,
    thumbnail: "🌱",
    category: "automation"
  },
  {
    id: 6,
    title: "Varejo: Integração Omnichannel",
    client: "Fashion Forward",
    industry: "Varejo de Moda",
    challenge: "Inventário descoordenado entre loja física, e-commerce e marketplaces causava overselling e frustrações dos clientes.",
    solution: "Sistema centralizado de inventário, integração com 15 marketplaces, sincronização em tempo real e analytics preditivo.",
    results: [
      { metric: "Overselling", value: "0%", improvement: "Eliminado 100%", icon: "🎯" },
      { metric: "Vendas", value: "+89%", improvement: "Conversão otimizada", icon: "📊" },
      { metric: "Marketplaces", value: "15", improvement: "Presença ampliada", icon: "🛒" },
      { metric: "Satisfação", value: "96%", improvement: "Cliente feliz", icon: "😊" }
    ],
    technologies: ["Node.js", "MongoDB", "Redis", "Elasticsearch", "React", "Docker"],
    timeline: "7 meses",
    teamSize: 5,
    featured: false,
    thumbnail: "👗",
    category: "integration"
  }
];

const categories = [
  { key: 'all', label: 'Todos os Cases', icon: '📋' },
  { key: 'featured', label: 'Destaques', icon: '⭐' },
  { key: 'mvp', label: 'MVP & Startups', icon: '🚀' },
  { key: 'automation', label: 'Automação', icon: '🤖' },
  { key: 'integration', label: 'Integração', icon: '🔗' },
  { key: 'scalability', label: 'Escalabilidade', icon: '📈' },
  { key: 'transformation', label: 'Transformação', icon: '🔄' }
];

export const CaseStudiesGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : selectedCategory === 'featured'
    ? caseStudies.filter(cs => cs.featured)
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const openCaseModal = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
  };

  const closeCaseModal = () => {
    setSelectedCase(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🎯 Cases de Sucesso Detalhados
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Projetos reais com resultados mensuráveis. Veja como transformamos desafios 
          complexos em soluções que geram valor para nossos clientes.
        </p>
      </div>

      {/* Category Filters */}
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

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredCases.map(caseStudy => (
          <div 
            key={caseStudy.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
            onClick={() => openCaseModal(caseStudy)}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{caseStudy.thumbnail}</div>
                {caseStudy.featured && (
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    ⭐ Destaque
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {caseStudy.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-medium">{caseStudy.client}</span>
                <span>•</span>
                <span>{caseStudy.industry}</span>
              </div>
            </div>

            {/* Challenge Preview */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Desafio:</h4>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Key Results */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {caseStudy.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-lg">{result.icon}</div>
                    <div className="font-bold text-green-600">{result.value}</div>
                    <div className="text-xs text-gray-600">{result.metric}</div>
                  </div>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>⏱️ {caseStudy.timeline}</span>
                  <span>👥 {caseStudy.teamSize} devs</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline">
                  Ver Detalhes →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            📊 Impacto Consolidado dos Nossos Cases
          </h3>
          <p className="text-gray-600">
            Resultados reais mensurados em projetos dos últimos 24 meses
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">R$ 50M+</div>
            <div className="text-gray-600 text-sm">Economia Gerada para Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18M+</div>
            <div className="text-gray-600 text-sm">Usuários Impactados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
            <div className="text-gray-600 text-sm">Uptime Médio Alcançado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6.8</div>
            <div className="text-gray-600 text-sm">Meses Payback Médio</div>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-96 overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{selectedCase.thumbnail}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {selectedCase.title}
                      </h3>
                      <div className="text-gray-600">
                        {selectedCase.client} • {selectedCase.industry}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeCaseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      🎯 Desafio
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      💡 Solução
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedCase.solution}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      🛠️ Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      📈 Resultados Alcançados
                    </h4>
                    <div className="grid gap-4">
                      {selectedCase.results.map((result, index) => (
                        <div key={index} className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{result.icon}</span>
                            <div>
                              <div className="font-bold text-green-600 text-xl">
                                {result.value}
                              </div>
                              <div className="text-gray-700 font-medium">
                                {result.metric}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      📋 Informações do Projeto
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{selectedCase.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tamanho da Equipe:</span>
                        <span className="font-medium">{selectedCase.teamSize} desenvolvedores</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categoria:</span>
                        <span className="font-medium capitalize">{selectedCase.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Interessado em resultados similares para sua empresa?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Agendar Consultoria
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Solicitar Proposta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};