'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { TestimonialsCarousel } from '@/components/SocialProof/TestimonialsCarousel';
import { CaseStudiesGrid } from '@/components/SocialProof/CaseStudiesGrid';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const cases = [
  { title: "Chopp Villa Alem\u00e3", segment: "Food & Beverage", desc: "Sistema completo de gest\u00e3o e delivery que aumentou as vendas em 180%.", techs: ["React", "Node.js", "PostgreSQL"], result: "+180% vendas" },
  { title: "Zest Moda", segment: "E-commerce", desc: "Plataforma e-commerce com checkout inteligente e integra\u00e7\u00e3o com marketplaces.", techs: ["Next.js", "Stripe", "AWS"], result: "+250% convers\u00e3o" },
  { title: "AutoTech Solutions", segment: "Ind\u00fastria", desc: "Automa\u00e7\u00e3o de processos industriais com IoT e dashboards em tempo real.", techs: ["React", "Python", "MQTT"], result: "-60% tempo operacional" },
  { title: "HealthConnect", segment: "Sa\u00fade", desc: "Plataforma de telemedicina com agendamento e prontu\u00e1rio eletr\u00f4nico.", techs: ["React Native", "Firebase", "Node.js"], result: "+5k consultas/m\u00eas" },
  { title: "EduPlus", segment: "Educa\u00e7\u00e3o", desc: "LMS completo com gamifica\u00e7\u00e3o e analytics para institui\u00e7\u00f5es de ensino.", techs: ["Vue.js", "Django", "Redis"], result: "+90% engajamento" },
  { title: "LogiTrack", segment: "Log\u00edstica", desc: "Sistema de rastreamento e otimiza\u00e7\u00e3o de rotas em tempo real.", techs: ["React", "Go", "MongoDB"], result: "-45% custos log\u00edsticos" },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Cases de <span className="gradient-text">Sucesso</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg mb-10">
              Resultados reais que geramos para nossos clientes.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              {[
                { icon: TrendingUp, label: "340% ROI m\u00e9dio" },
                { icon: Users, label: "18M+ usu\u00e1rios impactados" },
                { icon: Clock, label: "75% redu\u00e7\u00e3o de tempo" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <m.icon className="w-4 h-4 text-primary" />
                  {m.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-primary/60">
                    {c.title}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {c.segment}
                  </span>
                  <h3 className="font-display font-semibold text-foreground mt-3 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {c.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <CaseStudiesGrid />
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Pronto para ser nosso pr{'\u00f3'}ximo{' '}
                <span className="gradient-text">case de sucesso</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Agende uma consultoria gratuita e descubra como podemos transformar
                seus desafios em resultados mensur{'\u00e1'}veis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Agendar Consultoria
                </Link>
                <Link
                  href="/servicos"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Ver Servi{'\u00e7'}os
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
