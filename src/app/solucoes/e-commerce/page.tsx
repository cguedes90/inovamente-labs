import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions } from '@/components/SEO/VoiceSearchOptimizer';
import { AnimatedStats, ProcessSteps, ProgressBar, InteractiveTimeline } from '@/components/Visual/Infographics';

export const metadata: Metadata = {
  title: 'Automação para E-commerce | RPA, Integração, Otimização Vendas | InovaMente Labs',
  description: 'Automação completa para e-commerce: gestão de estoque, processamento de pedidos, integração com marketplaces, chatbots e otimização de conversão.',
  keywords: [
    'automação e-commerce Brasil',
    'RPA loja virtual',
    'integração marketplace automática',
    'chatbot vendas online',
    'automação estoque pedidos',
    'otimização conversão e-commerce'
  ],
  openGraph: {
    title: 'Automação para E-commerce | InovaMente Labs',
    description: 'Automatize vendas online: gestão de estoque, pedidos, marketplace, atendimento e conversões. Aumente receita com automação inteligente.',
    url: 'https://www.inovamentelabs.com.br/solucoes/e-commerce',
    type: 'website',
    images: [
      {
        url: '/og-ecommerce.png',
        width: 1200,
        height: 630,
        alt: 'Automação E-commerce InovaMente Labs'
      }
    ]
  }
};

const ecommerceAutomations = [
  {
    icon: '🛒',
    title: 'Gestão Automática de Pedidos',
    description: 'Processamento completo desde o pagamento até a entrega',
    features: [
      'Captura automática de pedidos',
      'Validação de pagamentos',
      'Geração de etiquetas',
      'Notificações por email/SMS',
      'Atualizações de status',
      'Integração com transportadoras'
    ],
    benefits: ['95% menos erros', 'Processo 10x mais rápido', 'Clientes satisfeitos'],
    price: 'R$ 8.000 - R$ 25.000',
    timeline: '4-8 semanas',
    popular: true
  },
  {
    icon: '📦',
    title: 'Automação de Estoque',
    description: 'Controle inteligente de inventário e reposição automática',
    features: [
      'Sincronização multi-canal',
      'Alertas de estoque baixo',
      'Reposição automática',
      'Análise de giro',
      'Previsão de demanda',
      'Relatórios detalhados'
    ],
    benefits: ['Zero ruptura', 'Redução 40% custos', 'Otimização capital'],
    price: 'R$ 12.000 - R$ 35.000',
    timeline: '6-10 semanas'
  },
  {
    icon: '🤖',
    title: 'Chatbot de Vendas + Suporte',
    description: 'Atendimento 24/7 com IA para vendas e suporte',
    features: [
      'Chatbot inteligente',
      'Recomendação produtos',
      'Processamento linguagem natural',
      'Integração WhatsApp',
      'Escalação para humanos',
      'Analytics de conversas'
    ],
    benefits: ['24/7 disponível', '60% mais conversões', 'Custo reduzido'],
    price: 'R$ 15.000 - R$ 45.000',
    timeline: '8-12 semanas'
  }
];

const ecommerceStats = [
  { label: 'Aumento em Vendas', value: 85, suffix: '%', icon: '📈', color: '#10B981' },
  { label: 'Redução Custos Op.', value: 60, suffix: '%', icon: '💰', color: '#3B82F6' },
  { label: 'Melhoria Conversão', value: 42, suffix: '%', icon: '🎯', color: '#8B5CF6' },
  { label: 'Tempo Economia', value: 15, suffix: 'h/dia', icon: '⏰', color: '#F59E0B' }
];

const marketplaces = [
  { name: 'Mercado Livre', integration: 98, description: 'Sincronização completa de produtos e pedidos', icon: '🟡' },
  { name: 'Amazon', integration: 95, description: 'Gestão automática de anúncios e estoque', icon: '🟠' },
  { name: 'Shopee', integration: 92, description: 'Automação de campanhas e atendimento', icon: '🟠' },
  { name: 'Magazine Luiza', integration: 88, description: 'Integração com marketplace B2B', icon: '🔵' },
  { name: 'Americanas', integration: 90, description: 'Sincronização de catálogo e preços', icon: '🔴' }
];

const automationTimeline = [
  {
    date: 'Semana 1-2',
    title: 'Análise e Mapeamento',
    description: 'Auditoria completa dos processos atuais do e-commerce',
    icon: '🔍',
    color: '#3B82F6'
  },
  {
    date: 'Semana 3-4',
    title: 'Desenvolvimento Core',
    description: 'Criação das automações principais (pedidos, estoque)',
    icon: '⚙️',
    color: '#10B981'
  },
  {
    date: 'Semana 5-6',
    title: 'Integrações',
    description: 'Conexão com marketplaces, ERP e sistemas terceiros',
    icon: '🔗',
    color: '#8B5CF6'
  },
  {
    date: 'Semana 7-8',
    title: 'Testes e Go-Live',
    description: 'Testes completos e ativação das automações',
    icon: '🚀',
    color: '#F59E0B'
  }
];

