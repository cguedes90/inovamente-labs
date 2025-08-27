import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions } from '@/components/SEO/VoiceSearchOptimizer';
import { AnimatedStats, ProcessSteps, ProgressBar, InteractiveTimeline } from '@/components/Visual/Infographics';

export const metadata: Metadata = {
  title: 'Migração de Sistema Legacy | Modernização Segura e Sem Interrupções | InovaMente Labs',
  description: 'Migração de sistemas legados para tecnologias modernas. Processo seguro, dados preservados, zero downtime e aumento de performance. Especialistas em modernização.',
  keywords: [
    'migração sistema legacy Brasil',
    'modernização sistema antigo',
    'migração dados sem perda',
    'atualização sistema empresarial',
    'migração zero downtime',
    'modernização tecnológica empresa'
  ],
  openGraph: {
    title: 'Migração de Sistema Legacy | InovaMente Labs',
    description: 'Migração segura de sistemas antigos para tecnologias modernas. Zero downtime, dados preservados e performance 10x superior.',
    url: 'https://www.inovamentelabs.com.br/solucoes/migracao-legacy',
    type: 'website',
    images: [
      {
        url: '/og-migracao-legacy.png',
        width: 1200,
        height: 630,
        alt: 'Migração Sistema Legacy InovaMente Labs'
      }
    ]
  }
};

const migrationChallenges = [
  {
    challenge: 'Sistema Lento e Instável',
    impact: 'Produtividade reduzida, clientes insatisfeitos',
    solution: 'Migração para arquitetura moderna e escalável',
    icon: '🐌',
    urgency: 'Alta'
  },
  {
    challenge: 'Manutenção Custosa',
    impact: 'Recursos técnicos escassos, custos elevados',
    solution: 'Tecnologias atuais com suporte amplo',
    icon: '💸',
    urgency: 'Alta'
  },
  {
    challenge: 'Falta de Integração',
    impact: 'Dados isolados, processos manuais',
    solution: 'APIs modernas e integrações nativas',
    icon: '🔗',
    urgency: 'Média'
  },
  {
    challenge: 'Segurança Vulnerável',
    impact: 'Risco de ataques, compliance comprometido',
    solution: 'Segurança por design com padrões atuais',
    icon: '🛡️',
    urgency: 'Crítica'
  }
];

const migrationStats = [
  { label: 'Performance Improvement', value: 850, suffix: '%', icon: '⚡', color: '#10B981' },
  { label: 'Redução Custos Manutenção', value: 75, suffix: '%', icon: '💰', color: '#3B82F6' },
  { label: 'Aumento Segurança', value: 95, suffix: '%', icon: '🛡️', color: '#8B5CF6' },
  { label: 'ROI em 12 meses', value: 340, suffix: '%', icon: '📈', color: '#F59E0B' }
];

const migrationApproaches = [
  {
    approach: 'Replatforming',
    description: 'Migração com mudanças mínimas na arquitetura',
    timeline: '3-6 meses',
    risk: 'Baixo',
    cost: 'Baixo',
    benefits: ['Rápida implementação', 'Risco mínimo', 'Melhoria imediata'],
    suitable: 'Sistemas funcionais que precisam de modernização básica',
    icon: '🔄'
  },
  {
    approach: 'Refactoring',
    description: 'Reestruturação completa mantendo funcionalidades',
    timeline: '6-12 meses',
    risk: 'Médio',
    cost: 'Médio',
    benefits: ['Arquitetura otimizada', 'Performance superior', 'Manutenibilidade'],
    suitable: 'Sistemas com lógica complexa que precisa ser preservada',
    icon: '🏗️'
  },
  {
    approach: 'Rebuild',
    description: 'Reconstrução completa com tecnologias modernas',
    timeline: '9-18 meses',
    risk: 'Alto',
    cost: 'Alto',
    benefits: ['Solução sob medida', 'Tecnologia de ponta', 'Escalabilidade máxima'],
    suitable: 'Sistemas críticos que precisam de transformação total',
    icon: '🚀'
  }
];

