'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Cloud, RefreshCw, Rocket, Lightbulb, CheckCircle2, ChevronRight, Briefcase, MessageCircle } from 'lucide-react';

const categories = [
  {
    category: 'Frontend',
    icon: Palette,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    icon: Code2,
    techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'PWA'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

const metodologias = [
  {
    title: 'Scrum',
    icon: RefreshCw,
    description: 'Desenvolvimento iterativo com sprints de 2-4 semanas, garantindo entregas constantes e feedback continuo.',
    benefits: ['Transparencia total', 'Entregas rapidas', 'Adaptacao a mudancas', 'ROI acelerado'],
  },
  {
    title: 'DevOps',
    icon: Rocket,
    description: 'Integracao continua e deploy automatizado para releases mais frequentes e confiaveis.',
    benefits: ['Deploy automatizado', 'Monitoramento 24/7', 'Rollback rapido', 'Escalabilidade'],
  },
  {
    title: 'Design Thinking',
    icon: Lightbulb,
    description: 'Abordagem centrada no usuario para criar solucoes inovadoras e experiencias excepcionais.',
    benefits: ['Foco no usuario', 'Inovacao constante', 'Prototipagem rapida', 'Validacao continua'],
  },
];

const projetos = [
  {
    title: 'E-commerce Multivendor',
    category: 'Marketplace',
    description: 'Plataforma completa de marketplace com gestao de vendedores, produtos e pedidos.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    metrics: ['500+ vendedores', 'R$ 2M+ em vendas', '99.9% uptime'],
  },
  {
    title: 'App de Delivery',
    category: 'Mobile',
    description: 'Aplicativo de delivery com tracking em tempo real e multiplas formas de pagamento.',
    tech: ['React Native', 'Express', 'MongoDB', 'Socket.io'],
    metrics: ['50K+ downloads', '4.8 rating', '< 3s loading'],
  },
  {
    title: 'Sistema de CRM',
    category: 'Enterprise',
    description: 'CRM corporativo com automacao de vendas e analytics avancados.',
    tech: ['React', 'Python', 'PostgreSQL', 'Redis'],
    metrics: ['1000+ usuarios', '40% mais vendas', 'ROI 300%'],
  },
];

export default function DesenvolvimentoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Desenvolvimento</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="gradient-text">Desenvolvimento</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Desenvolvimento de software sob medida com tecnologias de ponta e metodologias ageis.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Tecnologias que <span className="gradient-text">Dominamos</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologias */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Metodologias <span className="gradient-text">Ageis</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {metodologias.map((met, i) => (
                <motion.div
                  key={met.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <met.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{met.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{met.description}</p>
                  <div className="flex flex-col gap-2">
                    {met.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Projetos de <span className="gradient-text">Destaque</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {projetos.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 hover-lift"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                    {proj.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    {proj.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        <span className="text-sm text-muted-foreground">{m}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Vamos desenvolver seu proximo projeto juntos?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe esta pronta para transformar sua visao em um produto digital de alta qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Briefcase className="w-4 h-4" />
                  Solicitar Orcamento
                </Link>
                <Link
                  href="https://wa.me/5547992474747?text=Ola! Gostaria de discutir um projeto de desenvolvimento com a InovaMente Labs."
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
