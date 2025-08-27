import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.inovamentelabs.com.br';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/',
          '/_next/',
          '/static/',
          '/temp/',
          '/backup/',
          '/scripts/',
          '/.env',
          '/.git/',
          '/node_modules/',
          '/*?*utm_*',  // Block URLs with UTM parameters from being indexed
          '/*?*fbclid*', // Block Facebook click ID parameters
          '/*?*gclid*'   // Block Google click ID parameters
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/'
        ],
        crawlDelay: 1
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/'
        ],
        crawlDelay: 1
      },
      // Permitir acesso especial para bots de redes sociais
      {
        userAgent: 'facebookexternalhit',
        allow: '/'
      },
      {
        userAgent: 'Twitterbot',
        allow: '/'
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/'
      },
      // Bloquear bots maliciosos conhecidos
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'BLEXBot'
        ],
        disallow: '/'
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`
    ],
    host: baseUrl
  };
}