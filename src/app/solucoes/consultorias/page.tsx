'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Users, BarChart3, Bot, CheckCircle2, Clock,
  Star, Search, Settings, Rocket, MessageCircle, Target,
  TrendingUp, ArrowRight, Zap, Briefcase
} from 'lucide-react';

const heroStats = [
  { label: 'Produtividade', value: '+65%' },
  { label: 'ROI Medio', value: '320%' },
  { label: 'Satisfacao', value: '95%' },
];

const consultingSolutions = [
  {
    icon: Users,
    title: 'CRM Consultoria Especializado',
    description: 'Sistema completo para gestao de leads, clientes e oportunidades',
    features: ['Pipeline de vendas', 'Gestao de leads qualificados', 'Historico completo cliente', 'Automacao follow-up', 'Relatorios de performance', 'Integracao email/WhatsApp'],
    benefits: ['40% mais conversoes', 'Zero leads perdidos', 'Vendas previsiveis'],
    price: 'R$ 18.000 - R$ 45.000',
    timeline: '6-10 semanas',
    popular: true
  },
  {
    icon: BarChart3,
    title: 'Portal do Cliente Premium',
    description: 'Ambiente exclusivo para clientes acompanharem projetos',
    features: ['Dashboard personalizado', 'Relatorios em tempo real', 'Comunicacao centralizada', 'Aprovacoes online', 'Historico de projetos', 'Mobile responsivo'],
    benefits: ['Clientes mais engajados', 'Processo transparente', 'Menos retrabalho'],
    price: 'R$ 25.000 - R$ 60.000',
    timeline: '8-12 semanas'
  },
  {
    icon: Bot,
    title: 'Automacao de Relatorios',
    description: 'Geracao automatica de relatorios executivos e dashboards',
    features: ['Coleta automatica de dados', 'Templates personalizados', 'Graficos interativos', 'Agendamento automatico', 'Multi-formato (PDF, Excel)', 'Distribuicao automatica'],
    benefits: ['80% tempo economizado', 'Zero erros manuais', 'Relatorios consistentes'],
    price: 'R$ 15.000 - R$ 40.000',
    timeline: '4-8 semanas'
  }
];

const consultingTypes = [
  { type: 'Consultoria Estrategica', solution: 'CRM + Dashboard Executivo', features: ['Pipeline B2B', 'Relatorios executivos', 'ROI tracking'] },
  { type: 'Consultoria Financeira', solution: 'Portal Cliente + Automacao', features: ['Relatorios financeiros', 'Portal compliance', 'Dashboards KPI'] },
  { type: 'Consultoria RH', solution: 'Sistema Gestao Pessoas', features: ['Portal funcionarios', 'Avaliacoes automaticas', 'Analytics RH'] },
  { type: 'Consultoria TI', solution: 'Plataforma Tecnica', features: ['Tickets automaticos', 'SLA monitoring', 'Knowledge base'] },
];

const digitalizationBenefits = [
  { metric: 'Capacidade de Atendimento', traditional: '10 clientes/mes', digital: '50 clientes/mes', improvement: '+400%' },
  { metric: 'Tempo Relatorios', traditional: '8 horas', digital: '1 hora', improvement: '-87%' },
  { metric: 'Taxa de Retencao', traditional: '65%', digital: '92%', improvement: '+42%' },
  { metric: 'Margem de Lucro', traditional: '25%', digital: '45%', improvement: '+80%' },
];

const implementationSteps = [
  { title: 'Analise Consultoria', duration: '5-7 dias', icon: Search, details: ['Entrevistas com socios', 'Analise fluxos atuais', 'Identificacao gargalos', 'Definicao escopo digital'] },
  { title: 'Design da Solucao', duration: '7-10 dias', icon: Settings, details: ['UX/UI especializado', 'Fluxos de trabalho', 'Integracoes necessarias', 'Plano de dados'] },
  { title: 'Desenvolvimento MVP', duration: '6-12 semanas', icon: Zap, details: ['Backend robusto', 'Interface intuitiva', 'Integracoes core', 'Testes beta'] },
  { title: 'Go-Live & Escala', duration: '2-4 semanas', icon: Rocket, details: ['Treinamento equipe', 'Migracao de dados', 'Acompanhamento inicial', 'Otimizacao continua'] },
];

const successCases = [
  {
    title: 'Consultoria Estrategica - 10x Crescimento',
    consultingType: 'Estrategica',
    challenge: 'Gestao manual de 20 clientes limitava crescimento',
    solution: 'CRM especializado + Portal cliente + Automacao relatorios',
    results: ['10x crescimento em clientes (20 para 200)', 'R$ 3M+ aumento receita anual', '95% satisfacao clientes'],
    metrics: { growth: '10x', revenue: 'R$ 3M+', satisfaction: '95%' },
  },
  {
    title: 'Consultoria RH - R$ 1.5M ROI',
    consultingType: 'RH',
    challenge: 'Processos manuais custavam 60h/semana da equipe',
    solution: 'Plataforma completa de gestao de pessoas e processos',
    results: ['R$ 1.5M economia em 18 meses', '75% reducao tempo operacional', '300% aumento capacidade atendimento'],
    metrics: { roi: 'R$ 1.5M', efficiency: '+300%', time: '-75%' },
  }
];

