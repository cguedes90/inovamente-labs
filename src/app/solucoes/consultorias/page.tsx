import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions } from '@/components/SEO/VoiceSearchOptimizer';
import { AnimatedStats, ProcessSteps, ProgressBar, ComparisonChart } from '@/components/Visual/Infographics';

export const metadata: Metadata = {
  title: 'Soluções Digitais para Consultorias | CRM, Portal Cliente, Automação | InovaMente Labs',
  description: 'Sistemas digitais para consultorias: CRM especializado, portal do cliente, automação de relatórios, gestão de projetos e dashboards executivos.',
  keywords: [
    'sistema consultoria Brasil',
    'CRM consultoria empresarial',
    'portal cliente consultoria',
    'automação relatórios consultoria',
    'dashboard executivo consultoria',
    'gestão projetos consultoria'
  ],
  openGraph: {
    title: 'Soluções Digitais para Consultorias | InovaMente Labs',
    description: 'CRM especializado, portal do cliente, automação de relatórios e dashboards executivos. Digitalize sua consultoria e escale sem limites.',
    url: 'https://www.inovamentelabs.com.br/solucoes/consultorias',
    type: 'website',
    images: [
      {
        url: '/og-consultorias.png',
        width: 1200,
        height: 630,
        alt: 'Soluções para Consultorias InovaMente Labs'
      }
    ]
  }
};

const consultingSolutions = [
  {
    icon: '👥',
    title: 'CRM Consultoria Especializado',
    description: 'Sistema completo para gestão de leads, clientes e oportunidades',
    features: [
      'Pipeline de vendas',
      'Gestão de leads qualificados',
      'Histórico completo cliente',
      'Automação follow-up',
      'Relatórios de performance',
      'Integração email/WhatsApp'
    ],
    benefits: ['40% mais conversões', 'Zero leads perdidos', 'Vendas previsíveis'],
    price: 'R$ 18.000 - R$ 45.000',
    timeline: '6-10 semanas',
    popular: true
  },
  {
    icon: '📊',
    title: 'Portal do Cliente Premium',
    description: 'Ambiente exclusivo para clientes acompanharem projetos',
    features: [
      'Dashboard personalizado',
      'Relatórios em tempo real',
      'Comunicação centralizada',
      'Aprovações online',
      'Histórico de projetos',
      'Mobile responsivo'
    ],
    benefits: ['Clientes mais engajados', 'Processo transparente', 'Menos retrabalho'],
    price: 'R$ 25.000 - R$ 60.000',
    timeline: '8-12 semanas'
  },
  {
    icon: '🤖',
    title: 'Automação de Relatórios',
    description: 'Geração automática de relatórios executivos e dashboards',
    features: [
      'Coleta automática de dados',
      'Templates personalizados',
      'Gráficos interativos',
      'Agendamento automático',
      'Multi-formato (PDF, Excel)',
      'Distribuição automática'
    ],
    benefits: ['80% tempo economizado', 'Zero erros manuais', 'Relatórios consistentes'],
    price: 'R$ 15.000 - R$ 40.000',
    timeline: '4-8 semanas'
  }
];

const consultingStats = [
  { label: 'Aumento Produtividade', value: 65, suffix: '%', icon: '⚡', color: '#10B981' },
  { label: 'Redução Retrabalho', value: 80, suffix: '%', icon: '🎯', color: '#3B82F6' },
  { label: 'Satisfação Cliente', value: 95, suffix: '%', icon: '😊', color: '#8B5CF6' },
  { label: 'ROI Médio', value: 320, suffix: '%', icon: '💰', color: '#F59E0B' }
];

const consultingTypes = [
  { 
    type: 'Consultoria Estratégica', 
    solution: 'CRM + Dashboard Executivo',
    features: ['Pipeline B2B', 'Relatórios executivos', 'ROI tracking'],
    color: '#3B82F6'
  },
  { 
    type: 'Consultoria Financeira', 
    solution: 'Portal Cliente + Automação',
    features: ['Relatórios financeiros', 'Portal compliance', 'Dashboards KPI'],
    color: '#10B981'
  },
  { 
    type: 'Consultoria RH', 
    solution: 'Sistema Gestão Pessoas',
    features: ['Portal funcionários', 'Avaliações automáticas', 'Analytics RH'],
    color: '#8B5CF6'
  },
  { 
    type: 'Consultoria TI', 
    solution: 'Plataforma Técnica',
    features: ['Tickets automáticos', 'SLA monitoring', 'Knowledge base'],
    color: '#F59E0B'
  }
];

const digitalizationBenefits = [
  {
    metric: 'Capacidade de Atendimento',
    traditional: 10,
    digital: 50,
    unit: 'clientes/mês',
    improvement: '+400%'
  },
  {
    metric: 'Tempo Relatórios',
    traditional: 8,
    digital: 1,
    unit: 'horas',
    improvement: '-87%'
  },
  {
    metric: 'Taxa de Retenção',
    traditional: 65,
    digital: 92,
    unit: '%',
    improvement: '+42%'
  },
  {
    metric: 'Margem de Lucro',
    traditional: 25,
    digital: 45,
    unit: '%',
    improvement: '+80%'
  }
];

