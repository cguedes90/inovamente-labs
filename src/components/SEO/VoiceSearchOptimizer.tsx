'use client';

import { useEffect } from 'react';
import { useSemanticSEO } from '@/hooks/useSemanticSEO';

interface VoiceSearchOptimizerProps {
  primaryKeyword: string;
  content?: string;
  title?: string;
  description?: string;
  url?: string;
}

export function VoiceSearchOptimizer({
  primaryKeyword,
  content,
  title,
  description,
  url
}: VoiceSearchOptimizerProps) {
  const { structuredData, voiceSearchFAQ, keywords } = useSemanticSEO(
    primaryKeyword,
    content,
    url,
    title,
    description
  );

  useEffect(() => {
    // Inject structured data for voice search
    if (structuredData) {
      const existingScript = document.getElementById('voice-search-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'voice-search-structured-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Inject FAQ structured data
    if (voiceSearchFAQ) {
      const existingFAQScript = document.getElementById('voice-search-faq-data');
      if (existingFAQScript) {
        existingFAQScript.remove();
      }

      const faqScript = document.createElement('script');
      faqScript.id = 'voice-search-faq-data';
      faqScript.type = 'application/ld+json';
      faqScript.innerHTML = JSON.stringify(voiceSearchFAQ);
      document.head.appendChild(faqScript);
    }

    // Cleanup on unmount
    return () => {
      const structuredDataScript = document.getElementById('voice-search-structured-data');
      const faqDataScript = document.getElementById('voice-search-faq-data');
      if (structuredDataScript) structuredDataScript.remove();
      if (faqDataScript) faqDataScript.remove();
    };
  }, [structuredData, voiceSearchFAQ]);

  // Generate voice-optimized meta tags
  useEffect(() => {
    if (keywords.length > 0) {
      // Update meta description with natural language
      const existingMetaDescription = document.querySelector('meta[name="description"]');
      if (existingMetaDescription && description) {
        const voiceOptimizedDescription = `${description} Saiba mais sobre ${keywords[0]?.semantic.join(', ')}.`;
        existingMetaDescription.setAttribute('content', voiceOptimizedDescription);
      }

      // Add voice search specific meta tags
      const voiceSearchMeta = document.createElement('meta');
      voiceSearchMeta.name = 'google-site-verification';
      voiceSearchMeta.content = 'voice-search-optimized';
      
      if (!document.querySelector('meta[name="google-site-verification"]')) {
        document.head.appendChild(voiceSearchMeta);
      }
    }
  }, [keywords, description]);

  return null; // This component only injects meta data
}

export default VoiceSearchOptimizer;

// Component for displaying voice search questions inline
export function VoiceSearchQuestions({ primaryKeyword }: { primaryKeyword: string }) {
  const { keywords, isAnalyzing } = useSemanticSEO(primaryKeyword);

  if (isAnalyzing || !keywords.length) {
    return null;
  }

  return (
    <section className="voice-search-questions my-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          🗣️ Perguntas Frequentes sobre {primaryKeyword}
        </h2>
        
        <div className="grid gap-6">
          {keywords.slice(0, 1).map((keyword, keywordIndex) => (
            <div key={keywordIndex}>
              {keyword.voiceQueries.slice(0, 5).map((query, queryIndex) => (
                <div
                  key={queryIndex}
                  className="voice-optimized glassmorphism-card mb-4"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-3"
                    itemProp="name"
                  >
                    {query.charAt(0).toUpperCase() + query.slice(1)}?
                  </h3>
                  <div
                    className="text-gray-700 leading-relaxed"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <div itemProp="text">
                      <p>
                        {keyword.primary} é uma área essencial que envolve {keyword.semantic.slice(0, 3).join(', ')}. 
                        Utilizamos tecnologias modernas como {keyword.entities.slice(0, 3).join(', ')} para 
                        garantir os melhores resultados.
                      </p>
                      <p className="mt-3">
                        Na InovaMente Labs, nossa abordagem para {keyword.primary} combina experiência técnica 
                        com as melhores práticas do mercado, garantindo soluções eficientes e inovadoras.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component for conversation-style content sections
export function ConversationalContent({ 
  primaryKeyword, 
  children 
}: { 
  primaryKeyword: string;
  children: React.ReactNode;
}) {
  const { keywords } = useSemanticSEO(primaryKeyword);

  if (!keywords.length) return <>{children}</>;

  return (
    <div className="conversational-content">
      {children}
      
      {/* Add conversational context */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
        <div className="flex items-start space-x-3">
          <div className="text-blue-500 text-xl">💬</div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Você sabia?
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {keywords[0]?.primary} envolve múltiplas tecnologias e abordagens. 
              Por exemplo, quando falamos de {keywords[0]?.semantic[0]}, 
              estamos nos referindo a soluções que utilizam {keywords[0]?.entities.slice(0, 2).join(' e ')} 
              para criar resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}