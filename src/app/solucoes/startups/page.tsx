'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Zap, Smartphone, Rocket, CheckCircle2, Clock,
  Star, Search, Settings, MessageCircle, DollarSign, Target,
  BarChart3, Building, Users, Code2, Flame, Cloud, Database
} from 'lucide-react';

const startupServices = [
  {
    icon: Zap,
    title: 'MVP em 30 Dias',
    description: 'Valide sua ideia rapidamente com um produto minimo viavel funcional',
    features: ['Desenvolvimento agil', 'Funcionalidades essenciais', 'Design moderno e intuitivo', 'Deploy na loja de apps', 'Analytics integrado', 'Feedback loop automatico'],
    benefits: ['Time-to-market acelerado', 'Validacao rapida', 'Baixo investimento'],
    price: 'R$ 15.000 - R$ 35.000',
    timeline: '3-4 semanas',
    popular: true
  },
  {
    icon: Smartphone,
    title: 'App Nativo Completo',
    description: 'Aplicativo completo para iOS e Android com todas as funcionalidades',
    features: ['React Native/Flutter', 'Interface nativa', 'Push notifications', 'Pagamentos integrados', 'Chat em tempo real', 'Geolocalizacao'],
    benefits: ['Performance nativa', 'UX premium', 'Escalabilidade'],
    price: 'R$ 45.000 - R$ 120.000',
    timeline: '8-16 semanas'
  },
  {
    icon: Rocket,
    title: 'Plataforma Completa',
    description: 'Ecossistema completo: app, dashboard admin, API e infraestrutura',
    features: ['App mobile multiplataforma', 'Dashboard web administrativo', 'API escalavel', 'Infraestrutura cloud', 'Sistema de usuarios', 'Analytics avancado'],
    benefits: ['Solucao 360', 'Pronto para escalar', 'Suporte completo'],
    price: 'R$ 80.000 - R$ 200.000',
    timeline: '12-24 semanas'
  }
];

const startupChallenges = [
  { challenge: 'Orcamento Limitado', solution: 'Desenvolvimento MVP com foco no essencial', icon: DollarSign, description: 'Priorizamos funcionalidades core e oferecemos planos de pagamento flexiveis' },
  { challenge: 'Tempo e Critico', solution: 'Metodologia agil com entregas semanais', icon: Clock, description: 'Sprints de 1 semana com demonstracoes constantes para acelerar o desenvolvimento' },
  { challenge: 'Incerteza de Mercado', solution: 'MVP com analytics e testes A/B integrados', icon: BarChart3, description: 'Coletamos dados desde o dia 1 para validar hipoteses e orientar pivots' },
  { challenge: 'Escalabilidade Futura', solution: 'Arquitetura preparada para crescimento', icon: Building, description: 'Codigo limpo e infraestrutura que suporta de 100 a 1M+ usuarios' },
];

const techStack = [
  { name: 'React Native', expertise: 95, description: 'Desenvolvimento movel multiplataforma', icon: Smartphone },
  { name: 'Node.js', expertise: 92, description: 'Backend escalavel e performatico', icon: Code2 },
  { name: 'Firebase', expertise: 88, description: 'Backend-as-a-Service para MVPs rapidos', icon: Flame },
  { name: 'AWS/GCP', expertise: 85, description: 'Infraestrutura em nuvem enterprise', icon: Cloud },
  { name: 'PostgreSQL', expertise: 90, description: 'Banco de dados robusto e confiavel', icon: Database },
];

const developmentProcess = [
  { title: 'Discovery & Validacao', duration: '3-5 dias', icon: Search, details: ['Workshop de ideacao', 'Analise de concorrentes', 'Definicao de personas', 'Validacao de premissas'] },
  { title: 'Prototipagem Rapida', duration: '5-7 dias', icon: Settings, details: ['Wireframes de baixa fidelidade', 'Design system inicial', 'Prototipo navegavel', 'Testes com usuarios'] },
  { title: 'Desenvolvimento MVP', duration: '15-20 dias', icon: Code2, details: ['Setup da arquitetura', 'Desenvolvimento core features', 'Integracao com servicos', 'Testes automatizados'] },
  { title: 'Launch & Iteracao', duration: 'Continuo', icon: Rocket, details: ['Deploy nas app stores', 'Configuracao de analytics', 'Coleta de feedback', 'Iteracoes semanais'] },
];

