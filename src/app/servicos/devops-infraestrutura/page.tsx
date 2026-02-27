'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Rocket, Cloud, BarChart3, CheckCircle2, Clock,
  Cpu, HardDrive, Database, Globe, Lock, TrendingUp,
  Settings, Anchor, Blocks, Wrench, Monitor, Activity,
  HelpCircle, MessageCircle, Star
} from 'lucide-react';

const devopsServices = [
  {
    icon: Rocket,
    title: 'CI/CD Pipeline',
    description: 'Deploy automatizado com integracao e entrega continuas',
    features: ['GitHub Actions / GitLab CI', 'Testes automatizados', 'Deploy multi-ambiente', 'Rollback automatico', 'Code quality gates', 'Security scanning'],
    benefits: ['90% menos erros', 'Deploy em minutos', 'Zero downtime'],
    price: 'R$ 2.500 - R$ 8.000',
    timeline: '15-30 dias',
  },
  {
    icon: Cloud,
    title: 'Infraestrutura Cloud',
    description: 'Arquitetura escalavel e resiliente na AWS',
    features: ['Auto scaling groups', 'Load balancers', 'Multi-AZ deployment', 'CDN e cache', 'Backup automatizado', 'Disaster recovery'],
    benefits: ['99.9% uptime', 'Escalabilidade infinita', 'Custos otimizados'],
    price: 'R$ 1.500 - R$ 5.000/mes',
    timeline: '20-45 dias',
  },
  {
    icon: BarChart3,
    title: 'Monitoramento & Observabilidade',
    description: 'Visibilidade completa da infraestrutura e aplicacoes',
    features: ['Metricas em tempo real', 'Alertas inteligentes', 'Logs centralizados', 'APM (Application Performance)', 'Dashboards customizados', 'SLA monitoring'],
    benefits: ['Problemas detectados cedo', 'MTTR reduzido', 'Performance otimizada'],
    price: 'R$ 800 - R$ 3.000/mes',
    timeline: '10-20 dias',
  },
];

const cloudServices = [
  { category: 'Compute', services: ['EC2 Auto Scaling', 'ECS/EKS', 'Lambda Functions', 'Fargate'], icon: Cpu },
  { category: 'Storage', services: ['S3 Buckets', 'EBS Volumes', 'EFS File System', 'Glacier Archive'], icon: HardDrive },
  { category: 'Database', services: ['RDS Multi-AZ', 'DynamoDB', 'ElastiCache', 'DocumentDB'], icon: Database },
  { category: 'Network', services: ['VPC Security', 'ALB/NLB', 'CloudFront CDN', 'Route 53'], icon: Globe },
  { category: 'Security', services: ['IAM Policies', 'WAF', 'GuardDuty', 'Certificate Manager'], icon: Lock },
  { category: 'Monitoring', services: ['CloudWatch', 'X-Ray', 'Systems Manager', 'Config'], icon: TrendingUp },
];

const technologies = [
  { name: 'AWS', description: 'Amazon Web Services completo', icon: Cloud, level: 'Expert' },
  { name: 'Docker', description: 'Containerizacao de aplicacoes', icon: Blocks, level: 'Expert' },
  { name: 'Kubernetes', description: 'Orquestracao de containers', icon: Anchor, level: 'Advanced' },
  { name: 'Terraform', description: 'Infrastructure as Code', icon: Settings, level: 'Expert' },
  { name: 'Ansible', description: 'Configuration management', icon: Wrench, level: 'Advanced' },
  { name: 'Prometheus', description: 'Monitoring e alertas', icon: Activity, level: 'Expert' },
];

const architecture = [
  { tier: 'Presentation Layer', components: ['Load Balancer', 'CDN', 'Web Servers'], description: 'Interface com usuarios e distribuicao de carga', icon: Globe },
  { tier: 'Application Layer', components: ['API Gateway', 'Microservices', 'Auto Scaling'], description: 'Logica de negocio e processamento', icon: Settings },
  { tier: 'Data Layer', components: ['Database Cluster', 'Cache', 'File Storage'], description: 'Persistencia e armazenamento de dados', icon: Database },
  { tier: 'Infrastructure Layer', components: ['Networking', 'Security', 'Monitoring'], description: 'Base de infraestrutura e seguranca', icon: Lock },
];