const ecommerceProcess = [
  {
    title: 'Auditoria E-commerce',
    description: 'Análise completa dos processos e gargalos atuais',
    icon: '🔎',
    duration: '3-5 dias',
    details: [
      'Mapeamento fluxos de venda',
      'Análise de conversão',
      'Identificação de gargalos',
      'Avaliação de integrações'
    ]
  },
  {
    title: 'Design da Automação',
    description: 'Planejamento detalhado das automações prioritárias',
    icon: '📋',
    duration: '5-7 dias',
    details: [
      'Definição de fluxos',
      'Arquitetura técnica',
      'Cronograma execução',
      'KPIs de sucesso'
    ]
  },
  {
    title: 'Implementação',
    description: 'Desenvolvimento e configuração das automações',
    icon: '🛠️',
    duration: '4-8 semanas',
    details: [
      'Desenvolvimento RPA',
      'Integrações APIs',
      'Testes unitários',
      'Homologação client'
    ]
  },
  {
    title: 'Otimização Contínua',
    description: 'Monitoramento e melhorias baseadas em dados',
    icon: '📊',
    duration: 'Contínuo',
    details: [
      'Monitoramento 24/7',
      'Relatórios performance',
      'Ajustes otimização',
      'Suporte técnico'
    ]
  }
];

const automationBenefits = [
  {
    category: 'Vendas',
    improvements: [
      { metric: 'Conversão', before: 2.5, after: 3.8, unit: '%' },
      { metric: 'Ticket Médio', before: 150, after: 210, unit: 'R$' },
      { metric: 'Abandonos', before: 68, after: 45, unit: '%' }
    ],
    color: '#10B981'
  },
  {
    category: 'Operacional',
    improvements: [
      { metric: 'Tempo Proc. Pedido', before: 25, after: 3, unit: 'min' },
      { metric: 'Erros Estoque', before: 15, after: 2, unit: '%' },
      { metric: 'Tempo Resposta', before: 180, after: 15, unit: 'min' }
    ],
    color: '#3B82F6'
  }
];

const successStories = [
  {
    title: 'Loja de Eletrônicos - 500% Crescimento',
    challenge: 'Gestão manual de 15 marketplaces causava erros e atrasos',
    solution: 'Automação completa: estoque, pedidos e atendimento',
    results: [
      '500% aumento em vendas',
      'Zero erros de estoque',
      'Atendimento 24/7 automatizado'
    ],
    metrics: { sales: '+500%', errors: '0%', response: '24/7' },
    period: '12 meses'
  },
  {
    title: 'Fashion E-commerce - R$ 2M Economia',
    challenge: 'Processos manuais custavam R$ 250k/mês em operação',
    solution: 'RPA para toda cadeia operacional do e-commerce',
    results: [
      'R$ 2M economia anual',
      '90% redução em tempo operacional',
      '40% aumento na satisfação'
    ],
    metrics: { savings: 'R$ 2M', time: '-90%', satisfaction: '+40%' },
    period: '24 meses'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: 'R$ 8.000',
    description: 'Automação básica para pequenos e-commerces',
    features: [
      'Gestão automática pedidos',
      'Notificações clientes',
      'Controle estoque básico',
      'Integração 2 marketplaces',
      '30 dias suporte',
      'Treinamento equipe'
    ],
    suitable: 'Até R$ 100k/mês',
    cta: 'Começar Automação'
  },
  {
    name: 'Growth',
    price: 'R$ 25.000',
    description: 'Automação completa para e-commerces em crescimento',
    features: [
      'Todas funcionalidades Starter',
      'Chatbot vendas IA',
      'Automação marketing',
      'Integração 5+ marketplaces',
      'Analytics avançado',
      '90 dias suporte'
    ],
    suitable: 'R$ 100k - R$ 500k/mês',
    popular: true,
    cta: 'Escalar Vendas'
  },
  {
    name: 'Enterprise',
    price: 'R$ 50.000+',
    description: 'Solução completa para grandes e-commerces',
    features: [
      'Automação end-to-end',
      'BI e dashboards customizados',
      'Integração ERP/CRM',
      'Marketplaces ilimitados',
      'Suporte dedicado',
      'SLA personalizado'
    ],
    suitable: 'R$ 500k+/mês',
    cta: 'Consulta Especializada'
  }
];

const primaryKeyword = 'automação e-commerce';

