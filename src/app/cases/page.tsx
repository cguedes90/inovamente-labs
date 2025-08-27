import { Metadata } from 'next';
import { TestimonialsCarousel } from '@/components/SocialProof/TestimonialsCarousel';
import { CaseStudiesGrid } from '@/components/SocialProof/CaseStudiesGrid';

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Resultados Reais de Transformação Digital - InovaMente Labs',
  description: 'Conheça cases reais de empresas que transformaram seus negócios com nossas soluções. Resultados mensuráveis em automação, integração, escalabilidade e MVP.',
  keywords: 'cases de sucesso, transformacao digital, resultados reais, automacao processos, integracao sistemas, escalabilidade',
  openGraph: {
    title: 'Cases de Sucesso - Transformação Digital Comprovada',
    description: 'Resultados reais de empresas que revolucionaram seus processos com nossas soluções.',
    url: 'https://inovamentelabs.com.br/cases',
    siteName: 'InovaMente Labs',
    images: [{
      url: '/og-cases.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'pt_BR',
    type: 'website',
  }
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Cases de Sucesso
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            🎯 Resultados que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Falam por Si
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Conheça histórias reais de empresas que transformaram seus negócios com nossas soluções. 
            Resultados mensuráveis, impacto comprovado e transformação digital que gera valor real.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-blue-600 mb-2">R$ 50M+</div>
              <div className="text-gray-600">Economia Gerada</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-orange-600 mb-2">18M</div>
              <div className="text-gray-600">Usuários Impactados</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Conhecer Nossos Cases
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors">
              Agendar Consultoria
            </button>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Impacto Consolidado dos Nossos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números reais baseados em projetos concluídos nos últimos 24 meses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">340%</div>
              <div className="text-blue-600 font-medium mb-2">ROI Médio</div>
              <div className="text-sm text-gray-600">Retorno em 12 meses</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">75%</div>
              <div className="text-green-600 font-medium mb-2">Redução Tempo</div>
              <div className="text-sm text-gray-600">Processos automatizados</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-purple-700 mb-2">99.8%</div>
              <div className="text-purple-600 font-medium mb-2">Uptime Médio</div>
              <div className="text-sm text-gray-600">Sistemas escaláveis</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-orange-700 mb-2">65%</div>
              <div className="text-orange-600 font-medium mb-2">Economia Custos</div>
              <div className="text-sm text-gray-600">Otimização recursos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <TestimonialsCarousel />
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <CaseStudiesGrid />
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🏭 Setores que Atendemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa expertise abrange diversos segmentos da economia brasileira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce & Varejo</h3>
              <p className="text-gray-600 mb-4">
                Marketplaces, lojas online, omnichannel e automação de vendas
              </p>
              <div className="text-sm text-blue-600 font-medium">
                25+ projetos • 89% aumento médio de conversão
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fintech & Serviços Financeiros</h3>
              <p className="text-gray-600 mb-4">
                Pagamentos, empréstimos, cartões e compliance bancário
              </p>
              <div className="text-sm text-green-600 font-medium">
                18+ projetos • R$ 500M+ processados mensalmente
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saúde Digital</h3>
              <p className="text-gray-600 mb-4">
                Telemedicina, prontuários, agendamentos e gestão hospitalar
              </p>
              <div className="text-sm text-purple-600 font-medium">
                12+ projetos • 2M+ consultas facilitadas
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Indústria & Manufatura</h3>
              <p className="text-gray-600 mb-4">
                Indústria 4.0, IoT, automação fabril e controle de qualidade
              </p>
              <div className="text-sm text-orange-600 font-medium">
                15+ projetos • 45% melhoria eficiência média
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl border border-teal-100">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AgriTech</h3>
              <p className="text-gray-600 mb-4">
                Fazendas inteligentes, monitoramento por satélite e predição
              </p>
              <div className="text-sm text-teal-600 font-medium">
                8+ projetos • 35% aumento produtividade
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EdTech</h3>
              <p className="text-gray-600 mb-4">
                Plataformas educacionais, gamificação e gestão escolar
              </p>
              <div className="text-sm text-red-600 font-medium">
                10+ projetos • 200K+ alunos impactados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Nossa Metodologia de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo estruturado que garante resultados consistentes em todos os projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                Análise profunda do negócio, processos atuais e identificação de oportunidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Definição de objetivos, métricas de sucesso e roadmap tecnológico
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">
                Desenvolvimento ágil com entregas incrementais e validação contínua
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale</h3>
              <p className="text-gray-600">
                Monitoramento de resultados, otimizações e crescimento sustentável
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            🚀 Pronto para Ser Nosso Próximo Case de Sucesso?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Agende uma consultoria gratuita e descubra como podemos transformar 
            seus desafios em resultados mensuráveis, assim como fizemos com centenas de empresas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              📅 Agendar Consultoria Gratuita
            </button>
            <button className="border border-white hover:bg-white hover:text-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              💬 WhatsApp: (11) 99999-9999
            </button>
          </div>
          
          <div className="mt-8 text-emerald-200 text-sm">
            ✓ Análise gratuita de 60 minutos  ✓ Plano de ação personalizado  ✓ Sem compromisso
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Cases de Sucesso - InovaMente Labs",
            "description": "Cases reais de transformação digital com resultados mensuráveis",
            "url": "https://inovamentelabs.com.br/cases",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "CaseStudy",
                  "name": "Marketplace B2B: De Startup a Unicórnio",
                  "description": "Transformação de startup em marketplace que processa R$ 150M/mês",
                  "author": {
                    "@type": "Organization",
                    "name": "InovaMente Labs"
                  }
                }
              ]
            },
            "provider": {
              "@type": "Organization", 
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br"
            }
          })
        }}
      />
    </div>
  );
}