const pricing = [
  {
    plan: 'Startup', price: 'R$ 1.500/mes', description: 'Para startups e pequenos projetos',
    features: ['Infraestrutura basica AWS', 'CI/CD simples', 'Monitoramento basico', 'Backup diario', 'Suporte business hours', 'SLA 99.5%'],
    suitable: 'Ate 10k usuarios/mes',
  },
  {
    plan: 'Business', price: 'R$ 3.500/mes', description: 'Para empresas em crescimento', popular: true,
    features: ['Multi-AZ deployment', 'Auto scaling avancado', 'Monitoramento completo', 'Backup incremental', 'Suporte 24/7', 'SLA 99.9%'],
    suitable: 'Ate 100k usuarios/mes',
  },
  {
    plan: 'Enterprise', price: 'A partir de R$ 7.500/mes', description: 'Para grandes empresas',
    features: ['Arquitetura enterprise', 'Kubernetes completo', 'Observabilidade avancada', 'Disaster recovery', 'Dedicated support', 'SLA 99.95%'],
    suitable: 'Usuarios ilimitados',
  },
];

const caseStudies = [
  {
    title: 'E-commerce: Black Friday sem Stress',
    challenge: 'Infraestrutura nao suportava picos de trafego na Black Friday',
    solution: 'Auto scaling, CDN global e arquitetura serverless',
    results: ['10x mais trafego suportado', 'Zero downtime', '40% economia de custos'],
    metrics: { traffic: '500k a 5M users', uptime: '99.95%', cost: '40% economia' },
  },
  {
    title: 'Fintech: Seguranca e Compliance',
    challenge: 'Necessidade de alta seguranca e conformidade PCI',
    solution: 'Arquitetura multi-camadas com WAF e monitoramento avancado',
    results: ['Certificacao PCI DSS', 'Zero incidentes de seguranca', 'Auditoria aprovada'],
    metrics: { security: '100% compliance', incidents: '0 breaches', audit: 'Aprovada' },
  },
  {
    title: 'SaaS: Crescimento Exponencial',
    challenge: 'Crescimento rapido exigindo escalabilidade imediata',
    solution: 'Microservicos com Kubernetes e observabilidade completa',
    results: ['Escalabilidade infinita', 'Deploy 20x mais rapido', 'MTTR reduzido em 80%'],
    metrics: { scale: 'Infinita', deploy: '20x faster', mttr: '80% reducao' },
  },
];

const faqs = [
  { question: 'Qual a diferenca entre infraestrutura tradicional e cloud?', answer: 'Cloud oferece escalabilidade automatica, pay-as-you-use, alta disponibilidade global e eliminacao de CAPEX. Tradicionalmente voce paga por capacidade maxima mesmo sem usar, no cloud paga apenas pelo que consome.' },
  { question: 'Como garantem a seguranca da infraestrutura?', answer: 'Implementamos security by design com WAF, criptografia end-to-end, IAM granular, monitoramento 24/7, patches automaticos e conformidade com padroes como ISO 27001 e PCI DSS.' },
  { question: 'O que acontece se a AWS sair do ar?', answer: 'Projetamos arquiteturas multi-AZ e multi-region quando necessario. Tambem implementamos estrategias de disaster recovery e backup em providers alternativos.' },
  { question: 'Quanto posso economizar migrando para cloud?', answer: 'Clientes tipicos economizam 20-40% nos primeiros 6 meses. A economia vem de: eliminacao de hardware, reducao de pessoal operacional, auto scaling e reserved instances.' },
];

