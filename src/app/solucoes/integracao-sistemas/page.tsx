'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Link2, AlertTriangle, Zap, Lock, RefreshCw,
  CheckCircle2, Server, Database, Activity, Shield, HelpCircle,
  Rocket, MessageCircle, Building2, CreditCard, ShoppingBag, ArrowRight
} from 'lucide-react';

const heroStats = [
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'Latencia Media', value: '<500ms' },
  { label: 'Monitoramento', value: '24/7' },
  { label: 'APIs Conectadas', value: '500+' },
];

const challenges = [
  { title: 'Silos de Dados', description: 'Informacoes espalhadas em sistemas isolados, dificultando tomadas de decisao e analises.', problem: 'Dados duplicados, inconsistencias, relatorios manuais', icon: AlertTriangle },
  { title: 'Processos Manuais', description: 'Transferencia manual de dados entre sistemas, causando erros e perda de tempo.', problem: 'Erros humanos, lentidao, custos operacionais altos', icon: RefreshCw },
  { title: 'Falta de Sincronizacao', description: 'Dados desatualizados e inconsistentes entre diferentes plataformas empresariais.', problem: 'Informacoes conflitantes, decisoes baseadas em dados obsoletos', icon: Lock },
];

const solutions = [
  {
    step: 1,
    title: 'API Gateway e Middleware',
    description: 'Camada de abstracao centralizada para gerenciar todas as comunicacoes entre sistemas, garantindo seguranca, rate limiting e monitoramento.',
    techs: ['Kong', 'AWS API Gateway', 'MuleSoft'],
    icon: Server,
  },
  {
    step: 2,
    title: 'ETL e Data Pipeline',
    description: 'Pipelines robustos para extrair, transformar e carregar dados entre diferentes sistemas, mantendo consistencia e integridade.',
    techs: ['Apache Airflow', 'Talend', 'Azure Data Factory'],
    icon: Database,
  },
  {
    step: 3,
    title: 'Message Brokers',
    description: 'Sistemas de mensageria para comunicacao assincrona e tolerante a falhas entre aplicacoes.',
    techs: ['Apache Kafka', 'RabbitMQ', 'AWS SQS'],
    icon: Zap,
  },
  {
    step: 4,
    title: 'Monitoramento e Observabilidade',
    description: 'Ferramentas de monitoramento em tempo real para acompanhar a saude das integracoes e otimizar performance.',
    techs: ['Datadog', 'New Relic', 'Grafana'],
    icon: Activity,
  },
];

const roiData = {
  before: [
    { label: 'Horas mensais em tarefas manuais', value: '160h' },
    { label: 'Custo por hora (salario medio)', value: 'R$ 50' },
    { label: 'Custo mensal com retrabalho', value: 'R$ 8.000' },
  ],
  after: [
    { label: 'Reducao de tarefas manuais', value: '85%' },
    { label: 'Horas economizadas por mes', value: '136h' },
    { label: 'Economia mensal', value: 'R$ 6.800' },
  ],
  annual: 'R$ 81.600',
  roi: '340%',
};

const successCases = [
  {
    title: 'Industria Farmaceutica',
    description: 'Integracao entre ERP SAP, sistema de qualidade e plataforma e-commerce, automatizando controle de estoque e compliance regulatorio.',
    metrics: { errors: '75%', time: '3h para 15min' },
    icon: Building2,
  },
  {
    title: 'Fintech',
    description: 'Conexao de APIs bancarias, sistema de analise de credito e plataforma CRM, criando jornada automatizada do cliente.',
    metrics: { automation: '90%', approval: '5min' },
    icon: CreditCard,
  },
  {
    title: 'Varejo Multicanal',
    description: 'Sincronizacao de inventario entre lojas fisicas, marketplace e e-commerce proprio, com atualizacao em tempo real.',
    metrics: { accuracy: '99.5%', sales: '+40%' },
    icon: ShoppingBag,
  },
];

