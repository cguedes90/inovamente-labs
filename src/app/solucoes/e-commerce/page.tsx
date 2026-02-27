'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, ShoppingCart, Package, Bot, TrendingUp, Clock,
  CheckCircle2, Star, BarChart3, Zap, Search, Settings, Rocket,
  ArrowRight, MessageCircle, Target, DollarSign
} from 'lucide-react';

const ecommerceAutomations = [
  {
    icon: ShoppingCart,
    title: 'Gestao Automatica de Pedidos',
    description: 'Processamento completo desde o pagamento ate a entrega',
    features: [
      'Captura automatica de pedidos',
      'Validacao de pagamentos',
      'Geracao de etiquetas',
      'Notificacoes por email/SMS',
      'Atualizacoes de status',
      'Integracao com transportadoras'
    ],
    benefits: ['95% menos erros', 'Processo 10x mais rapido', 'Clientes satisfeitos'],
    price: 'R$ 8.000 - R$ 25.000',
    timeline: '4-8 semanas',
    popular: true
  },
  {
    icon: Package,
    title: 'Automacao de Estoque',
    description: 'Controle inteligente de inventario e reposicao automatica',
    features: [
      'Sincronizacao multi-canal',
      'Alertas de estoque baixo',
      'Reposicao automatica',
      'Analise de giro',
      'Previsao de demanda',
      'Relatorios detalhados'
    ],
    benefits: ['Zero ruptura', 'Reducao 40% custos', 'Otimizacao capital'],
    price: 'R$ 12.000 - R$ 35.000',
    timeline: '6-10 semanas'
  },
  {
    icon: Bot,
    title: 'Chatbot de Vendas + Suporte',
    description: 'Atendimento 24/7 com IA para vendas e suporte',
    features: [
      'Chatbot inteligente',
      'Recomendacao produtos',
      'Processamento linguagem natural',
      'Integracao WhatsApp',
      'Escalacao para humanos',
      'Analytics de conversas'
    ],
    benefits: ['24/7 disponivel', '60% mais conversoes', 'Custo reduzido'],
    price: 'R$ 15.000 - R$ 45.000',
    timeline: '8-12 semanas'
  }
];

const heroStats = [
  { label: 'Vendas', value: '+85%' },
  { label: 'Custos Op.', value: '-60%' },
  { label: 'Automatico', value: '24/7' },
];

const marketplaces = [
  { name: 'Mercado Livre', integration: 98, description: 'Sincronizacao completa de produtos e pedidos' },
  { name: 'Amazon', integration: 95, description: 'Gestao automatica de anuncios e estoque' },
  { name: 'Shopee', integration: 92, description: 'Automacao de campanhas e atendimento' },
  { name: 'Magazine Luiza', integration: 88, description: 'Integracao com marketplace B2B' },
  { name: 'Americanas', integration: 90, description: 'Sincronizacao de catalogo e precos' }
];

const automationTimeline = [
  { phase: 'Analise e Mapeamento', duration: 'Semana 1-2', description: 'Auditoria completa dos processos atuais do e-commerce', icon: Search },
  { phase: 'Desenvolvimento Core', duration: 'Semana 3-4', description: 'Criacao das automacoes principais (pedidos, estoque)', icon: Settings },
  { phase: 'Integracoes', duration: 'Semana 5-6', description: 'Conexao com marketplaces, ERP e sistemas terceiros', icon: Zap },
  { phase: 'Testes e Go-Live', duration: 'Semana 7-8', description: 'Testes completos e ativacao das automacoes', icon: Rocket },
];

const automationBenefits = [
  {
    category: 'Vendas',
    improvements: [
      { metric: 'Conversao', before: '2.5%', after: '3.8%' },
      { metric: 'Ticket Medio', before: 'R$ 150', after: 'R$ 210' },
      { metric: 'Abandonos', before: '68%', after: '45%' }
    ],
  },
  {
    category: 'Operacional',
    improvements: [
      { metric: 'Tempo Proc. Pedido', before: '25 min', after: '3 min' },
      { metric: 'Erros Estoque', before: '15%', after: '2%' },
      { metric: 'Tempo Resposta', before: '180 min', after: '15 min' }
    ],
  }
];