const pricingPlans = [
  {
    name: 'MVP Starter',
    price: 'R$ 15.000',
    description: 'Perfeito para validar sua ideia',
    features: ['App React Native basico', 'Backend Firebase', 'Design system simples', 'Deploy nas lojas', 'Analytics basico', '30 dias de suporte'],
    suitable: 'Primeiros passos, validacao',
    cta: 'Comecar MVP'
  },
  {
    name: 'Scale-Up',
    price: 'R$ 45.000',
    description: 'Para startups prontas para crescer',
    features: ['App nativo completo', 'Backend Node.js escalavel', 'Design premium', 'Push notifications', 'Pagamentos integrados', '90 dias de suporte'],
    suitable: 'Startups com tracao',
    popular: true,
    cta: 'Escalar Agora'
  },
  {
    name: 'Enterprise Ready',
    price: 'R$ 80.000+',
    description: 'Solucao completa para scale-ups',
    features: ['Plataforma completa', 'Infraestrutura AWS', 'Dashboard administrativo', 'APIs documentadas', 'Suporte dedicado', 'SLA personalizado'],
    suitable: 'Scale-ups e empresas',
    cta: 'Falar com Consultor'
  }
];

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'TechStart (YC S21)',
    role: 'Co-founder & CEO',
    quote: 'A InovaMente transformou nossa ideia em um MVP funcional em apenas 30 dias. Hoje temos 50k+ usuarios e R$ 2M captados.',
    metrics: { users: '50k+', funding: 'R$ 2M', time: '30 dias' }
  },
  {
    name: 'Ana Silva',
    company: 'EcoApp',
    role: 'Founder',
    quote: 'O time entendeu perfeitamente nossa visao. O app ficou exatamente como imaginamos, mas melhor.',
    metrics: { rating: '4.8', downloads: '25k+', time: '25 dias' }
  }
];

export default function StartupsPage() {
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
              <span className="text-foreground">Startups</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Transforme sua <span className="gradient-text">Ideia em App</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Desenvolvimento de apps para startups com foco em rapidez, qualidade e custo acessivel. MVP em 30 dias para validar sua ideia no mercado.
                </p>
                <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> MVP em 30 dias</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> A partir de R$ 15k</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 89% taxa de sucesso</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contato?service=startup-mvp" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Rocket className="w-4 h-4" /> Criar Meu MVP
                  </Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Ver Cases de Sucesso
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Por que Startups nos Escolhem?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Zap, title: 'Velocidade Extrema', desc: 'MVP funcional em 30 dias ou menos' },
                      { icon: DollarSign, title: 'Preco Acessivel', desc: 'Planos flexiveis para orcamento startup' },
                      { icon: Target, title: 'Foco em Validacao', desc: 'Analytics e metricas desde o primeiro dia' },
                      { icon: Rocket, title: 'Escalabilidade', desc: 'Arquitetura preparada para crescimento' },
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Desafios de Startups que <span className="gradient-text">Resolvemos</span></h2>
              <p className="text-muted-foreground">Entendemos os obstaculos unicos que empreendedores enfrentam</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {startupChallenges.map((c, i) => (
                <motion.div key={c.challenge} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground">{c.challenge}</h3>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Resolvido</span>
                      </div>
                      <h4 className="text-sm font-semibold text-primary mb-2">{c.solution}</h4>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solucoes para Cada <span className="gradient-text">Momento da Startup</span></h2>
              <p className="text-muted-foreground">Do MVP inicial a plataforma completa enterprise</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {startupServices.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Mais Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{service.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((b) => (
                      <span key={b} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{b}</span>
                    ))}
                  </div>
                  <Link href={`/contato?service=startup-${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Proposta
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Stack Tecnologico para <span className="gradient-text">Startups</span></h2>
              <p className="text-muted-foreground">Tecnologias modernas, escalaveis e com custo otimizado</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground">{tech.name}</h3>
                    </div>
                    <span className="text-sm font-bold text-primary">{tech.expertise}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mb-3">
                    <div className="h-2 bg-primary rounded-full" style={{ width: `${tech.expertise}%` }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nosso Processo de <span className="gradient-text">Desenvolvimento</span></h2>
              <p className="text-muted-foreground">Metodologia agil otimizada para startups</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentProcess.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{step.duration}</p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />{d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Planos Feitos para <span className="gradient-text">Startups</span></h2>
              <p className="text-muted-foreground">Precos transparentes e acessiveis para empreendedores</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Recomendado
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <div className="font-display text-3xl font-bold text-primary mb-2">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-6">
                    <span className="px-4 py-2 bg-secondary text-foreground text-xs rounded-full font-semibold">{plan.suitable}</span>
                  </div>
                  <Link href={`/contato?service=startup&plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Startups que Ja <span className="gradient-text">Decolaram Conosco</span></h2>
              <p className="text-muted-foreground">Depoimentos de empreendedores que transformaram ideias em sucessos</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{t.name}</h3>
                      <p className="text-sm text-primary font-medium">{t.role}</p>
                      <p className="text-xs text-muted-foreground">{t.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(t.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-display text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Validar sua Startup?</h2>
              <p className="text-muted-foreground mb-6">MVP em 30 dias, preco acessivel e suporte completo. Vamos transformar sua ideia em realidade!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=startup-mvp" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Criar Meu MVP
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Tenho uma ideia de startup e gostaria de um orcamento" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
