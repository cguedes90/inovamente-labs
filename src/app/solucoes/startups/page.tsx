import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions } from '@/components/SEO/VoiceSearchOptimizer';
import { AnimatedStats, ProcessSteps, ProgressBar } from '@/components/Visual/Infographics';
import { MediaOptimizer } from '@/components/Media/MediaOptimizer';

export const metadata: Metadata = {
  title: 'Desenvolvimento de App para Startups | MVP, React Native, Validação | InovaMente Labs',
  description: 'Especialistas em desenvolvimento de aplicativos para startups. MVP em 30 dias, React Native, validação de mercado e escalabilidade. Preços acessíveis para empreendedores.',
  keywords: [
    'desenvolvimento app startup',
    'MVP desenvolvimento rápido',
    'aplicativo startup brasileiro',
    'React Native startup',
    'desenvolvimento ágil empreendedores',
    'app validação mercado'
  ],
  openGraph: {
    title: 'Desenvolvimento de Apps para Startups | InovaMente Labs',
    description: 'MVP em 30 dias, tecnologias modernas e preços acessíveis. Ajudamos startups a validar ideias e escalar rapidamente.',
    url: 'https://www.inovamentelabs.com.br/solucoes/startups',
    type: 'website',
    images: [
      {
        url: '/og-startups.png',
        width: 1200,
        height: 630,
        alt: 'Desenvolvimento para Startups InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/solucoes/startups'
  }
};

const startupServices = [
  {
    icon: '⚡',
    title: 'MVP em 30 Dias',
    description: 'Valide sua ideia rapidamente com um produto mínimo viável funcional',
    features: [
      'Desenvolvimento ágil',
      'Funcionalidades essenciais',
      'Design moderno e intuitivo',
      'Deploy na loja de apps',
      'Analytics integrado',
      'Feedback loop automático'
    ],
    benefits: ['Time-to-market acelerado', 'Validação rápida', 'Baixo investimento'],
    price: 'R$ 15.000 - R$ 35.000',
    timeline: '3-4 semanas',
    popular: true
  },
  {
    icon: '📱',
    title: 'App Nativo Completo',
    description: 'Aplicativo completo para iOS e Android com todas as funcionalidades',
    features: [
      'React Native/Flutter',
      'Interface nativa',
      'Push notifications',
      'Pagamentos integrados',
      'Chat em tempo real',
      'Geolocalização'
    ],
    benefits: ['Performance nativa', 'UX premium', 'Escalabilidade'],
    price: 'R$ 45.000 - R$ 120.000',
    timeline: '8-16 semanas'
  },
  {
    icon: '🚀',
    title: 'Plataforma Completa',
    description: 'Ecossistema completo: app, dashboard admin, API e infraestrutura',
    features: [
      'App mobile multiplataforma',
      'Dashboard web administrativo',
      'API escalável',
      'Infraestrutura cloud',
      'Sistema de usuários',
      'Analytics avançado'
    ],
    benefits: ['Solução 360°', 'Pronto para escalar', 'Suporte completo'],
    price: 'R$ 80.000 - R$ 200.000',
    timeline: '12-24 semanas'
  }
];

const startupChallenges = [
  {
    challenge: 'Orçamento Limitado',
    solution: 'Desenvolvimento MVP com foco no essencial',
    icon: '💰',
    description: 'Priorizamos funcionalidades core e oferecemos planos de pagamento flexíveis'
  },
  {
    challenge: 'Tempo é Crítico',
    solution: 'Metodologia ágil com entregas semanais',
    icon: '⏱️',
    description: 'Sprints de 1 semana com demonstrações constantes para acelerar o desenvolvimento'
  },
  {
    challenge: 'Incerteza de Mercado',
    solution: 'MVP com analytics e testes A/B integrados',
    icon: '📊',
    description: 'Coletamos dados desde o dia 1 para validar hipóteses e orientar pivots'
  },
  {
    challenge: 'Escalabilidade Futura',
    solution: 'Arquitetura preparada para crescimento',
    icon: '🏗️',
    description: 'Código limpo e infraestrutura que suporta de 100 a 1M+ usuários'
  }
];

const successMetrics = [
  { label: 'Startups Atendidas', value: 45, suffix: '+', icon: '🚀', color: '#10B981' },
  { label: 'Tempo Médio MVP', value: 28, suffix: ' dias', icon: '⚡', color: '#3B82F6' },
  { label: 'Taxa de Sucesso', value: 89, suffix: '%', icon: '📈', color: '#8B5CF6' },
  { label: 'Investimento Captado', value: 12, suffix: 'M', prefix: 'R$ ', icon: '💎', color: '#F59E0B' }
];

const techStack = [
  { name: 'React Native', expertise: 95, description: 'Desenvolvimento móvel multiplataforma', icon: '📱' },
  { name: 'Node.js', expertise: 92, description: 'Backend escalável e performático', icon: '🟢' },
  { name: 'Firebase', expertise: 88, description: 'Backend-as-a-Service para MVPs rápidos', icon: '🔥' },
  { name: 'AWS/GCP', expertise: 85, description: 'Infraestrutura em nuvem enterprise', icon: '☁️' },
  { name: 'PostgreSQL', expertise: 90, description: 'Banco de dados robusto e confiável', icon: '🐘' }
];

const developmentProcess = [
  {
    title: 'Discovery & Validação',
    description: 'Entendemos sua visão e validamos a viabilidade técnica',
    icon: '🔍',
    duration: '3-5 dias',
    details: [
      'Workshop de ideação',
      'Análise de concorrentes',
      'Definição de personas',
      'Validação de premissas'
    ]
  },
  {
    title: 'Prototipagem Rápida',
    description: 'Criamos protótipos interativos para testar conceitos',
    icon: '✏️',
    duration: '5-7 dias',
    details: [
      'Wireframes de baixa fidelidade',
      'Design system inicial',
      'Protótipo navegável',
      'Testes com usuários'
    ]
  },
  {
    title: 'Desenvolvimento MVP',
    description: 'Codificação das funcionalidades essenciais',
    icon: '⚙️',
    duration: '15-20 dias',
    details: [
      'Setup da arquitetura',
      'Desenvolvimento core features',
      'Integração com serviços',
      'Testes automatizados'
    ]
  },
  {
    title: 'Launch & Iteração',
    description: 'Publicação e otimização baseada em feedback',
    icon: '🚀',
    duration: 'Contínuo',
    details: [
      'Deploy nas app stores',
      'Configuração de analytics',
      'Coleta de feedback',
      'Iterações semanais'
    ]
  }
];

const pricingPlans = [
  {
    name: 'MVP Starter',
    price: 'R$ 15.000',
    description: 'Perfeito para validar sua ideia',
    features: [
      'App React Native básico',
      'Backend Firebase',
      'Design system simples',
      'Deploy nas lojas',
      'Analytics básico',
      '30 dias de suporte'
    ],
    suitable: 'Primeiros passos, validação',
    cta: 'Começar MVP'
  },
  {
    name: 'Scale-Up',
    price: 'R$ 45.000',
    description: 'Para startups prontas para crescer',
    features: [
      'App nativo completo',
      'Backend Node.js escalável',
      'Design premium',
      'Push notifications',
      'Pagamentos integrados',
      '90 dias de suporte'
    ],
    suitable: 'Startups com tração',
    popular: true,
    cta: 'Escalar Agora'
  },
  {
    name: 'Enterprise Ready',
    price: 'R$ 80.000+',
    description: 'Solução completa para scale-ups',
    features: [
      'Plataforma completa',
      'Infraestrutura AWS',
      'Dashboard administrativo',
      'APIs documentadas',
      'Suporte dedicado',
      'SLA personalizado'
    ],
    suitable: 'Scale-ups e empresas',
    cta: 'Falar com Consultor'
  }
];

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'TechStart (YC S21)',
    role: 'Co-founder & CEO',
    quote: 'A InovaMente transformou nossa ideia em um MVP funcional em apenas 30 dias. Hoje temos 50k+ usuários e R$ 2M captados.',
    avatar: '/testimonials/carlos-mendes.jpg',
    metrics: { users: '50k+', funding: 'R$ 2M', time: '30 dias' }
  },
  {
    name: 'Ana Silva',
    company: 'EcoApp',
    role: 'Founder',
    quote: 'O time entendeu perfeitamente nossa visão. O app ficou exatamente como imaginamos, mas melhor.',
    avatar: '/testimonials/ana-silva.jpg',
    metrics: { rating: '4.8★', downloads: '25k+', time: '25 dias' }
  }
];

