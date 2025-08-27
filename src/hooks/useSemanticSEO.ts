import { useEffect, useState } from 'react';
import { SemanticSEO, SemanticKeyword, ContentOptimizer, ContentOptimization } from '@/lib/seo-semantic';

export interface SEOAnalytics {
  keywords: SemanticKeyword[];
  optimization: ContentOptimization | null;
  structuredData: any;
  voiceSearchFAQ: any;
  isAnalyzing: boolean;
  error: string | null;
}

export function useSemanticSEO(primaryKeyword: string, content?: string, url?: string, title?: string, description?: string) {
  const [analytics, setAnalytics] = useState<SEOAnalytics>({
    keywords: [],
    optimization: null,
    structuredData: null,
    voiceSearchFAQ: null,
    isAnalyzing: false,
    error: null
  });

  useEffect(() => {
    if (!primaryKeyword) return;

    setAnalytics(prev => ({ ...prev, isAnalyzing: true, error: null }));

    try {
      // Generate semantic keywords
      const keywords = SemanticSEO.generateSemanticKeywords(primaryKeyword);
      
      // Generate structured data if we have the required fields
      let structuredData = null;
      if (title && description && url) {
        structuredData = SemanticSEO.generateSemanticStructuredData(
          title,
          description,
          keywords,
          url
        );
      }

      // Generate voice search FAQ
      const voiceSearchFAQ = SemanticSEO.generateVoiceSearchFAQ(keywords);

      // Analyze content if provided
      let optimization = null;
      if (content) {
        optimization = ContentOptimizer.analyzeContent(content, keywords);
      }

      setAnalytics({
        keywords,
        optimization,
        structuredData,
        voiceSearchFAQ,
        isAnalyzing: false,
        error: null
      });
    } catch (error) {
      setAnalytics(prev => ({
        ...prev,
        isAnalyzing: false,
        error: error instanceof Error ? error.message : 'Erro ao analisar SEO'
      }));
    }
  }, [primaryKeyword, content, url, title, description]);

  return analytics;
}

// Hook para otimização de conteúdo em tempo real
export function useContentOptimization(content: string, keywords: SemanticKeyword[]) {
  const [optimization, setOptimization] = useState<ContentOptimization | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!content || !keywords.length) return;

    const optimization = ContentOptimizer.analyzeContent(content, keywords);
    setOptimization(optimization);

    // Generate improvement suggestions
    const suggestions: string[] = [];

    if (optimization.readabilityScore < 60) {
      suggestions.push('Simplifique as frases para melhorar a legibilidade');
    }

    if (optimization.topicalRelevance < 30) {
      suggestions.push('Inclua mais palavras-chave relacionadas ao tópico principal');
    }

    if (optimization.semanticCoverage < 50) {
      suggestions.push('Adicione mais variações semânticas das palavras-chave');
    }

    if (optimization.sentimentScore < 0) {
      suggestions.push('Considere usar linguagem mais positiva');
    }

    // Check entity density
    const lowDensityEntities = Object.entries(optimization.entityDensity)
      .filter(([, density]) => density < 0.5)
      .map(([entity]) => entity);

    if (lowDensityEntities.length > 0) {
      suggestions.push(`Mencione mais estas tecnologias: ${lowDensityEntities.join(', ')}`);
    }

    setSuggestions(suggestions);
  }, [content, keywords]);

  return { optimization, suggestions };
}

// Hook para métricas de performance de SEO
export function useSEOMetrics(url: string) {
  const [metrics, setMetrics] = useState<{
    coreWebVitals: { lcp: number; fid: number; cls: number } | null;
    mobileUsability: { score: number; issues: number } | null;
    structuredDataValidation: { isValid: boolean; errors: number; warnings: number } | null;
    isLoading: boolean;
  }>({
    coreWebVitals: null,
    mobileUsability: null,
    structuredDataValidation: null,
    isLoading: true
  });

  useEffect(() => {
    // Simular coleta de métricas (em produção, integraria com APIs como PageSpeed Insights)
    const simulateMetrics = async () => {
      setMetrics(prev => ({ ...prev, isLoading: true }));

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));

      setMetrics(prev => ({
        ...prev,
        coreWebVitals: {
          lcp: Math.random() * 3 + 1, // Largest Contentful Paint
          fid: Math.random() * 100 + 50, // First Input Delay
          cls: Math.random() * 0.1 // Cumulative Layout Shift
        },
        mobileUsability: {
          score: Math.random() * 20 + 80, // Mobile usability score
          issues: Math.floor(Math.random() * 3) // Number of mobile issues
        },
        structuredDataValidation: {
          isValid: Math.random() > 0.2, // 80% chance of valid structured data
          errors: Math.floor(Math.random() * 2),
          warnings: Math.floor(Math.random() * 3)
        },
        isLoading: false
      }));
    };

    if (url) {
      simulateMetrics();
    }
  }, [url]);

  return metrics;
}

// Hook para rastreamento de rankings de palavras-chave
export function useKeywordTracking(keywords: string[]) {
  const [rankings, setRankings] = useState<Record<string, number>>({});
  const [trends, setTrends] = useState<Record<string, 'up' | 'down' | 'stable'>>({});

  useEffect(() => {
    // Simular tracking de rankings
    const simulateRankings = () => {
      const newRankings: Record<string, number> = {};
      const newTrends: Record<string, 'up' | 'down' | 'stable'> = {};

      keywords.forEach(keyword => {
        const currentRanking = rankings[keyword] || Math.floor(Math.random() * 100) + 1;
        const change = Math.floor(Math.random() * 10) - 5; // -5 to +5 change
        const newRanking = Math.max(1, Math.min(100, currentRanking + change));
        
        newRankings[keyword] = newRanking;
        
        if (change > 2) newTrends[keyword] = 'up';
        else if (change < -2) newTrends[keyword] = 'down';
        else newTrends[keyword] = 'stable';
      });

      setRankings(newRankings);
      setTrends(newTrends);
    };

    if (keywords.length > 0) {
      simulateRankings();
      const interval = setInterval(simulateRankings, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [keywords]);

  return { rankings, trends };
}