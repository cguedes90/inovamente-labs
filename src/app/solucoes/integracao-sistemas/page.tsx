import { Metadata } from 'next';
import { SemanticSEO } from '@/lib/seo-semantic';

const keywords = SemanticSEO.generateSemanticKeywords('integração sistemas');

export const metadata: Metadata = {
  title: 'Integração de Sistemas | Conecte suas aplicações e dados - InovaMente Labs',
  description: 'Especialistas em integração de sistemas. Conectamos APIs, bancos de dados e aplicações para otimizar seus processos empresariais com segurança e performance.',
  keywords: 'integração sistemas, API integration, middleware, ETL, sincronização dados, conectores empresariais',
  openGraph: {
    title: 'Integração de Sistemas - Conectividade Total',
    description: 'Conecte todos os seus sistemas e dados em uma solução integrada e eficiente.',
    url: 'https://inovamentelabs.com.br/solucoes/integracao-sistemas',
    siteName: 'InovaMente Labs',
    images: [{
      url: '/og-integracao-sistemas.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integração de Sistemas - InovaMente Labs',
    description: 'Conecte todos os seus sistemas e dados em uma solução integrada.',
  },
};

export default function IntegracaoSistemasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            SemanticSEO.generateSemanticStructuredData(
              'Integração de Sistemas Empresariais',
              'Soluções completas para conectar e sincronizar todos os seus sistemas, APIs e bancos de dados.',
              keywords,
              'https://inovamentelabs.com.br/solucoes/integracao-sistemas'
            )
          )
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            Integração de Sistemas
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 voice-optimized">
            Conecte Todos os Seus
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Sistemas e Dados
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elimine silos de informação e crie um ecossistema tecnológico integrado. 
            Conectamos APIs, bancos de dados e aplicações para maximizar a eficiência operacional.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;500ms</div>
              <div className="text-gray-600">Latência Média</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoramento</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">APIs Conectadas</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Solicitar Consultoria Gratuita
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-colors">
              Ver Casos de Sucesso
            </button>
          </div>
        </div>
      </section>

      {/* Integration Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Desafios de Integração que Resolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e solucionamos os principais gargalos de conectividade em empresas modernas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Silos de Dados</h3>
              <p className="text-gray-600 mb-4">
                Informações espalhadas em sistemas isolados, dificultando tomadas de decisão e análises.
              </p>
              <div className="text-sm font-semibold text-red-600">
                ❌ Problemas: Dados duplicados, inconsistências, relatórios manuais
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Processos Manuais</h3>
              <p className="text-gray-600 mb-4">
                Transferência manual de dados entre sistemas, causando erros e perda de tempo.
              </p>
              <div className="text-sm font-semibold text-orange-600">
                ❌ Problemas: Erros humanos, lentidão, custos operacionais altos
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Falta de Sincronização</h3>
              <p className="text-gray-600 mb-4">
                Dados desatualizados e inconsistentes entre diferentes plataformas empresariais.
              </p>
              <div className="text-sm font-semibold text-yellow-600">
                ❌ Problemas: Informações conflitantes, decisões baseadas em dados obsoletos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossas Soluções de Integração
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para conectar sistemas de forma segura e escalável.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">API Gateway e Middleware</h3>
                  <p className="text-gray-600">
                    Implementamos uma camada de abstração centralizada para gerenciar todas as comunicações 
                    entre sistemas, garantindo segurança, rate limiting e monitoramento.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kong</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS API Gateway</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MuleSoft</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ETL e Data Pipeline</h3>
                  <p className="text-gray-600">
                    Criamos pipelines robustos para extrair, transformar e carregar dados entre 
                    diferentes sistemas, mantendo consistência e integridade.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Apache Airflow</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Talend</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Azure Data Factory</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Message Brokers</h3>
                  <p className="text-gray-600">
                    Utilizamos sistemas de mensageria para comunicação assíncrona e tolerante a falhas 
                    entre aplicações, garantindo delivery e ordem das mensagens.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Apache Kafka</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">RabbitMQ</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS SQS</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoramento e Observabilidade</h3>
                  <p className="text-gray-600">
                    Implementamos ferramentas de monitoramento em tempo real para acompanhar a saúde 
                    das integrações, detectar problemas e otimizar performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Datadog</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">New Relic</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Grafana</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arquitetura de Integração</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="font-semibold text-blue-900">Sistema A (ERP)</div>
                  <div className="text-sm text-blue-700">SAP, Oracle, Microsoft Dynamics</div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8l4 4m0-8l4 4-4 4m6 0v12m0 0l4-4-4-4m0 8l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <div className="font-semibold text-green-900">API Gateway / Middleware</div>
                  <div className="text-sm text-green-700">Orquestração e roteamento</div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8l4 4m0-8l4 4-4 4m6 0v12m0 0l4-4-4-4m0 8l-4-4 4-4"/>
                    </svg>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="font-semibold text-purple-900">Sistema B (CRM)</div>
                  <div className="text-sm text-purple-700">Salesforce, HubSpot, Pipedrive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculadora de ROI - Integração de Sistemas
            </h2>
            <p className="text-xl text-gray-600">
              Descubra quanto sua empresa pode economizar com integração automatizada.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Cenário Atual (Sem Integração)</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-red-800 mb-1">Horas mensais em tarefas manuais</div>
                    <div className="text-2xl font-bold text-red-600">160h</div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-red-800 mb-1">Custo por hora (salário médio)</div>
                    <div className="text-2xl font-bold text-red-600">R$ 50</div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-red-800 mb-1">Custo mensal com retrabalho</div>
                    <div className="text-2xl font-bold text-red-600">R$ 8.000</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Cenário Otimizado (Com Integração)</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-green-800 mb-1">Redução de tarefas manuais</div>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-green-800 mb-1">Horas economizadas por mês</div>
                    <div className="text-2xl font-bold text-green-600">136h</div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-green-800 mb-1">Economia mensal</div>
                    <div className="text-2xl font-bold text-green-600">R$ 6.800</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">R$ 81.600</div>
                <div className="text-gray-600 mb-4">Economia anual estimada</div>
                <div className="text-sm text-gray-500">
                  ROI de 340% no primeiro ano considerando investimento médio de R$ 24.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de Sucesso em Integração
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que transformaram seus processos com nossas soluções de integração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-2 0H3m2-10h4m0 0V9a2 2 0 011-1.732M7 11V9a2 2 0 011-1.732m0 0V5a2 2 0 012-2h8a2 2 0 012 2v2.268"/>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Indústria Farmacêutica</h3>
                <p className="text-gray-600 mb-4">
                  Integração entre ERP SAP, sistema de qualidade e plataforma e-commerce, 
                  automatizando controle de estoque e compliance regulatório.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">75%</div>
                  <div className="text-sm text-gray-500">Redução de Erros</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3h</div>
                  <div className="text-sm text-gray-500">Para 15 min</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6H8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fintech</h3>
                <p className="text-gray-600 mb-4">
                  Conectamos APIs bancárias, sistema de análise de crédito e plataforma CRM, 
                  criando jornada automatizada do cliente.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-500">Automação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5min</div>
                  <div className="text-sm text-gray-500">Aprovação</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Varejo Multicanal</h3>
                <p className="text-gray-600 mb-4">
                  Sincronização de inventário entre lojas físicas, marketplace e e-commerce próprio, 
                  com atualização em tempo real.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.5%</div>
                  <div className="text-sm text-gray-500">Precisão Estoque</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-gray-500">+ Vendas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Conectar Todos os Seus Sistemas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agende uma consultoria gratuita e descubra como podemos integrar e otimizar seus processos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              Agendar Consultoria Gratuita
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              WhatsApp: (11) 99999-9999
            </button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            ✓ Consultoria sem compromisso  ✓ Análise gratuita dos seus sistemas  ✓ Proposta personalizada
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Integração
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Quanto tempo leva para integrar dois sistemas?
              </summary>
              <p className="text-gray-600">
                O tempo varia de 2-8 semanas dependendo da complexidade dos sistemas, volume de dados 
                e requisitos de segurança. Integrações simples via API podem levar 1-2 semanas, 
                enquanto ETLs complexos podem precisar de 6-8 semanas.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                A integração compromete a segurança dos dados?
              </summary>
              <p className="text-gray-600">
                Não, pelo contrário. Implementamos criptografia end-to-end, autenticação OAuth 2.0, 
                rate limiting e auditoria completa. Seguimos padrões como ISO 27001 e LGPD 
                para garantir máxima segurança.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                O que acontece se um dos sistemas sair do ar?
              </summary>
              <p className="text-gray-600">
                Implementamos circuit breakers, retry logic e filas de mensagens para garantir 
                resiliência. Se um sistema falha, as integrações continuam funcionando e 
                sincronizam automaticamente quando volta ao ar.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer mb-4">
                Como funciona o suporte e manutenção?
              </summary>
              <p className="text-gray-600">
                Oferecemos monitoramento 24/7, alertas proativos, SLA de 99.9% de uptime 
                e suporte técnico especializado. Inclui atualizações, patches de segurança 
                e otimizações de performance.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}