const migrationTimeline = [
  {
    date: 'Fase 1',
    title: 'Auditoria e Análise',
    description: 'Mapeamento completo do sistema atual',
    icon: '🔍',
    color: '#3B82F6'
  },
  {
    date: 'Fase 2',
    title: 'Planejamento Estratégico',
    description: 'Definição da estratégia de migração',
    icon: '📋',
    color: '#10B981'
  },
  {
    date: 'Fase 3',
    title: 'Desenvolvimento',
    description: 'Construção da nova solução',
    icon: '⚙️',
    color: '#8B5CF6'
  },
  {
    date: 'Fase 4',
    title: 'Migração Gradual',
    description: 'Transição segura dos dados e processos',
    icon: '🔄',
    color: '#F59E0B'
  },
  {
    date: 'Fase 5',
    title: 'Go-Live',
    description: 'Ativação completa do novo sistema',
    icon: '🚀',
    color: '#EF4444'
  }
];

const migrationProcess = [
  {
    title: 'Discovery & Assessment',
    description: 'Análise profunda do sistema atual e requisitos',
    icon: '🔎',
    duration: '2-4 semanas',
    details: [
      'Auditoria técnica completa',
      'Mapeamento de dependências',
      'Análise de riscos',
      'Levantamento de requisitos',
      'Definição de escopo',
      'Plano de migração'
    ]
  },
  {
    title: 'Architecture Design',
    description: 'Design da nova arquitetura e estratégia',
    icon: '📐',
    duration: '2-3 semanas',
    details: [
      'Arquitetura de solução',
      'Stack tecnológico',
      'Plano de dados',
      'Estratégia de segurança',
      'Plano de testes',
      'Cronograma detalhado'
    ]
  },
  {
    title: 'Development & Testing',
    description: 'Desenvolvimento da nova solução',
    icon: '⚙️',
    duration: '8-20 semanas',
    details: [
      'Desenvolvimento iterativo',
      'Testes automatizados',
      'Migração de dados',
      'Testes de performance',
      'Validação usuários',
      'Homologação cliente'
    ]
  },
  {
    title: 'Deployment & Support',
    description: 'Go-live e suporte pós-migração',
    icon: '🚀',
    duration: '2-4 semanas',
    details: [
      'Deploy produção',
      'Monitoramento 24/7',
      'Suporte usuários',
      'Otimização performance',
      'Treinamento equipes',
      'Documentação completa'
    ]
  }
];

const technologyStack = [
  { from: 'COBOL/Mainframe', to: 'Java/Spring Boot', modernization: 95 },
  { from: 'VB6/Access', to: 'C#/.NET Core', modernization: 92 },
  { from: 'PHP 5/MySQL', to: 'Node.js/PostgreSQL', modernization: 88 },
  { from: 'ASP Classic', to: 'React/Next.js', modernization: 94 },
  { from: 'Oracle Forms', to: 'Angular/Material', modernization: 90 }
];

const riskMitigation = [
  {
    risk: 'Perda de Dados',
    mitigation: 'Backup múltiplo + Migração incremental + Validação automática',
    probability: 'Muito Baixa',
    impact: 'Crítico',
    prevention: '99.9%'
  },
  {
    risk: 'Downtime Prolongado',
    mitigation: 'Migração Blue/Green + Rollback automático + Testes de stress',
    probability: 'Baixa',
    impact: 'Alto',
    prevention: '95%'
  },
  {
    risk: 'Incompatibilidade',
    mitigation: 'Testes extensivos + Ambiente staging + Validação incremental',
    probability: 'Média',
    impact: 'Médio',
    prevention: '90%'
  },
  {
    risk: 'Resistência Usuários',
    mitigation: 'Treinamento + UX intuitivo + Suporte dedicado + Change management',
    probability: 'Baixa',
    impact: 'Médio',
    prevention: '85%'
  }
];

const successStories = [
  {
    title: 'Banco Regional - Modernização Core Banking',
    challenge: 'Sistema COBOL de 30 anos limitava crescimento e inovação',
    solution: 'Migração gradual para arquitetura de microserviços Java/Spring',
    results: [
      '10x melhoria em performance',
      'Zero perda de dados',
      '6 meses de ROI',
      '99.9% uptime durante migração'
    ],
    metrics: { performance: '10x', data_loss: '0%', roi: '6 meses' },
    duration: '14 meses'
  },
  {
    title: 'Indústria Química - ERP Legacy para Cloud',
    challenge: 'ERP em VB6 sem suporte, maintenance custosa',
    solution: 'Rebuild completo com .NET Core + Azure + Power BI',
    results: [
      'R$ 500k economia anual',
      '80% redução bugs',
      'Dashboards em tempo real',
      'Mobile-first design'
    ],
    metrics: { savings: 'R$ 500k', bugs: '-80%', uptime: '99.8%' },
    duration: '10 meses'
  }
];

