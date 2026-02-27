'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  Empresa: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Cases', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ],
  Serviços: [
    { label: 'Desenvolvimento Web', href: '/servicos/desenvolvimento-web' },
    { label: 'Apps Mobile', href: '/servicos/desenvolvimento-mobile' },
    { label: 'Automação', href: '/servicos/automacao-processos' },
    { label: 'Cloud & DevOps', href: '/servicos/devops-infraestrutura' },
  ],
  Soluções: [
    { label: 'MVP', href: '/solucoes/mvp-desenvolvimento' },
    { label: 'E-commerce', href: '/solucoes/e-commerce' },
    { label: 'Integração', href: '/solucoes/integracao-sistemas' },
    { label: 'Indústria 4.0', href: '/solucoes/industria-4-0' },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-display font-bold text-primary text-sm">iM</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Inova<span className="gradient-text">Mente</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Transformamos ideias em soluções digitais desde 2019. Jacareí, SP.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 97450-8168</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@inovamentelabs.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jacareí, SP</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Seg-Sex 9h-18h | Sáb 9h-12h</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-14 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} InovaMente Labs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
