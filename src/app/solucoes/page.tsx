'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Rocket, ShoppingCart, RefreshCw, Server, TrendingUp, Cpu, Lightbulb, Users } from 'lucide-react';

const solucoes = [
  { icon: Rocket, title: 'Desenvolvimento de MVP', desc: 'Transforme sua ideia em um produto viável rapidamente, validando hipóteses com usuários reais.' },
  { icon: ShoppingCart, title: 'E-commerce & Retail', desc: 'Plataformas de vendas online completas com checkout, pagamentos e gestão de estoque.' },
  { icon: RefreshCw, title: 'Integração de Sistemas', desc: 'Conecte seus sistemas legados com novas plataformas de forma segura e eficiente.' },
  { icon: Server, title: 'Migração de Sistemas Legacy', desc: 'Modernize aplicações antigas sem perder dados ou interromper operações.' },
  { icon: TrendingUp, title: 'Escalabilidade de Aplicações', desc: 'Prepare sua infraestrutura para crescer junto com o seu negócio.' },
  { icon: Cpu, title: 'Indústria 4.0 & IoT', desc: 'Soluções inteligentes para automação industrial e Internet das Coisas.' },
  { icon: Lightbulb, title: 'Consultorias', desc: 'Orientação estratégica em tecnologia para decisões mais inteligentes.' },
  { icon: Users, title: 'Startups', desc: 'Pacotes especiais para startups em fase de validação e crescimento.' },
];

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Nossas <span className="gradient-text">Soluções</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg">Soluções sob medida para cada desafio do seu negócio.</p>
          </div>
        </section>
        <section className="pb-24 px-4">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solucoes.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
