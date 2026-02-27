import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import ServicesPreview from '@/components/home/ServicesPreview'
import CasesPreview from '@/components/home/CasesPreview'
import CTASection from '@/components/home/CTASection'
import { VoiceSearchOptimizer } from '@/components/SEO/VoiceSearchOptimizer'

export const metadata: Metadata = {
  title: 'InovaMente Labs - Página Inicial | Soluções Tecnológicas Inovadoras',
  description: 'Bem-vindo à InovaMente Labs. Oferecemos portal de clientes, sistema de tickets, desenvolvimento de software e soluções tecnológicas inovadoras. Acesse nossos serviços agora!',
  openGraph: {
    title: 'InovaMente Labs - Soluções Tecnológicas Inovadoras',
    description: 'Portal de clientes, sistema de tickets e desenvolvimento de software. Soluções tecnológicas completas para sua empresa.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'InovaMente Labs - Portal de entrada',
      }
    ],
  },
}

const primaryKeyword = 'desenvolvimento de software';
const pageContent = `
InovaMente Labs oferece soluções completas em desenvolvimento de software, aplicativos mobile, automação de processos e infraestrutura em nuvem. Nossa equipe especializada utiliza tecnologias modernas como React, Next.js, Python e AWS para criar soluções inovadoras.
`;

export default function HomePage() {
  return (
    <>
      <VoiceSearchOptimizer
        primaryKeyword={primaryKeyword}
        content={pageContent}
        title="InovaMente Labs - Soluções Tecnológicas Inovadoras"
        description="Portal de clientes, sistema de tickets e desenvolvimento de software. Soluções tecnológicas completas para sua empresa."
        url="https://www.inovamentelabs.com.br"
      />

      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <ServicesPreview />
          <CasesPreview />
          <CTASection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
