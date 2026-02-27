'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Bot, Zap, Link2, CheckCircle2, Clock,
  DollarSign, Users, BarChart3, Settings, Wrench, ClipboardList,
  HelpCircle, MessageCircle, TrendingUp, RefreshCw
} from 'lucide-react';

const automationServices = [
  {
    icon: Bot,
    title: 'RPA - Robotic Process Automation',
    description: 'Bots inteligentes para automatizar tarefas repetitivas e manuais',
    features: ['Automacao de planilhas', 'Processamento de documentos', 'Extracao de dados', 'Preenchimento de formularios', 'Integracao com sistemas legados', 'Relatorios automaticos'],
    benefits: ['80% reducao em tempo', '95% menos erros', '24/7 operacao'],
    price: 'R$ 3.000 - R$ 15.000',
    timeline: '15-45 dias',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Fluxos de trabalho inteligentes para otimizar processos internos',
    features: ['Aprovacoes automaticas', 'Notificacoes inteligentes', 'Escalabilidade de tarefas', 'Dashboards em tempo real', 'Auditoria completa', 'Integracao multi-sistemas'],
    benefits: ['60% menos tempo', 'Transparencia total', 'Conformidade garantida'],
    price: 'R$ 5.000 - R$ 25.000',
    timeline: '30-60 dias',
  },
  {
    icon: Link2,
    title: 'Integracao de Sistemas',
    description: 'Conecte diferentes sistemas para um fluxo de dados unificado',
    features: ['APIs personalizadas', 'Sincronizacao de dados', 'Middleware inteligente', 'Transformacao de dados', 'Monitoramento em tempo real', 'Logs detalhados'],
    benefits: ['Dados unificados', 'Eficiencia maxima', 'ROI comprovado'],
    price: 'R$ 8.000 - R$ 40.000',
    timeline: '45-90 dias',
  },
];

const processTypes = [
  { category: 'Financeiro', processes: ['Conciliacao bancaria', 'Faturamento', 'Contas a pagar/receber', 'Relatorios fiscais'], icon: DollarSign, savings: 'Ate 70% economia' },
  { category: 'Recursos Humanos', processes: ['Folha de pagamento', 'Recrutamento', 'Onboarding', 'Avaliacoes'], icon: Users, savings: 'Ate 60% economia' },
  { category: 'Vendas & Marketing', processes: ['Lead qualification', 'Proposals', 'Follow-up', 'Relatorios'], icon: TrendingUp, savings: 'Ate 80% economia' },
  { category: 'Operacional', processes: ['Gestao de estoque', 'Pedidos', 'Logistica', 'Qualidade'], icon: Settings, savings: 'Ate 65% economia' },
  { category: 'TI & Suporte', processes: ['Backup automatico', 'Monitoramento', 'Tickets', 'Deploy'], icon: Wrench, savings: 'Ate 90% economia' },
  { category: 'Compliance', processes: ['Auditoria', 'Relatorios regulatorios', 'Documentacao', 'Aprovacoes'], icon: ClipboardList, savings: 'Ate 75% economia' },
];

const roiCalculator = [
  { metric: 'Horas economizadas/mes', before: '160h', after: '20h', savings: '140h' },
  { metric: 'Custo operacional/mes', before: 'R$ 8.000', after: 'R$ 2.000', savings: 'R$ 6.000' },
  { metric: 'Taxa de erro', before: '15%', after: '1%', savings: '14%' },
  { metric: 'Tempo de processo', before: '4 dias', after: '2 horas', savings: '95%' },
];

const technologies = [
  { name: 'Python', description: 'Scripts de automacao eficientes', icon: Settings },
  { name: 'Power Automate', description: 'Automacao Microsoft ecosystem', icon: RefreshCw },
  { name: 'Zapier', description: 'Integracao entre aplicativos', icon: Zap },
  { name: 'Node.js', description: 'APIs e microservicos', icon: Settings },
  { name: 'n8n', description: 'Workflow automation open-source', icon: Link2 },
  { name: 'AWS Lambda', description: 'Serverless automation', icon: Zap },
];

const caseStudies = [
  {
    title: 'E-commerce: Automacao de Pedidos',
    challenge: 'Processamento manual de 500+ pedidos diarios',
    solution: 'RPA para captura, validacao e processamento automatico',
    results: ['90% reducao em tempo', '99.5% precisao', 'R$ 15k economia/mes'],
    industry: 'Varejo',
  },
  {
    title: 'Consultoria: Workflow de Aprovacoes',
    challenge: 'Processo de aprovacao lento e sem rastreabilidade',
    solution: 'Sistema automatizado de aprovacoes multi-nivel',
    results: ['75% processo mais rapido', 'Transparencia total', '100% compliance'],
    industry: 'Consultoria',
  },
  {
    title: 'Manufatura: Integracao ERP-CRM',
    challenge: 'Dados desconectados entre sistemas criticos',
    solution: 'API middleware para sincronizacao em tempo real',
    results: ['Dados unificados', '50% menos retrabalho', 'Decisoes em tempo real'],
    industry: 'Industria',
  },
];