const pricingTiers = [
  {
    name: 'Replatforming',
    price: 'R$ 50.000 - R$ 150.000',
    description: 'Migração com mudanças mínimas',
    timeline: '3-6 meses',
    features: [
      'Análise sistema atual',
      'Migração de dados',
      'Modernização interface',
      'Testes funcionais',
      'Treinamento usuários',
      '90 dias suporte'
    ],
    suitable: 'Sistemas funcionais, melhorias pontuais',
    cta: 'Modernizar Sistema'
  },
  {
    name: 'Refactoring',
    price: 'R$ 150.000 - R$ 400.000',
    description: 'Reestruturação completa da arquitetura',
    timeline: '6-12 meses',
    features: [
      'Auditoria técnica completa',
      'Nova arquitetura',
      'Otimização performance',
      'Segurança moderna',
      'APIs e integrações',
      '180 dias suporte'
    ],
    suitable: 'Sistemas complexos, performance crítica',
    popular: true,
    cta: 'Reestruturar Sistema'
  },
  {
    name: 'Rebuild',
    price: 'R$ 400.000+',
    description: 'Reconstrução completa from scratch',
    timeline: '9-18 meses',
    features: [
      'Solução customizada',
      'Tecnologia de ponta',
      'Arquitetura escalável',
      'UX/UI moderno',
      'DevOps completo',
      '360 dias suporte'
    ],
    suitable: 'Transformação digital completa',
    cta: 'Reconstruir Sistema'
  }
];

const primaryKeyword = 'migração sistema legacy';

