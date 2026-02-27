'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Eye, Users, Handshake, Target, Award } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Inovação', description: 'Buscamos constantemente novas formas de resolver problemas.' },
  { icon: Award, title: 'Qualidade', description: 'Código limpo, testes e melhores práticas em cada projeto.' },
  { icon: Eye, title: 'Transparência', description: 'Comunicação aberta e honesta em todas as etapas.' },
  { icon: Zap, title: 'Agilidade', description: 'Entregas rápidas sem comprometer a qualidade.' },
  { icon: Handshake, title: 'Parceria', description: 'Trabalhamos junto ao cliente como verdadeiros parceiros.' },
  { icon: Target, title: 'Resultados', description: 'Focamos em métricas e impacto real no negócio.' },
];

const team = [
  { name: 'Carlos Mendes', role: 'CEO & Founder', specialty: 'Estratégia Digital' },
  { name: 'Ana Rodrigues', role: 'CTO', specialty: 'Arquitetura de Software' },
  { name: 'Pedro Santos', role: 'Tech Lead', specialty: 'Full Stack' },
  { name: 'Julia Costa', role: 'UX Designer', specialty: 'Design de Produto' },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Sobre</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Sobre a <span className="gradient-text">InovaMente Labs</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde 2019, ajudamos empresas a se transformarem digitalmente. Somos uma equipe apaixonada por
                tecnologia, design e resultados que importam.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Missão', text: 'Transformar ideias em soluções digitais que geram valor real para nossos clientes e seus usuários.' },
                { title: 'Visão', text: 'Ser referência em inovação tecnológica no Brasil, reconhecida pela qualidade e impacto dos nossos projetos.' },
                { title: 'Valores', text: 'Inovação contínua, qualidade sem concessões, transparência total e parceria genuína com cada cliente.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-8"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Nossos <span className="gradient-text-accent">Valores</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 hover-lift"
                >
                  <v.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
