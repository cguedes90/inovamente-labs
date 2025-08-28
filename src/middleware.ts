import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken, checkRateLimit } from './lib/auth';

// Rotas que requerem autenticação
const PROTECTED_ROUTES = {
  ADMIN: ['/admin/dashboard'], // Apenas painel admin autenticado, não a página de login
  CLIENT: ['/client', '/dashboard'],
  API_ADMIN: ['/api/admin', '/api/tickets', '/api/clients'],
  API_CLIENT: ['/api/client'],
};

// Rotas públicas (não precisam de autenticação)
const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/register', 
  '/contato',
  '/blog',
  '/chamados',
  '/desenvolvimento',
  '/solucoes',
  '/admin', // Página de login do admin é pública
  '/api/auth/login',
  '/api/admin/login', // API de login do admin é pública
  '/api/contact',
  '/api/blog/posts',
  '/api/blog/public',
  '/api/chatbot'
];

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
  '/api/auth/login': { max: 5, window: 15 * 60 * 1000 }, // 5 tentativas por 15 min
  '/api/contact': { max: 3, window: 10 * 60 * 1000 }, // 3 por 10 min
  '/api/tickets': { max: 20, window: 60 * 1000 }, // 20 por minuto
  '/api/clients': { max: 10, window: 60 * 1000 }, // 10 por minuto
  default: { max: 100, window: 60 * 1000 } // 100 por minuto (geral)
};

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP.trim();
  }
  
  return 'unknown';
}

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => {
    if (route === pathname) return true;
    if (route.endsWith('/*')) {
      const baseRoute = route.slice(0, -2);
      return pathname.startsWith(baseRoute);
    }
    return false;
  });
}

function requiresAdminAuth(pathname: string): boolean {
  return PROTECTED_ROUTES.ADMIN.some(route => pathname.startsWith(route)) ||
         PROTECTED_ROUTES.API_ADMIN.some(route => pathname.startsWith(route));
}

function requiresClientAuth(pathname: string): boolean {
  return PROTECTED_ROUTES.CLIENT.some(route => pathname.startsWith(route)) ||
         PROTECTED_ROUTES.API_CLIENT.some(route => pathname.startsWith(route));
}

async function handleRateLimit(request: NextRequest): Promise<NextResponse | null> {
  const pathname = request.nextUrl.pathname;
  const clientIP = getClientIP(request);
  
  // Encontrar configuração de rate limit específica ou usar padrão
  let rateLimitConfig = RATE_LIMIT_CONFIG.default;
  
  for (const [route, config] of Object.entries(RATE_LIMIT_CONFIG)) {
    if (route !== 'default' && pathname.startsWith(route)) {
      rateLimitConfig = config;
      break;
    }
  }
  
  const identifier = `${clientIP}:${pathname}`;
  const isAllowed = checkRateLimit(identifier, rateLimitConfig.max, rateLimitConfig.window);
  
  if (!isAllowed) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Rate limit exceeded. Try again later.',
        retryAfter: Math.ceil(rateLimitConfig.window / 1000)
      },
      { 
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil(rateLimitConfig.window / 1000)),
          'X-RateLimit-Limit': String(rateLimitConfig.max),
          'X-RateLimit-Window': String(rateLimitConfig.window)
        }
      }
    );
  }
  
  return null;
}

async function handleAuthentication(request: NextRequest): Promise<NextResponse | null> {
  const { pathname } = request.nextUrl;
  
  // Verificar se é rota pública
  if (isPublicRoute(pathname)) {
    return null;
  }
  
  // Verificar autenticação para rotas admin específicas (dashboard, etc)
  if (requiresAdminAuth(pathname) && !pathname.startsWith('/api')) {
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    try {
      const payload = verifyToken(token);
      if (payload.type !== 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    } catch {
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('admin_token');
      return response;
    }
  }
  
  if (requiresClientAuth(pathname) && !pathname.startsWith('/api')) {
    const token = request.cookies.get('client_token')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    try {
      const payload = verifyToken(token);
      if (payload.type !== 'client') {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('client_token');
      return response;
    }
  }
  
  return null;
}

function addSecurityHeaders(response: NextResponse): void {
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Only add HSTS in production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  // CSP (Content Security Policy) - ajustar conforme necessário
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-inline para styled-components
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
}

function logRequest(request: NextRequest, startTime: number): void {
  if (process.env.NODE_ENV === 'development') {
    const duration = Date.now() - startTime;
    const clientIP = getClientIP(request);
    console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname} - ${clientIP} - ${duration}ms`);
  }
}

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // 1. Rate limiting para APIs
    if (request.nextUrl.pathname.startsWith('/api/')) {
      const rateLimitResponse = await handleRateLimit(request);
      if (rateLimitResponse) {
        logRequest(request, startTime);
        return rateLimitResponse;
      }
    }
    
    // 2. Autenticação
    const authResponse = await handleAuthentication(request);
    if (authResponse) {
      logRequest(request, startTime);
      return authResponse;
    }
    
    // 3. Continuar com a requisição
    const response = NextResponse.next();
    
    // 4. Adicionar headers de segurança
    addSecurityHeaders(response);
    
    // 5. Log da requisição
    logRequest(request, startTime);
    
    return response;
    
  } catch (error) {
    console.error('Middleware error:', error);
    
    // Em caso de erro, permitir que a requisição continue
    const response = NextResponse.next();
    addSecurityHeaders(response);
    logRequest(request, startTime);
    
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|.*\\.).*)',
  ],
}