'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import {
  ChevronRight, Smartphone, RefreshCw, Globe, CheckCircle2, Clock,
  Lock, Bell, CreditCard, MapPin, Camera, WifiOff, BarChart3, MessageCircle,
  ShoppingBag, Users, BookOpen, Heart, GraduationCap, Wallet, HelpCircle, Rocket
} from 'lucide-react';

const mobileServices = [
  {
    icon: Smartphone,
    title: 'Apps Nativos iOS/Android',
    description: 'Maxima performance e integracao com recursos do dispositivo',
    features: ['Performance superior', 'UI/UX nativa', 'Integracao total com OS', 'Publicacao nas stores', 'Push notifications', 'Recursos avancados'],
    technologies: ['Swift', 'Kotlin', 'Objective-C', 'Java'],
    price: 'R$ 15.000 - R$ 80.000',
    timeline: '60-120 dias',
  },
  {
    icon: RefreshCw,
    title: 'Apps Hibridos',
    description: 'Desenvolvimento eficiente para multiplas plataformas',
    features: ['Uma base para iOS/Android', 'Desenvolvimento mais rapido', 'Manutencao simplificada', 'Boa performance', 'Custo otimizado', 'Atualizacoes sincronizadas'],
    technologies: ['React Native', 'Flutter', 'Ionic', 'Xamarin'],
    price: 'R$ 8.000 - R$ 35.000',
    timeline: '45-90 dias',
  },
  {
    icon: Globe,
    title: 'Progressive Web Apps (PWA)',
    description: 'Experiencia de app nativo atraves do navegador',
    features: ['Instalacao via browser', 'Funciona offline', 'Push notifications', 'Atualizacoes automaticas', 'Compatibilidade ampla', 'SEO otimizado'],
    technologies: ['React', 'Next.js', 'Service Workers', 'WebRTC'],
    price: 'R$ 5.000 - R$ 20.000',
    timeline: '30-60 dias',
  },
];

const appTypes = [
  { category: 'E-commerce & Marketplace', examples: ['Loja virtual', 'Marketplace', 'Delivery', 'Classificados'], icon: ShoppingBag },
  { category: 'Redes Sociais & Comunicacao', examples: ['Chat', 'Rede social', 'Comunidade', 'Video call'], icon: MessageCircle },
  { category: 'Produtividade & Negocios', examples: ['CRM mobile', 'Gestao', 'Vendas', 'Relatorios'], icon: BarChart3 },
  { category: 'Saude & Bem-estar', examples: ['Telemedicina', 'Fitness', 'Nutricao', 'Meditacao'], icon: Heart },
  { category: 'Educacao & Treinamento', examples: ['E-learning', 'Curso online', 'Quiz', 'Certificacao'], icon: GraduationCap },
  { category: 'Fintech & Pagamentos', examples: ['Carteira digital', 'Investimentos', 'Emprestimos', 'Criptomoedas'], icon: Wallet },
];

const features = [
  { name: 'Autenticacao Segura', icon: Lock, description: 'Login social, biometria, 2FA' },
  { name: 'Push Notifications', icon: Bell, description: 'Engajamento e retencao' },
  { name: 'Pagamentos Online', icon: CreditCard, description: 'PIX, cartao, carteira digital' },
  { name: 'Geolocalizacao', icon: MapPin, description: 'GPS, mapas, rotas' },
  { name: 'Camera & Galeria', icon: Camera, description: 'Fotos, videos, filtros' },
  { name: 'Modo Offline', icon: WifiOff, description: 'Sincronizacao automatica' },
  { name: 'Analytics', icon: BarChart3, description: 'Metricas de uso detalhadas' },
  { name: 'Chat & Mensagens', icon: MessageCircle, description: 'Comunicacao em tempo real' },
];

