import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Aplicativo Mobile | iOS Android | InovaMente Labs',
  description: 'Desenvolvimento de aplicativos mobile nativos e híbridos para iOS e Android. React Native, Flutter, Swift e Kotlin. Aplicativos personalizados no Brasil.',
  keywords: [
    'desenvolvimento mobile Brasil',
    'aplicativo mobile personalizado',
    'desenvolvimento iOS Android',
    'React Native desenvolvimento',
    'aplicativo híbrido nativo',
    'desenvolvimento app São Paulo'
  ],
  openGraph: {
    title: 'Desenvolvimento Mobile Profissional | InovaMente Labs',
    description: 'Aplicativos mobile de alta performance para iOS e Android com as melhores tecnologias.',
    url: 'https://www.inovamentelabs.com.br/servicos/desenvolvimento-mobile',
    type: 'website',
    images: [
      {
        url: '/og-desenvolvimento-mobile.png',
        width: 1200,
        height: 630,
        alt: 'Desenvolvimento Mobile InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/servicos/desenvolvimento-mobile'
  }
};

const mobileServices = [
  {
    icon: '📱',
    title: 'Apps Nativos iOS/Android',
    description: 'Máxima performance e integração com recursos do dispositivo',
    features: [
      'Performance superior',
      'UI/UX nativa',
      'Integração total com OS',
      'Publicação nas stores',
      'Push notifications',
      'Recursos avançados'
    ],
    technologies: ['Swift', 'Kotlin', 'Objective-C', 'Java'],
    price: 'R$ 15.000 - R$ 80.000',
    timeline: '60-120 dias'
  },
  {
    icon: '🔄',
    title: 'Apps Híbridos',
    description: 'Desenvolvimento eficiente para múltiplas plataformas',
    features: [
      'Uma base para iOS/Android',
      'Desenvolvimento mais rápido',
      'Manutenção simplificada',
      'Boa performance',
      'Custo otimizado',
      'Atualizações sincronizadas'
    ],
    technologies: ['React Native', 'Flutter', 'Ionic', 'Xamarin'],
    price: 'R$ 8.000 - R$ 35.000',
    timeline: '45-90 dias'
  },
  {
    icon: '🌐',
    title: 'Progressive Web Apps (PWA)',
    description: 'Experiência de app nativo através do navegador',
    features: [
      'Instalação via browser',
      'Funciona offline',
      'Push notifications',
      'Atualizações automáticas',
      'Compatibilidade ampla',
      'SEO otimizado'
    ],
    technologies: ['React', 'Next.js', 'Service Workers', 'WebRTC'],
    price: 'R$ 5.000 - R$ 20.000',
    timeline: '30-60 dias'
  }
];

const appTypes = [
  {
    category: 'E-commerce & Marketplace',
    examples: ['Loja virtual', 'Marketplace', 'Delivery', 'Classificados'],
    icon: '🛍️'
  },
  {
    category: 'Redes Sociais & Comunicação',
    examples: ['Chat', 'Rede social', 'Comunidade', 'Video call'],
    icon: '💬'
  },
  {
    category: 'Produtividade & Negócios',
    examples: ['CRM mobile', 'Gestão', 'Vendas', 'Relatórios'],
    icon: '📊'
  },
  {
    category: 'Saúde & Bem-estar',
    examples: ['Telemedicina', 'Fitness', 'Nutrição', 'Meditação'],
    icon: '🏥'
  },
  {
    category: 'Educação & Treinamento',
    examples: ['E-learning', 'Curso online', 'Quiz', 'Certificação'],
    icon: '📚'
  },
  {
    category: 'Fintech & Pagamentos',
    examples: ['Carteira digital', 'Investimentos', 'Empréstimos', 'Criptomoedas'],
    icon: '💳'
  }
];

const developmentPhases = [
  {
    phase: 'Pesquisa & UX',
    duration: '5-10 dias',
    deliverables: [
      'Pesquisa de mercado',
      'Análise de concorrentes',
      'Personas e jornada',
      'Wireframes',
      'Fluxo de navegação'
    ]
  },
  {
    phase: 'Design UI/UX',
    duration: '10-15 dias',
    deliverables: [
      'Design system',
      'Protótipo interativo',
      'Telas de alta fidelidade',
      'Guia de estilo',
      'Especificações técnicas'
    ]
  },
  {
    phase: 'Desenvolvimento',
    duration: '30-90 dias',
    deliverables: [
      'Setup do projeto',
      'Desenvolvimento das telas',
      'Integração de APIs',
      'Testes unitários',
      'Testes de integração'
    ]
  },
  {
    phase: 'Publicação',
    duration: '5-10 dias',
    deliverables: [
      'Testes em dispositivos',
      'Otimização de performance',
      'Submissão às stores',
      'Aprovação e publicação',
      'Documentação final'
    ]
  }
];

const features = [
  { name: 'Autenticação Segura', icon: '🔐', description: 'Login social, biometria, 2FA' },
  { name: 'Push Notifications', icon: '🔔', description: 'Engajamento e retenção' },
  { name: 'Pagamentos Online', icon: '💳', description: 'PIX, cartão, carteira digital' },
  { name: 'Geolocalização', icon: '📍', description: 'GPS, mapas, rotas' },
  { name: 'Camera & Galeria', icon: '📸', description: 'Fotos, vídeos, filtros' },
  { name: 'Modo Offline', icon: '📴', description: 'Sincronização automática' },
  { name: 'Analytics', icon: '📊', description: 'Métricas de uso detalhadas' },
  { name: 'Chat & Mensagens', icon: '💬', description: 'Comunicação em tempo real' }
];

const faqs = [
  {
    question: 'Qual a diferença entre app nativo e híbrido?',
    answer: 'Apps nativos são desenvolvidos especificamente para cada plataforma (iOS/Android), oferecendo máxima performance. Apps híbridos usam uma base de código para ambas as plataformas, sendo mais econômicos e rápidos de desenvolver.'
  },
  {
    question: 'Vocês fazem a publicação nas app stores?',
    answer: 'Sim! Cuidamos de todo o processo: preparação dos assets, criação das contas de desenvolvedor, submissão e acompanhamento da aprovação na App Store e Google Play.'
  },
  {
    question: 'Como funciona a manutenção do aplicativo?',
    answer: 'Oferecemos planos de manutenção que incluem correções de bugs, atualizações de segurança, novas funcionalidades, suporte técnico e adaptações para novas versões do iOS/Android.'
  },
  {
    question: 'É possível integrar com sistemas existentes?',
    answer: 'Absolutamente! Desenvolvemos APIs customizadas ou integramos com sistemas existentes (ERP, CRM, e-commerce) para sincronizar dados e processos.'
  }
];

export default function DesenvolvimentoMobilePage() {
  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="flex space-x-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">Início</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/servicos" className="text-blue-600 hover:text-blue-800">Serviços</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-600">Desenvolvimento Mobile</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Desenvolvimento
                <span className="block text-cyan-300">Mobile</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Aplicativos mobile de alta performance para iOS e Android. Transforme sua ideia em um app de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#orcamento" className="btn-secondary bg-white text-blue-600">
                  Solicitar Orçamento
                </Link>
                <Link href="#portfolio" className="btn-primary border-2 border-white bg-transparent">
                  Ver Apps Desenvolvidos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Estatísticas do mercado mobile:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><span className="text-green-400 mr-2">📱</span> 6.8 bilhões de usuários de smartphone no mundo</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">⏱️</span> 4h por dia é o tempo médio no mobile</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">💰</span> R$ 70% do e-commerce é mobile</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">🚀</span> Apps nativos convertem 2x mais</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">📈</span> 90% preferem apps a sites móveis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Services Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Desenvolvimento Mobile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a melhor abordagem para seu projeto mobile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-purple-600">{service.price}</span>
                    <span className="text-gray-500">{service.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=desenvolvimento-mobile&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Aplicativos que Desenvolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência em diversos segmentos e nichos de mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que Implementamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos avançados para criar experiências mobile excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
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
              Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para criar apps de sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="relative">
                {index < developmentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                )}
                <div className="glassmorphism-card">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-purple-600 font-semibold mb-4">{phase.duration}</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre desenvolvimento mobile
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glassmorphism-card">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="orcamento" className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme sua Ideia em um App de Sucesso
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Consultoria gratuita para definir a melhor estratégia mobile para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=desenvolvimento-mobile"
              className="btn-secondary bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Consultoria Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de desenvolver um aplicativo mobile"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desenvolvimento de Aplicativo Mobile",
            "description": "Desenvolvimento de aplicativos mobile nativos e híbridos para iOS e Android",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br",
              "logo": "https://www.inovamentelabs.com.br/logo.png"
            },
            "areaServed": "Brasil",
            "offers": mobileServices.map(service => ({
              "@type": "Offer",
              "name": service.title,
              "description": service.description,
              "price": service.price,
              "priceCurrency": "BRL"
            })),
            "additionalType": "http://www.productontology.org/doc/Mobile_app_development"
          })
        }}
      />
    </>
  );
}