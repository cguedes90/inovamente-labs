'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, AlertCircle, Cpu, AlertTriangle, Zap, DollarSign,
  Users, CheckCircle2, Server, Database, Activity, Shield,
  Cloud, Layers, BarChart3, Rocket, MessageCircle, HelpCircle
} from 'lucide-react';

const heroStats = [
  { label: 'Uptime SLA', value: '99.99%' },
  { label: 'Performance', value: '10x' },
  { label: 'Reducao Custos', value: '90%' },
  { label: 'Users Simultaneos', value: '1M+' },
];

const scalabilityProblems = [
  { title: 'Performance Degradante', description: 'Resposta lenta durante picos de trafego, timeouts frequentes, paginas lentas.', result: '40% dos usuarios abandonam apos 3 segundos', icon: AlertCircle },
  { title: 'Recursos Limitados', description: 'CPU e memoria em 100%, banco de dados sobrecarregado, impossibilidade de escalar.', result: 'Crescimento bloqueado: limite tecnico atingido', icon: Cpu },
  { title: 'Instabilidade Crescente', description: 'Crashes frequentes, erros 500, downtime nao programado.', result: 'Risco: Perda de confianca e clientes', icon: AlertTriangle },
  { title: 'Deploy Complexo', description: 'Deployments demorados, necessidade de downtime, medo de atualizar.', result: 'Time to market lento, competitividade reduzida', icon: Zap },
  { title: 'Custos Exponenciais', description: 'Gastos crescentes com infraestrutura sem melhoria proporcional.', result: 'ROI decrescente, margens apertadas', icon: DollarSign },
  { title: 'Equipe Sobrecarregada', description: 'Time dedicando tempo excessivo a apagar incendios em vez de inovar.', result: 'Turnover alto, inovacao estagnada', icon: Users },
];

const scalabilitySolutions = [
  {
    title: 'Microservicos',
    description: 'Decomposicao de monolitos em servicos independentes, escalando apenas o necessario.',
    features: ['Isolamento de falhas', 'Deploy independente', 'Escalabilidade granular', 'Tecnologias heterogeneas'],
    icon: Layers,
  },
  {
    title: 'Cloud Native',
    description: 'Arquitetura otimizada para nuvem com auto-scaling e alta disponibilidade.',
    features: ['Auto-scaling', 'Multi-regiao', 'Disaster recovery', 'Cost optimization'],
    icon: Cloud,
  },
  {
    title: 'Performance Engineering',
    description: 'Otimizacao de codigo, queries, caching e CDN para maxima velocidade.',
    features: ['Profiling avancado', 'Query optimization', 'Caching distribuido', 'CDN global'],
    icon: Zap,
  },
  {
    title: 'Observabilidade',
    description: 'Monitoramento completo com metricas, logs e traces distribuidos.',
    features: ['APM integrado', 'Alertas inteligentes', 'Dashboards real-time', 'Trace distribuido'],
    icon: Activity,
  },
];

const techStack = [
  { name: 'Kubernetes', description: 'Orquestracao de containers para escala automatica', expertise: 95 },
  { name: 'AWS/GCP/Azure', description: 'Multi-cloud para alta disponibilidade', expertise: 93 },
  { name: 'Redis/Memcached', description: 'Caching distribuido para performance extrema', expertise: 92 },
  { name: 'PostgreSQL/MongoDB', description: 'Bancos de dados escaláveis e confiáveis', expertise: 90 },
  { name: 'Terraform/Pulumi', description: 'Infrastructure as Code para deploys consistentes', expertise: 88 },
  { name: 'Prometheus/Grafana', description: 'Monitoramento e observabilidade completa', expertise: 91 },
];

const scalingTiers = [
  { users: '1k - 10k', architecture: 'Monolito Otimizado', infra: 'Single Server + CDN', cost: 'R$ 500-2k/mes' },
  { users: '10k - 100k', architecture: 'Monolito + Workers', infra: 'Load Balancer + DB Replicas', cost: 'R$ 2k-8k/mes' },
  { users: '100k - 1M', architecture: 'Microservicos', infra: 'Kubernetes + Multi-AZ', cost: 'R$ 8k-25k/mes' },
  { users: '1M+', architecture: 'Event-Driven', infra: 'Multi-Region + CDN Global', cost: 'R$ 25k+/mes' },
];

