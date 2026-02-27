'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, AlertTriangle, DollarSign, Link2, Shield,
  CheckCircle2, Clock, Star, Search, Pencil, Settings, Rocket,
  RefreshCw, ArrowRight, MessageCircle, HelpCircle, Zap
} from 'lucide-react';

const heroStats = [
  { label: 'Performance', value: '850%' },
  { label: 'Perda Dados', value: '0%' },
  { label: 'Uptime', value: '99.9%' },
];

const migrationChallenges = [
  { challenge: 'Sistema Lento e Instavel', impact: 'Produtividade reduzida, clientes insatisfeitos', solution: 'Migracao para arquitetura moderna e escalavel', icon: Zap, urgency: 'Alta' },
  { challenge: 'Manutencao Custosa', impact: 'Recursos tecnicos escassos, custos elevados', solution: 'Tecnologias atuais com suporte amplo', icon: DollarSign, urgency: 'Alta' },
  { challenge: 'Falta de Integracao', impact: 'Dados isolados, processos manuais', solution: 'APIs modernas e integracoes nativas', icon: Link2, urgency: 'Media' },
  { challenge: 'Seguranca Vulneravel', impact: 'Risco de ataques, compliance comprometido', solution: 'Seguranca por design com padroes atuais', icon: Shield, urgency: 'Critica' },
];

const migrationApproaches = [
  {
    approach: 'Replatforming',
    description: 'Migracao com mudancas minimas na arquitetura',
    timeline: '3-6 meses', risk: 'Baixo', cost: 'Baixo',
    benefits: ['Rapida implementacao', 'Risco minimo', 'Melhoria imediata'],
    suitable: 'Sistemas funcionais que precisam de modernizacao basica',
    icon: RefreshCw,
  },
  {
    approach: 'Refactoring',
    description: 'Reestruturacao completa mantendo funcionalidades',
    timeline: '6-12 meses', risk: 'Medio', cost: 'Medio',
    benefits: ['Arquitetura otimizada', 'Performance superior', 'Manutenibilidade'],
    suitable: 'Sistemas com logica complexa que precisa ser preservada',
    icon: Settings,
  },
  {
    approach: 'Rebuild',
    description: 'Reconstrucao completa com tecnologias modernas',
    timeline: '9-18 meses', risk: 'Alto', cost: 'Alto',
    benefits: ['Solucao sob medida', 'Tecnologia de ponta', 'Escalabilidade maxima'],
    suitable: 'Sistemas criticos que precisam de transformacao total',
    icon: Rocket,
  }
];

const technologyStack = [
  { from: 'COBOL/Mainframe', to: 'Java/Spring Boot', modernization: 95 },
  { from: 'VB6/Access', to: 'C#/.NET Core', modernization: 92 },
  { from: 'PHP 5/MySQL', to: 'Node.js/PostgreSQL', modernization: 88 },
  { from: 'ASP Classic', to: 'React/Next.js', modernization: 94 },
  { from: 'Oracle Forms', to: 'Angular/Material', modernization: 90 }
];

const riskMitigation = [
  { risk: 'Perda de Dados', mitigation: 'Backup multiplo + Migracao incremental + Validacao automatica', prevention: '99.9%' },
  { risk: 'Downtime Prolongado', mitigation: 'Migracao Blue/Green + Rollback automatico + Testes de stress', prevention: '95%' },
  { risk: 'Incompatibilidade', mitigation: 'Testes extensivos + Ambiente staging + Validacao incremental', prevention: '90%' },
  { risk: 'Resistencia Usuarios', mitigation: 'Treinamento + UX intuitivo + Suporte dedicado + Change management', prevention: '85%' },
];

const successStories = [
  {
    title: 'Banco Regional - Modernizacao Core Banking',
    challenge: 'Sistema COBOL de 30 anos limitava crescimento e inovacao',
    solution: 'Migracao gradual para arquitetura de microservicos Java/Spring',
    results: ['10x melhoria em performance', 'Zero perda de dados', '6 meses de ROI', '99.9% uptime durante migracao'],
    metrics: { performance: '10x', data_loss: '0%', roi: '6 meses' },
    duration: '14 meses'
  },
  {
    title: 'Industria Quimica - ERP Legacy para Cloud',
    challenge: 'ERP em VB6 sem suporte, maintenance custosa',
    solution: 'Rebuild completo com .NET Core + Azure + Power BI',
    results: ['R$ 500k economia anual', '80% reducao bugs', 'Dashboards em tempo real', 'Mobile-first design'],
    metrics: { savings: 'R$ 500k', bugs: '-80%', uptime: '99.8%' },
    duration: '10 meses'
  }
];

