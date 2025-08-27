import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQStructuredData } from '@/components/SEO/StructuredData';

export const metadata: Metadata = {
  title: 'Sobre a InovaMente Labs | Nossa História e Equipe',
  description: 'Conheça a história da InovaMente Labs, nossa equipe especializada em desenvolvimento de software e nossa metodologia ágil de trabalho no Brasil.',
  keywords: [
    'sobre InovaMente Labs',
    'história empresa desenvolvimento',
    'equipe especializada software',
    'metodologia ágil Scrum',
    'missão visão valores',
    'São Paulo desenvolvimento'
  ],
  openGraph: {
    title: 'Sobre a InovaMente Labs | Nossa História',
    description: 'Empresa especializada em desenvolvimento de software, aplicativos mobile e transformação digital no Brasil.',
    url: 'https://www.inovamentelabs.com.br/sobre',
    type: 'website',
    images: [
      {
        url: '/og-sobre.png',
        width: 1200,
        height: 630,
        alt: 'Sobre InovaMente Labs'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.inovamentelabs.com.br/sobre'
  }
};

const teamMembers = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Founder',
    bio: '10+ anos em desenvolvimento de software e gestão de projetos tecnológicos. Especialista em arquitetura de sistemas e transformação digital.',
    image: '/team/carlos-silva.jpg',
    linkedin: 'https://linkedin.com/in/carlos-silva-dev',
    skills: ['Arquitetura de Software', 'Gestão de Projetos', 'Transformação Digital']
  },
  {
    name: 'Ana Santos',
    role: 'CTO',
    bio: 'Engenheira de Software com especialização em desenvolvimento mobile e cloud computing. Apaixonada por inovação e tecnologias emergentes.',
    image: '/team/ana-santos.jpg',
    linkedin: 'https://linkedin.com/in/ana-santos-tech',
    skills: ['Mobile Development', 'Cloud Computing', 'DevOps']
  },
  {
    name: 'Roberto Lima',
    role: 'Head of Engineering',
    bio: 'Expert em automação de processos e integração de sistemas. Lidera nossa equipe de desenvolvimento com foco em qualidade e performance.',
    image: '/team/roberto-lima.jpg',
    linkedin: 'https://linkedin.com/in/roberto-lima-eng',
    skills: ['Automação', 'Integração de Sistemas', 'Liderança Técnica']
  },
  {
    name: 'Mariana Costa',
    role: 'UX/UI Designer',
    bio: 'Designer especializada em experiência do usuário e interface digital. Cria soluções que combinam estética e usabilidade.',
    image: '/team/mariana-costa.jpg',
    linkedin: 'https://linkedin.com/in/mariana-costa-ux',
    skills: ['UX Design', 'UI Design', 'Prototipagem']
  }
];

const stats = [
  { number: '100+', label: 'Projetos Entregues', icon: '🚀' },
  { number: '50+', label: 'Clientes Satisfeitos', icon: '😊' },
  { number: '5+', label: 'Anos de Experiência', icon: '📅' },
  { number: '15+', label: 'Especialistas', icon: '👥' }
];

const values = [
  {
    title: 'Inovação',
    description: 'Buscamos sempre as tecnologias mais avançadas e melhores práticas do mercado.',
    icon: '💡'
  },
  {
    title: 'Qualidade',
    description: 'Entregamos soluções robustas, testadas e que superam as expectativas dos clientes.',
    icon: '⭐'
  },
  {
    title: 'Transparência',
    description: 'Mantemos comunicação clara e honesta em todas as etapas dos projetos.',
    icon: '🤝'
  },
  {
    title: 'Agilidade',
    description: 'Utilizamos metodologias ágeis para entregas rápidas e eficientes.',
    icon: '⚡'
  }
];

