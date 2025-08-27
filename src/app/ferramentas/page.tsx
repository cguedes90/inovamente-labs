import { Metadata } from 'next';
import { ROICalculator } from '@/components/Interactive/ROICalculator';
import { TechQuiz } from '@/components/Interactive/TechQuiz';
import { TechMaturityAssessment } from '@/components/Interactive/TechMaturityAssessment';
import { DigitalGuides } from '@/components/Educational/DigitalGuides';

export const metadata: Metadata = {
  title: 'Ferramentas Gratuitas | Calculadoras ROI, Quiz e Avaliações - InovaMente Labs',
  description: 'Acesse gratuitamente nossa biblioteca de ferramentas: calculadoras de ROI, quiz de maturidade tecnológica, avaliações personalizadas e guias práticos para sua transformação digital.',
  keywords: 'calculadora roi, quiz tecnologico, avaliacao maturidade digital, ferramentas gratuitas, transformacao digital',
  openGraph: {
    title: 'Ferramentas Gratuitas para Transformação Digital',
    description: 'Calculadoras, quiz e avaliações para acelerar sua jornada tecnológica.',
    url: 'https://inovamentelabs.com.br/ferramentas',
    siteName: 'InovaMente Labs',
    images: [{
      url: '/og-ferramentas.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'pt_BR',
    type: 'website',
  }
};

export default function FerramentasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Ferramentas Gratuitas
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            🛠️ Sua Caixa de Ferramentas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Para Transformação Digital
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Acesse gratuitamente nossa biblioteca de ferramentas desenvolvidas para acelerar 
            sua jornada tecnológica. Calculadoras, avaliações e materiais educativos baseados 
            em nossa experiência com +200 projetos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Ferramentas</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-green-600">15K+</div>
              <div className="text-sm text-gray-600">Usuários</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Gratuito</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-orange-600">4.9/5</div>
              <div className="text-sm text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#calculadoras" className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg transition-colors">
              <span>🧮</span>
              <span>Calculadoras ROI</span>
            </a>
            <a href="#quiz" className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg transition-colors">
              <span>🎯</span>
              <span>Quiz Tecnológico</span>
            </a>
            <a href="#avaliacao" className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-lg transition-colors">
              <span>📊</span>
              <span>Avaliação Maturidade</span>
            </a>
            <a href="#materiais" className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-2 rounded-lg transition-colors">
              <span>📚</span>
              <span>Materiais Educativos</span>
            </a>
          </div>
        </div>
      </section>

      {/* ROI Calculators Section */}
      <section id="calculadoras" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🧮 Calculadoras de ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra o retorno do investimento em diferentes soluções tecnológicas 
              com nossas calculadoras baseadas em dados reais de mercado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Automação de Processos</h3>
                <p className="text-gray-600">
                  Calculate o ROI de automatizar seus processos manuais e repetitivos.
                </p>
              </div>
              <ROICalculator type="automation" />
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Integração de Sistemas</h3>
                <p className="text-gray-600">
                  Veja quanto sua empresa pode economizar integrando todos os sistemas.
                </p>
              </div>
              <ROICalculator type="integration" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Desenvolvimento MVP</h3>
                <p className="text-gray-600">
                  Compare custos de MVP vs desenvolvimento tradicional completo.
                </p>
              </div>
              <ROICalculator type="mvp" />
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Escalabilidade de Aplicações</h3>
                <p className="text-gray-600">
                  Analise o retorno de tornar sua aplicação verdadeiramente escalável.
                </p>
              </div>
              <ROICalculator type="scalability" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Quiz Section */}
      <section id="quiz" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎯 Quiz: Qual Solução Sua Empresa Precisa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Responda 8 perguntas estratégicas e receba uma recomendação personalizada 
              baseada em nossa experiência com centenas de projetos.
            </p>
          </div>

          <TechQuiz />
        </div>
      </section>

      {/* Maturity Assessment Section */}
      <section id="avaliacao" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Avaliação de Maturidade Tecnológica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra o nível de maturidade tecnológica da sua empresa em 8 dimensões 
              críticas e receba um plano de evolução personalizado.
            </p>
          </div>

          <TechMaturityAssessment />
        </div>
      </section>

      {/* Educational Materials Section */}
      <section id="materiais" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Biblioteca de Materiais Educativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guias práticos, checklists e templates desenvolvidos pela nossa equipe. 
              Conteúdo baseado em projetos reais para acelerar sua transformação digital.
            </p>
          </div>

          <DigitalGuides />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            💡 Precisa de Ajuda Personalizada?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nossas ferramentas dão uma visão inicial, mas cada empresa é única. 
            Agende uma consultoria gratuita para uma análise detalhada e personalizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              🎯 Consultoria Gratuita
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              📞 (11) 99999-9999
            </button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            ✓ Análise gratuita de 30 minutos  ✓ Sem compromisso  ✓ Plano de ação personalizado
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ferramentas Gratuitas de Transformação Digital",
            "description": "Calculadoras de ROI, quiz tecnológico e materiais educativos gratuitos",
            "url": "https://inovamentelabs.com.br/ferramentas",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Calculadora ROI Automação",
                  "description": "Calcule o retorno de investimento em automação de processos",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "BRL"
                  }
                },
                {
                  "@type": "Quiz",
                  "name": "Quiz Soluções Tecnológicas",
                  "description": "Descubra qual solução tecnológica sua empresa precisa",
                  "educationalLevel": "beginner"
                },
                {
                  "@type": "Assessment", 
                  "name": "Avaliação Maturidade Tecnológica",
                  "description": "Avalie o nível de maturidade tecnológica da sua empresa",
                  "educationalLevel": "intermediate"
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