export default function MigracaoLegacyPage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        title="Migração de Sistema Legacy | Modernização Segura e Sem Interrupções | InovaMente Labs"
        description="Migração de sistemas legados para tecnologias modernas. Processo seguro, dados preservados, zero downtime e aumento de performance. Especialistas em modernização."
        url="https://www.inovamentelabs.com.br/solucoes/migracao-legacy"
      />
      
      <Navbar />
      
      <Breadcrumbs items={[
        { label: 'Soluções', href: '/solucoes' },
        { label: 'Migração Legacy', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-200 text-sm font-medium mb-6">
                ⚠️ Seu Sistema Precisa de Modernização?
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Migração de
                <span className="block text-yellow-300">Sistema Legacy</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                Modernize sistemas antigos para tecnologias atuais. Processo seguro, zero downtime, 
                dados preservados e performance 10x superior. Livre-se das limitações do passado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#avaliar" className="btn-secondary bg-white text-red-600 px-8 py-4 text-lg font-semibold">
                  🔍 Avaliar Meu Sistema
                </Link>
                <Link href="#casos" className="btn-primary border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold">
                  📊 Ver Cases de Sucesso
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">850%</div>
                  <div className="text-sm opacity-90">↑ Performance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">0%</div>
                  <div className="text-sm opacity-90">Perda Dados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">99.9%</div>
                  <div className="text-sm opacity-90">Uptime</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Sinais de que seu Sistema Precisa de Migração:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">🐌</span>
                    <div>
                      <div className="font-semibold">Lentidão Crônica</div>
                      <div className="text-sm opacity-90">Sistema trava, usuários reclamam</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">💸</span>
                    <div>
                      <div className="font-semibold">Manutenção Cara</div>
                      <div className="text-sm opacity-90">Difícil encontrar quem saiba manter</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">🚫</span>
                    <div>
                      <div className="font-semibold">Sem Integrações</div>
                      <div className="text-sm opacity-90">Não conecta com sistemas modernos</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">🛡️</span>
                    <div>
                      <div className="font-semibold">Segurança Falha</div>
                      <div className="text-sm opacity-90">Vulnerável a ataques modernos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reais de Migração
            </h2>
            <p className="text-xl text-gray-600">
              Impacto medido em sistemas migrados
            </p>
          </div>
          
          <AnimatedStats stats={migrationStats} duration={3000} />
        </div>
      </section>

      {/* Migration Challenges */}
      <section id="avaliar" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problemas Comuns de Sistemas Legacy
            </h2>
            <p className="text-xl text-gray-600">
              Identifique se seu sistema tem estes sinais de alerta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationChallenges.map((challenge, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{challenge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-red-600">
                        {challenge.challenge}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        challenge.urgency === 'Crítica' ? 'bg-red-100 text-red-700' :
                        challenge.urgency === 'Alta' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {challenge.urgency}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{challenge.impact}</p>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-1">Nossa Solução:</h4>
                      <p className="text-green-600 text-sm">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Approaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estratégias de Migração
            </h2>
            <p className="text-xl text-gray-600">
              Escolhemos a abordagem ideal para seu caso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {migrationApproaches.map((approach, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{approach.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{approach.approach}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">{approach.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Risco</div>
                      <div className={`font-semibold ${
                        approach.risk === 'Baixo' ? 'text-green-600' :
                        approach.risk === 'Médio' ? 'text-yellow-600' : 'text-red-600'
                      }`}>{approach.risk}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Custo</div>
                      <div className={`font-semibold ${
                        approach.cost === 'Baixo' ? 'text-green-600' :
                        approach.cost === 'Médio' ? 'text-yellow-600' : 'text-red-600'
                      }`}>{approach.cost}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {approach.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-800 font-semibold mb-1">Ideal para:</div>
                    <div className="text-sm text-blue-700">{approach.suitable}</div>
                  </div>
                </div>

                <Link
                  href={`/contato?service=migracao-${approach.approach.toLowerCase()}`}
                  className="btn-primary w-full text-center"
                >
                  Avaliar {approach.approach}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Modernization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernização Tecnológica
            </h2>
            <p className="text-xl text-gray-600">
              Migramos de tecnologias antigas para soluções modernas
            </p>
          </div>

          <div className="space-y-6">
            {technologyStack.map((tech, index) => (
              <div key={index} className="glassmorphism-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-red-600 font-semibold text-sm">DE:</div>
                      <div className="font-bold text-gray-900">{tech.from}</div>
                    </div>
                    <div className="text-2xl text-blue-500">→</div>
                    <div className="text-center">
                      <div className="text-green-600 font-semibold text-sm">PARA:</div>
                      <div className="font-bold text-gray-900">{tech.to}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Modernização</div>
                    <div className="text-lg font-bold text-blue-600">{tech.modernization}%</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.modernization}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cronograma de Migração
            </h2>
            <p className="text-xl text-gray-600">
              Processo estruturado para garantir sucesso
            </p>
          </div>

          <InteractiveTimeline 
            events={migrationTimeline}
            direction="horizontal"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Migração
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para migrações seguras
            </p>
          </div>

          <ProcessSteps 
            steps={migrationProcess}
            interactive={true}
          />
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gestão de Riscos
            </h2>
            <p className="text-xl text-gray-600">
              Como minimizamos os riscos de migração
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskMitigation.map((risk, index) => (
              <div key={index} className="glassmorphism-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{risk.risk}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Prevenção</div>
                    <div className="text-lg font-bold text-green-600">{risk.prevention}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Probabilidade: </span>
                    <span className={`font-semibold ${
                      risk.probability.includes('Baixa') ? 'text-green-600' : 'text-yellow-600'
                    }`}>{risk.probability}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Impacto: </span>
                    <span className={`font-semibold ${
                      risk.impact === 'Crítico' ? 'text-red-600' :
                      risk.impact === 'Alto' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>{risk.impact}</span>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Mitigação:</h4>
                  <p className="text-green-600 text-sm">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Success Stories */}
      <section id="casos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Migrações de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Cases reais de modernização sem intercorrências
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-semibold">
                    {story.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafio:</h4>
                    <p className="text-sm text-gray-600">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solução:</h4>
                    <p className="text-sm text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {Object.entries(story.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-orange-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
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
              Investimento em Modernização
            </h2>
            <p className="text-xl text-gray-600">
              Opções para diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`glassmorphism-card hover-lift ${tier.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Escolhido
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 mb-2">{tier.description}</p>
                  <div className="text-sm text-gray-500">Timeline: {tier.timeline}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold">
                    {tier.suitable}
                  </span>
                </div>

                <Link
                  href={`/contato?service=migracao-legacy&plan=${tier.name.toLowerCase()}`}
                  className={`btn-primary w-full text-center ${tier.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Modernizar seu Sistema Legacy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Avaliação gratuita do seu sistema atual e proposta de migração sem riscos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=migracao-legacy"
              className="btn-secondary bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              🔍 Avaliação Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Preciso migrar um sistema legacy"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold"
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
            "name": "Migração de Sistema Legacy",
            "description": "Migração segura de sistemas legados para tecnologias modernas com zero downtime",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "serviceType": "Modernização de Sistemas",
            "offers": pricingTiers.map(tier => ({
              "@type": "Offer",
              "name": tier.name,
              "description": tier.description,
              "price": tier.price,
              "priceCurrency": "BRL"
            }))
          })
        }}
      />
    </>
  );
}