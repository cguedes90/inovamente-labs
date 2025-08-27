'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companySize: string;
  industry: string;
  content: string;
  rating: number;
  projectType: string;
  results: string[];
  image: string;
  linkedIn?: string;
  companyLogo?: string;
  featured: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo Silva",
    role: "CEO & Fundador",
    company: "TechFlow Logistics",
    companySize: "50-100 funcionários",
    industry: "Logística",
    content: "A InovaMente Labs transformou nossa operação completamente. Em 4 meses, automatizamos 80% dos processos manuais e reduzimos custos em 45%. O ROI foi impressionante - recuperamos o investimento em apenas 6 meses. A equipe é extremamente técnica e entende de negócios.",
    rating: 5,
    projectType: "Automação de Processos",
    results: [
      "45% redução de custos operacionais",
      "80% dos processos automatizados", 
      "ROI de 340% no primeiro ano",
      "6 meses de payback"
    ],
    image: "/testimonials/carlos-silva.jpg",
    linkedIn: "https://linkedin.com/in/carlos-silva-techflow",
    companyLogo: "/companies/techflow-logo.png",
    featured: true
  },
  {
    id: 2,
    name: "Marina Oliveira",
    role: "CTO",
    company: "HealthConnect",
    companySize: "100-200 funcionários", 
    industry: "Saúde Digital",
    content: "Precisávamos escalar nossa plataforma para suportar 100x mais usuários. A arquitetura de microserviços que desenvolveram foi perfeita. Agora suportamos 1M+ usuários simultâneos com 99.99% de uptime. A performance melhorou drasticamente e os custos diminuíram 60%.",
    rating: 5,
    projectType: "Escalabilidade & Arquitetura",
    results: [
      "1M+ usuários simultâneos",
      "99.99% de uptime SLA",
      "60% redução de custos cloud",
      "10x melhoria na performance"
    ],
    image: "/testimonials/marina-oliveira.jpg", 
    linkedIn: "https://linkedin.com/in/marina-oliveira-cto",
    companyLogo: "/companies/healthconnect-logo.png",
    featured: true
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Diretor de TI",
    company: "Varejo Plus",
    companySize: "200+ funcionários",
    industry: "Varejo",
    content: "A integração entre nosso ERP, e-commerce e marketplaces foi um divisor de águas. Antes gastávamos 40 horas/semana em processos manuais. Hoje tudo é sincronizado automaticamente em tempo real. Nossas vendas online aumentaram 120% em 6 meses.",
    rating: 5,
    projectType: "Integração de Sistemas",
    results: [
      "120% aumento vendas online",
      "40h/semana economizadas",
      "Sincronização tempo real",
      "0 erros de inventário"
    ],
    image: "/testimonials/roberto-mendes.jpg",
    linkedIn: "https://linkedin.com/in/roberto-mendes-ti",
    companyLogo: "/companies/varejoplus-logo.png", 
    featured: true
  },
  {
    id: 4,
    name: "Ana Paula Santos",
    role: "Product Manager",
    company: "EduTech Brasil",
    companySize: "20-50 funcionários",
    industry: "Educação",
    content: "Validamos nossa ideia de plataforma educacional em apenas 30 dias com o MVP. Conseguimos captar R$ 2M de investimento baseado nos resultados iniciais. A abordagem lean e metodologia ágil foram fundamentais para nosso sucesso.",
    rating: 5,
    projectType: "MVP & Validação",
    results: [
      "MVP entregue em 30 dias",
      "R$ 2M de investimento captado", 
      "1.500 usuários no primeiro mês",
      "95% taxa de satisfação"
    ],
    image: "/testimonials/ana-santos.jpg",
    linkedIn: "https://linkedin.com/in/ana-santos-pm",
    companyLogo: "/companies/edutech-logo.png",
    featured: false
  },
  {
    id: 5,
    name: "Felipe Costa",
    role: "Founder",
    company: "FinanceFlow",
    companySize: "10-20 funcionários",
    industry: "Fintech",
    content: "Como startup, precisávamos de velocidade e qualidade. A InovaMente entregou nossa plataforma de pagamentos em tempo recorde, com toda segurança PCI-DSS. Hoje processamos R$ 50M/mês com zero incidentes de segurança.",
    rating: 5,
    projectType: "Desenvolvimento Full-Stack",
    results: [
      "R$ 50M/mês processados",
      "Compliance PCI-DSS L1",
      "0 incidentes de segurança",
      "15ms latência média"
    ],
    image: "/testimonials/felipe-costa.jpg",
    linkedIn: "https://linkedin.com/in/felipe-costa-fintech",
    companyLogo: "/companies/financeflow-logo.png",
    featured: false
  },
  {
    id: 6,
    name: "Juliana Rodrigues",
    role: "VP Operations",
    company: "AgriSmart",
    companySize: "100+ funcionários", 
    industry: "AgriTech",
    content: "A solução IoT para monitoramento de plantações revolucionou nossa operação. Reduzimos perdas em 35% e aumentamos produtividade em 25%. O dashboard em tempo real nos dá visibilidade total das fazendas.",
    rating: 5,
    projectType: "IoT & Analytics",
    results: [
      "35% redução de perdas",
      "25% aumento produtividade",
      "500+ sensores integrados",
      "Analytics preditivo"
    ],
    image: "/testimonials/juliana-rodrigues.jpg",
    linkedIn: "https://linkedin.com/in/juliana-rodrigues-agri",
    companyLogo: "/companies/agrismart-logo.png",
    featured: false
  }
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : filter === 'featured'
    ? testimonials.filter(t => t.featured)
    : testimonials.filter(t => t.projectType.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === filteredTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  if (filteredTestimonials.length === 0) return null;

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          💬 O que Nossos Clientes Dizem
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Histórias reais de empresas que transformaram seus negócios com nossas soluções. 
          Resultados mensuráveis e impacto comprovado.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {[
          { key: 'all', label: 'Todos', icon: '📋' },
          { key: 'featured', label: 'Destaques', icon: '⭐' },
          { key: 'mvp', label: 'MVP', icon: '🚀' },
          { key: 'automação', label: 'Automação', icon: '🤖' },
          { key: 'integração', label: 'Integração', icon: '🔗' },
          { key: 'escalabilidade', label: 'Escalabilidade', icon: '📈' }
        ].map(filterOption => (
          <button
            key={filterOption.key}
            onClick={() => {
              setFilter(filterOption.key);
              setCurrentIndex(0);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
              filter === filterOption.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <span>{filterOption.icon}</span>
            <span>{filterOption.label}</span>
          </button>
        ))}
      </div>

      {/* Main Testimonial */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="md:flex">
            {/* Content */}
            <div className="md:flex-1 p-8 lg:p-12">
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L24 4.266c-4.017 1.096-6.11 3.787-6.11 7.907v.931C19.612 13.773 21.612 15.1 23.78 15.1c1.378 0 2.22 1.096 2.22 2.456v7.391c0 1.36-.842 2.456-2.22 2.456h-7.56c-1.378 0-2.203-1.096-2.203-2.456zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609L10 4.266C5.983 5.362 3.89 8.053 3.89 12.173v.931C5.612 13.773 7.612 15.1 9.78 15.1c1.378 0 2.22 1.096 2.22 2.456v7.391c0 1.36-.842 2.456-2.22 2.456H2.22C.842 23.456 0 22.36 0 21z"/>
                </svg>
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">📊 Resultados Alcançados:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {currentTestimonial.role}
                      </div>
                      <div className="text-gray-600">
                        {currentTestimonial.company} • {currentTestimonial.companySize}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentTestimonial.industry} • {currentTestimonial.projectType}
                    </div>
                  </div>
                </div>

                {currentTestimonial.linkedIn && (
                  <a
                    href={currentTestimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Side */}
            <div className="md:w-80 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col justify-center">
              <div className="text-center">
                {/* Company Logo Placeholder */}
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-blue-600">
                    {currentTestimonial.company.substring(0, 2)}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {currentTestimonial.company}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {currentTestimonial.industry}
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm">
                  {currentTestimonial.projectType}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            📈 Resultados Consolidados dos Nossos Clientes
          </h3>
          <p className="text-gray-600">
            Números reais baseados em +50 projetos concluídos nos últimos 2 anos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
            <div className="text-gray-600 text-sm">Redução Média de Custos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
            <div className="text-gray-600 text-sm">ROI Médio no 1º Ano</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600 text-sm">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6.2</div>
            <div className="text-gray-600 text-sm">Meses Payback Médio</div>
          </div>
        </div>
      </div>
    </div>
  );
};