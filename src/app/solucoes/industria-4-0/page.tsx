import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions } from '@/components/SEO/VoiceSearchOptimizer';
import { AnimatedStats, ProcessSteps, ProgressBar, ComparisonChart } from '@/components/Visual/Infographics';

export const metadata: Metadata = {
  title: 'Sistemas Web para Indústria 4.0 | IoT, Dashboard, Analytics | InovaMente Labs',
  description: 'Sistemas web para Indústria 4.0: dashboards IoT, analytics em tempo real, integração com sensores e máquinas. Transformação digital industrial no Brasil.',
  keywords: [
    'sistemas web indústria 4.0',
    'dashboard IoT industrial',
    'analytics tempo real fábrica',
    'integração sensores web',
    'transformação digital industrial',
    'sistema gestão produção'
  ],
  openGraph: {
    title: 'Sistemas Web para Indústria 4.0 | InovaMente Labs',
    description: 'Dashboards IoT, analytics em tempo real e integração total com máquinas. Revolucione sua fábrica com sistemas web inteligentes.',
    url: 'https://www.inovamentelabs.com.br/solucoes/industria-4-0',
    type: 'website',
    images: [
      {
        url: '/og-industria-4-0.png',
        width: 1200,
        height: 630,
        alt: 'Indústria 4.0 InovaMente Labs'
      }
    ]
  }
};

const industrialSolutions = [
  {
    icon: '📊',
    title: 'Dashboard IoT Inteligente',
    description: 'Visualização em tempo real de todos os dados da sua linha de produção',
    features: [
      'Monitoramento 24/7',
      'Alertas automáticos',
      'KPIs personalizáveis',
      'Histórico de dados',
      'Análise preditiva',
      'Mobile responsivo'
    ],
    benefits: ['Visibilidade total', 'Decisões baseadas em dados', 'Detecção precoce problemas'],
    price: 'R$ 35.000 - R$ 80.000',
    timeline: '8-12 semanas',
    popular: true
  },
  {
    icon: '🔗',
    title: 'Integração de Sistemas',
    description: 'Conecte ERP, MES, SCADA e todos os sistemas industriais',
    features: [
      'APIs RESTful',
      'Protocolos industriais',
      'Sincronização dados',
      'Middleware robusto',
      'Logs auditáveis',
      'Backup automático'
    ],
    benefits: ['Dados unificados', 'Eliminação silos', 'Eficiência operacional'],
    price: 'R$ 50.000 - R$ 150.000',
    timeline: '12-20 semanas'
  },
  {
    icon: '🤖',
    title: 'Analytics Preditiva',
    description: 'IA e Machine Learning para otimizar processos industriais',
    features: [
      'Predição de falhas',
      'Otimização produção',
      'Análise qualidade',
      'Manutenção preditiva',
      'Modelos ML customizados',
      'Relatórios automáticos'
    ],
    benefits: ['Redução paradas', 'Qualidade superior', 'ROI comprovado'],
    price: 'R$ 80.000 - R$ 200.000',
    timeline: '16-24 semanas'
  }
];

const industryStats = [
  { label: 'Redução Custos', value: 35, suffix: '%', icon: '💰', color: '#10B981' },
  { label: 'Aumento Produtividade', value: 42, suffix: '%', icon: '⚡', color: '#3B82F6' },
  { label: 'Redução Paradas', value: 60, suffix: '%', icon: '🔧', color: '#8B5CF6' },
  { label: 'ROI Médio', value: 280, suffix: '%', icon: '📈', color: '#F59E0B' }
];

const industryTechnologies = [
  { name: 'Node.js + TypeScript', expertise: 95, description: 'Backend robusto para aplicações industriais', icon: '🟢' },
  { name: 'React + D3.js', expertise: 92, description: 'Dashboards interativos e visualizações avançadas', icon: '📊' },
  { name: 'InfluxDB + Grafana', expertise: 90, description: 'Banco de dados temporal e monitoramento', icon: '📈' },
  { name: 'MQTT + WebSockets', expertise: 88, description: 'Comunicação IoT e dados em tempo real', icon: '🌐' },
  { name: 'Docker + Kubernetes', expertise: 85, description: 'Containerização e orquestração industrial', icon: '🐳' }
];

