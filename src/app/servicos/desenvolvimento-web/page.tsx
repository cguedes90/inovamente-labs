import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VoiceSearchOptimizer, VoiceSearchQuestions, ConversationalContent } from '@/components/SEO/VoiceSearchOptimizer';
import { InlineContentSuggestions } from '@/components/SEO/ContentAnalyzer';
import { AnimatedStats, ProcessSteps, ProgressBar } from '@/components/Visual/Infographics';
import { MediaOptimizer } from '@/components/Media/MediaOptimizer';
import { Icon, IconGrid } from '@/components/Visual/IconSystem';

export const metadata: Metadata = {
  title: 'Desenvolvimento Web Profissional | React, Next.js | InovaMente Labs',
  description: 'Desenvolvimento de sites e sistemas web responsivos com React, Next.js e TypeScript. E-commerce, sites institucionais e sistemas corporativos no Brasil.',
  keywords: [
    'desenvolvimento web Brasil',
    'desenvolvimento React Next.js',
    'site responsivo',
    'e-commerce desenvolvimento',
    'sistema web corporativo',
    'desenvolvimento frontend São Paulo'
  ],
  openGraph: {
    title: 'Desenvolvimento Web Profissional | InovaMente Labs',
    description: 'Sites e sistemas web de alta performance com React, Next.js e as melhores práticas de desenvolvimento.',
    url: 'https://www.inovamentelabs.com.br/servicos/desenvolvimento-web',
    type: 'website',
    images: [
      {
        url: '/og-desenvolvimento-web.png',
        width: 1200,
        height: 630,
        alt: 'Desenvolvimento Web InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/servicos/desenvolvimento-web'
  }
};

const webServices = [
  {
    icon: '🏢',
    title: 'Sites Institucionais',
    description: 'Sites profissionais que representam sua marca com excelência',
    features: [
      'Design responsivo e moderno',
      'SEO otimizado',
      'Velocidade superior',
      'Integração com CMS',
      'Formulários inteligentes',
      'Analytics integrado'
    ],
    price: 'R$ 2.500 - R$ 8.000',
    timeline: '15-30 dias'
  },
  {
    icon: '🛒',
    title: 'E-commerce Completo',
    description: 'Lojas virtuais com alta conversão e experiência premium',
    features: [
      'Catálogo de produtos',
      'Carrinho e checkout',
      'Integração de pagamento',
      'Painel administrativo',
      'Gestão de estoque',
      'Relatórios de vendas'
    ],
    price: 'R$ 8.000 - R$ 25.000',
    timeline: '45-90 dias'
  },
  {
    icon: '⚙️',
    title: 'Sistemas Corporativos',
    description: 'Soluções web personalizadas para otimizar seus processos',
    features: [
      'Dashboard customizado',
      'Gestão de usuários',
      'Relatórios avançados',
      'Integrações API',
      'Workflow automatizado',
      'Segurança enterprise'
    ],
    price: 'R$ 12.000 - R$ 50.000',
    timeline: '60-120 dias'
  }
];

const technologies = [
  { name: 'React', description: 'Interface moderna e reativa', icon: '⚛️' },
  { name: 'Next.js', description: 'Framework para performance superior', icon: '▲' },
  { name: 'TypeScript', description: 'Código mais seguro e maintível', icon: '🔷' },
  { name: 'Tailwind CSS', description: 'Estilização eficiente e responsiva', icon: '💨' },
  { name: 'Node.js', description: 'Backend robusto e escalável', icon: '🟢' },
  { name: 'PostgreSQL', description: 'Banco de dados confiável', icon: '🐘' }
];

const process = [
  {
    phase: 'Descoberta',
    duration: '3-5 dias',
    activities: [
      'Análise de requisitos',
      'Pesquisa de mercado',
      'Definição de personas',
      'Arquitetura da informação'
    ]
  },
  {
    phase: 'Design & Prototipagem',
    duration: '7-10 dias',
    activities: [
      'Wireframes detalhados',
      'Design system',
      'Protótipo interativo',
      'Testes de usabilidade'
    ]
  },
  {
    phase: 'Desenvolvimento',
    duration: '15-45 dias',
    activities: [
      'Setup do ambiente',
      'Desenvolvimento frontend',
      'Integração backend',
      'Testes automatizados'
    ]
  },
  {
    phase: 'Lançamento',
    duration: '2-3 dias',
    activities: [
      'Deploy em produção',
      'Configuração de domínio',
      'Treinamento da equipe',
      'Documentação entregue'
    ]
  }
];

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O prazo varia conforme a complexidade: sites institucionais levam 15-30 dias, e-commerce 45-90 dias, e sistemas corporativos 60-120 dias.'
  },
  {
    question: 'O site será responsivo e otimizado para mobile?',
    answer: 'Sim, todos os nossos sites são desenvolvidos mobile-first com design responsivo, garantindo perfeita visualização em qualquer dispositivo.'
  },
  {
    question: 'Vocês fazem a manutenção após o lançamento?',
    answer: 'Oferecemos planos de manutenção mensal que incluem atualizações, backups, monitoramento e suporte técnico.'
  },
  {
    question: 'Como funciona o processo de aprovação?',
    answer: 'Trabalhamos com entregas incrementais. Você acompanha o progresso e aprova cada etapa antes seguirmos para a próxima fase.'
  }
];

const primaryKeyword = 'desenvolvimento web';
const pageContent = `
Desenvolvimento web profissional com React, Next.js e TypeScript. 
Criamos sites responsivos, e-commerce e sistemas web corporativos 
utilizando as melhores práticas de desenvolvimento frontend e backend.
`;

