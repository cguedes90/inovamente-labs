'use client';

import { useEffect } from 'react';

// Critical CSS styles that should be inlined
const criticalStyles = `
  /* Critical above-the-fold styles */
  .hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .nav-bar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .btn-primary {
    background: #3b82f6;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    transition: background 0.2s ease;
  }
  
  .btn-primary:hover {
    background: #2563eb;
  }
  
  .text-animation {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

// Non-critical CSS that can be loaded asynchronously
const nonCriticalStylesheets = [
  '/styles/components.css',
  '/styles/animations.css',
  '/styles/responsive.css'
];

interface CriticalCSSProps {
  children: React.ReactNode;
}

export const CriticalCSS: React.FC<CriticalCSSProps> = ({ children }) => {
  useEffect(() => {
    // Preload non-critical stylesheets
    const preloadNonCriticalStyles = () => {
      nonCriticalStylesheets.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        link.onload = () => {
          // Convert preload to actual stylesheet
          link.rel = 'stylesheet';
        };
        document.head.appendChild(link);
      });
    };

    // Load non-critical styles after critical rendering
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        preloadNonCriticalStyles();
      } else {
        window.addEventListener('load', preloadNonCriticalStyles);
        return () => window.removeEventListener('load', preloadNonCriticalStyles);
      }
    }
  }, []);

  useEffect(() => {
    // Inject critical CSS if not already present
    if (typeof document !== 'undefined' && !document.getElementById('critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalStyles;
      document.head.insertBefore(style, document.head.firstChild);
    }
  }, []);

  return <>{children}</>;
};

// Performance optimization utilities
export const preloadResource = (href: string, as: string = 'script') => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

export const prefetchResource = (href: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Component for lazy loading sections
export const LazySection: React.FC<{
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}> = ({ children, className = '', threshold = 0.1 }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.lazy-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section className={`lazy-section ${className}`}>
      {children}
    </section>
  );
};

// Web Vitals measurement
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Measure Core Web Vitals
  const measureVitals = async () => {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

    getCLS(metric => console.log('CLS:', metric.value));
    getFID(metric => console.log('FID:', metric.value));
    getFCP(metric => console.log('FCP:', metric.value));
    getLCP(metric => console.log('LCP:', metric.value));
    getTTFB(metric => console.log('TTFB:', metric.value));
  };

  // Only measure in production
  if (process.env.NODE_ENV === 'production') {
    measureVitals();
  }
};

// Resource hints component
export const ResourceHints: React.FC = () => {
  useEffect(() => {
    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'api.github.com',
      'cdn.jsdelivr.net'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical origins
    const preconnectOrigins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectOrigins.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};