const primaryKeyword = 'desenvolvimento app startup';
const pageContent = `
Especialistas em desenvolvimento de aplicativos para startups. Criamos MVPs em 30 dias, 
aplicativos nativos completos e plataformas escaláveis usando React Native, Node.js e 
tecnologias modernas. Preços acessíveis e metodologia ágil para empreendedores.
`;

export default function StartupsPage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        content={pageContent}
        title="Desenvolvimento de App para Startups | MVP, React Native, Validação | InovaMente Labs"
        description="Especialistas em desenvolvimento de aplicativos para startups. MVP em 30 dias, React Native, validação de mercado e escalabilidade. Preços acessíveis para empreendedores."
        url="https://www.inovamentelabs.com.br/solucoes/startups"
      />
      
      <Navbar />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Soluções', href: '/solucoes' },
        { label: 'Startups', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-200 text-sm font-medium mb-6">
                🚀 Para Empreendedores Visionários
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforme sua
                <span className="block text-emerald-300">Ideia em App</span>
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                Desenvolvimento de apps para startups com foco em rapidez, qualidade e custo acessível. 
                MVP em 30 dias para validar sua ideia no mercado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#mvp" className="btn-secondary bg-white text-green-600 px-8 py-4 text-lg font-semibold">
                  🚀 Criar Meu MVP
                </Link>
                <Link href="#cases" className="btn-primary border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold">
                  📊 Ver Cases de Sucesso
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  MVP em 30 dias
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  A partir de R$ 15k
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  89% taxa de sucesso
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Por que Startups nos Escolhem?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-xl">⚡</span>
                    <div>
                      <div className="font-semibold">Velocidade Extrema</div>
                      <div className="text-sm opacity-90">MVP funcional em 30 dias ou menos</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-xl">💰</span>
                    <div>
                      <div className="font-semibold">Preço Acessível</div>
                      <div className="text-sm opacity-90">Planos flexíveis para orçamento startup</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-xl">🎯</span>
                    <div>
                      <div className="font-semibold">Foco em Validação</div>
                      <div className="text-sm opacity-90">Analytics e métricas desde o primeiro dia</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-xl">🚀</span>
                    <div>
                      <div className="font-semibold">Escalabilidade</div>
                      <div className="text-sm opacity-90">Arquitetura preparada para crescimento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Números com Startups
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de startups que confiaram em nós
            </p>
          </div>
          
          <AnimatedStats stats={successMetrics} duration={2500} />
        </div>
      </section>

      {/* Startup Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desafios de Startups que Resolvemos
            </h2>
            <p className="text-xl text-gray-600">
              Entendemos os obstáculos únicos que empreendedores enfrentam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupChallenges.map((item, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-red-600">
                        {item.challenge}
                      </h3>
                      <span className="text-green-600 font-semibold text-sm">
                        ✓ Resolvido
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-600 mb-2">
                      {item.solution}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="mvp" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções para Cada Momento da Startup
            </h2>
            <p className="text-xl text-gray-600">
              Do MVP inicial à plataforma completa enterprise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {startupServices.map((service, index) => (
              <div key={index} className={`glassmorphism-card hover-lift relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    🔥 Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-bold text-green-600 text-lg">{service.price}</span>
                    <span className="text-gray-500">{service.timeline}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Inclui:</h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-3">Benefícios:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=startup-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Proposta
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico para Startups
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologias modernas, escaláveis e com custo otimizado
            </p>
          </div>

          <ProgressBar 
            items={techStack.map(tech => ({
              label: tech.name,
              value: tech.expertise,
              color: '#10B981'
            }))}
            animated={true}
            showPercentage={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {techStack.map((tech, index) => (
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

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia ágil otimizada para startups
            </p>
          </div>

          <ProcessSteps 
            steps={developmentProcess}
            interactive={true}
          />
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos Feitos para Startups
            </h2>
            <p className="text-xl text-gray-600">
              Preços transparentes e acessíveis para empreendedores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`glassmorphism-card hover-lift relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-semibold">
                    {plan.suitable}
                  </span>
                </div>

                <Link
                  href={`/contato?service=startup&plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`btn-primary w-full text-center ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startups que Já Decolaram Conosco
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos de empreendedores que transformaram ideias em sucessos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600 font-semibold">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex justify-between text-sm">
                  {Object.entries(testimonial.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-green-600">{value}</div>
                      <div className="text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Validar sua Startup?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            MVP em 30 dias, preço acessível e suporte completo. Vamos transformar sua ideia em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=startup-mvp"
              className="btn-secondary bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              🚀 Criar Meu MVP
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Tenho uma ideia de startup e gostaria de um orçamento"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
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
            "name": "Desenvolvimento de App para Startups",
            "description": "Desenvolvimento de aplicativos móveis para startups com foco em MVP, validação e escalabilidade",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "audience": {
              "@type": "Audience",
              "audienceType": "Startups, Empreendedores"
            },
            "offers": startupServices.map(service => ({
              "@type": "Offer",
              "name": service.title,
              "description": service.description,
              "price": service.price,
              "priceCurrency": "BRL"
            })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços para Startups",
              "itemListElement": pricingPlans.map(plan => ({
                "@type": "Offer",
                "name": plan.name,
                "price": plan.price,
                "description": plan.description
              }))
            }
          })
        }}
      />
    </>
  );
}