const successCases = [
  {
    title: 'SaaS B2B - De 5k para 500k usuarios',
    challenge: 'Monolito PHP nao suportava mais de 5k usuarios simultaneos',
    solution: 'Migracao para microservicos Node.js + Kubernetes',
    results: ['100x mais capacidade', 'Latencia de 2s para 200ms', '70% reducao custos infra'],
    metrics: { scale: '100x', latency: '-90%', costs: '-70%' },
  },
  {
    title: 'Fintech - 99.99% Uptime',
    challenge: 'Downtimes frequentes durante picos de transacoes',
    solution: 'Arquitetura event-driven com Kafka + auto-scaling',
    results: ['99.99% uptime alcancado', '10M transacoes/dia', 'Zero perda de dados'],
    metrics: { uptime: '99.99%', transactions: '10M/dia', data_loss: '0%' },
  },
];

const faqs = [
  { question: 'Minha aplicacao precisa de escalabilidade?', answer: 'Se voce esta enfrentando lentidao em picos, custos crescentes de infra, ou downtime frequente, sim. Uma avaliacao gratuita pode identificar os gargalos e recomendar melhorias.' },
  { question: 'Quanto tempo leva para escalar uma aplicacao?', answer: 'Depende da complexidade. Otimizacoes pontuais podem levar 2-4 semanas. Migracao para microservicos pode levar 3-6 meses. Fazemos de forma gradual sem downtime.' },
  { question: 'Preciso reescrever tudo do zero?', answer: 'Na maioria dos casos, nao. Usamos estrategias como Strangler Fig para migrar gradualmente, preservando funcionalidades existentes enquanto modernizamos a arquitetura.' },
  { question: 'Quanto custa escalar minha aplicacao?', answer: 'Oferecemos avaliacao gratuita para estimar custos. Otimizacoes simples comecam em R$ 15k. Projetos de microservicos variam de R$ 80k a R$ 300k dependendo do escopo.' },
];

export default function EscalabilidadeAplicacoesPage() {
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
              <span className="text-foreground">Escalabilidade de Aplicacoes</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Escale de 100 para <span className="gradient-text">100 Milhoes de Users</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transformamos aplicacoes monoliticas em arquiteturas altamente escalaveis. Suporte crescimento explosivo sem comprometer performance ou disponibilidade.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {heroStats.map((s) => (
                  <div key={s.label} className="glass-card rounded-xl p-4">
                    <div className="font-display text-2xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=escalabilidade" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Avaliar Minha Aplicacao
                </Link>
                <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  Ver Cases de Escala
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Sinais de que Sua Aplicacao <span className="gradient-text">Nao Escala</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Reconheca os sintomas antes que seja tarde demais.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {scalabilityProblems.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                  <p className="text-xs text-primary font-medium">{p.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solucoes de <span className="gradient-text">Escalabilidade</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Abordagens comprovadas para escalar aplicacoes de qualquer tamanho.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {scalabilitySolutions.map((sol, i) => (
                <motion.div key={sol.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <sol.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sol.description}</p>
                  <ul className="space-y-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tecnologias que <span className="gradient-text">Utilizamos</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">{tech.name}</h3>
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

        {/* Scaling Tiers */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Arquitetura por <span className="gradient-text">Escala</span></h2>
              <p className="text-muted-foreground">A arquitetura certa para cada nivel de crescimento</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scalingTiers.map((tier, i) => (
                <motion.div key={tier.users} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="font-display text-2xl font-bold text-primary mb-2">{tier.users}</div>
                  <div className="text-xs text-muted-foreground mb-4">usuarios</div>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <div className="text-xs text-muted-foreground">Arquitetura</div>
                      <div className="font-semibold text-foreground">{tier.architecture}</div>
                    </div>
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <div className="text-xs text-muted-foreground">Infra</div>
                      <div className="font-semibold text-foreground">{tier.infra}</div>
                    </div>
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <div className="text-xs text-muted-foreground">Custo</div>
                      <div className="font-semibold text-primary">{tier.cost}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Cases de <span className="gradient-text">Sucesso</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {successCases.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{c.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Desafio:</h4>
                      <p className="text-sm text-muted-foreground">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4>
                      <p className="text-sm text-muted-foreground">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultados:</h4>
                      <ul className="space-y-1">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(c.metrics).map(([key, value]) => (
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

        {/* FAQ */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Perguntas <span className="gradient-text">Frequentes</span></h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sua Aplicacao Precisa Escalar?</h2>
              <p className="text-muted-foreground mb-6">Avaliacao gratuita de performance e escalabilidade. Descubra os gargalos e como resolve-los.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=escalabilidade" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Avaliacao Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Preciso escalar minha aplicacao" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
