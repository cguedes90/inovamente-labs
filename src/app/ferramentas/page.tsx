'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ROICalculator } from '@/components/Interactive/ROICalculator';
import { TechQuiz } from '@/components/Interactive/TechQuiz';
import { TechMaturityAssessment } from '@/components/Interactive/TechMaturityAssessment';
import { DigitalGuides } from '@/components/Educational/DigitalGuides';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Brain, BarChart3, BookOpen, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Ferramenta {
  id: string;
  icon: typeof Calculator;
  title: string;
  desc: string;
  component: React.ReactNode;
}

const ferramentas: Ferramenta[] = [
  {
    id: 'roi-automacao',
    icon: Calculator,
    title: 'Calculadora de ROI - Automa\u00e7\u00e3o',
    desc: 'Calcule quanto sua empresa pode economizar automatizando processos manuais.',
    component: <ROICalculator type="automation" />,
  },
  {
    id: 'roi-integracao',
    icon: Calculator,
    title: 'Calculadora de ROI - Integra\u00e7\u00e3o',
    desc: 'Estime os benef\u00edcios de integrar seus sistemas em uma plataforma unificada.',
    component: <ROICalculator type="integration" />,
  },
  {
    id: 'roi-mvp',
    icon: Calculator,
    title: 'Calculadora de ROI - MVP',
    desc: 'Compare investimento vs retorno projetado para validar sua ideia de produto.',
    component: <ROICalculator type="mvp" />,
  },
  {
    id: 'roi-escalabilidade',
    icon: Calculator,
    title: 'Calculadora de ROI - Escalabilidade',
    desc: 'Analise os custos de escalar sua aplica\u00e7\u00e3o conforme o crescimento.',
    component: <ROICalculator type="scalability" />,
  },
  {
    id: 'quiz',
    icon: Brain,
    title: 'Quiz de Solu\u00e7\u00e3o Tecnol\u00f3gica',
    desc: 'Responda 8 perguntas e descubra qual solu\u00e7\u00e3o tecnol\u00f3gica \u00e9 ideal para seu neg\u00f3cio.',
    component: <TechQuiz />,
  },
  {
    id: 'assessment',
    icon: BarChart3,
    title: 'Assessment de Maturidade Digital',
    desc: 'Avalie a maturidade digital da sua empresa em 8 dimens\u00f5es com gr\u00e1fico radar.',
    component: <TechMaturityAssessment />,
  },
  {
    id: 'guias',
    icon: BookOpen,
    title: 'Biblioteca de Guias',
    desc: 'Materiais educativos gratuitos sobre tecnologia, neg\u00f3cios e transforma\u00e7\u00e3o digital.',
    component: <DigitalGuides />,
  },
];

export default function FerramentasPage() {
  const [openTool, setOpenTool] = useState<string | null>(null);

  const toggleTool = (id: string) => {
    setOpenTool((prev) => (prev === id ? null : id));
  };

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
              Ferramentas <span className="gradient-text">Gratuitas</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg">
              Ferramentas interativas para ajudar na tomada de decis{'\u00e3'}o do seu neg{'\u00f3'}cio.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-4xl flex flex-col gap-4">
            {ferramentas.map((f, i) => {
              const isOpen = openTool === f.id;
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  {/* Card Header - clickable */}
                  <button
                    onClick={() => toggleTool(f.id)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-border">
                          {f.component}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
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
                Precisa de ajuda{' '}
                <span className="gradient-text">personalizada</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossas ferramentas d{'\u00e3'}o uma vis{'\u00e3'}o inicial, mas cada empresa {'\u00e9'} {'\u00fa'}nica.
                Agende uma consultoria gratuita para uma an{'\u00e1'}lise detalhada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Consultoria Gratuita
                </Link>
                <a
                  href="https://wa.me/5511974508168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  WhatsApp
                </a>
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
