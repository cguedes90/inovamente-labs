'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Smartphone, Cog, Cloud, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas com React, Next.js e Node.js. Performance, SEO e experiência do usuário em primeiro lugar.',
    techs: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    gradient: 'from-primary/10 to-primary/5',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com React Native e Flutter. Design responsivo e intuitivo.',
    techs: ['React Native', 'Flutter', 'iOS', 'Android'],
    gradient: 'from-accent/10 to-accent/5',
  },
  {
    icon: Cog,
    title: 'Automação de Processos',
    description: 'Eliminamos tarefas manuais e repetitivas com RPA, APIs e workflows inteligentes que escalam seu negócio.',
    techs: ['RPA', 'APIs', 'Workflows', 'IA'],
    gradient: 'from-primary/10 to-primary/5',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infraestrutura escalável e segura na nuvem. CI/CD, containers e monitoramento 24/7 para sua operação.',
    techs: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    gradient: 'from-accent/10 to-accent/5',
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
            O que fazemos
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para cada etapa da sua transformação digital
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            >
              <Link
                href="/servicos"
                className={`block bg-gradient-to-br ${service.gradient} border border-border rounded-3xl p-8 lg:p-10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group h-full`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-border text-foreground font-semibold hover:bg-card hover:border-primary/30 transition-all duration-300"
          >
            Ver Todos os Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
