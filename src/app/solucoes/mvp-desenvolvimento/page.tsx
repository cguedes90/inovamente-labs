import { Metadata } from 'next';
import { SemanticSEO } from '@/lib/seo-semantic';

const keywords = SemanticSEO.generateSemanticKeywords('desenvolvimento mvp');

export const metadata: Metadata = {
  title: 'Desenvolvimento MVP | Valide sua ideia rapidamente - InovaMente Labs',
  description: 'Especialistas em MVP (Minimum Viable Product). Desenvolvemos protótipos funcionais para validar sua startup ou produto digital em até 30 dias.',
  keywords: 'desenvolvimento mvp, minimum viable product, prototipo funcional, validacao startup, produto digital',
  openGraph: {
    title: 'Desenvolvimento MVP - Valide Rápido, Escale Depois',
    description: 'Transforme sua ideia em produto real em 30 dias. MVP validado e pronto para escalar.',
    url: 'https://inovamentelabs.com.br/solucoes/mvp-desenvolvimento',
    siteName: 'InovaMente Labs',
    images: [{
      url: '/og-mvp-desenvolvimento.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvimento MVP - InovaMente Labs',
    description: 'MVP em 30 dias. Valide sua ideia antes de investir pesado.',
  },
};

export default function MVPDesenvolvimentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            SemanticSEO.generateSemanticStructuredData(
              'Desenvolvimento MVP (Minimum Viable Product)',
              'Transforme sua ideia em produto real rapidamente. MVP validado, escalável e pronto para mercado.',
              keywords,
              'https://inovamentelabs.com.br/solucoes/mvp-desenvolvimento'
            )
          )
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            MVP Development
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 voice-optimized">
            Do Conceito ao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              MVP em 30 Dias
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Valide sua ideia rapidamente com um MVP funcional. Minimize riscos, acelere aprendizado 
            e chegue ao mercado antes da concorrência com nossa metodologia comprovada.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">30</div>
              <div className="text-gray-600">Dias para MVP</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Economia vs Full</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Taxa Validação</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">MVPs Criados</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Criar Meu MVP Agora
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors">
              Ver MVPs Anteriores
            </button>
          </div>
        </div>
      </section>

      {/* MVP Problems */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que 90% das Startups Falham?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A maioria dos empreendedores comete os mesmos erros. Evite essas armadilhas com um MVP bem estruturado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sem Validação de Mercado</h3>
              <p className="text-gray-600 mb-4">
                42% das startups falham por criar produtos que ninguém quer. 
                Gastam meses desenvolvendo algo sem testar com usuários reais.
              </p>
              <div className="text-sm font-semibold text-red-600">
                💸 Custo médio: R$ 150.000 - R$ 500.000 perdidos
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time to Market Lento</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvimento longo demais permite que concorrentes cheguem primeiro. 
                O mercado muda rapidamente, especialmente em tech.
              </p>
              <div className="text-sm font-semibold text-orange-600">
                ⏱️ Tempo perdido: 6-18 meses de oportunidade
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Over-Engineering</h3>
              <p className="text-gray-600 mb-4">
                Desenvolver funcionalidades desnecessárias desde o início. 
                Foco em perfecção ao invés de aprendizado rápido.
              </p>
              <div className="text-sm font-semibold text-yellow-600">
                🔧 Complexidade desnecessária: 70% das features são inúteis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Metodologia MVP Sprint
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo estruturado em 4 sprints de 1 semana cada, com entregas incrementais e validação contínua.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full">
              <div className="w-px bg-gray-300 h-full"></div>
            </div>

            <div className="space-y-12">
              {/* Sprint 1 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">Discovery & Strategy</h3>
                        <div className="text-sm text-gray-500">Semana 1</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Entendemos profundamente o problema, definimos persona, mapeamos jornada 
                      do usuário e priorizamos funcionalidades essenciais.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Pesquisa de mercado e concorrência
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Definição de personas e user stories
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Priorização usando framework MoSCoW
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full hidden md:block"></div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Sprint 2 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12 md:order-2">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">Design & Prototype</h3>
                        <div className="text-sm text-gray-500">Semana 2</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Criamos wireframes, protótipos navegáveis e design system. 
                      Testamos usabilidade antes de começar o desenvolvimento.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Wireframes e fluxos de navegação
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Protótipo interativo (Figma)
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Teste de usabilidade com 5 usuários
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full hidden md:block"></div>
                <div className="md:w-5/12 md:order-1"></div>
              </div>

              {/* Sprint 3 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">Development</h3>
                        <div className="text-sm text-gray-500">Semana 3</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento ágil das funcionalidades core, integração com APIs essenciais 
                      e setup da infraestrutura escalável.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Desenvolvimento das features prioritárias
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Integração com serviços externos
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Setup CI/CD e infraestrutura
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full hidden md:block"></div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Sprint 4 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12 md:order-2">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">Launch & Validation</h3>
                        <div className="text-sm text-gray-500">Semana 4</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Testes finais, deploy em produção, setup de analytics e início dos 
                      testes com usuários reais para validação de hipóteses.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Testes de qualidade e performance
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Deploy e monitoramento
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Setup de métricas e analytics
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full hidden md:block"></div>
                <div className="md:w-5/12 md:order-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico para MVPs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologias modernas e comprovadas para desenvolvimento rápido e escalável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div>
                    <div className="font-semibold">React/Next.js</div>
                    <div className="text-sm text-gray-600">SSR, SEO-friendly</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <div>
                    <div className="font-semibold">TypeScript</div>
                    <div className="text-sm text-gray-600">Type safety</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <div>
                    <div className="font-semibold">Tailwind CSS</div>
                    <div className="text-sm text-gray-600">Rapid styling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <div>
                    <div className="font-semibold">Node.js</div>
                    <div className="text-sm text-gray-600">JavaScript everywhere</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <div>
                    <div className="font-semibold">Express/Fastify</div>
                    <div className="text-sm text-gray-600">Fast APIs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <div>
                    <div className="font-semibold">Prisma ORM</div>
                    <div className="text-sm text-gray-600">Type-safe database</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <div>
                    <div className="font-semibold">Vercel/Netlify</div>
                    <div className="text-sm text-gray-600">Deploy em segundos</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <div className="font-semibold">Supabase</div>
                    <div className="text-sm text-gray-600">Backend-as-a-Service</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">AWS/GCP</div>
                    <div className="text-sm text-gray-600">Escalabilidade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              MVPs que Criamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do conceito à validação em 30 dias. Veja alguns dos MVPs que ajudamos a construir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FinTech - Empréstimos P2P</h3>
                <p className="text-gray-600 mb-4">
                  Plataforma conectando investidores e tomadores de empréstimo. 
                  Validou hipótese de mercado em 2 semanas.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tempo desenvolvimento</span>
                  <span className="font-semibold">28 dias</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Usuários em 30 dias</span>
                  <span className="font-semibold text-green-600">850</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Investment secured</span>
                  <span className="font-semibold text-blue-600">R$ 2M</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6H8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AgriTech - IoT Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Dashboard para monitoramento de plantações via sensores IoT. 
                  Provou viabilidade técnica e comercial.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tempo desenvolvimento</span>
                  <span className="font-semibold">30 dias</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Fazendas piloto</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Economia comprova</span>
                  <span className="font-semibold text-blue-600">25%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">MongoDB</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">EdTech - Learning Platform</h3>
                <p className="text-gray-600 mb-4">
                  Plataforma de cursos online com gamificação. 
                  Testou engagement e modelo de precificação.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tempo desenvolvimento</span>
                  <span className="font-semibold">25 dias</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Estudantes ativos</span>
                  <span className="font-semibold text-green-600">1.2k</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Taxa conversão</span>
                  <span className="font-semibold text-blue-600">18%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Laravel</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investimento para MVP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pacotes transparentes com tudo incluído. Sem surpresas, sem custos ocultos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Básico */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MVP Básico</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">R$ 25.000</div>
                <div className="text-gray-500">Ideal para validação</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">3-5 funcionalidades essenciais</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Design responsivo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Banco de dados simples</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Deploy e hospedagem</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Analytics básico</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl font-semibold transition-colors">
                Escolher MVP Básico
              </button>
            </div>

            {/* Completo - Featured */}
            <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-2xl border-2 border-purple-500 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">MVP Completo</h3>
                <div className="text-4xl font-bold text-white mb-1">R$ 45.000</div>
                <div className="text-purple-100">Produto market-ready</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">8-12 funcionalidades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Design system completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Integração com APIs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Sistema de autenticação</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">Analytics avançado</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">2 meses suporte grátis</span>
                </li>
              </ul>
              
              <button className="w-full bg-white hover:bg-gray-100 text-purple-600 py-4 rounded-xl font-semibold transition-colors">
                Escolher MVP Completo
              </button>
            </div>

            {/* Premium */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MVP Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">R$ 75.000</div>
                <div className="text-gray-500">Solução enterprise</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Funcionalidades ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Arquitetura microserviços</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">CI/CD pipeline</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Testes automatizados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Monitoramento APM</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">6 meses suporte grátis</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl font-semibold transition-colors">
                Escolher MVP Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transforme Sua Ideia em Realidade
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Não deixe sua ideia ficar apenas no papel. Crie um MVP em 30 dias e valide seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              Agendar Conversa Gratuita
            </button>
            <button className="border border-white hover:bg-white hover:text-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              WhatsApp: (11) 99999-9999
            </button>
          </div>
          
          <div className="mt-8 text-purple-200 text-sm">
            ✓ MVP em 30 dias garantido  ✓ Metodologia comprovada  ✓ Acompanhamento semanal
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre MVP
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                O que diferencia um MVP de um produto completo?
              </summary>
              <p className="text-gray-600">
                Um MVP (Minimum Viable Product) contém apenas as funcionalidades essenciais 
                necessárias para validar a hipótese principal do negócio. É uma versão 
                simplificada que permite aprender rapidamente com menos investimento e risco.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Como vocês garantem que o MVP será entregue em 30 dias?
              </summary>
              <p className="text-gray-600">
                Utilizamos metodologia ágil com sprints semanais, priorização rigorosa de features, 
                stack tecnológica padronizada e equipe dedicada exclusivamente ao seu projeto. 
                Temos histórico de 95% de entregas no prazo.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                O MVP pode ser expandido para um produto completo depois?
              </summary>
              <p className="text-gray-600">
                Sim! Arquitetamos o MVP pensando na escalabilidade futura. Utilizamos 
                tecnologias e padrões que permitem evolução natural para produto completo, 
                mantendo o código e infraestrutura existentes.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Quais métricas vocês ajudam a definir para validação?
              </summary>
              <p className="text-gray-600">
                Definimos KPIs específicos baseados no seu modelo de negócio: taxa de conversão, 
                tempo de engajamento, retention rate, NPS, cost per acquisition (CPA), 
                lifetime value (LTV) e outras métricas relevantes para sua hipótese.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}