const implementationProcess = [
  {
    title: 'Auditoria Industrial',
    description: 'Análise completa dos processos e sistemas existentes',
    icon: '🔍',
    duration: '1-2 semanas',
    details: [
      'Mapeamento de processos',
      'Inventário de sistemas',
      'Análise de dados existentes',
      'Identificação de oportunidades'
    ]
  },
  {
    title: 'Arquitetura da Solução',
    description: 'Design da infraestrutura e fluxos de dados',
    icon: '🏗️',
    duration: '2-3 semanas',
    details: [
      'Arquitetura de dados',
      'Definição de APIs',
      'Protocolos de comunicação',
      'Plano de segurança'
    ]
  },
  {
    title: 'Desenvolvimento MVP',
    description: 'Implementação do núcleo funcional do sistema',
    icon: '⚙️',
    duration: '6-12 semanas',
    details: [
      'Backend core',
      'Dashboard básico',
      'Integrações principais',
      'Testes unitários'
    ]
  },
  {
    title: 'Implantação & Scale',
    description: 'Deploy gradual e expansão para toda a operação',
    icon: '🚀',
    duration: '4-8 semanas',
    details: [
      'Deploy ambiente produção',
      'Treinamento equipes',
      'Monitoramento inicial',
      'Otimização contínua'
    ]
  }
];

const useCases = [
  {
    title: 'Montadora Automobilística',
    challenge: 'Falta de visibilidade da linha de produção causava paradas não programadas',
    solution: 'Dashboard IoT com 200+ sensores e analytics preditiva',
    results: [
      '45% redução em paradas não programadas',
      'R$ 2.3M economia anual',
      '99.2% disponibilidade da linha'
    ],
    metrics: { downtime: '-45%', savings: 'R$ 2.3M', uptime: '99.2%' },
    industry: 'Automotiva'
  },
  {
    title: 'Indústria Química',
    challenge: 'Sistemas isolados impediam otimização dos processos produtivos',
    solution: 'Integração ERP-MES-SCADA com analytics em tempo real',
    results: [
      '30% redução no consumo de energia',
      '25% aumento na eficiência',
      'Conformidade total com normas'
    ],
    metrics: { energy: '-30%', efficiency: '+25%', compliance: '100%' },
    industry: 'Química'
  }
];

const roiComparison = [
  { label: 'Antes da Digitalização', value: 100, color: '#EF4444' },
  { label: 'Com Sistemas 4.0', value: 180, color: '#10B981' },
  { label: 'ROI Projetado Ano 2', value: 280, color: '#3B82F6' }
];

const primaryKeyword = 'sistemas web indústria 4.0';

