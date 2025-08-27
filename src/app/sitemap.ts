import { MetadataRoute } from 'next';

// Tipo para URLs do sitemap
interface SitemapURL {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const baseUrl = 'https://www.inovamentelabs.com.br';

// URLs estáticas do site
const staticUrls: SitemapURL[] = [
  // Página inicial
  {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0
  },
  
  // Páginas principais
  {
    url: `${baseUrl}/servicos`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/sobre`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/contato`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  },
  
  // Páginas de serviços específicos
  {
    url: `${baseUrl}/servicos/desenvolvimento-web`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/servicos/desenvolvimento-mobile`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/servicos/automacao-processos`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/servicos/devops-infraestrutura`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  
  // Páginas de suporte e informações
  {
    url: `${baseUrl}/portfolio`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/cases`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/faq`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/politica-privacidade`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3
  },
  {
    url: `${baseUrl}/termos-uso`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3
  }
];

// Função para buscar URLs dinâmicas (posts do blog, cases, etc.)
async function getDynamicUrls(): Promise<SitemapURL[]> {
  const dynamicUrls: SitemapURL[] = [];

  try {
    // Aqui você buscaria os posts do blog do banco de dados
    // Por enquanto, vou usar URLs de exemplo
    const blogPosts = [
      {
        slug: 'como-escolher-tecnologia-certa-projeto',
        updatedAt: '2024-12-01',
        category: 'desenvolvimento'
      },
      {
        slug: 'guia-completo-desenvolvimento-mobile-2025',
        updatedAt: '2024-11-28',
        category: 'mobile'
      },
      {
        slug: 'processos-empresariais-automatizar',
        updatedAt: '2024-11-25',
        category: 'automacao'
      },
      {
        slug: 'react-vs-angular-qual-escolher',
        updatedAt: '2024-11-20',
        category: 'desenvolvimento'
      },
      {
        slug: 'tendencias-desenvolvimento-software-2025',
        updatedAt: '2024-11-15',
        category: 'tendencias'
      }
    ];

    // Adicionar URLs dos posts do blog
    blogPosts.forEach(post => {
      dynamicUrls.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.6
      });
    });

    // Adicionar URLs de categorias do blog
    const blogCategories = ['desenvolvimento', 'mobile', 'automacao', 'tendencias', 'devops'];
    blogCategories.forEach(category => {
      dynamicUrls.push({
        url: `${baseUrl}/blog/categoria/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5
      });
    });

    // Cases de sucesso (exemplo)
    const cases = [
      {
        slug: 'ecommerce-vendas-300-por-cento',
        updatedAt: '2024-11-10'
      },
      {
        slug: 'app-delivery-10mil-downloads',
        updatedAt: '2024-11-05'
      },
      {
        slug: 'automacao-reduziu-custos-50-por-cento',
        updatedAt: '2024-10-30'
      }
    ];

    cases.forEach(caseItem => {
      dynamicUrls.push({
        url: `${baseUrl}/cases/${caseItem.slug}`,
        lastModified: caseItem.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.7
      });
    });

  } catch (error) {
    console.error('Erro ao buscar URLs dinâmicas para sitemap:', error);
  }

  return dynamicUrls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Combinar URLs estáticas com dinâmicas
  const dynamicUrls = await getDynamicUrls();
  const allUrls = [...staticUrls, ...dynamicUrls];

  return allUrls.map(url => ({
    url: url.url,
    lastModified: url.lastModified || new Date(),
    changeFrequency: url.changeFrequency || 'weekly',
    priority: url.priority || 0.5
  }));
}

// Função auxiliar para atualizar o sitemap com novos conteúdos
export async function updateSitemapWithNewContent(
  contentType: 'blog' | 'case' | 'service',
  slug: string,
  updatedAt?: Date
) {
  // Esta função seria chamada sempre que novo conteúdo fosse criado
  // para garantir que o sitemap seja atualizado dinamicamente
  
  const newUrl: SitemapURL = {
    url: `${baseUrl}/${contentType}/${slug}`,
    lastModified: updatedAt || new Date(),
    changeFrequency: contentType === 'blog' ? 'monthly' : 'weekly',
    priority: contentType === 'service' ? 0.9 : 0.6
  };

  // Em uma implementação real, você salvaria isso no banco de dados
  // ou em um sistema de cache para ser incluído no próximo sitemap
  
  console.log('Novo conteúdo adicionado ao sitemap:', newUrl);
}

// Função para gerar robots.txt
export function generateRobotsTxt(): string {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /api/blog/rss
Allow: /api/sitemap

# Block specific crawlers if needed
# User-agent: BadBot
# Disallow: /
`.trim();

  return robotsTxt;
}

// Configurações de prioridade por tipo de página
export const sitemapPriorities = {
  homepage: 1.0,
  mainServices: 0.9,
  servicePages: 0.9,
  aboutContact: 0.8,
  blog: 0.8,
  blogPosts: 0.6,
  cases: 0.7,
  portfolio: 0.7,
  categories: 0.5,
  legal: 0.3
};

// Configurações de frequência de mudança
export const changeFrequencies = {
  homepage: 'weekly' as const,
  services: 'weekly' as const,
  blog: 'daily' as const,
  blogPosts: 'monthly' as const,
  static: 'monthly' as const,
  legal: 'yearly' as const
};