export default function EcommercePage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        title="Automação para E-commerce | RPA, Integração, Otimização Vendas | InovaMente Labs"
        description="Automação completa para e-commerce: gestão de estoque, processamento de pedidos, integração com marketplaces, chatbots e otimização de conversão."
        url="https://www.inovamentelabs.com.br/solucoes/e-commerce"
      />
      
      <Navbar />
      
      <Breadcrumbs items={[
        { label: 'Soluções', href: '/solucoes' },
        { label: 'E-commerce', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-200 text-sm font-medium mb-6">
                🛒 Para Lojistas Visionários
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automatize seu
                <span className="block text-orange-300">E-commerce</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                Automação completa para vendas online: gestão de pedidos, estoque, 
                marketplaces, atendimento e conversões. Aumente receita enquanto reduz custos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#automacoes" className="btn-secondary bg-white text-purple-600 px-8 py-4 text-lg font-semibold">
                  🚀 Ver Automações
                </Link>
                <Link href="#resultados" className="btn-primary border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold">
                  📊 Resultados Reais
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-300">+85%</div>
                  <div className="text-sm opacity-90">Vendas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">-60%</div>
                  <div className="text-sm opacity-90">Custos Op.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">24/7</div>
                  <div className="text-sm opacity-90">Automático</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">O que Automatizamos no Seu E-commerce:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400 text-xl">🛒</span>
                    <div>
                      <div className="font-semibold">Gestão de Pedidos</div>
                      <div className="text-sm opacity-90">Do pagamento à entrega automática</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400 text-xl">📦</span>
                    <div>
                      <div className="font-semibold">Controle de Estoque</div>
                      <div className="text-sm opacity-90">Sincronização multi-canal inteligente</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400 text-xl">🤖</span>
                    <div>
                      <div className="font-semibold">Atendimento IA</div>
                      <div className="text-sm opacity-90">Chatbot que vende 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400 text-xl">🎯</span>
                    <div>
                      <div className="font-semibold">Marketing Automático</div>
                      <div className="text-sm opacity-90">Campanhas baseadas em comportamento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto Real da Automação no E-commerce
            </h2>
            <p className="text-xl text-gray-600">
              Resultados médios dos nossos clientes
            </p>
          </div>
          
          <AnimatedStats stats={ecommerceStats} duration={2500} />
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Antes vs Depois da Automação
            </h2>
            <p className="text-xl text-gray-600">
              Transformação real em métricas importantes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationBenefits.map((category, index) => (
              <div key={index} className="glassmorphism-card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.improvements.map((improvement, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{improvement.metric}</div>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="text-red-600">
                            Antes: {improvement.before}{improvement.unit}
                          </div>
                          <div className="text-green-600 font-bold">
                            Depois: {improvement.after}{improvement.unit}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl">
                        {improvement.after > improvement.before ? '📈' : '📉'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Automations */}
      <section id="automacoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automações para E-commerce
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para otimizar suas vendas online
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ecommerceAutomations.map((automation, index) => (
              <div key={index} className={`glassmorphism-card hover-lift ${automation.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {automation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    🔥 Mais Vendido
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{automation.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{automation.title}</h3>
                  <p className="text-gray-600">{automation.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-bold text-purple-600 text-lg">{automation.price}</span>
                    <span className="text-gray-500">{automation.timeline}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Inclui:</h4>
                  <ul className="space-y-2 mb-4">
                    {automation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-3">Benefícios:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {automation.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=ecommerce-${automation.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Automatizar Agora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integração com Principais Marketplaces
            </h2>
            <p className="text-xl text-gray-600">
              Automatização completa para vender em todos os canais
            </p>
          </div>

          <ProgressBar 
            items={marketplaces.map(marketplace => ({
              label: marketplace.name,
              value: marketplace.integration,
              color: '#8B5CF6'
            }))}
            animated={true}
            showPercentage={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {marketplaces.map((marketplace, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{marketplace.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{marketplace.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{marketplace.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Timeline de Implementação
            </h2>
            <p className="text-xl text-gray-600">
              Da análise ao go-live em 8 semanas
            </p>
          </div>

          <InteractiveTimeline 
            events={automationTimeline}
            direction="horizontal"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Automação E-commerce
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia especializada para vendas online
            </p>
          </div>

          <ProcessSteps 
            steps={ecommerceProcess}
            interactive={true}
          />
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Success Stories */}
      <section id="resultados" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerces que Explodiram com Automação
            </h2>
            <p className="text-xl text-gray-600">
              Casos reais de crescimento exponencial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">
                    {story.period} de resultado
                  </span>
                </div>
                
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
                      <div className="text-lg font-bold text-purple-600">{value}</div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Automação E-commerce
            </h2>
            <p className="text-xl text-gray-600">
              Soluções para e-commerces de todos os tamanhos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`glassmorphism-card hover-lift ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
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
                  href={`/contato?service=ecommerce&plan=${tier.name.toLowerCase()}`}
                  className={`btn-primary w-full text-center ${tier.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Explodir suas Vendas Online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Auditoria gratuita do seu e-commerce e proposta de automação personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=ecommerce"
              className="btn-secondary bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              🚀 Auditoria Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de automatizar meu e-commerce"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
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
            "name": "Automação para E-commerce",
            "description": "Automação completa para vendas online: gestão de pedidos, estoque, marketplaces e atendimento",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "audience": {
              "@type": "Audience",
              "audienceType": "E-commerce, Lojistas Online, Marketplaces"
            },
            "offers": ecommerceAutomations.map(automation => ({
              "@type": "Offer",
              "name": automation.title,
              "description": automation.description,
              "price": automation.price,
              "priceCurrency": "BRL"
            }))
          })
        }}
      />
    </>
  );
}