export default function DevOpsInfraestruturaPage() {
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
              <span className="text-foreground">DevOps & Infraestrutura</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  DevOps & <span className="gradient-text">Infraestrutura</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Infraestrutura moderna, escalavel e segura na nuvem. Deploy automatizado, monitoramento 24/7 e arquitetura de alta disponibilidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#orcamento" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Ver Planos</Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">Cases de Sucesso</Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Beneficios da infraestrutura moderna:</h3>
                  <ul className="space-y-3">
                    {['99.9% de disponibilidade garantida', 'Deploy em segundos vs horas', 'Pague apenas pelo que usar', 'Seguranca enterprise por padrao', 'Observabilidade completa'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Servicos <span className="gradient-text">DevOps</span></h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {devopsServices.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><service.icon className="w-7 h-7 text-primary" /></div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{service.timeline}</span>
                  </div>
                  <ul className="space-y-2 mb-4">{service.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}</li>))}</ul>
                  <div className="flex flex-wrap gap-2 mb-6">{service.benefits.map((b) => (<span key={b} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{b}</span>))}</div>
                  <Link href={`/contato?service=devops-infraestrutura&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">Solicitar Setup</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Servicos <span className="gradient-text">AWS</span> Utilizados</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudServices.map((cat, i) => (
                <motion.div key={cat.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><cat.icon className="w-5 h-5 text-primary" /></div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{cat.category}</h3>
                  </div>
                  <ul className="space-y-1.5">{cat.services.map((s) => (<li key={s} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary" />{s}</li>))}</ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Stack <span className="gradient-text">Tecnologico</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><tech.icon className="w-5 h-5 text-primary" /></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">{tech.name}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full font-semibold ${tech.level === 'Expert' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>{tech.level}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Arquitetura de <span className="gradient-text">Referencia</span></h2>
            </div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {architecture.map((tier, i) => (
                <motion.div key={tier.tier} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><tier.icon className="w-6 h-6 text-primary" /></div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{tier.tier}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                      <div className="flex flex-wrap gap-2">{tier.components.map((c) => (<span key={c} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary">{c}</span>))}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="orcamento" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Planos de <span className="gradient-text">Infraestrutura</span></h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {pricing.map((plan, i) => (
                <motion.div key={plan.plan} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-2xl p-8 hover-lift relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1"><Star className="w-3 h-3" /> Mais Popular</div>)}
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.plan}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-2.5 mb-6">{plan.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}</li>))}</ul>
                  <div className="text-center mb-6"><span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">{plan.suitable}</span></div>
                  <Link href={`/contato?service=devops-infraestrutura&plan=${plan.plan.toLowerCase()}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">Contratar {plan.plan}</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12"><h2 className="font-display text-3xl font-bold text-foreground mb-4">Cases de <span className="gradient-text">Sucesso</span></h2></div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {caseStudies.map((cs, i) => (
                <motion.div key={cs.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{cs.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div><h4 className="text-sm font-semibold text-red-500 mb-1">Desafio:</h4><p className="text-sm text-muted-foreground">{cs.challenge}</p></div>
                    <div><h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4><p className="text-sm text-muted-foreground">{cs.solution}</p></div>
                    <div><h4 className="text-sm font-semibold text-green-600 mb-1">Resultados:</h4><ul className="space-y-1">{cs.results.map((r) => (<li key={r} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />{r}</li>))}</ul></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                    {Object.entries(cs.metrics).map(([key, value]) => (<div key={key} className="text-center"><div className="text-sm font-bold text-primary">{value}</div><div className="text-xs text-muted-foreground capitalize">{key}</div></div>))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12"><h2 className="font-display text-3xl font-bold text-foreground mb-4">Perguntas <span className="gradient-text">Frequentes</span></h2></div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-3"><HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><div><h3 className="font-display text-base font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Modernizar sua Infraestrutura?</h2>
              <p className="text-muted-foreground mb-6">Auditoria gratuita da sua infraestrutura atual e proposta de arquitetura otimizada</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=devops-infraestrutura" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Auditoria Gratuita</Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de modernizar minha infraestrutura" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"><MessageCircle className="w-4 h-4" /> Falar no WhatsApp</Link>
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
