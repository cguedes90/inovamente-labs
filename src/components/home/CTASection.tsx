'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden p-10 sm:p-14 lg:p-20"
          style={{ background: 'var(--gradient-primary)' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur mb-8">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/80">
                Investimento a partir de R$ 1.000
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              Converse com nossos especialistas e descubra como podemos acelerar seus resultados com tecnologia.
            </p>
            <Link
              href="/contato"
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-white text-foreground font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