const faqs = [
  { question: 'Quanto tempo leva para integrar dois sistemas?', answer: 'O tempo varia de 2-8 semanas dependendo da complexidade dos sistemas, volume de dados e requisitos de seguranca. Integracoes simples via API podem levar 1-2 semanas, enquanto ETLs complexos podem precisar de 6-8 semanas.' },
  { question: 'A integracao compromete a seguranca dos dados?', answer: 'Nao, pelo contrario. Implementamos criptografia end-to-end, autenticacao OAuth 2.0, rate limiting e auditoria completa. Seguimos padroes como ISO 27001 e LGPD para garantir maxima seguranca.' },
  { question: 'O que acontece se um dos sistemas sair do ar?', answer: 'Implementamos circuit breakers, retry logic e filas de mensagens para garantir resiliencia. Se um sistema falha, as integracoes continuam funcionando e sincronizam automaticamente quando volta ao ar.' },
  { question: 'Como funciona o suporte e manutencao?', answer: 'Oferecemos monitoramento 24/7, alertas proativos, SLA de 99.9% de uptime e suporte tecnico especializado. Inclui atualizacoes, patches de seguranca e otimizacoes de performance.' },
];

export default function IntegracaoSistemasPage() {
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
              <span className="text-foreground">Integracao de Sistemas</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Conecte Todos os Seus <span className="gradient-text">Sistemas e Dados</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Elimine silos de informacao e crie um ecossistema tecnologico integrado. Conectamos APIs, bancos de dados e aplicacoes para maximizar a eficiencia operacional.
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
                <Link href="/contato?service=integracao-sistemas" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Solicitar Consultoria Gratuita
                </Link>
                <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  Ver Casos de Sucesso
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Desafios de Integracao que <span className="gradient-text">Resolvemos</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Identificamos e solucionamos os principais gargalos de conectividade em empresas modernas.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{c.description}</p>
                  <p className="text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">Problemas: {c.problem}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nossas Solucoes de <span className="gradient-text">Integracao</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Metodologia comprovada para conectar sistemas de forma segura e escalavel.</p>
            </div>
            <div className="space-y-6">
              {solutions.map((sol, i) => (
                <motion.div key={sol.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">{sol.step}</div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{sol.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{sol.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {sol.techs.map((t) => (
                          <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Calculadora de <span className="gradient-text">ROI</span></h2>
              <p className="text-muted-foreground">Descubra quanto sua empresa pode economizar com integracao automatizada.</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Sem Integracao</h3>
                  <div className="space-y-3">
                    {roiData.before.map((item) => (
                      <div key={item.label} className="p-3 rounded-lg bg-secondary/50">
                        <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-display text-lg font-bold text-foreground">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Com Integracao</h3>
                  <div className="space-y-3">
                    {roiData.after.map((item) => (
                      <div key={item.label} className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-display text-lg font-bold text-primary">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <div className="font-display text-3xl font-bold text-primary mb-2">{roiData.annual}</div>
                <div className="text-muted-foreground mb-2">Economia anual estimada</div>
                <div className="text-sm text-muted-foreground">ROI de {roiData.roi} no primeiro ano considerando investimento medio de R$ 24.000</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Casos de <span className="gradient-text">Sucesso</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Empresas que transformaram seus processos com nossas solucoes de integracao.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {successCases.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(c.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-display text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key === 'errors' ? 'Reducao Erros' : key === 'time' ? 'Tempo' : key === 'automation' ? 'Automacao' : key === 'approval' ? 'Aprovacao' : key === 'accuracy' ? 'Precisao' : key === 'sales' ? 'Vendas' : key}</div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Conectar Todos os Seus Sistemas?</h2>
              <p className="text-muted-foreground mb-6">Agende uma consultoria gratuita e descubra como podemos integrar e otimizar seus processos.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=integracao-sistemas" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Agendar Consultoria Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de integrar meus sistemas" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