const pricingTiers = [
  {
    name: 'Replatforming',
    price: 'R$ 50.000 - R$ 150.000',
    description: 'Migracao com mudancas minimas',
    timeline: '3-6 meses',
    features: ['Analise sistema atual', 'Migracao de dados', 'Modernizacao interface', 'Testes funcionais', 'Treinamento usuarios', '90 dias suporte'],
    suitable: 'Sistemas funcionais, melhorias pontuais',
    cta: 'Modernizar Sistema'
  },
  {
    name: 'Refactoring',
    price: 'R$ 150.000 - R$ 400.000',
    description: 'Reestruturacao completa da arquitetura',
    timeline: '6-12 meses',
    features: ['Auditoria tecnica completa', 'Nova arquitetura', 'Otimizacao performance', 'Seguranca moderna', 'APIs e integracoes', '180 dias suporte'],
    suitable: 'Sistemas complexos, performance critica',
    popular: true,
    cta: 'Reestruturar Sistema'
  },
  {
    name: 'Rebuild',
    price: 'R$ 400.000+',
    description: 'Reconstrucao completa from scratch',
    timeline: '9-18 meses',
    features: ['Solucao customizada', 'Tecnologia de ponta', 'Arquitetura escalavel', 'UX/UI moderno', 'DevOps completo', '360 dias suporte'],
    suitable: 'Transformacao digital completa',
    cta: 'Reconstruir Sistema'
  }
];

export default function MigracaoLegacyPage() {
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
              <span className="text-foreground">Migracao Legacy</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Migracao de <span className="gradient-text">Sistema Legacy</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Modernize sistemas antigos para tecnologias atuais. Processo seguro, zero downtime, dados preservados e performance 10x superior.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {heroStats.map((s) => (
                    <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                      <div className="font-display text-2xl font-bold text-primary mb-1">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contato?service=migracao-legacy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Search className="w-4 h-4" /> Avaliar Meu Sistema
                  </Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Ver Cases de Sucesso
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Sinais de que seu Sistema Precisa de Migracao:</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, title: 'Lentidao Cronica', desc: 'Sistema trava, usuarios reclamam' },
                      { icon: DollarSign, title: 'Manutencao Cara', desc: 'Dificil encontrar quem saiba manter' },
                      { icon: Link2, title: 'Sem Integracoes', desc: 'Nao conecta com sistemas modernos' },
                      { icon: Shield, title: 'Seguranca Falha', desc: 'Vulneravel a ataques modernos' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Problemas Comuns de <span className="gradient-text">Sistemas Legacy</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {migrationChallenges.map((c, i) => (
                <motion.div key={c.challenge} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">{c.challenge}</h3>
                        <span className="px-2 py-1 text-xs rounded-full font-semibold bg-primary/10 text-primary">{c.urgency}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{c.impact}</p>
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-sm text-primary font-medium">Nossa Solucao: {c.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Approaches */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Estrategias de <span className="gradient-text">Migracao</span></h2>
              <p className="text-muted-foreground">Escolhemos a abordagem ideal para seu caso</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {migrationApproaches.map((a, i) => (
                <motion.div key={a.approach} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <a.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{a.approach}</h3>
                    <p className="text-sm text-muted-foreground">{a.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="text-sm font-semibold text-foreground">{a.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Risco</div>
                      <div className="text-sm font-semibold text-primary">{a.risk}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Custo</div>
                      <div className="text-sm font-semibold text-primary">{a.cost}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {a.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-primary/5 rounded-lg text-center mb-4">
                    <div className="text-xs text-muted-foreground mb-1">Ideal para:</div>
                    <div className="text-sm text-primary font-medium">{a.suitable}</div>
                  </div>
                  <Link href={`/contato?service=migracao-${a.approach.toLowerCase()}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Avaliar {a.approach}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Modernization */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Modernizacao <span className="gradient-text">Tecnologica</span></h2>
              <p className="text-muted-foreground">Migramos de tecnologias antigas para solucoes modernas</p>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {technologyStack.map((tech, i) => (
                <motion.div key={tech.from} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-muted-foreground">{tech.from}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{tech.to}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{tech.modernization}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="h-2 bg-primary rounded-full transition-all duration-1000" style={{ width: `${tech.modernization}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Gestao de <span className="gradient-text">Riscos</span></h2>
              <p className="text-muted-foreground">Como minimizamos os riscos de migracao</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {riskMitigation.map((r, i) => (
                <motion.div key={r.risk} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-lg font-semibold text-foreground">{r.risk}</h3>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Prevencao</div>
                      <div className="font-display text-lg font-bold text-primary">{r.prevention}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-primary">{r.mitigation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Migracoes de <span className="gradient-text">Sucesso</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {successStories.map((story, i) => (
                <motion.div key={story.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{story.duration}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{story.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Desafio:</h4>
                      <p className="text-sm text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4>
                      <p className="text-sm text-muted-foreground">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultados:</h4>
                      <ul className="space-y-1">
                        {story.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(story.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-display text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Investimento em <span className="gradient-text">Modernizacao</span></h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, i) => (
                <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Mais Escolhido
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <div className="font-display text-2xl font-bold text-primary mb-2">{tier.price}</div>
                    <p className="text-sm text-muted-foreground mb-1">{tier.description}</p>
                    <p className="text-xs text-muted-foreground">Timeline: {tier.timeline}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-6">
                    <span className="px-4 py-2 bg-secondary text-foreground text-xs rounded-full font-semibold">{tier.suitable}</span>
                  </div>
                  <Link href={`/contato?service=migracao-legacy&plan=${tier.name.toLowerCase()}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    {tier.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Modernizar seu Sistema Legacy?</h2>
              <p className="text-muted-foreground mb-6">Avaliacao gratuita do seu sistema atual e proposta de migracao sem riscos.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=migracao-legacy" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Search className="w-4 h-4" /> Avaliacao Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Preciso migrar um sistema legacy" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" /> Falar com Especialista
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
