import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/lib/queryClient';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InovaMente Labs - Soluções Tecnológicas',
  description: 'Portal de clientes e sistema de tickets da InovaMente Labs. Desenvolvimento de software, suporte técnico e soluções inovadoras em tecnologia.',
  keywords: ['tecnologia', 'desenvolvimento', 'suporte', 'tickets', 'software', 'inovação'],
  authors: [{ name: 'InovaMente Labs' }],
  creator: 'InovaMente Labs',
  publisher: 'InovaMente Labs',
  
  // Open Graph
  openGraph: {
    title: 'InovaMente Labs - Soluções Tecnológicas Inovadoras',
    description: 'Portal de clientes e sistema de tickets da InovaMente Labs. Desenvolvimento de software, suporte técnico e soluções inovadoras em tecnologia.',
    url: 'https://www.inovamentelabs.com.br',
    siteName: 'InovaMente Labs',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'InovaMente Labs - Soluções Tecnológicas',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'InovaMente Labs - Soluções Tecnológicas',
    description: 'Portal de clientes e sistema de tickets da InovaMente Labs. Desenvolvimento de software, suporte técnico e soluções inovadoras.',
    images: ['/og-image.svg'],
    creator: '@inovamentelabs',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/icon-192.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        rel: 'icon',
        url: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      }
    ]
  },
  manifest: '/manifest.json',
  themeColor: '#3B82F6',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleAnalytics />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Open Graph adicional */}
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        
        {/* Twitter Card adicional */}
        <meta name="twitter:image" content="/og-image.svg" />
        <meta name="twitter:image:alt" content="InovaMente Labs - Soluções Tecnológicas" />
        
        {/* SEO adicional */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brazil" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InovaMente Labs",
              "url": "https://www.inovamentelabs.com.br",
              "logo": "https://www.inovamentelabs.com.br/og-image.svg",
              "description": "Portal de clientes e sistema de tickets da InovaMente Labs. Desenvolvimento de software, suporte técnico e soluções inovadoras em tecnologia.",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
