import Script from 'next/script';

// Tipos para diferentes schemas
interface Organization {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
}

interface Service {
  name: string;
  description: string;
  provider: Organization;
  areaServed: string;
  serviceType?: string;
  offers?: {
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  }[];
}

interface Article {
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: Organization;
  mainEntityOfPage: string;
  articleSection?: string;
  wordCount?: number;
}

interface FAQ {
  questions: {
    question: string;
    answer: string;
  }[];
}

interface LocalBusiness extends Organization {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

// Dados da organização base
const baseOrganization: Organization = {
  name: 'InovaMente Labs',
  url: 'https://www.inovamentelabs.com.br',
  logo: 'https://www.inovamentelabs.com.br/logo.png',
  description: 'Empresa especializada em desenvolvimento de software, aplicativos mobile, automação de processos e DevOps no Brasil.',
  address: {
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  contactPoint: {
    telephone: '+55-11-99999-9999',
    contactType: 'customer service',
    email: 'contato@inovamentelabs.com.br',
    availableLanguage: ['Portuguese']
  },
  sameAs: [
    'https://www.linkedin.com/company/inovamente-labs',
    'https://github.com/inovamente-labs',
    'https://www.instagram.com/inovamentelabs'
  ]
};

// Componente para dados estruturados da organização
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...baseOrganization,
    '@id': 'https://www.inovamentelabs.com.br/#organization'
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para dados estruturados de negócio local
export function LocalBusinessStructuredData() {
  const localBusiness: LocalBusiness = {
    ...baseOrganization,
    priceRange: '$$',
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-12:00'
    ]
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    ...localBusiness,
    '@id': 'https://www.inovamentelabs.com.br/#localbusiness'
  };

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para dados estruturados de serviço
interface ServiceStructuredDataProps {
  service: Service;
}

export function ServiceStructuredData({ service }: ServiceStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...service,
    provider: {
      '@type': 'Organization',
      ...service.provider
    },
    hasOfferCatalog: service.offers ? {
      '@type': 'OfferCatalog',
      name: `${service.name} - Catálogo de Ofertas`,
      itemListElement: service.offers.map((offer, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description
        },
        price: offer.price,
        priceCurrency: offer.priceCurrency || 'BRL'
      }))
    } : undefined
  };

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para dados estruturados de artigo
interface ArticleStructuredDataProps {
  article: Article;
}

export function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url
    },
    publisher: {
      '@type': 'Organization',
      ...article.publisher,
      '@id': 'https://www.inovamentelabs.com.br/#organization'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.mainEntityOfPage
    },
    articleSection: article.articleSection,
    wordCount: article.wordCount
  };

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para dados estruturados de FAQ
interface FAQStructuredDataProps {
  faq: FAQ;
}

export function FAQStructuredData({ faq }: FAQStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.questions.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer
      }
    }))
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para breadcrumb structured data
interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url?: string;
  }>;
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://www.inovamentelabs.com.br${item.url}` : undefined
    }))
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Componente para website structured data
export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InovaMente Labs',
    url: 'https://www.inovamentelabs.com.br',
    description: 'Desenvolvimento de software, aplicativos mobile e soluções digitais inovadoras',
    publisher: {
      '@id': 'https://www.inovamentelabs.com.br/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.inovamentelabs.com.br/busca?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Dados pré-definidos para serviços principais
export const servicesStructuredData = {
  webDevelopment: {
    name: 'Desenvolvimento Web',
    description: 'Desenvolvimento de sites e sistemas web responsivos com React, Next.js e TypeScript',
    provider: baseOrganization,
    areaServed: 'Brasil',
    serviceType: 'Web Development',
    offers: [
      {
        name: 'Site Institucional',
        description: 'Sites profissionais responsivos e otimizados',
        price: '2500',
        priceCurrency: 'BRL'
      },
      {
        name: 'E-commerce',
        description: 'Lojas virtuais completas com painel administrativo',
        price: '8000',
        priceCurrency: 'BRL'
      },
      {
        name: 'Sistema Corporativo',
        description: 'Sistemas web personalizados para empresas',
        price: '12000',
        priceCurrency: 'BRL'
      }
    ]
  },
  
  mobileDevelopment: {
    name: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com alta performance',
    provider: baseOrganization,
    areaServed: 'Brasil',
    serviceType: 'Mobile App Development',
    offers: [
      {
        name: 'App Híbrido',
        description: 'Aplicativo para iOS e Android com React Native',
        price: '8000',
        priceCurrency: 'BRL'
      },
      {
        name: 'App Nativo',
        description: 'Aplicativo nativo com máxima performance',
        price: '15000',
        priceCurrency: 'BRL'
      }
    ]
  },
  
  processAutomation: {
    name: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas e otimize a eficiência empresarial',
    provider: baseOrganization,
    areaServed: 'Brasil',
    serviceType: 'Business Process Automation',
    offers: [
      {
        name: 'Automação de Workflow',
        description: 'Automação de processos internos da empresa',
        price: '3000',
        priceCurrency: 'BRL'
      },
      {
        name: 'Integração de Sistemas',
        description: 'Conecte diferentes sistemas da sua empresa',
        price: '5000',
        priceCurrency: 'BRL'
      }
    ]
  },
  
  devopsInfrastructure: {
    name: 'DevOps & Infraestrutura',
    description: 'Infraestrutura escalável e segura em nuvem',
    provider: baseOrganization,
    areaServed: 'Brasil',
    serviceType: 'DevOps Infrastructure',
    offers: [
      {
        name: 'Setup DevOps',
        description: 'Configuração completa de pipeline DevOps',
        price: '5000',
        priceCurrency: 'BRL'
      },
      {
        name: 'Infraestrutura Cloud',
        description: 'Infraestrutura escalável na AWS',
        price: '1500',
        priceCurrency: 'BRL'
      }
    ]
  }
};

// Hook para gerar structured data baseado no tipo de página
export function useStructuredData(pageType: string, customData?: any) {
  switch (pageType) {
    case 'organization':
      return baseOrganization;
    case 'service':
      return customData || servicesStructuredData.webDevelopment;
    case 'article':
      return customData;
    default:
      return null;
  }
}