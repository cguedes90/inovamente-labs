import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DevOps e Infraestrutura em Nuvem | AWS Docker Kubernetes | InovaMente Labs',
  description: 'Infraestrutura escalável, segura e otimizada para alta performance. AWS, Docker, Kubernetes, CI/CD, monitoramento 24/7 e deploy automatizado.',
  keywords: [
    'DevOps infraestrutura Brasil',
    'cloud computing AWS',
    'Docker Kubernetes implementação',
    'CI/CD pipeline automatizado',
    'monitoramento infraestrutura 24/7',
    'deploy automatizado seguro'
  ],
  openGraph: {
    title: 'DevOps e Infraestrutura em Nuvem | InovaMente Labs',
    description: 'Infraestrutura moderna, escalável e segura para suas aplicações. Especialistas em AWS, Docker e Kubernetes.',
    url: 'https://www.inovamentelabs.com.br/servicos/devops-infraestrutura',
    type: 'website',
    images: [
      {
        url: '/og-devops-infraestrutura.png',
        width: 1200,
        height: 630,
        alt: 'DevOps e Infraestrutura InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/servicos/devops-infraestrutura'
  }
};

const devopsServices = [
  {
    icon: '🚀',
    title: 'CI/CD Pipeline',
    description: 'Deploy automatizado com integração e entrega contínuas',
    features: [
      'GitHub Actions / GitLab CI',
      'Testes automatizados',
      'Deploy multi-ambiente',
      'Rollback automático',
      'Code quality gates',
      'Security scanning'
    ],
    benefits: ['90% menos erros', 'Deploy em minutos', 'Zero downtime'],
    price: 'R$ 2.500 - R$ 8.000',
    timeline: '15-30 dias'
  },
  {
    icon: '☁️',
    title: 'Infraestrutura Cloud',
    description: 'Arquitetura escalável e resiliente na AWS',
    features: [
      'Auto scaling groups',
      'Load balancers',
      'Multi-AZ deployment',
      'CDN e cache',
      'Backup automatizado',
      'Disaster recovery'
    ],
    benefits: ['99.9% uptime', 'Escalabilidade infinita', 'Custos otimizados'],
    price: 'R$ 1.500 - R$ 5.000/mês',
    timeline: '20-45 dias'
  },
  {
    icon: '📊',
    title: 'Monitoramento & Observabilidade',
    description: 'Visibilidade completa da infraestrutura e aplicações',
    features: [
      'Métricas em tempo real',
      'Alertas inteligentes',
      'Logs centralizados',
      'APM (Application Performance)',
      'Dashboards customizados',
      'SLA monitoring'
    ],
    benefits: ['Problemas detectados antes dos usuários', 'MTTR reduzido', 'Performance otimizada'],
    price: 'R$ 800 - R$ 3.000/mês',
    timeline: '10-20 dias'
  }
];

const cloudServices = [
  {
    category: 'Compute',
    services: ['EC2 Auto Scaling', 'ECS/EKS', 'Lambda Functions', 'Fargate'],
    icon: '💻'
  },
  {
    category: 'Storage',
    services: ['S3 Buckets', 'EBS Volumes', 'EFS File System', 'Glacier Archive'],
    icon: '💾'
  },
  {
    category: 'Database',
    services: ['RDS Multi-AZ', 'DynamoDB', 'ElastiCache', 'DocumentDB'],
    icon: '🗄️'
  },
  {
    category: 'Network',
    services: ['VPC Security', 'ALB/NLB', 'CloudFront CDN', 'Route 53'],
    icon: '🌐'
  },
  {
    category: 'Security',
    services: ['IAM Policies', 'WAF', 'GuardDuty', 'Certificate Manager'],
    icon: '🔒'
  },
  {
    category: 'Monitoring',
    services: ['CloudWatch', 'X-Ray', 'Systems Manager', 'Config'],
    icon: '📈'
  }
];

const technologies = [
  { name: 'AWS', description: 'Amazon Web Services completo', icon: '☁️', level: 'Expert' },
  { name: 'Docker', description: 'Containerização de aplicações', icon: '🐳', level: 'Expert' },
  { name: 'Kubernetes', description: 'Orquestração de containers', icon: '⚓', level: 'Advanced' },
  { name: 'Terraform', description: 'Infrastructure as Code', icon: '🏗️', level: 'Expert' },
  { name: 'Ansible', description: 'Configuration management', icon: '⚙️', level: 'Advanced' },
  { name: 'Prometheus', description: 'Monitoring e alertas', icon: '📊', level: 'Expert' }
];

const architecture = [
  {
    tier: 'Presentation Layer',
    components: ['Load Balancer', 'CDN', 'Web Servers'],
    description: 'Interface com usuários e distribuição de carga',
    icon: '🌐'
  },
  {
    tier: 'Application Layer',
    components: ['API Gateway', 'Microservices', 'Auto Scaling'],
    description: 'Lógica de negócio e processamento',
    icon: '⚙️'
  },
  {
    tier: 'Data Layer',
    components: ['Database Cluster', 'Cache', 'File Storage'],
    description: 'Persistência e armazenamento de dados',
    icon: '🗄️'
  },
  {
    tier: 'Infrastructure Layer',
    components: ['Networking', 'Security', 'Monitoring'],
    description: 'Base de infraestrutura e segurança',
    icon: '🏗️'
  }
];

const pricing = [
  {
    plan: 'Startup',
    price: 'R$ 1.500/mês',
    description: 'Para startups e pequenos projetos',
    features: [
      'Infraestrutura básica AWS',
      'CI/CD simples',
      'Monitoramento básico',
      'Backup diário',
      'Suporte business hours',
      'SLA 99.5%'
    ],
    suitable: 'Até 10k usuários/mês'
  },
  {
    plan: 'Business',
    price: 'R$ 3.500/mês',
    description: 'Para empresas em crescimento',
    features: [
      'Multi-AZ deployment',
      'Auto scaling avançado',
      'Monitoramento completo',
      'Backup incremental',
      'Suporte 24/7',
      'SLA 99.9%'
    ],
    suitable: 'Até 100k usuários/mês',
    popular: true
  },
  {
    plan: 'Enterprise',
    price: 'A partir de R$ 7.500/mês',
    description: 'Para grandes empresas',
    features: [
      'Arquitetura enterprise',
      'Kubernetes completo',
      'Observabilidade avançada',
      'Disaster recovery',
      'Dedicated support',
      'SLA 99.95%'
    ],
    suitable: 'Usuários ilimitados'
  }
];

const caseStudies = [
  {
    title: 'E-commerce: Black Friday sem Stress',
    challenge: 'Infraestrutura não suportava picos de tráfego na Black Friday',
    solution: 'Auto scaling, CDN global e arquitetura serverless',
    results: ['10x mais tráfego suportado', 'Zero downtime', '40% economia de custos'],
    metrics: { traffic: '500k → 5M users', uptime: '99.95%', cost: '40% economia' }
  },
  {
    title: 'Fintech: Segurança e Compliance',
    challenge: 'Necessidade de alta segurança e conformidade PCI',
    solution: 'Arquitetura multi-camadas com WAF e monitoramento avançado',
    results: ['Certificação PCI DSS', 'Zero incidentes de segurança', 'Auditoria aprovada'],
    metrics: { security: '100% compliance', incidents: '0 breaches', audit: 'Aprovada' }
  },
  {
    title: 'SaaS: Crescimento Exponencial',
    challenge: 'Crescimento rápido exigindo escalabilidade imediata',
    solution: 'Microserviços com Kubernetes e observabilidade completa',
    results: ['Escalabilidade infinita', 'Deploy 20x mais rápido', 'MTTR reduzido em 80%'],
    metrics: { scale: 'Infinita', deploy: '20x faster', mttr: '80% redução' }
  }
];

const faqs = [
  {
    question: 'Qual a diferença entre infraestrutura tradicional e cloud?',
    answer: 'Cloud oferece escalabilidade automática, pay-as-you-use, alta disponibilidade global e eliminação de CAPEX. Tradicionalmente você paga por capacidade máxima mesmo sem usar, no cloud paga apenas pelo que consome.'
  },
  {
    question: 'Como garantem a segurança da infraestrutura?',
    answer: 'Implementamos security by design com WAF, criptografia end-to-end, IAM granular, monitoramento 24/7, patches automáticos e conformidade com padrões como ISO 27001 e PCI DSS.'
  },
  {
    question: 'O que acontece se a AWS sair do ar?',
    answer: 'Projetamos arquiteturas multi-AZ e multi-region quando necessário. Também implementamos estratégias de disaster recovery e backup em providers alternativos para garantir business continuity.'
  },
  {
    question: 'Quanto posso economizar migrando para cloud?',
    answer: 'Clientes típicos economizam 20-40% nos primeiros 6 meses. A economia vem de: eliminação de hardware, redução de pessoal operacional, auto scaling e reserved instances.'
  }
];

export default function DevOpsInfraestruturaPage() {
  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Serviços', href: '/servicos' },
        { label: 'DevOps & Infraestrutura', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DevOps &
                <span className="block text-yellow-300">Infraestrutura</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Infraestrutura moderna, escalável e segura na nuvem. Deploy automatizado, 
                monitoramento 24/7 e arquitetura de alta disponibilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#orcamento" className="btn-secondary bg-white text-orange-600">
                  Ver Planos
                </Link>
                <Link href="#cases" className="btn-primary border-2 border-white bg-transparent">
                  Cases de Sucesso
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Benefícios da infraestrutura moderna:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">⚡</span> 99.9% de disponibilidade garantida</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">🚀</span> Deploy em segundos vs horas</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">💰</span> Pague apenas pelo que usar</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">🔒</span> Segurança enterprise por padrão</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-2">📊</span> Observabilidade completa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços DevOps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para modernizar sua infraestrutura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {devopsServices.map((service, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-orange-600">{service.price}</span>
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
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=devops-infraestrutura&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Setup
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços AWS Utilizados
            </h2>
            <p className="text-xl text-gray-600">
              Stack completo na nuvem para máxima performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((category, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-orange-500 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-gray-600">
              Ferramentas modernas para infraestrutura de classe mundial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">{tech.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      tech.level === 'Expert' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arquitetura de Referência
            </h2>
            <p className="text-xl text-gray-600">
              Design patterns para aplicações escaláveis e resilientes
            </p>
          </div>

          <div className="space-y-8">
            {architecture.map((tier, index) => (
              <div key={index} className="glassmorphism-card">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{tier.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tier.tier}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {tier.components.map((component, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange-100 text-orange-700 text-sm rounded-lg font-semibold">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="orcamento" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Infraestrutura
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`glassmorphism-card relative hover-lift ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
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
                  href={`/contato?service=devops-infraestrutura&plan=${plan.plan.toLowerCase()}`}
                  className={`btn-primary w-full text-center ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                >
                  Contratar {plan.plan}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Transformações reais de infraestrutura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Desafio:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solução:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-orange-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
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
              Tire suas dúvidas sobre DevOps e infraestrutura
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Modernizar sua Infraestrutura?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Auditoria gratuita da sua infraestrutura atual e proposta de arquitetura otimizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=devops-infraestrutura"
              className="btn-secondary bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Auditoria Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de modernizar minha infraestrutura"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
            >
              Falar no WhatsApp
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
            "name": "DevOps e Infraestrutura em Nuvem",
            "description": "Infraestrutura escalável, segura e otimizada para alta performance com AWS, Docker e Kubernetes",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "offers": devopsServices.map(service => ({
              "@type": "Offer",
              "name": service.title,
              "description": service.description,
              "price": service.price,
              "priceCurrency": "BRL"
            })),
            "additionalType": "http://www.productontology.org/doc/Cloud_computing"
          })
        }}
      />
    </>
  );
}