const developmentPhases = [
  { phase: 'Pesquisa & UX', duration: '5-10 dias', deliverables: ['Pesquisa de mercado', 'Analise de concorrentes', 'Personas e jornada', 'Wireframes', 'Fluxo de navegacao'] },
  { phase: 'Design UI/UX', duration: '10-15 dias', deliverables: ['Design system', 'Prototipo interativo', 'Telas de alta fidelidade', 'Guia de estilo', 'Especificacoes tecnicas'] },
  { phase: 'Desenvolvimento', duration: '30-90 dias', deliverables: ['Setup do projeto', 'Desenvolvimento das telas', 'Integracao de APIs', 'Testes unitarios', 'Testes de integracao'] },
  { phase: 'Publicacao', duration: '5-10 dias', deliverables: ['Testes em dispositivos', 'Otimizacao de performance', 'Submissao as stores', 'Aprovacao e publicacao', 'Documentacao final'] },
];

const faqs = [
  { question: 'Qual a diferenca entre app nativo e hibrido?', answer: 'Apps nativos sao desenvolvidos especificamente para cada plataforma (iOS/Android), oferecendo maxima performance. Apps hibridos usam uma base de codigo para ambas as plataformas, sendo mais economicos e rapidos de desenvolver.' },
  { question: 'Voces fazem a publicacao nas app stores?', answer: 'Sim! Cuidamos de todo o processo: preparacao dos assets, criacao das contas de desenvolvedor, submissao e acompanhamento da aprovacao na App Store e Google Play.' },
  { question: 'Como funciona a manutencao do aplicativo?', answer: 'Oferecemos planos de manutencao que incluem correcoes de bugs, atualizacoes de seguranca, novas funcionalidades, suporte tecnico e adaptacoes para novas versoes do iOS/Android.' },
  { question: 'E possivel integrar com sistemas existentes?', answer: 'Absolutamente! Desenvolvemos APIs customizadas ou integramos com sistemas existentes (ERP, CRM, e-commerce) para sincronizar dados e processos.' },
];

export default function DesenvolvimentoMobilePage() {
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
              <span className="text-foreground">Desenvolvimento Mobile</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Desenvolvimento <span className="gradient-text">Mobile</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Aplicativos mobile de alta performance para iOS e Android. Transforme sua ideia em um app de sucesso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contato?service=desenvolvimento-mobile" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    Solicitar Orcamento
                  </Link>
                  <Link href="#portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                    Ver Apps Desenvolvidos
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Estatisticas do mercado mobile:</h3>
                  <ul className="space-y-3">
                    {['6.8 bilhoes de usuarios de smartphone no mundo', '4h por dia e o tempo medio no mobile', '70% do e-commerce e mobile', 'Apps nativos convertem 2x mais', '90% preferem apps a sites moveis'].map((item) => (
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

        {/* Service Types */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tipos de Desenvolvimento <span className="gradient-text">Mobile</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Escolha a melhor abordagem para seu projeto mobile</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {mobileServices.map((service, i) => (
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
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary">{t}</span>
                    ))}
                  </div>
                  <Link href={`/contato?service=desenvolvimento-mobile&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                    Solicitar Orcamento
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Types */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tipos de Aplicativos que <span className="gradient-text">Desenvolvemos</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Experiencia em diversos segmentos e nichos de mercado</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appTypes.map((type, i) => (
                <motion.div key={type.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 hover-lift">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{type.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex) => (
                      <span key={ex} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{ex}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Funcionalidades que <span className="gradient-text">Implementamos</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, i) => (
                <motion.div key={feat.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6 text-center hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{feat.name}</h3>
                  <p className="text-xs text-muted-foreground">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Processo de <span className="gradient-text">Desenvolvimento</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentPhases.map((phase, i) => (
                <motion.div key={phase.phase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground text-center mb-1">{phase.phase}</h3>
                  <p className="text-sm text-primary font-medium text-center mb-4">{phase.duration}</p>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {phase.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />{d}</li>
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Transforme sua Ideia em um App de Sucesso</h2>
              <p className="text-muted-foreground mb-6">Consultoria gratuita para definir a melhor estrategia mobile para seu negocio</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contato?service=desenvolvimento-mobile" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Rocket className="w-4 h-4" /> Solicitar Consultoria Gratuita
                </Link>
                <Link href="https://wa.me/5547992474747?text=Ola! Gostaria de desenvolver um aplicativo mobile" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
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
