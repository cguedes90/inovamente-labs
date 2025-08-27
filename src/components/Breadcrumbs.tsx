import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Adiciona o item "Início" no começo se não estiver presente
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Início', href: '/' },
    ...items
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.inovamentelabs.com.br${item.href}` : undefined
    }))
  };

  return (
    <>
      <div className={`bg-gray-50 py-4 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg 
                      className="h-4 w-4 text-gray-400 mx-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  
                  {index === 0 ? (
                    <Link 
                      href={item.href || '#'} 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      aria-label="Voltar ao início"
                    >
                      <svg 
                        className="h-4 w-4 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {item.label}
                    </Link>
                  ) : item.current || !item.href ? (
                    <span 
                      className="text-gray-600 font-medium"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link 
                      href={item.href}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Schema.org JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

// Breadcrumbs pré-definidos para páginas comuns
export const breadcrumbPresets = {
  servicos: [
    { label: 'Serviços', href: '/servicos', current: true }
  ],
  desenvolvimentoWeb: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Desenvolvimento Web', current: true }
  ],
  desenvolvimentoMobile: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Desenvolvimento Mobile', current: true }
  ],
  automacaoProcessos: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'Automação de Processos', current: true }
  ],
  devopsInfraestrutura: [
    { label: 'Serviços', href: '/servicos' },
    { label: 'DevOps & Infraestrutura', current: true }
  ],
  blog: [
    { label: 'Blog', href: '/blog', current: true }
  ],
  blogPost: (category: string, title: string) => [
    { label: 'Blog', href: '/blog' },
    { label: category, href: `/blog/categoria/${category.toLowerCase()}` },
    { label: title, current: true }
  ],
  sobre: [
    { label: 'Sobre', current: true }
  ],
  contato: [
    { label: 'Contato', current: true }
  ],
  portfolio: [
    { label: 'Portfolio', current: true }
  ],
  cases: [
    { label: 'Cases de Sucesso', current: true }
  ],
  caseDetail: (caseTitle: string) => [
    { label: 'Cases de Sucesso', href: '/cases' },
    { label: caseTitle, current: true }
  ]
};

// Hook para gerar breadcrumbs automaticamente baseado na rota
export function useBreadcrumbs(pathname: string, customItems?: BreadcrumbItem[]): BreadcrumbItem[] {
  if (customItems) {
    return customItems;
  }

  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [];

  // Mapeamento de rotas para labels legíveis
  const routeLabels: { [key: string]: string } = {
    'servicos': 'Serviços',
    'desenvolvimento-web': 'Desenvolvimento Web',
    'desenvolvimento-mobile': 'Desenvolvimento Mobile',
    'automacao-processos': 'Automação de Processos',
    'devops-infraestrutura': 'DevOps & Infraestrutura',
    'blog': 'Blog',
    'sobre': 'Sobre',
    'contato': 'Contato',
    'portfolio': 'Portfolio',
    'cases': 'Cases de Sucesso'
  };

  // Constroi os breadcrumbs baseado nos segmentos da URL
  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    items.push({
      label,
      href: isLast ? undefined : href,
      current: isLast
    });
  });

  return items;
}

// Componente para breadcrumbs estruturados para páginas de produto/serviço
interface ServiceBreadcrumbsProps {
  serviceCategory: string;
  serviceName: string;
  className?: string;
}

export function ServiceBreadcrumbs({ serviceCategory, serviceName, className }: ServiceBreadcrumbsProps) {
  const items = [
    { label: 'Serviços', href: '/servicos' },
    { label: serviceCategory, href: `/servicos#${serviceCategory.toLowerCase().replace(/\s+/g, '-')}` },
    { label: serviceName, current: true }
  ];

  return <Breadcrumbs items={items} className={className} />;
}

// Componente para breadcrumbs de blog
interface BlogBreadcrumbsProps {
  category?: string;
  postTitle?: string;
  className?: string;
}

export function BlogBreadcrumbs({ category, postTitle, className }: BlogBreadcrumbsProps) {
  const items: BreadcrumbItem[] = [
    { label: 'Blog', href: '/blog' }
  ];

  if (category) {
    items.push({ 
      label: category, 
      href: postTitle ? `/blog/categoria/${category.toLowerCase()}` : undefined,
      current: !postTitle
    });
  }

  if (postTitle) {
    items.push({ label: postTitle, current: true });
  }

  return <Breadcrumbs items={items} className={className} />;
}