export default function Industria40Page() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        title="Sistemas Web para Indústria 4.0 | IoT, Dashboard, Analytics | InovaMente Labs"
        description="Sistemas web para Indústria 4.0: dashboards IoT, analytics em tempo real, integração com sensores e máquinas. Transformação digital industrial no Brasil."
        url="https://www.inovamentelabs.com.br/solucoes/industria-4-0"
      />
      
      <Navbar />
      
      <Breadcrumbs items={[
        { label: 'Soluções', href: '/solucoes' },
        { label: 'Indústria 4.0', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6">
                🏭 Transformação Digital Industrial
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sistemas Web para
                <span className="block text-blue-300">Indústria 4.0</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                Dashboards IoT, analytics em tempo real e integração total com máquinas. 
                Revolucione sua fábrica com sistemas web inteligentes e dados acionáveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#solucoes" className="btn-secondary bg-white text-blue-600 px-8 py-4 text-lg font-semibold">
                  🔍 Ver Soluções
                </Link>
                <Link href="#cases" className="btn-primary border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold">
                  📈 Cases Industriais
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-300">35%</div>
                  <div className="text-sm opacity-90">Redução Custos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">42%</div>
                  <div className="text-sm opacity-90">↑ Produtividade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">60%</div>
                  <div className="text-sm opacity-90">↓ Paradas</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Características dos Nossos Sistemas:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-xl">🔄</span>
                    <div>
                      <div className="font-semibold">Tempo Real</div>
                      <div className="text-sm opacity-90">Dados atualizados a cada segundo</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-xl">🛡️</span>
                    <div>
                      <div className="font-semibold">Segurança Industrial</div>
                      <div className="text-sm opacity-90">Protocolos seguros para ambiente fabril</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-xl">📊</span>
                    <div>
                      <div className="font-semibold">Analytics Avançada</div>
                      <div className="text-sm opacity-90">IA e ML para otimização contínua</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-xl">🔗</span>
                    <div>
                      <div className="font-semibold">Integração Total</div>
                      <div className="text-sm opacity-90">Conecta todos os sistemas existentes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reais da Indústria 4.0
            </h2>
            <p className="text-xl text-gray-600">
              Impacto medido em clientes industriais
            </p>
          </div>
          
          <AnimatedStats stats={industryStats} duration={3000} />
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ROI Comprovado na Digitalização
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Indústrias que investem em sistemas 4.0 veem retorno médio de 280% em 24 meses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Payback médio de 8-12 meses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Redução de 35% nos custos operacionais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Aumento de 42% na produtividade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>60% menos paradas não programadas</span>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism-card">
              <ComparisonChart
                title="Evolução do ROI Industrial"
                items={roiComparison}
                type="circle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Solutions */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções para Indústria 4.0
            </h2>
            <p className="text-xl text-gray-600">
              Sistemas web especializados para transformação digital industrial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industrialSolutions.map((solution, index) => (
              <div key={index} className={`glassmorphism-card hover-lift ${solution.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Solicitado
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-bold text-blue-600 text-lg">{solution.price}</span>
                    <span className="text-gray-500">{solution.timeline}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Funcionalidades:</h4>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-3">Benefícios:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=industria-4-0&type=${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Consultoria
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico Industrial
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologias robustas e escaláveis para ambiente industrial
            </p>
          </div>

          <ProgressBar 
            items={industryTechnologies.map(tech => ({
              label: tech.name,
              value: tech.expertise,
              color: '#3B82F6'
            }))}
            animated={true}
            showPercentage={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industryTechnologies.map((tech, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{tech.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Implementação Industrial
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia especializada para ambiente de produção
            </p>
          </div>

          <ProcessSteps 
            steps={implementationProcess}
            interactive={true}
          />
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Use Cases */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso Industriais
            </h2>
            <p className="text-xl text-gray-600">
              Transformações digitais reais em diferentes segmentos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">
                    {useCase.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafio:</h4>
                    <p className="text-sm text-gray-600">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solução:</h4>
                    <p className="text-sm text-gray-600">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {Object.entries(useCase.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para a Transformação Digital Industrial?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Auditoria gratuita dos seus processos e proposta de digitalização personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=industria-4-0"
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              🏭 Auditoria Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de digitalizar minha indústria"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              💬 Falar com Especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sistemas Web para Indústria 4.0",
            "description": "Sistemas web especializados para transformação digital industrial com IoT, analytics e integração",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "audience": {
              "@type": "Audience",
              "audienceType": "Indústrias, Fábricas, Manufactura"
            },
            "offers": industrialSolutions.map(solution => ({
              "@type": "Offer",
              "name": solution.title,
              "description": solution.description,
              "price": solution.price,
              "priceCurrency": "BRL"
            }))
          })
        }}
      />
    </>
  );
}