const implementationSteps = [
  {
    title: 'Análise Consultoria',
    description: 'Mapeamento de processos e necessidades específicas',
    icon: '🔍',
    duration: '5-7 dias',
    details: [
      'Entrevistas com sócios',
      'Análise fluxos atuais',
      'Identificação gargalos',
      'Definição escopo digital'
    ]
  },
  {
    title: 'Design da Solução',
    description: 'Arquitetura personalizada para sua consultoria',
    icon: '📐',
    duration: '7-10 dias',
    details: [
      'UX/UI especializado',
      'Fluxos de trabalho',
      'Integrações necessárias',
      'Plano de dados'
    ]
  },
  {
    title: 'Desenvolvimento MVP',
    description: 'Construção do núcleo funcional da plataforma',
    icon: '⚙️',
    duration: '6-12 semanas',
    details: [
      'Backend robusto',
      'Interface intuitiva',
      'Integrações core',
      'Testes beta'
    ]
  },
  {
    title: 'Go-Live & Escala',
    description: 'Lançamento e expansão para toda operação',
    icon: '🚀',
    duration: '2-4 semanas',
    details: [
      'Treinamento equipe',
      'Migração de dados',
      'Acompanhamento inicial',
      'Otimização contínua'
    ]
  }
];

const consultingROI = [
  { label: 'Consultoria Tradicional', value: 100, color: '#EF4444' },
  { label: 'Com Digitalização', value: 320, color: '#10B981' },
  { label: 'Projeção Ano 2', value: 450, color: '#3B82F6' }
];

const successCases = [
  {
    title: 'Consultoria Estratégica - 10x Crescimento',
    challenge: 'Gestão manual de 20 clientes limitava crescimento',
    solution: 'CRM especializado + Portal cliente + Automação relatórios',
    results: [
      '10x crescimento em clientes (20→200)',
      'R$ 3M+ aumento receita anual',
      '95% satisfação clientes'
    ],
    metrics: { growth: '10x', revenue: 'R$ 3M+', satisfaction: '95%' },
    consultingType: 'Estratégica'
  },
  {
    title: 'Consultoria RH - R$ 1.5M ROI',
    challenge: 'Processos manuais custavam 60h/semana da equipe',
    solution: 'Plataforma completa de gestão de pessoas e processos',
    results: [
      'R$ 1.5M economia em 18 meses',
      '75% redução tempo operacional',
      '300% aumento capacidade atendimento'
    ],
    metrics: { roi: 'R$ 1.5M', efficiency: '+300%', time: '-75%' },
    consultingType: 'RH'
  }
];

const technologyStack = [
  { name: 'React + Next.js', proficiency: 98, description: 'Interfaces modernas e responsivas', icon: '⚛️' },
  { name: 'Node.js + Express', proficiency: 96, description: 'Backend robusto e escalável', icon: '🟢' },
  { name: 'PostgreSQL', proficiency: 94, description: 'Banco de dados confiável', icon: '🐘' },
  { name: 'Chart.js + D3', proficiency: 92, description: 'Visualizações e dashboards', icon: '📊' },
  { name: 'AWS/Azure', proficiency: 90, description: 'Infraestrutura empresarial', icon: '☁️' }
];

const pricingOptions = [
  {
    name: 'Digital Start',
    price: 'R$ 18.000',
    description: 'Digitalização básica para pequenas consultorias',
    features: [
      'CRM especializado',
      'Portal cliente básico',
      'Relatórios automáticos',
      'Integração email',
      '60 dias suporte',
      'Treinamento equipe'
    ],
    suitable: 'Até 20 clientes',
    cta: 'Começar Digitalização'
  },
  {
    name: 'Business Pro',
    price: 'R$ 45.000',
    description: 'Solução completa para consultorias estabelecidas',
    features: [
      'Plataforma completa',
      'Portal cliente premium',
      'Automação avançada',
      'Dashboards executivos',
      'Integrações múltiplas',
      '120 dias suporte'
    ],
    suitable: '20-100 clientes',
    popular: true,
    cta: 'Escalar Consultoria'
  },
  {
    name: 'Enterprise',
    price: 'R$ 80.000+',
    description: 'Solução enterprise para grandes consultorias',
    features: [
      'Customização completa',
      'Multi-tenant',
      'APIs personalizadas',
      'BI avançado',
      'Suporte dedicado',
      'SLA garantido'
    ],
    suitable: '100+ clientes',
    cta: 'Consulta Especializada'
  }
];

const primaryKeyword = 'soluções digitais consultoria';

