'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, BarChart3, Link2, Bot, CheckCircle2, Clock,
  Star, Search, Settings, Rocket, MessageCircle, Shield,
  RefreshCw, Activity, Cpu, Wifi, Container, Gauge
} from 'lucide-react';

const heroStats = [
  { label: 'Reducao Custos', value: '35%' },
  { label: 'Produtividade', value: '+42%' },
  { label: 'Reducao Paradas', value: '60%' },
];

const industrialSolutions = [
  {
    icon: BarChart3,
    title: 'Dashboard IoT Inteligente',
    description: 'Visualizacao em tempo real de todos os dados da sua linha de producao',
    features: ['Monitoramento 24/7', 'Alertas automaticos', 'KPIs personalizaveis', 'Historico de dados', 'Analise preditiva', 'Mobile responsivo'],
    benefits: ['Visibilidade total', 'Decisoes baseadas em dados', 'Deteccao precoce problemas'],
    price: 'R$ 35.000 - R$ 80.000',
    timeline: '8-12 semanas',
    popular: true
  },
  {
    icon: Link2,
    title: 'Integracao de Sistemas',
    description: 'Conecte ERP, MES, SCADA e todos os sistemas industriais',
    features: ['APIs RESTful', 'Protocolos industriais', 'Sincronizacao dados', 'Middleware robusto', 'Logs auditaveis', 'Backup automatico'],
    benefits: ['Dados unificados', 'Eliminacao silos', 'Eficiencia operacional'],
    price: 'R$ 50.000 - R$ 150.000',
    timeline: '12-20 semanas'
  },
  {
    icon: Bot,
    title: 'Analytics Preditiva',
    description: 'IA e Machine Learning para otimizar processos industriais',
    features: ['Predicao de falhas', 'Otimizacao producao', 'Analise qualidade', 'Manutencao preditiva', 'Modelos ML customizados', 'Relatorios automaticos'],
    benefits: ['Reducao paradas', 'Qualidade superior', 'ROI comprovado'],
    price: 'R$ 80.000 - R$ 200.000',
    timeline: '16-24 semanas'
  }
];

const industryTechnologies = [
  { name: 'Node.js + TypeScript', expertise: 95, description: 'Backend robusto para aplicacoes industriais', icon: Cpu },
  { name: 'React + D3.js', expertise: 92, description: 'Dashboards interativos e visualizacoes avancadas', icon: BarChart3 },
  { name: 'InfluxDB + Grafana', expertise: 90, description: 'Banco de dados temporal e monitoramento', icon: Activity },
  { name: 'MQTT + WebSockets', expertise: 88, description: 'Comunicacao IoT e dados em tempo real', icon: Wifi },
  { name: 'Docker + Kubernetes', expertise: 85, description: 'Containerizacao e orquestracao industrial', icon: Container },
];

const implementationProcess = [
  { title: 'Auditoria Industrial', duration: '1-2 semanas', icon: Search, details: ['Mapeamento de processos', 'Inventario de sistemas', 'Analise de dados existentes', 'Identificacao de oportunidades'] },
  { title: 'Arquitetura da Solucao', duration: '2-3 semanas', icon: Settings, details: ['Arquitetura de dados', 'Definicao de APIs', 'Protocolos de comunicacao', 'Plano de seguranca'] },
  { title: 'Desenvolvimento MVP', duration: '6-12 semanas', icon: Cpu, details: ['Backend core', 'Dashboard basico', 'Integracoes principais', 'Testes unitarios'] },
  { title: 'Implantacao & Scale', duration: '4-8 semanas', icon: Rocket, details: ['Deploy ambiente producao', 'Treinamento equipes', 'Monitoramento inicial', 'Otimizacao continua'] },
];

const useCases = [
  {
    title: 'Montadora Automobilistica',
    industry: 'Automotiva',
    challenge: 'Falta de visibilidade da linha de producao causava paradas nao programadas',
    solution: 'Dashboard IoT com 200+ sensores e analytics preditiva',
    results: ['45% reducao em paradas nao programadas', 'R$ 2.3M economia anual', '99.2% disponibilidade da linha'],
    metrics: { downtime: '-45%', savings: 'R$ 2.3M', uptime: '99.2%' },
  },
  {
    title: 'Industria Quimica',
    industry: 'Quimica',
    challenge: 'Sistemas isolados impediam otimizacao dos processos produtivos',
    solution: 'Integracao ERP-MES-SCADA com analytics em tempo real',
    results: ['30% reducao no consumo de energia', '25% aumento na eficiencia', 'Conformidade total com normas'],
    metrics: { energy: '-30%', efficiency: '+25%', compliance: '100%' },
  }
];

export default function Industria40Page() {
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
              <span className="text-foreground">Industria 4.0</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Sistemas Web para <span className="gradient-text">Industria 4.0</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Dashboards IoT, analytics em tempo real e integracao total com maquinas. Revolucione sua fabrica com sistemas web inteligentes e dados acionaveis.
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
                  <Link href="/contato?service=industria-4-0" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Search className="w-4 h-4" /> Ver Solucoes
                  </Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Cases Industriais
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Caracteristicas dos Nossos Sistemas:</h3>
                  <div className="space-y-4">
                    {[
                      { icon: RefreshCw, title: 'Tempo Real', desc: 'Dados atualizados a cada segundo' },
                      { icon: Shield, title: 'Seguranca Industrial', desc: 'Protocolos seguros para ambiente fabril' },
                      { icon: BarChart3, title: 'Analytics Avancada', desc: 'IA e ML para otimizacao continua' },
                      { icon: Link2, title: 'Integracao Total', desc: 'Conecta todos os sistemas existentes' },
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

        {/* Solutions */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solucoes para <span className="gradient-text">Industria 4.0</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Sistemas web especializados para transformacao digital industrial</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {industrialSolutions.map((sol, i) => (
                <motion.div key={sol.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${sol.popular ? 'ring-2 ring-primary' : ''}`}>
                  {sol.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Mais Solicitado
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <sol.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{sol.title}</h3>
                    <p className="text-sm text-muted-foreground">{sol.description}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-primary">{sol.price}</span>
                    <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{sol.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sol.benefits.map((b) => (
                      <span key={b} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{b}</span>
                    ))}
                  </div>
                  <Link href={`/contato?service=industria-4-0&type=${sol.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Consultoria
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Stack Tecnologico <span className="gradient-text">Industrial</span></h2>
              <p className="text-muted-foreground">Tecnologias robustas e escalaveis para ambiente industrial</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryTechnologies.map((tech, i) => (
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Processo de <span className="gradient-text">Implementacao</span></h2>
              <p className="text-muted-foreground">Metodologia especializada para ambiente de producao</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationProcess.map((step, i) => (
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

        {/* Use Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Cases de <span className="gradient-text">Sucesso Industriais</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {useCases.map((uc, i) => (
                <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{uc.industry}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{uc.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Desafio:</h4>
                      <p className="text-sm text-muted-foreground">{uc.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4>
                      <p className="text-sm text-muted-foreground">{uc.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultados:</h4>
                      <ul className="space-y-1">
                        {uc.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(uc.metrics).map(([key, value]) => (
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para a Transformacao Digital Industrial?</h2>
              <p className="text-muted-foreground mb-6">Auditoria gratuita dos seus processos e proposta de digitalizacao personalizada.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=industria-4-0" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Auditoria Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de digitalizar minha industria" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
