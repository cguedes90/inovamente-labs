'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Zap, Target, TrendingUp, Clock, Rocket, Search, Pencil, Settings, MessageCircle } from 'lucide-react';

const stats = [
  { label: 'Dias para MVP', value: '30' },
  { label: 'Economia vs Full', value: '80%' },
  { label: 'Taxa Validacao', value: '95%' },
  { label: 'MVPs Criados', value: '200+' },
];

const benefits = [
  { title: 'Validacao Rapida', description: 'Teste sua ideia no mercado real antes de investir pesado no desenvolvimento completo.', icon: Target },
  { title: 'Economia de Recursos', description: 'Invista apenas no essencial. Economize ate 80% comparado ao desenvolvimento full.', icon: TrendingUp },
  { title: 'Time-to-Market', description: 'Chegue ao mercado em semanas, nao meses. Velocidade e vantagem competitiva.', icon: Zap },
  { title: 'Feedback Real', description: 'Colete dados reais de usuarios desde o primeiro dia para guiar decisoes.', icon: CheckCircle2 },
  { title: 'Iteracao Continua', description: 'Evolua o produto baseado em metricas e feedback, nao em suposicoes.', icon: Settings },
  { title: 'Escalabilidade', description: 'Arquitetura preparada para crescer. Do MVP ao produto completo sem reescrever.', icon: Rocket },
];

const timeline = [
  { phase: 'Discovery', duration: '3-5 dias', description: 'Entendemos a visao, definimos personas e priorizamos funcionalidades', icon: Search },
  { phase: 'Prototipagem', duration: '5-7 dias', description: 'Wireframes, design system e prototipo interativo para validacao', icon: Pencil },
  { phase: 'Desenvolvimento', duration: '15-20 dias', description: 'Codificacao das funcionalidades core com testes automatizados', icon: Settings },
  { phase: 'Launch', duration: '2-3 dias', description: 'Deploy, configuracao de analytics e lancamento no mercado', icon: Rocket },
];

const metrics = [
  { label: 'Custo Medio MVP', value: 'R$ 15-35k' },
  { label: 'Funcionalidades Core', value: '5-8' },
  { label: 'Testes com Usuarios', value: '20+' },
  { label: 'Taxa de Pivot', value: '35%' },
];

export default function MVPDesenvolvimentoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/solucoes" className="hover:text-primary transition-colors">Solucoes</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">MVP Desenvolvimento</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Do Conceito ao <span className="gradient-text">MVP em 30 Dias</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Valide sua ideia rapidamente com um MVP funcional. Minimize riscos, acelere aprendizado e chegue ao mercado antes da concorrencia.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="glass-card rounded-xl p-4">
                    <div className="font-display text-2xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=mvp" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Criar Meu MVP Agora
                </Link>
                <Link href="#timeline" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  Ver Processo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Por que Comecar com um <span className="gradient-text">MVP</span>?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Como <span className="gradient-text">Funciona</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((step, i) => (
                <motion.div key={step.phase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.phase}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{step.duration}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Numeros que <span className="gradient-text">Importam</span></h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
                  <div className="font-display text-2xl font-bold text-primary mb-1">{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Validar sua Ideia?</h2>
              <p className="text-muted-foreground mb-6">MVP em 30 dias com tecnologia de ponta. Valide antes de investir pesado.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=mvp" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Comecar Meu MVP
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Quero criar um MVP para minha ideia" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
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