const successStories = [
  {
    title: 'Loja de Eletronicos - 500% Crescimento',
    challenge: 'Gestao manual de 15 marketplaces causava erros e atrasos',
    solution: 'Automacao completa: estoque, pedidos e atendimento',
    results: ['500% aumento em vendas', 'Zero erros de estoque', 'Atendimento 24/7 automatizado'],
    metrics: { sales: '+500%', errors: '0%', response: '24/7' },
    period: '12 meses'
  },
  {
    title: 'Fashion E-commerce - R$ 2M Economia',
    challenge: 'Processos manuais custavam R$ 250k/mes em operacao',
    solution: 'RPA para toda cadeia operacional do e-commerce',
    results: ['R$ 2M economia anual', '90% reducao em tempo operacional', '40% aumento na satisfacao'],
    metrics: { savings: 'R$ 2M', time: '-90%', satisfaction: '+40%' },
    period: '24 meses'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: 'R$ 8.000',
    description: 'Automacao basica para pequenos e-commerces',
    features: ['Gestao automatica pedidos', 'Notificacoes clientes', 'Controle estoque basico', 'Integracao 2 marketplaces', '30 dias suporte', 'Treinamento equipe'],
    suitable: 'Ate R$ 100k/mes',
    cta: 'Comecar Automacao'
  },
  {
    name: 'Growth',
    price: 'R$ 25.000',
    description: 'Automacao completa para e-commerces em crescimento',
    features: ['Todas funcionalidades Starter', 'Chatbot vendas IA', 'Automacao marketing', 'Integracao 5+ marketplaces', 'Analytics avancado', '90 dias suporte'],
    suitable: 'R$ 100k - R$ 500k/mes',
    popular: true,
    cta: 'Escalar Vendas'
  },
  {
    name: 'Enterprise',
    price: 'R$ 50.000+',
    description: 'Solucao completa para grandes e-commerces',
    features: ['Automacao end-to-end', 'BI e dashboards customizados', 'Integracao ERP/CRM', 'Marketplaces ilimitados', 'Suporte dedicado', 'SLA personalizado'],
    suitable: 'R$ 500k+/mes',
    cta: 'Consulta Especializada'
  }
];

export default function EcommercePage() {
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
              <span className="text-foreground">E-commerce</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Automatize seu <span className="gradient-text">E-commerce</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Automacao completa para vendas online: gestao de pedidos, estoque, marketplaces, atendimento e conversoes. Aumente receita enquanto reduz custos.
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
                  <Link href="/contato?service=ecommerce" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Rocket className="w-4 h-4" /> Ver Automacoes
                  </Link>
                  <Link href="#resultados" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    <BarChart3 className="w-4 h-4" /> Resultados Reais
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">O que Automatizamos:</h3>
                  <div className="space-y-4">
                    {[
                      { icon: ShoppingCart, title: 'Gestao de Pedidos', desc: 'Do pagamento a entrega automatica' },
                      { icon: Package, title: 'Controle de Estoque', desc: 'Sincronizacao multi-canal inteligente' },
                      { icon: Bot, title: 'Atendimento IA', desc: 'Chatbot que vende 24/7' },
                      { icon: Target, title: 'Marketing Automatico', desc: 'Campanhas baseadas em comportamento' },
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

        {/* Before vs After */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Antes vs Depois da <span className="gradient-text">Automacao</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Transformacao real em metricas importantes</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {automationBenefits.map((cat, i) => (
                <motion.div key={cat.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">{cat.category}</h3>
                  <div className="space-y-4">
                    {cat.improvements.map((imp) => (
                      <div key={imp.metric} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                        <div>
                          <div className="font-semibold text-foreground">{imp.metric}</div>
                          <div className="flex items-center gap-4 mt-1 text-sm">
                            <span className="text-muted-foreground">Antes: {imp.before}</span>
                            <ArrowRight className="w-3 h-3 text-primary" />
                            <span className="text-primary font-semibold">Depois: {imp.after}</span>
                          </div>
                        </div>
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Automations */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Automacoes para <span className="gradient-text">E-commerce</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Solucoes completas para otimizar suas vendas online</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {ecommerceAutomations.map((automation, i) => (
                <motion.div key={automation.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${automation.popular ? 'ring-2 ring-primary' : ''}`}>
                  {automation.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Mais Vendido
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <automation.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{automation.title}</h3>
                    <p className="text-sm text-muted-foreground">{automation.description}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-primary">{automation.price}</span>
                    <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{automation.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {automation.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {automation.benefits.map((b) => (
                      <span key={b} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{b}</span>
                    ))}
                  </div>
                  <Link href={`/contato?service=ecommerce-${automation.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Automatizar Agora
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplaces */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Integracao com Principais <span className="gradient-text">Marketplaces</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Automatizacao completa para vender em todos os canais</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketplaces.map((mp, i) => (
                <motion.div key={mp.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-semibold text-foreground">{mp.name}</h3>
                    <span className="text-sm font-bold text-primary">{mp.integration}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mb-3">
                    <div className="h-2 bg-primary rounded-full transition-all duration-1000" style={{ width: `${mp.integration}%` }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{mp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Timeline de <span className="gradient-text">Implementacao</span></h2>
              <p className="text-muted-foreground">Da analise ao go-live em 8 semanas</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationTimeline.map((step, i) => (
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

        {/* Success Stories */}
        <section id="resultados" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Cases de <span className="gradient-text">Sucesso</span></h2>
              <p className="text-muted-foreground">Casos reais de crescimento exponencial</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {successStories.map((story, i) => (
                <motion.div key={story.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="mb-4">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{story.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{story.period} de resultado</span>
                  </div>
                  <div className="space-y-4 mb-6">
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Planos de <span className="gradient-text">Automacao</span></h2>
              <p className="text-muted-foreground">Solucoes para e-commerces de todos os tamanhos</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, i) => (
                <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Recomendado
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <div className="font-display text-3xl font-bold text-primary mb-2">{tier.price}</div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
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
                  <Link href={`/contato?service=ecommerce&plan=${tier.name.toLowerCase()}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Escalar suas Vendas Online?</h2>
              <p className="text-muted-foreground mb-6">Auditoria gratuita do seu e-commerce e proposta de automacao personalizada.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=ecommerce" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Auditoria Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de automatizar meu e-commerce" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
