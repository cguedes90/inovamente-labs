import { Metadata } from 'next';
import { SemanticSEO } from '@/lib/seo-semantic';

const keywords = SemanticSEO.generateSemanticKeywords('escalabilidade aplicacoes');

export const metadata: Metadata = {
  title: 'Escalabilidade de Aplicações | Prepare-se para crescimento explosivo - InovaMente Labs',
  description: 'Especialistas em escalabilidade de aplicações. Otimizamos performance, arquitetura e infraestrutura para suportar milhões de usuários.',
  keywords: 'escalabilidade aplicacoes, performance optimization, arquitetura escalavel, microservicos, load balancing',
  openGraph: {
    title: 'Escalabilidade de Aplicações - Cresça Sem Limites',
    description: 'Transforme sua aplicação para suportar crescimento explosivo com arquitetura escalável.',
    url: 'https://inovamentelabs.com.br/solucoes/escalabilidade-aplicacoes',
    siteName: 'InovaMente Labs',
    images: [{
      url: '/og-escalabilidade-aplicacoes.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escalabilidade de Aplicações - InovaMente Labs',
    description: 'Arquitetura que cresce com seu negócio. Do MVP aos milhões de usuários.',
  },
};

export default function EscalabilidadeAplicacoesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            SemanticSEO.generateSemanticStructuredData(
              'Escalabilidade de Aplicações',
              'Arquitetura e infraestrutura escalável para aplicações que crescem exponencialmente.',
              keywords,
              'https://inovamentelabs.com.br/solucoes/escalabilidade-aplicacoes'
            )
          )
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Escalabilidade de Aplicações
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 voice-optimized">
            Escale de 100 para
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              100 Milhões de Users
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos aplicações monolíticas em arquiteturas altamente escaláveis. 
            Suporte crescimento explosivo sem comprometer performance ou disponibilidade.
          </p>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">99.99%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600">Melhoria Performance</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-600">Redução Custos</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Users Simultâneos</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Avaliar Minha Aplicação
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors">
              Ver Cases de Escala
            </button>
          </div>
        </div>
      </section>

      {/* Scalability Problems */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sinais de que Sua Aplicação Não Escala
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reconheça os sintomas antes que seja tarde demais. Estes são os principais indicadores 
              de problemas de escalabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Degradante</h3>
              <p className="text-gray-600 mb-4">
                Resposta lenta durante picos de tráfego, timeouts frequentes, 
                páginas que demoram mais de 3 segundos para carregar.
              </p>
              <div className="text-sm font-semibold text-red-600">
                💔 Resultado: 40% dos usuários abandonam após 3 segundos
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recursos Limitados</h3>
              <p className="text-gray-600 mb-4">
                CPU e memória em 100%, banco de dados sobrecarregado, 
                impossibilidade de adicionar mais recursos verticalmente.
              </p>
              <div className="text-sm font-semibold text-orange-600">
                📈 Crescimento bloqueado: Limite técnico atingido
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instabilidade Crescente</h3>
              <p className="text-gray-600 mb-4">
                Crashes frequentes, erros 500, downtime não programado, 
                dificuldade para diagnosticar problemas.
              </p>
              <div className="text-sm font-semibold text-yellow-600">
                ⚠️ Risco: Perda de confiança e clientes
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy Complexo</h3>
              <p className="text-gray-600 mb-4">
                Deployments demorados, necessidade de downtime, 
                medo de atualizar por risco de quebrar tudo.
              </p>
              <div className="text-sm font-semibold text-purple-600">
                🚀 Impacto: Time to market lento, competitividade reduzida
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custos Exponenciais</h3>
              <p className="text-gray-600 mb-4">
                Gastos crescentes com infraestrutura sem melhoria proporcional, 
                over-provisioning por falta de otimização.
              </p>
              <div className="text-sm font-semibold text-blue-600">
                💰 Problema: ROI decrescente, margens apertadas
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Produtividade do Time</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvedores gastam mais tempo debugando do que criando features, 
                burnout da equipe, dificuldade para onboarding.
              </p>
              <div className="text-sm font-semibold text-green-600">
                👥 Consequência: Rotatividade alta, entregas lentas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Estratégia de Escalabilidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para transformar aplicações monolíticas em arquiteturas 
              que suportam crescimento exponencial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment & Bottlenecks</h3>
                    <p className="text-gray-600 mb-4">
                      Auditoria completa da arquitetura atual, identificação de gargalos de performance, 
                      análise de padrões de uso e projeção de crescimento.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Performance profiling e APM analysis
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Database query optimization
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Load testing e stress testing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Decomposição em Microserviços</h3>
                    <p className="text-gray-600 mb-4">
                      Estratégia de domain-driven design para quebrar o monolito em serviços 
                      independentes, escaláveis e resilientes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Bounded contexts identification
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        API Gateway e service mesh
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Event-driven architecture
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Infraestrutura Cloud-Native</h3>
                    <p className="text-gray-600 mb-4">
                      Containerização, orquestração Kubernetes e infraestrutura como código 
                      para auto-scaling e alta disponibilidade.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Docker + Kubernetes orchestration
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Horizontal Pod Autoscaler (HPA)
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Multi-region deployment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Observabilidade & Monitoring</h3>
                    <p className="text-gray-600 mb-4">
                      Implementação de ferramentas completas de observabilidade para 
                      monitoramento proativo e debugging rápido.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Prometheus + Grafana dashboards
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Distributed tracing (Jaeger/Zipkin)
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Centralized logging (ELK Stack)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arquitetura Escalável</h3>
              
              <div className="space-y-6">
                {/* Load Balancer */}
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-blue-900">Load Balancer</div>
                    <div className="text-sm text-blue-700">ALB/NLB</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </div>

                {/* API Gateway */}
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-green-900">API Gateway</div>
                    <div className="text-sm text-green-700">Kong/AWS API Gateway</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </div>

                {/* Microservices */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="font-semibold text-purple-900 text-sm">User Service</div>
                    <div className="text-xs text-purple-700">Auth & Profile</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="font-semibold text-purple-900 text-sm">Payment Service</div>
                    <div className="text-xs text-purple-700">Billing & Transactions</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </div>

                {/* Data Layer */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-orange-900">Data Layer</div>
                    <div className="text-sm text-orange-700">Redis + PostgreSQL</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">10,000x</div>
                      <div className="text-xs text-gray-500">Capacity Scale</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">&lt;100ms</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Patterns */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Padrões de Escalabilidade que Aplicamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Técnicas e padrões comprovados utilizados por giants da tecnologia para escalar aplicações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Database Sharding</h3>
              <p className="text-gray-600 mb-4">
                Distribuição horizontal de dados por múltiplos shards para suportar 
                bilhões de registros com performance consistente.
              </p>
              <div className="text-sm font-semibold text-blue-600">
                ⚡ Resultado: Queries 10x mais rápidas
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Caching Strategies</h3>
              <p className="text-gray-600 mb-4">
                Múltiplas camadas de cache (CDN, Application, Database) para reduzir 
                latência e aumentar throughput drasticamente.
              </p>
              <div className="text-sm font-semibold text-green-600">
                🚀 Resultado: 95% das requests em &lt;50ms
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Sourcing</h3>
              <p className="text-gray-600 mb-4">
                Armazenamento de eventos ao invés de estado para audit trail completo, 
                replay de dados e processamento distribuído.
              </p>
              <div className="text-sm font-semibold text-purple-600">
                📊 Resultado: Auditoria completa + replay de dados
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CQRS Pattern</h3>
              <p className="text-gray-600 mb-4">
                Separação de comandos e queries para otimizar leitura e escrita 
                independentemente, melhorando performance global.
              </p>
              <div className="text-sm font-semibold text-orange-600">
                📈 Resultado: Reads 20x mais rápidas
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Circuit Breaker</h3>
              <p className="text-gray-600 mb-4">
                Proteção contra falhas em cascata com circuit breakers que isolam 
                serviços problemáticos mantendo o sistema funcionando.
              </p>
              <div className="text-sm font-semibold text-teal-600">
                🛡️ Resultado: 99.99% uptime garantido
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Auto Scaling</h3>
              <p className="text-gray-600 mb-4">
                Escalabilidade automática baseada em métricas customizadas: CPU, memória, 
                latência, throughput e business metrics.
              </p>
              <div className="text-sm font-semibold text-red-600">
                📊 Resultado: Custos otimizados automaticamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Antes vs Depois da Escalabilidade
            </h2>
            <p className="text-xl text-gray-600">
              Comparação real de métricas de performance em projetos que escalamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">❌ Arquitetura Monolítica</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Response Time</span>
                    <span className="text-lg font-bold text-red-600">3.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Concurrent Users</span>
                    <span className="text-lg font-bold text-red-600">500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Uptime</span>
                    <span className="text-lg font-bold text-red-600">97.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '97.5%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Deploy Time</span>
                    <span className="text-lg font-bold text-red-600">45min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Monthly Cost</span>
                    <span className="text-lg font-bold text-red-600">$3,500</span>
                  </div>
                  <div className="text-sm text-gray-600">Over-provisioned servers</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">✅ Arquitetura Escalável</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Response Time</span>
                    <span className="text-lg font-bold text-green-600">85ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-xs text-green-600 mt-1">37x mais rápido</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Concurrent Users</span>
                    <span className="text-lg font-bold text-green-600">50,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-xs text-green-600 mt-1">100x mais usuários</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Uptime</span>
                    <span className="text-lg font-bold text-green-600">99.99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-xs text-green-600 mt-1">25x menos downtime</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Deploy Time</span>
                    <span className="text-lg font-bold text-green-600">2min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-xs text-green-600 mt-1">22x mais rápido</div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Monthly Cost</span>
                    <span className="text-lg font-bold text-green-600">$1,200</span>
                  </div>
                  <div className="text-sm text-green-600">Auto-scaling eficiente</div>
                  <div className="text-xs text-green-600 mt-1">66% economia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cases de Escalabilidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicações que transformamos para suportar crescimento exponencial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6H8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Migração de monolito PHP para microserviços, suportando Black Friday 
                  com 2M de usuários simultâneos sem downtime.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Usuários simultâneos</span>
                  <span className="font-semibold text-green-600">2M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Response time</span>
                  <span className="font-semibold text-green-600">&lt;100ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Uptime durante picos</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Economia de custos</span>
                  <span className="font-semibold text-blue-600">60%</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Kubernetes</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Redis</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Kafka</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fintech - Pagamentos</h3>
                <p className="text-gray-600 mb-4">
                  Sistema de pagamentos que escala de mil para 10 milhões de transações diárias 
                  mantendo conformidade PCI-DSS.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Transações/dia</span>
                  <span className="font-semibold text-green-600">10M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Latência processamento</span>
                  <span className="font-semibold text-green-600">15ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Disponibilidade</span>
                  <span className="font-semibold text-green-600">99.999%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Conformidade</span>
                  <span className="font-semibold text-blue-600">PCI-DSS L1</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Go</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">NATS</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">AWS</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h6a2 2 0 002-2V8m-5 4h2m-1 4h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IoT Platform</h3>
                <p className="text-gray-600 mb-4">
                  Plataforma IoT que processa 50 milhões de eventos por dia de 
                  dispositivos conectados com analytics em tempo real.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Eventos/dia</span>
                  <span className="font-semibold text-green-600">50M</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Devices conectados</span>
                  <span className="font-semibold text-green-600">500K</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Latência ingestion</span>
                  <span className="font-semibold text-green-600">&lt;5ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Data retention</span>
                  <span className="font-semibold text-blue-600">5 anos</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">ClickHouse</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Kafka</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">GCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prepare Sua Aplicação para Escalar
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Não deixe problemas de performance limitarem o crescimento do seu negócio. 
            Transforme sua arquitetura para suportar milhões de usuários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              Auditoria Gratuita de Performance
            </button>
            <button className="border border-white hover:bg-white hover:text-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              WhatsApp: (11) 99999-9999
            </button>
          </div>
          
          <div className="mt-8 text-emerald-200 text-sm">
            ✓ Análise completa da arquitetura  ✓ Identificação de gargalos  ✓ Plano de escalabilidade
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Escalabilidade
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Quando devo pensar em escalar minha aplicação?
              </summary>
              <p className="text-gray-600">
                Os sinais incluem: response time &gt; 2 segundos, CPU/memória constantemente acima de 70%, 
                crashes durante picos de tráfego, impossibilidade de adicionar recursos ou quando o 
                crescimento está sendo limitado por questões técnicas.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Microserviços são sempre a melhor solução para escalar?
              </summary>
              <p className="text-gray-600">
                Não necessariamente. Para aplicações pequenas, otimização do monolito pode ser suficiente. 
                Microserviços trazem complexidade operacional. Avaliamos cada caso considerando tamanho 
                da equipe, volume de dados e padrões de crescimento específicos.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Quanto tempo leva para implementar uma arquitetura escalável?
              </summary>
              <p className="text-gray-600">
                Varia de 3-6 meses dependendo da complexidade. Fazemos migração gradual para minimizar 
                riscos: primeiro otimização, depois decomposição em serviços, e por fim migração completa. 
                O sistema continua funcionando durante todo o processo.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Como garantir que a migração não afete os usuários?
              </summary>
              <p className="text-gray-600">
                Utilizamos estratégias como blue-green deployment, feature flags, rolling updates e 
                extensive monitoring. Fazemos testes de carga em ambiente staging idêntico à produção 
                e mantemos rollback plans para cada etapa da migração.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}