export default function ConsultoriasPage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        title="Soluções Digitais para Consultorias | CRM, Portal Cliente, Automação | InovaMente Labs"
        description="Sistemas digitais para consultorias: CRM especializado, portal do cliente, automação de relatórios, gestão de projetos e dashboards executivos."
        url="https://www.inovamentelabs.com.br/solucoes/consultorias"
      />
      
      <Navbar />
      
      <Breadcrumbs items={[
        { label: 'Soluções', href: '/solucoes' },
        { label: 'Consultorias', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6">
                🎯 Para Consultores Visionários
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digitalize sua
                <span className="block text-cyan-300">Consultoria</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                CRM especializado, portal do cliente e automação de relatórios. 
                Escale sua consultoria sem limites com sistemas que trabalham para você 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#solucoes" className="btn-secondary bg-white text-blue-600 px-8 py-4 text-lg font-semibold">
                  🚀 Ver Soluções
                </Link>
                <Link href="#casos" className="btn-primary border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold">
                  📈 Cases de Sucesso
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-300">+65%</div>
                  <div className="text-sm opacity-90">Produtividade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-300">320%</div>
                  <div className="text-sm opacity-90">ROI Médio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-300">95%</div>
                  <div className="text-sm opacity-90">Satisfação</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Transformações que Oferecemos:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 text-xl">👥</span>
                    <div>
                      <div className="font-semibold">CRM Inteligente</div>
                      <div className="text-sm opacity-90">Pipeline otimizado para consultorias</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 text-xl">📊</span>
                    <div>
                      <div className="font-semibold">Portal do Cliente</div>
                      <div className="text-sm opacity-90">Experiência premium para seus clientes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 text-xl">🤖</span>
                    <div>
                      <div className="font-semibold">Automação Total</div>
                      <div className="text-sm opacity-90">Relatórios e processos automatizados</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 text-xl">📈</span>
                    <div>
                      <div className="font-semibold">Escalabilidade</div>
                      <div className="text-sm opacity-90">De 10 para 100+ clientes sem esforço</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto da Digitalização em Consultorias
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de consultores que digitalizaram
            </p>
          </div>
          
          <AnimatedStats stats={consultingStats} duration={2500} />
        </div>
      </section>

      {/* Traditional vs Digital */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Consultoria Tradicional vs Digital
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Veja a diferença que a digitalização faz na sua operação e resultados.
              </p>
              
              <div className="space-y-6">
                {digitalizationBenefits.map((benefit, index) => (
                  <div key={index} className="glassmorphism-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{benefit.metric}</h4>
                      <span className="text-green-600 font-bold text-sm">
                        {benefit.improvement}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">
                        Tradicional: {benefit.traditional}{benefit.unit}
                      </span>
                      <span className="text-green-600 font-bold">
                        Digital: {benefit.digital}{benefit.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glassmorphism-card">
              <ComparisonChart
                title="ROI Acumulado - Consultoria Digital"
                items={consultingROI}
                type="circle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Solutions */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções para Consultoria
            </h2>
            <p className="text-xl text-gray-600">
              Sistemas especializados para diferentes tipos de consultoria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {consultingSolutions.map((solution, index) => (
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
                  href={`/contato?service=consultoria-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            ))}
          </div>

          {/* Consulting Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingTypes.map((type, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md border-l-4" style={{ borderColor: type.color }}>
                <h4 className="font-bold text-gray-900 mb-2">{type.type}</h4>
                <p className="text-sm text-gray-600 mb-3">{type.solution}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Stack Tecnológico para Consultorias
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologias robustas e seguras para ambientes corporativos
            </p>
          </div>

          <ProgressBar 
            items={technologyStack.map(tech => ({
              label: tech.name,
              value: tech.proficiency,
              color: '#3B82F6'
            }))}
            animated={true}
            showPercentage={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {technologyStack.map((tech, index) => (
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
              Processo de Digitalização
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia especializada para consultoria
            </p>
          </div>

          <ProcessSteps 
            steps={implementationSteps}
            interactive={true}
          />
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Success Cases */}
      <section id="casos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultorias que Cresceram 10x
            </h2>
            <p className="text-xl text-gray-600">
              Cases reais de transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successCases.map((successCase, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">
                    {successCase.consultingType}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{successCase.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafio:</h4>
                    <p className="text-sm text-gray-600">{successCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solução:</h4>
                    <p className="text-sm text-gray-600">{successCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {successCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {Object.entries(successCase.metrics).map(([key, value], idx) => (
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Digitalização
            </h2>
            <p className="text-xl text-gray-600">
              Soluções para consultorias de todos os portes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <div key={index} className={`glassmorphism-card hover-lift ${option.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                  <p className="text-gray-600">{option.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold">
                    {option.suitable}
                  </span>
                </div>

                <Link
                  href={`/contato?service=consultoria&plan=${option.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`btn-primary w-full text-center ${option.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                >
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Escalar sua Consultoria?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Análise gratuita da sua operação e proposta de digitalização personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=consultoria"
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              🎯 Análise Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de digitalizar minha consultoria"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              💬 Conversar no WhatsApp
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
            "name": "Soluções Digitais para Consultorias",
            "description": "Sistemas especializados para consultorias: CRM, portal do cliente, automação e dashboards executivos",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "audience": {
              "@type": "Audience",
              "audienceType": "Consultorias, Consultores, Empresas de Consultoria"
            },
            "offers": consultingSolutions.map(solution => ({
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