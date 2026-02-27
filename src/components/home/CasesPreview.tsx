'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    title: 'Chopp Villa Alemã',
    category: 'Food & Beverage',
    description: 'Sistema completo de gestão com delivery integrado, painel administrativo e controle de estoque em tempo real.',
    metrics: [
      { label: 'Redução de erros', value: '-90%' },
      { label: 'Atendimento', value: '+30%' },
    ],
    techs: ['React', 'Node.js', 'PostgreSQL', 'Real-time DB'],
    accent: 'bg-primary',
  },
  {
    title: 'Zest Moda',
    category: 'Varejo & Moda',
    description: 'Sistema de gestão de estoque com relatórios automatizados e controle de mais de 2.000 produtos.',
    metrics: [
      { label: 'Produtos gerenciados', value: '2.000+' },
      { label: 'Relatórios', value: 'Automáticos' },
    ],
    techs: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    accent: 'bg-accent',
  },
  {
    title: 'Empresa de Serviços',
    category: 'Gestão Empresarial',
    description: 'Automação completa de processos de contratos e faturamento com integração de APIs.',
    metrics: [
      { label: 'Processos automatizados', value: '80%' },
      { label: 'Fechamento', value: '-50% tempo' },
    ],
    techs: ['Python', 'React', 'APIs', 'Docker'],
    accent: 'bg-success',
  },
];

const CasesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Cases de <span className="gradient-text-accent">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais que transformam negócios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                <div className={`h-1 w-full ${c.accent}`} />
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {c.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{c.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-secondary/50 rounded-2xl p-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <TrendingUp className="w-3.5 h-3.5 text-primary" />
                          <span className="font-display text-lg font-bold text-foreground">{m.value}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {c.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/cases"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline group-hover:gap-2.5 transition-all"
                  >
                    Ver Detalhes <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesPreview;
