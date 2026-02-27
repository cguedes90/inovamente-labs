'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cog, Cloud, ChevronRight, Search, Lightbulb, Code2, Rocket } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Criamos aplicações web de alta performance com as tecnologias mais modernas do mercado. SPAs, PWAs e plataformas completas.',
    techs: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: Smartphone,
    title: 'Desenvolvimento Mobile',
    description: 'Apps nativos e multiplataforma com experiências fluidas. Do design ao deploy nas lojas Apple e Google.',
    techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
  },
  {
    icon: Cog,
    title: 'Automação de Processos',
    description: 'Eliminamos gargalos operacionais com automações inteligentes, integrações e workflows que reduzem custos.',
    techs: ['RPA', 'APIs REST', 'Workflows', 'Python', 'IA'],
  },
  {
    icon: Cloud,
    title: 'DevOps & Infraestrutura',
    description: 'Infraestrutura segura e escalável com CI/CD, containers, monitoramento e alta disponibilidade.',
    techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

const methodology = [
  { icon: Search, title: 'Descoberta', description: 'Entendemos seu negócio, objetivos e desafios técnicos.' },
  { icon: Lightbulb, title: 'Planejamento', description: 'Arquitetura, roadmap e definição de escopo detalhado.' },
  { icon: Code2, title: 'Desenvolvimento', description: 'Sprints ágeis com entregas incrementais e feedback contínuo.' },
  { icon: Rocket, title: 'Entrega', description: 'Deploy, monitoramento, treinamento e suporte pós-lançamento.' },
];

export default function ServicosPage() {
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
              <span className="text-foreground">Serviços</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Nossos <span className="gradient-text">Serviços</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Soluções tecnológicas completas para cada fase da transformação digital do seu negócio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.techs.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <Link href="/contato" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Saiba Mais <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Nossa <span className="gradient-text-accent">Metodologia</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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
                Tem um projeto em mente?
              </h2>
              <p className="text-muted-foreground mb-6">
                Conte-nos sobre sua ideia e receba uma proposta personalizada.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