const certifications = [
  { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services', icon: '☁️' },
  { name: 'Google Cloud Professional', provider: 'Google Cloud', icon: '🌐' },
  { name: 'Scrum Master Certified', provider: 'Scrum Alliance', icon: '🏃‍♂️' },
  { name: 'React & Next.js Expert', provider: 'Meta/Vercel', icon: '⚛️' }
];

const faqs = [
  {
    question: 'Há quanto tempo a InovaMente Labs atua no mercado?',
    answer: 'A InovaMente Labs foi fundada em 2019 e desde então já entregamos mais de 100 projetos para clientes de diversos segmentos, sempre focando em inovação e qualidade.'
  },
  {
    question: 'Qual é a metodologia de trabalho utilizada?',
    answer: 'Utilizamos metodologia ágil Scrum com entregas incrementais, garantindo transparência, flexibilidade e qualidade em todos os projetos. Mantemos comunicação constante com nossos clientes.'
  },
  {
    question: 'A equipe trabalha presencial ou remotamente?',
    answer: 'Somos uma empresa híbrida com sede em São Paulo, mas nossa equipe trabalha tanto presencial quanto remotamente, permitindo maior flexibilidade e acesso aos melhores talentos.'
  },
  {
    question: 'Vocês atendem apenas grandes empresas?',
    answer: 'Atendemos empresas de todos os portes, desde startups até grandes corporações. Oferecemos soluções escaláveis e personalizadas para cada necessidade e orçamento.'
  },
  {
    question: 'Como funciona o suporte pós-entrega?',
    answer: 'Oferecemos diferentes planos de suporte e manutenção, incluindo correções de bugs, atualizações de segurança, novas funcionalidades e suporte técnico especializado.'
  }
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Sobre', current: true }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre a
                <span className="block text-cyan-300">InovaMente Labs</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Somos especialistas em transformar ideias em soluções tecnológicas inovadoras. 
                Nossa missão é acelerar o crescimento digital das empresas brasileiras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato" className="btn-secondary bg-white text-blue-600">
                  Falar Conosco
                </Link>
                <Link href="/portfolio" className="btn-primary border-2 border-white bg-transparent">
                  Ver Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Nossa Trajetória</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">2019: Fundação da empresa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">2020: Primeiro projeto enterprise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">2022: Expansão da equipe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">2024: +100 projetos entregues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="glassmorphism-card">
              <div className="text-4xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acelerar a transformação digital das empresas brasileiras através de soluções 
                tecnológicas inovadoras, eficientes e personalizadas. Nosso compromisso é 
                entregar resultados que impactem positivamente o crescimento dos nossos clientes.
              </p>
            </div>
            
            <div className="glassmorphism-card">
              <div className="text-4xl mb-6">🔮</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser referência nacional em desenvolvimento de software e soluções digitais, 
                reconhecida pela excelência técnica, inovação constante e pelos resultados 
                excepcionais entregues aos nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glassmorphism-card text-center hover-lift">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes e apaixonados por tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glassmorphism-card text-center hover-lift">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Parcerias
            </h2>
            <p className="text-xl text-gray-600">
              Reconhecimento técnico e parcerias estratégicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.provider}</p>
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
              Esclareça suas dúvidas sobre nossa empresa e serviços
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glassmorphism-card">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Conversar sobre seu Projeto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nossa equipe está pronta para transformar suas ideias em soluções inovadoras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Iniciar Conversa
            </Link>
            <Link
              href="/portfolio"
              className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Ver Nosso Trabalho
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <FAQStructuredData faq={{ questions: faqs }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InovaMente Labs",
            "url": "https://www.inovamentelabs.com.br",
            "logo": "https://www.inovamentelabs.com.br/logo.png",
            "description": "Empresa especializada em desenvolvimento de software, aplicativos mobile e transformação digital no Brasil",
            "foundingDate": "2019",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "customer service",
              "email": "contato@inovamentelabs.com.br",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.linkedin.com/company/inovamente-labs",
              "https://github.com/inovamente-labs"
            ],
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role,
              "description": member.bio,
              "sameAs": member.linkedin
            }))
          })
        }}
      />
    </>
  );
}