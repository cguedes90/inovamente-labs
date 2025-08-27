import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Automação de Processos Empresariais | RPA | InovaMente Labs',
  description: 'Automatize tarefas repetitivas e otimize a eficiência da sua empresa. RPA, workflow automatizado, integração de sistemas e redução de custos operacionais.',
  keywords: [
    'automação processos empresariais',
    'RPA robotic process automation',
    'workflow automatizado Brasil',
    'integração sistemas empresariais',
    'redução custos operacionais',
    'eficiência empresarial automação'
  ],
  openGraph: {
    title: 'Automação de Processos Empresariais | InovaMente Labs',
    description: 'Reduza custos e aumente a eficiência com nossas soluções de automação de processos empresariais.',
    url: 'https://www.inovamentelabs.com.br/servicos/automacao-processos',
    type: 'website',
    images: [
      {
        url: '/og-automacao-processos.png',
        width: 1200,
        height: 630,
        alt: 'Automação de Processos InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/servicos/automacao-processos'
  }
};

const automationServices = [
  {
    icon: '🤖',
    title: 'RPA - Robotic Process Automation',
    description: 'Bots inteligentes para automatizar tarefas repetitivas e manuais',
    features: [
      'Automação de planilhas',
      'Processamento de documentos',
      'Extração de dados',
      'Preenchimento de formulários',
      'Integração com sistemas legados',
      'Relatórios automáticos'
    ],
    benefits: ['80% redução em tempo', '95% menos erros', '24/7 operação'],
    price: 'R$ 3.000 - R$ 15.000',
    timeline: '15-45 dias'
  },
  {
    icon: '⚡',
    title: 'Workflow Automation',
    description: 'Fluxos de trabalho inteligentes para otimizar processos internos',
    features: [
      'Aprovações automáticas',
      'Notificações inteligentes',
      'Escalabilidade de tarefas',
      'Dashboards em tempo real',
      'Auditoria completa',
      'Integração multi-sistemas'
    ],
    benefits: ['60% menos tempo', 'Transparência total', 'Conformidade garantida'],
    price: 'R$ 5.000 - R$ 25.000',
    timeline: '30-60 dias'
  },
  {
    icon: '🔗',
    title: 'Integração de Sistemas',
    description: 'Conecte diferentes sistemas para um fluxo de dados unificado',
    features: [
      'APIs personalizadas',
      'Sincronização de dados',
      'Middleware inteligente',
      'Transformação de dados',
      'Monitoramento em tempo real',
      'Logs detalhados'
    ],
    benefits: ['Dados unificados', 'Eficiência máxima', 'ROI comprovado'],
    price: 'R$ 8.000 - R$ 40.000',
    timeline: '45-90 dias'
  }
];

const processTypes = [
  {
    category: 'Financeiro',
    processes: ['Conciliação bancária', 'Faturamento', 'Contas a pagar/receber', 'Relatórios fiscais'],
    icon: '💰',
    savings: 'Até 70% economia'
  },
  {
    category: 'Recursos Humanos',
    processes: ['Folha de pagamento', 'Recrutamento', 'Onboarding', 'Avaliações'],
    icon: '👥',
    savings: 'Até 60% economia'
  },
  {
    category: 'Vendas & Marketing',
    processes: ['Lead qualification', 'Proposals', 'Follow-up', 'Relatórios'],
    icon: '📈',
    savings: 'Até 80% economia'
  },
  {
    category: 'Operacional',
    processes: ['Gestão de estoque', 'Pedidos', 'Logística', 'Qualidade'],
    icon: '⚙️',
    savings: 'Até 65% economia'
  },
  {
    category: 'TI & Suporte',
    processes: ['Backup automático', 'Monitoramento', 'Tickets', 'Deploy'],
    icon: '🛠️',
    savings: 'Até 90% economia'
  },
  {
    category: 'Compliance',
    processes: ['Auditoria', 'Relatórios regulatórios', 'Documentação', 'Aprovações'],
    icon: '📋',
    savings: 'Até 75% economia'
  }
];

const technologies = [
  { name: 'Python', description: 'Scripts de automação eficientes', icon: '🐍' },
  { name: 'Power Automate', description: 'Automação Microsoft ecosystem', icon: '🔄' },
  { name: 'Zapier', description: 'Integração entre aplicativos', icon: '⚡' },
  { name: 'Node.js', description: 'APIs e microserviços', icon: '🟢' },
  { name: 'n8n', description: 'Workflow automation open-source', icon: '🔗' },
  { name: 'AWS Lambda', description: 'Serverless automation', icon: '☁️' }
];

const roiCalculator = [
  {
    metric: 'Horas economizadas/mês',
    before: '160h',
    after: '20h',
    savings: '140h'
  },
  {
    metric: 'Custo operacional/mês',
    before: 'R$ 8.000',
    after: 'R$ 2.000',
    savings: 'R$ 6.000'
  },
  {
    metric: 'Taxa de erro',
    before: '15%',
    after: '1%',
    savings: '14%'
  },
  {
    metric: 'Tempo de processo',
    before: '4 dias',
    after: '2 horas',
    savings: '95%'
  }
];

const caseStudies = [
  {
    title: 'E-commerce: Automação de Pedidos',
    challenge: 'Processamento manual de 500+ pedidos diários',
    solution: 'RPA para captura, validação e processamento automático',
    results: ['90% redução em tempo', '99.5% precisão', 'R$ 15k economia/mês'],
    industry: 'Varejo'
  },
  {
    title: 'Consultoria: Workflow de Aprovações',
    challenge: 'Processo de aprovação lento e sem rastreabilidade',
    solution: 'Sistema automatizado de aprovações multi-nível',
    results: ['75% processo mais rápido', 'Transparência total', '100% compliance'],
    industry: 'Consultoria'
  },
  {
    title: 'Manufatura: Integração ERP-CRM',
    challenge: 'Dados desconectados entre sistemas críticos',
    solution: 'API middleware para sincronização em tempo real',
    results: ['Dados unificados', '50% menos retrabalho', 'Decisões em tempo real'],
    industry: 'Indústria'
  }
];

const faqs = [
  {
    question: 'Qual o ROI típico de projetos de automação?',
    answer: 'O ROI varia entre 300% a 800% no primeiro ano, dependendo da complexidade do processo. A maioria dos projetos se paga em 3-6 meses devido à redução significativa de custos operacionais.'
  },
  {
    question: 'Quanto tempo leva para implementar uma automação?',
    answer: 'Processos simples podem ser automatizados em 1-2 semanas. Projetos mais complexos levam de 1-3 meses. Sempre fazemos uma análise prévia para dar prazos precisos.'
  },
  {
    question: 'É possível automatizar processos que envolvem sistemas legados?',
    answer: 'Sim! Temos experiência com integração de sistemas antigos. Usamos técnicas como screen scraping, APIs web e RPA para conectar qualquer sistema.'
  },
  {
    question: 'Como garantem que a automação não vai quebrar?',
    answer: 'Implementamos monitoramento 24/7, logs detalhados, tratamento de exceções e planos de contingência. Também oferecemos suporte e manutenção contínua.'
  }
];

export default function AutomacaoProcessosPage() {
  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Serviços', href: '/servicos' },
        { label: 'Automação de Processos', current: true }
      ]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automação de
                <span className="block text-emerald-300">Processos</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transforme tarefas manuais repetitivas em processos automatizados inteligentes. 
                Reduza custos, elimine erros e libere sua equipe para atividades estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#orcamento" className="btn-secondary bg-white text-green-600">
                  Calcular ROI
                </Link>
                <Link href="#cases" className="btn-primary border-2 border-white bg-transparent">
                  Ver Cases de Sucesso
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Por que automatizar processos?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">💰</span> Redução de até 80% nos custos</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">⚡</span> 90% mais rápido que processos manuais</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">🎯</span> 99% de precisão vs 85% manual</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">🔄</span> Operação 24/7 sem interrupções</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2">📊</span> Transparência total nos processos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Automação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas para diferentes necessidades empresariais
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-green-600">{service.price}</span>
                    <span className="text-gray-500">{service.timeline}</span>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Recursos:</h4>
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
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contato?service=automacao-processos&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary w-full text-center"
                >
                  Solicitar Análise
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processos que Automatizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência comprovada em diferentes áreas empresariais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processTypes.map((type, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{type.icon}</div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                    {type.savings}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.category}</h3>
                <ul className="space-y-2">
                  {type.processes.map((process, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">•</span>
                      {process}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI Real de Automação
            </h2>
            <p className="text-xl text-gray-600">
              Exemplo baseado em case real de um dos nossos clientes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full glassmorphism-card">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Métrica</th>
                  <th className="text-center py-4 px-6 font-bold text-red-600">Antes (Manual)</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">Depois (Automatizado)</th>
                  <th className="text-center py-4 px-6 font-bold text-green-600">Economia</th>
                </tr>
              </thead>
              <tbody>
                {roiCalculator.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.metric}</td>
                    <td className="text-center py-4 px-6 text-red-600 font-semibold">{item.before}</td>
                    <td className="text-center py-4 px-6 text-blue-600 font-semibold">{item.after}</td>
                    <td className="text-center py-4 px-6 text-green-600 font-bold">{item.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-bold text-lg">
              💰 ROI Total: R$ 72.000 economizados por ano
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias de Automação
            </h2>
            <p className="text-xl text-gray-600">
              Ferramentas poderosas para diferentes cenários
            </p>
          </div>

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
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de projetos de automação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="glassmorphism-card hover-lift">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-semibold">
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
                
                <div className="space-y-4">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre automação de processos
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
      <section id="orcamento" className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Automatizar seus Processos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Análise gratuita do seu processo atual e cálculo de ROI personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato?service=automacao-processos"
              className="btn-secondary bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Análise Gratuita
            </Link>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de automatizar processos na minha empresa"
              target="_blank"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
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
            "name": "Automação de Processos Empresariais",
            "description": "Automatize tarefas repetitivas e otimize a eficiência empresarial com RPA e workflow automation",
            "provider": {
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            },
            "areaServed": "Brasil",
            "offers": automationServices.map(service => ({
              "@type": "Offer",
              "name": service.title,
              "description": service.description,
              "price": service.price,
              "priceCurrency": "BRL"
            })),
            "additionalType": "http://www.productontology.org/doc/Business_process_automation"
          })
        }}
      />
    </>
  );
}