export default function DesenvolvimentoWebPage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        content={pageContent}
        title="Desenvolvimento Web Profissional | React, Next.js | InovaMente Labs"
        description="Desenvolvimento de sites e sistemas web responsivos com React, Next.js e TypeScript. E-commerce, sites institucionais e sistemas corporativos no Brasil."
        url="https://www.inovamentelabs.com.br/servicos/desenvolvimento-web"
      />
      <Navbar />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Serviços', href: '/servicos' },
        { label: 'Desenvolvimento Web', current: true }
      ]} />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="flex space-x-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">Início</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/servicos" className="text-blue-600 hover:text-blue-800">Serviços</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-600">Desenvolvimento Web</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Desenvolvimento Web
                <span className="block text-cyan-300">Profissional</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Sites e sistemas web de alta performance com React, Next.js e as melhores práticas de desenvolvimento moderno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#orcamento" className="btn-secondary bg-white text-blue-600">
                  Solicitar Orçamento
                </Link>
                <Link href="#portfolio" className="btn-primary border-2 border-white bg-transparent">
                  Ver Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Por que escolher desenvolvimento web moderno?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 3x mais rápido que sites tradicionais</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> SEO otimizado para Google</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Experiência premium em mobile</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Integração com qualquer sistema</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Escalável conforme seu crescimento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats 
            stats={[
              { label: 'Sites Desenvolvidos', value: 150, suffix: '+', icon: '🌐', color: '#3B82F6' },
              { label: 'Clientes Satisfeitos', value: 98, suffix: '%', icon: '😊', color: '#10B981' },
              { label: 'Tempo Médio de Carga', value: 2, suffix: 's', icon: '⚡', color: '#F59E0B' },
              { label: 'Anos de Experiência', value: 5, suffix: '+', icon: '🏆', color: '#8B5CF6' }
            ]}
            duration={2500}
          />
        </div>
      </section>

      {/* Services Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Projetos Web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos soluções web personalizadas para diferentes necessidades de negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-blue-600">{service.price}</span>
                    <span className="text-gray-500">{service.timeline}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contato?service=desenvolvimento-web&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Search Questions */}
      <VoiceSearchQuestions primaryKeyword={primaryKeyword} />

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConversationalContent primaryKeyword={primaryKeyword}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tecnologias que Utilizamos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stack moderno e confiável para projetos web de alta qualidade
              </p>
            </div>
          </ConversationalContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technology Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nível de Expertise
          </h3>
          <ProgressBar 
            items={[
              { label: 'React & Next.js', value: 95, color: '#61DAFB' },
              { label: 'TypeScript', value: 90, color: '#3178C6' },
              { label: 'Node.js & APIs', value: 88, color: '#339933' },
              { label: 'Design Responsivo', value: 92, color: '#FF6B6B' },
              { label: 'SEO & Performance', value: 85, color: '#4ECDC4' }
            ]}
            animated={true}
          />
        </div>
        
        {/* Content Optimization Suggestions */}
        <InlineContentSuggestions 
          primaryKeyword={primaryKeyword}
          currentContent={pageContent}
        />
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia ágil e transparente para garantir o sucesso do seu projeto
            </p>
          </div>
          
          <ProcessSteps 
            steps={[
              {
                title: 'Planejamento',
                description: 'Análise de requisitos e definição da arquitetura',
                icon: '📋',
                duration: '3-5 dias',
                details: ['Briefing detalhado', 'Wireframes', 'Especificações técnicas']
              },
              {
                title: 'Design',
                description: 'Criação da identidade visual e prototipagem',
                icon: '🎨',
                duration: '5-7 dias',
                details: ['Mockups', 'Design System', 'Protótipos interativos']
              },
              {
                title: 'Desenvolvimento',
                description: 'Codificação e implementação das funcionalidades',
                icon: '⚙️',
                duration: '10-20 dias',
                details: ['Frontend React', 'Backend APIs', 'Integração com banco de dados']
              },
              {
                title: 'Testes & Launch',
                description: 'Testes de qualidade e publicação do projeto',
                icon: '🚀',
                duration: '3-5 dias',
                details: ['Testes automatizados', 'Deploy', 'Treinamento da equipe']
              }
            ]}
            interactive={true}
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Desenvolvimento Web
            </h2>
            <p className="text-xl text-gray-600">
              Respostas para as principais dúvidas sobre criação de sites e sistemas web
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glassmorphism-card voice-optimized"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3" 
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div 
                  itemScope 
                  itemType="https://schema.org/Answer" 
                  itemProp="acceptedAnswer"
                >
                  <p className="text-gray-600 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="orcamento" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 voice-optimized">
            Pronto para Criar seu Site Profissional?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Desenvolvemos sites responsivos, rápidos e otimizados para SEO. Orçamento gratuito em 24h!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=desenvolvimento-web"
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Orçamento Gratuito
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre desenvolvimento web"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
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
            "name": "Desenvolvimento Web",
            "description": "Desenvolvimento de sites e sistemas web responsivos com React, Next.js e TypeScript",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br",
              "logo": "https://www.inovamentelabs.com.br/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              }
            },
            "areaServed": "Brasil",
            "offers": webServices.map(service => ({
              "@type": "Offer",
              "name": service.title,
              "description": service.description,
              "price": service.price,
              "priceCurrency": "BRL"
            })),
            "additionalType": "http://www.productontology.org/doc/Web_development",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.inovamentelabs.com.br/servicos/desenvolvimento-web"
            }
          })
        }}
      />
    </>
  );
}