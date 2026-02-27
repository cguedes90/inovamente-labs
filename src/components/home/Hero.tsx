'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const InteractiveCube = dynamic(() => import('./InteractiveCube'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
});

const phrases = [
  'Transformamos ideias em soluções digitais',
  'Criamos experiências que impactam',
  'Inovação que gera resultados',
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
          if (displayText.length === phrase.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(phrase.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[80px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Tecnologia de ponta desde 2019
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">{displayText}</span>
              <span className="typewriter-cursor" />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Desenvolvemos soluções sob medida que impulsionam o crescimento do seu negócio.
              Do conceito ao deploy, com excelência técnica e design premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-border text-foreground font-semibold text-lg hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                Nossos Serviços
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <InteractiveCube />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 text-center"
            >
              Aproxime o mouse do cubo
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
