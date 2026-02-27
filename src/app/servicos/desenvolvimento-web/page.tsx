'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Globe, ShoppingCart, Settings, CheckCircle2,
  Clock, Zap, Code2, Layout, Database, Search,
  Lightbulb, Rocket, HelpCircle, MessageCircle
} from 'lucide-react';

const webServices = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Sites profissionais que representam sua marca com excelencia',
    features: ['Design responsivo e moderno', 'SEO otimizado', 'Velocidade superior', 'Integracao com CMS', 'Formularios inteligentes', 'Analytics integrado'],
    price: 'R$ 2.500 - R$ 8.000',
    timeline: '15-30 dias',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Completo',
    description: 'Lojas virtuais com alta conversao e experiencia premium',
    features: ['Catalogo de produtos', 'Carrinho e checkout', 'Integracao de pagamento', 'Painel administrativo', 'Gestao de estoque', 'Relatorios de vendas'],
    price: 'R$ 8.000 - R$ 25.000',
    timeline: '45-90 dias',
  },
  {
    icon: Settings,
    title: 'Sistemas Corporativos',
    description: 'Solucoes web personalizadas para otimizar seus processos',
    features: ['Dashboard customizado', 'Gestao de usuarios', 'Relatorios avancados', 'Integracoes API', 'Workflow automatizado', 'Seguranca enterprise'],
    price: 'R$ 12.000 - R$ 50.000',
    timeline: '60-120 dias',
  },
];

const technologies = [
  { name: 'React', description: 'Interface moderna e reativa', icon: Code2 },
  { name: 'Next.js', description: 'Framework para performance superior', icon: Zap },
  { name: 'TypeScript', description: 'Codigo mais seguro e maintivel', icon: Layout },
  { name: 'Tailwind CSS', description: 'Estilizacao eficiente e responsiva', icon: Layout },
  { name: 'Node.js', description: 'Backend robusto e escalavel', icon: Settings },
  { name: 'PostgreSQL', description: 'Banco de dados confiavel', icon: Database },
];

const processSteps = [
  { phase: 'Descoberta', duration: '3-5 dias', icon: Search, activities: ['Analise de requisitos', 'Pesquisa de mercado', 'Definicao de personas', 'Arquitetura da informacao'] },
  { phase: 'Design & Prototipagem', duration: '7-10 dias', icon: Lightbulb, activities: ['Wireframes detalhados', 'Design system', 'Prototipo interativo', 'Testes de usabilidade'] },
  { phase: 'Desenvolvimento', duration: '15-45 dias', icon: Code2, activities: ['Setup do ambiente', 'Desenvolvimento frontend', 'Integracao backend', 'Testes automatizados'] },
  { phase: 'Lancamento', duration: '2-3 dias', icon: Rocket, activities: ['Deploy em producao', 'Configuracao de dominio', 'Treinamento da equipe', 'Documentacao entregue'] },
];

const faqs = [
  { question: 'Quanto tempo leva para desenvolver um site?', answer: 'O prazo varia conforme a complexidade: sites institucionais levam 15-30 dias, e-commerce 45-90 dias, e sistemas corporativos 60-120 dias.' },
  { question: 'O site sera responsivo e otimizado para mobile?', answer: 'Sim, todos os nossos sites sao desenvolvidos mobile-first com design responsivo, garantindo perfeita visualizacao em qualquer dispositivo.' },
  { question: 'Voces fazem a manutencao apos o lancamento?', answer: 'Oferecemos planos de manutencao mensal que incluem atualizacoes, backups, monitoramento e suporte tecnico.' },
  { question: 'Como funciona o processo de aprovacao?', answer: 'Trabalhamos com entregas incrementais. Voce acompanha o progresso e aprova cada etapa antes seguirmos para a proxima fase.' },
];

export default function DesenvolvimentoWebPage() {
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
              <Link href="/servicos" className="hover:text-primary transition-colors">Servicos</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Desenvolvimento Web</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Desenvolvimento Web <span className="gradient-text">Profissional</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Sites e sistemas web de alta performance com React, Next.js e as melhores praticas de desenvolvimento moderno.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contato?service=desenvolvimento-web" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    Solicitar Orcamento
                  </Link>
                  <Link href="#portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Ver Portfolio
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Por que escolher desenvolvimento web moderno?</h3>
                  <ul className="space-y-3">
                    {['3x mais rapido que sites tradicionais', 'SEO otimizado para Google', 'Experiencia premium em mobile', 'Integracao com qualquer sistema', 'Escalavel conforme seu crescimento'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Sites Desenvolvidos', value: '150+' },
                { label: 'Clientes Satisfeitos', value: '98%' },
                { label: 'Tempo Medio de Carga', value: '2s' },
                { label: 'Anos de Experiencia', value: '5+' },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Tipos de Projetos <span className="gradient-text">Web</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Desenvolvemos solucoes web personalizadas para diferentes necessidades de negocio</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {webServices.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{service.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contato?service=desenvolvimento-web&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Orcamento
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tecnologias que <span className="gradient-text">Utilizamos</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Stack moderno e confiavel para projetos web de alta qualidade</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
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
              <p className="text-muted-foreground max-w-2xl mx-auto">Metodologia agil e transparente para garantir o sucesso do seu projeto</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={step.phase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-6 h-6 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.phase}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{step.duration}</p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {step.activities.map((a) => (
                      <li key={a} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Criar seu Site Profissional?</h2>
              <p className="text-muted-foreground mb-6">Desenvolvemos sites responsivos, rapidos e otimizados para SEO. Orcamento gratuito em 24h!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=desenvolvimento-web" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Solicitar Orcamento Gratuito
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de saber mais sobre desenvolvimento web" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
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
