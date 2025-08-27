import Head from 'next/head';
import { Metadata } from 'next';

interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  noIndex?: boolean;
  structured?: any; // Schema.org structured data
}

interface SEOHeadProps extends SEOData {
  children?: React.ReactNode;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-default.png',
  ogType = 'website',
  noIndex = false,
  structured,
  children
}: SEOHeadProps) {
  const baseUrl = 'https://www.inovamentelabs.com.br';
  const fullTitle = title.includes('InovaMente Labs') ? title : `${title} | InovaMente Labs`;
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Palavras-chave padrão para todas as páginas
  const defaultKeywords = [
    'desenvolvimento de software Brasil',
    'InovaMente Labs',
    'tecnologia',
    'inovação digital'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Título otimizado */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicas */}
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robot instructions */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="InovaMente Labs" />
      <meta property="og:locale" content="pt_BR" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@inovamentelabs" />
      <meta name="twitter:creator" content="@inovamentelabs" />
      
      {/* Viewport e responsividade */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Favicon e ícones */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS prefetch para recursos externos */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Dados estruturados Schema.org */}
      {structured && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structured)
          }}
        />
      )}
      
      {/* Conteúdo adicional personalizado */}
      {children}
    </Head>
  );
}

// Gerador de metadata para Next.js 13+ App Router
export function generateSEOMetadata(seoData: SEOData): Metadata {
  const baseUrl = 'https://www.inovamentelabs.com.br';
  const fullTitle = seoData.title.includes('InovaMente Labs') 
    ? seoData.title 
    : `${seoData.title} | InovaMente Labs`;
  
  const defaultKeywords = [
    'desenvolvimento de software Brasil',
    'InovaMente Labs',
    'tecnologia',
    'inovação digital'
  ];

  return {
    title: fullTitle,
    description: seoData.description,
    keywords: [...defaultKeywords, ...(seoData.keywords || [])],
    
    robots: {
      index: !seoData.noIndex,
      follow: !seoData.noIndex,
      googleBot: {
        index: !seoData.noIndex,
        follow: !seoData.noIndex,
      }
    },
    
    openGraph: {
      title: fullTitle,
      description: seoData.description,
      url: seoData.canonical ? `${baseUrl}${seoData.canonical}` : baseUrl,
      siteName: 'InovaMente Labs',
      images: [
        {
          url: seoData.ogImage?.startsWith('http') 
            ? seoData.ogImage 
            : `${baseUrl}${seoData.ogImage || '/og-default.png'}`,
          width: 1200,
          height: 630,
          alt: seoData.title
        }
      ],
      locale: 'pt_BR',
      type: seoData.ogType || 'website'
    },
    
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: seoData.description,
      images: [seoData.ogImage?.startsWith('http') 
        ? seoData.ogImage 
        : `${baseUrl}${seoData.ogImage || '/og-default.png'}`],
      site: '@inovamentelabs',
      creator: '@inovamentelabs'
    },
    
    alternates: {
      canonical: seoData.canonical ? `${baseUrl}${seoData.canonical}` : undefined
    }
  };
}

// Templates pré-definidos para diferentes tipos de página
export const seoTemplates = {
  homepage: {
    title: 'Desenvolvimento de Software e Soluções Digitais',
    description: 'Transforme sua empresa com soluções tecnológicas inovadoras. Desenvolvimento web, mobile, automação e DevOps no Brasil.',
    keywords: [
      'fábrica de software Brasil',
      'desenvolvimento web mobile',
      'automação processos empresariais',
      'transformação digital'
    ]
  },
  
  services: {
    title: 'Serviços de Desenvolvimento de Software',
    description: 'Oferecemos desenvolvimento web, mobile, automação de processos e DevOps. Transforme sua empresa com soluções tecnológicas.',
    keywords: [
      'serviços desenvolvimento software',
      'consultoria tecnológica',
      'soluções digitais empresariais'
    ]
  },
  
  webDevelopment: {
    title: 'Desenvolvimento Web Profissional | React Next.js',
    description: 'Desenvolvimento de sites e sistemas web responsivos com React, Next.js e TypeScript. E-commerce, sites institucionais no Brasil.',
    keywords: [
      'desenvolvimento web Brasil',
      'React Next.js desenvolvimento',
      'site responsivo profissional',
      'e-commerce desenvolvimento'
    ]
  },
  
  mobileDevelopment: {
    title: 'Desenvolvimento Mobile | Apps iOS Android',
    description: 'Aplicativos mobile nativos e híbridos para iOS e Android. React Native, Flutter e tecnologias modernas.',
    keywords: [
      'desenvolvimento mobile Brasil',
      'aplicativo personalizado',
      'React Native Flutter',
      'app iOS Android'
    ]
  },
  
  automation: {
    title: 'Automação de Processos Empresariais',
    description: 'Automatize tarefas repetitivas e otimize a eficiência da sua empresa com nossas soluções de automação.',
    keywords: [
      'automação processos empresariais',
      'RPA robotic process automation',
      'workflow automatizado',
      'integração sistemas'
    ]
  },
  
  devops: {
    title: 'DevOps e Infraestrutura em Nuvem',
    description: 'Infraestrutura escalável, segura e otimizada para alta performance. AWS, Docker, Kubernetes.',
    keywords: [
      'DevOps infraestrutura',
      'cloud computing AWS',
      'containerização Docker',
      'deploy automatizado'
    ]
  },
  
  blog: {
    title: 'Blog - Tecnologia e Inovação Digital',
    description: 'Artigos sobre desenvolvimento de software, tendências tecnológicas e cases de sucesso em transformação digital.',
    keywords: [
      'blog tecnologia',
      'artigos desenvolvimento software',
      'tendências digitais',
      'cases sucesso'
    ]
  },
  
  about: {
    title: 'Sobre a InovaMente Labs | Nossa História',
    description: 'Conheça a história da InovaMente Labs, nossa equipe especializada e nossa metodologia de trabalho.',
    keywords: [
      'sobre InovaMente Labs',
      'equipe desenvolvimento',
      'metodologia ágil',
      'história empresa'
    ]
  },
  
  contact: {
    title: 'Contato | Solicite um Orçamento',
    description: 'Entre em contato conosco para solicitar um orçamento personalizado ou tirar dúvidas sobre nossos serviços.',
    keywords: [
      'contato InovaMente Labs',
      'orçamento desenvolvimento',
      'consultoria gratuita',
      'suporte técnico'
    ]
  }
};

// Hook para dados de SEO dinâmicos
export function useSEO(pageType: keyof typeof seoTemplates, customData?: Partial<SEOData>) {
  const template = seoTemplates[pageType];
  
  return {
    ...template,
    ...customData,
    keywords: [
      ...(template.keywords || []),
      ...(customData?.keywords || [])
    ]
  };
}