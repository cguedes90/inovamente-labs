import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Serviços de Desenvolvimento de Software | InovaMente Labs',
  description: 'Oferecemos desenvolvimento web, mobile, automação de processos e DevOps. Transforme sua empresa com soluções tecnológicas inovadoras no Brasil.',
  keywords: [
    'desenvolvimento de software Brasil',
    'fábrica de software',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'automação de processos',
    'DevOps infraestrutura'
  ],
  openGraph: {
    title: 'Serviços de Desenvolvimento de Software | InovaMente Labs',
    description: 'Soluções completas em tecnologia para sua empresa: desenvolvimento web, mobile, automação e infraestrutura.',
    url: 'https://www.inovamentelabs.com.br/servicos',
    type: 'website',
    images: [
      {
        url: '/og-servicos.png',
        width: 1200,
        height: 630,
        alt: 'Serviços InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/servicos'
  }
};

const services = [
  {
    id: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    description: 'Sites e sistemas web responsivos com React, Next.js e tecnologias modernas',
    icon: '🌐',
    href: '/servicos/desenvolvimento-web',
    features: [
      'Sites institucionais responsivos',
      'E-commerce completo',
      'Sistemas corporativos',
      'PWA - Progressive Web Apps',
      'Integração com APIs',
      'SEO otimizado'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    startingPrice: 'A partir de R$ 2.500'
  },
  {
    id: 'desenvolvimento-mobile',
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com performance superior',
    icon: '📱',
    href: '/servicos/desenvolvimento-mobile',
    features: [
      'Apps nativos iOS/Android',
      'Aplicativos híbridos',
      'Integração com dispositivos',
      'Push notifications',
      'Publicação nas stores',
      'Manutenção e atualizações'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    startingPrice: 'A partir de R$ 8.000'
  },
  {
    id: 'automacao-processos',
    title: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas e otimize a eficiência da sua empresa',
    icon: '🤖',
    href: '/servicos/automacao-processos',
    features: [
      'Automação de workflows',
      'Integração entre sistemas',
      'Relatórios automáticos',
      'Chatbots inteligentes',
      'RPA - Robotic Process Automation',
      'API REST personalizadas'
    ],
    technologies: ['Python', 'Node.js', 'Zapier', 'Power Automate'],
    startingPrice: 'A partir de R$ 3.000'
  },
  {
    id: 'devops-infraestrutura',
    title: 'DevOps & Infraestrutura',
    description: 'Infraestrutura escalável, segura e otimizada para alta performance',
    icon: '⚡',
    href: '/servicos/devops-infraestrutura',
    features: [
      'Deploy automatizado',
      'Monitoramento 24/7',
      'Backup e disaster recovery',
      'Segurança avançada',
      'Escalabilidade automática',
      'Otimização de custos'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    startingPrice: 'A partir de R$ 1.500/mês'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Soluções completas em tecnologia para transformar sua empresa e acelerar seu crescimento digital
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🏆 +100 Projetos Entregues
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ⚡ Entrega em 30 dias
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🛡️ Suporte Garantido
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha o Serviço Ideal para Sua Empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções personalizadas com as melhores tecnologias do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="glassmorphism-card group hover-lift">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">
                      {service.startingPrice}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Principais recursos:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <Link
                    href={service.href}
                    className="flex-1 btn-primary text-center group-hover:scale-105 transition-transform"
                  >
                    Saiba Mais
                  </Link>
                  <Link
                    href={`/contato?service=${service.id}`}
                    className="flex-1 btn-secondary text-center group-hover:scale-105 transition-transform"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo ágil e transparente para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise',
                description: 'Entendemos suas necessidades e objetivos de negócio'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Criamos um roadmap detalhado com prazos e entregas'
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Desenvolvimento ágil com entregas incrementais'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Deploy, treinamento e suporte pós-lançamento'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar sua Empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Converse com nossos especialistas e descubra como podemos acelerar seu crescimento digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Consultoria Gratuita
            </Link>
            <Link
              href="/chamados"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Ver Nossos Cases
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
            "name": "Serviços de Desenvolvimento de Software",
            "description": "Desenvolvimento web, mobile, automação de processos e DevOps",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Tecnologia",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            }
          })
        }}
      />
    </>
  );
}