const faqs = [
  { question: 'Qual o ROI tipico de projetos de automacao?', answer: 'O ROI varia entre 300% a 800% no primeiro ano, dependendo da complexidade do processo. A maioria dos projetos se paga em 3-6 meses devido a reducao significativa de custos operacionais.' },
  { question: 'Quanto tempo leva para implementar uma automacao?', answer: 'Processos simples podem ser automatizados em 1-2 semanas. Projetos mais complexos levam de 1-3 meses. Sempre fazemos uma analise previa para dar prazos precisos.' },
  { question: 'E possivel automatizar processos que envolvem sistemas legados?', answer: 'Sim! Temos experiencia com integracao de sistemas antigos. Usamos tecnicas como screen scraping, APIs web e RPA para conectar qualquer sistema.' },
  { question: 'Como garantem que a automacao nao vai quebrar?', answer: 'Implementamos monitoramento 24/7, logs detalhados, tratamento de excecoes e planos de contingencia. Tambem oferecemos suporte e manutencao continua.' },
];

export default function AutomacaoProcessosPage() {
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
              <span className="text-foreground">Automacao de Processos</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Automacao de <span className="gradient-text">Processos</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Transforme tarefas manuais repetitivas em processos automatizados inteligentes. Reduza custos, elimine erros e libere sua equipe para atividades estrategicas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#orcamento" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    Calcular ROI
                  </Link>
                  <Link href="#cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Ver Cases de Sucesso
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Por que automatizar processos?</h3>
                  <ul className="space-y-3">
                    {['Reducao de ate 80% nos custos', '90% mais rapido que processos manuais', '99% de precisao vs 85% manual', 'Operacao 24/7 sem interrupcoes', 'Transparencia total nos processos'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                      </li>
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tipos de <span className="gradient-text">Automacao</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Solucoes personalizadas para diferentes necessidades empresariais</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {automationServices.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
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
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((b) => (
                      <span key={b} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{b}</span>
                    ))}
                  </div>
                  <Link href={`/contato?service=automacao-processos&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Analise
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Types */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Processos que <span className="gradient-text">Automatizamos</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processTypes.map((type, i) => (
                <motion.div key={type.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">{type.savings}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{type.category}</h3>
                  <ul className="space-y-1.5">
                    {type.processes.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />{p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section id="orcamento" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">ROI Real de <span className="gradient-text">Automacao</span></h2>
              <p className="text-muted-foreground">Exemplo baseado em case real de um dos nossos clientes</p>
            </div>
            <div className="glass-card rounded-2xl p-6 overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Metrica</th>
                    <th className="text-center py-3 px-4 font-semibold text-red-500">Antes</th>
                    <th className="text-center py-3 px-4 font-semibold text-primary">Depois</th>
                    <th className="text-center py-3 px-4 font-semibold text-green-600">Economia</th>
                  </tr>
                </thead>
                <tbody>
                  {roiCalculator.map((item) => (
                    <tr key={item.metric} className="border-b border-border/50 last:border-b-0">
                      <td className="py-3 px-4 font-medium text-foreground">{item.metric}</td>
                      <td className="text-center py-3 px-4 text-red-500 font-semibold">{item.before}</td>
                      <td className="text-center py-3 px-4 text-primary font-semibold">{item.after}</td>
                      <td className="text-center py-3 px-4 text-green-600 font-bold">{item.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center mt-6">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-bold text-lg">
                  <DollarSign className="w-5 h-5" /> ROI Total: R$ 72.000 economizados por ano
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tecnologias de <span className="gradient-text">Automacao</span></h2>
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

        {/* Cases */}
        <section id="cases" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Cases de <span className="gradient-text">Sucesso</span></h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {caseStudies.map((cs, i) => (
                <motion.div key={cs.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 hover-lift">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">{cs.industry}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{cs.title}</h3>
                  <div className="space-y-3">
                    <div><h4 className="text-sm font-semibold text-red-500 mb-1">Desafio:</h4><p className="text-sm text-muted-foreground">{cs.challenge}</p></div>
                    <div><h4 className="text-sm font-semibold text-primary mb-1">Solucao:</h4><p className="text-sm text-muted-foreground">{cs.solution}</p></div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-1">Resultados:</h4>
                      <ul className="space-y-1">{cs.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />{r}</li>
                      ))}</ul>
                    </div>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Pronto para Automatizar seus Processos?</h2>
              <p className="text-muted-foreground mb-6">Analise gratuita do seu processo atual e calculo de ROI personalizado</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=automacao-processos" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Analise Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de automatizar processos na minha empresa" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