const pricingOptions = [
  {
    name: 'Digital Start',
    price: 'R$ 18.000',
    description: 'Digitalizacao basica para pequenas consultorias',
    features: ['CRM especializado', 'Portal cliente basico', 'Relatorios automaticos', 'Integracao email', '60 dias suporte', 'Treinamento equipe'],
    suitable: 'Ate 20 clientes',
    cta: 'Comecar Digitalizacao'
  },
  {
    name: 'Business Pro',
    price: 'R$ 45.000',
    description: 'Solucao completa para consultorias estabelecidas',
    features: ['Plataforma completa', 'Portal cliente premium', 'Automacao avancada', 'Dashboards executivos', 'Integracoes multiplas', '120 dias suporte'],
    suitable: '20-100 clientes',
    popular: true,
    cta: 'Escalar Consultoria'
  },
  {
    name: 'Enterprise',
    price: 'R$ 80.000+',
    description: 'Solucao enterprise para grandes consultorias',
    features: ['Customizacao completa', 'Multi-tenant', 'APIs personalizadas', 'BI avancado', 'Suporte dedicado', 'SLA garantido'],
    suitable: '100+ clientes',
    cta: 'Consulta Especializada'
  }
];

export default function ConsultoriasPage() {
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
              <span className="text-foreground">Consultorias</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Digitalize sua <span className="gradient-text">Consultoria</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  CRM especializado, portal do cliente e automacao de relatorios. Escale sua consultoria sem limites com sistemas que trabalham para voce 24/7.
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
                  <Link href="/contato?service=consultoria" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Rocket className="w-4 h-4" /> Ver Solucoes
                  </Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Cases de Sucesso
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Transformacoes que Oferecemos:</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Users, title: 'CRM Inteligente', desc: 'Pipeline otimizado para consultorias' },
                      { icon: BarChart3, title: 'Portal do Cliente', desc: 'Experiencia premium para seus clientes' },
                      { icon: Bot, title: 'Automacao Total', desc: 'Relatorios e processos automatizados' },
                      { icon: TrendingUp, title: 'Escalabilidade', desc: 'De 10 para 100+ clientes sem esforco' },
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

        {/* Traditional vs Digital */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Consultoria Tradicional vs <span className="gradient-text">Digital</span></h2>
              <p className="text-muted-foreground">Veja a diferenca que a digitalizacao faz na sua operacao</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {digitalizationBenefits.map((b, i) => (
                <motion.div key={b.metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-display text-base font-semibold text-foreground">{b.metric}</h4>
                    <span className="text-sm font-bold text-primary">{b.improvement}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tradicional: {b.traditional}</span>
                    <span className="text-primary font-semibold">Digital: {b.digital}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solucoes para <span className="gradient-text">Consultoria</span></h2>
              <p className="text-muted-foreground">Sistemas especializados para diferentes tipos de consultoria</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {consultingSolutions.map((sol, i) => (
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
                  <Link href={`/contato?service=consultoria-${sol.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Demonstracao
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Consulting Types */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingTypes.map((ct, i) => (
                <motion.div key={ct.type} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 border-l-4 border-primary">
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">{ct.type}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{ct.solution}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {ct.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>{f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Processo de <span className="gradient-text">Digitalizacao</span></h2>
              <p className="text-muted-foreground">Metodologia especializada para consultoria</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationSteps.map((step, i) => (
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

        {/* Success Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Consultorias que Cresceram <span className="gradient-text">10x</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {successCases.map((sc, i) => (
                <motion.div key={sc.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{sc.consultingType}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{sc.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Desafio:</h4>
                      <p className="text-sm text-muted-foreground">{sc.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4>
                      <p className="text-sm text-muted-foreground">{sc.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Resultados:</h4>
                      <ul className="space-y-1">
                        {sc.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(sc.metrics).map(([key, value]) => (
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

        {/* Pricing */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Planos de <span className="gradient-text">Digitalizacao</span></h2>
              <p className="text-muted-foreground">Solucoes para consultorias de todos os portes</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingOptions.map((option, i) => (
                <motion.div key={option.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Recomendado
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{option.name}</h3>
                    <div className="font-display text-3xl font-bold text-primary mb-2">{option.price}</div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mb-6">
                    <span className="px-4 py-2 bg-secondary text-foreground text-xs rounded-full font-semibold">{option.suitable}</span>
                  </div>
                  <Link href={`/contato?service=consultoria&plan=${option.name.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    {option.cta}
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Escalar sua Consultoria?</h2>
              <p className="text-muted-foreground mb-6">Analise gratuita da sua operacao e proposta de digitalizacao personalizada.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=consultoria" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Target className="w-4 h-4" /> Analise Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de digitalizar minha consultoria" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
