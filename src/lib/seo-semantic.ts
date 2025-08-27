// Semantic SEO and Voice Search Optimization Library
export interface SemanticKeyword {
  primary: string;
  semantic: string[];
  entities: string[];
  intent: 'informational' | 'navigational' | 'transactional' | 'commercial';
  voiceQueries: string[];
}

export interface ContentOptimization {
  readabilityScore: number;
  sentimentScore: number;
  topicalRelevance: number;
  entityDensity: Record<string, number>;
  semanticCoverage: number;
}

export class SemanticSEO {
  // Generate semantic keywords based on primary keyword
  static generateSemanticKeywords(primaryKeyword: string): SemanticKeyword[] {
    const semanticMap: Record<string, SemanticKeyword> = {
      'desenvolvimento web': {
        primary: 'desenvolvimento web',
        semantic: [
          'criação de sites',
          'desenvolvimento frontend',
          'programação web',
          'aplicações web',
          'tecnologia web',
          'soluções digitais'
        ],
        entities: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js'],
        intent: 'commercial',
        voiceQueries: [
          'como criar um site profissional',
          'quanto custa desenvolver um site',
          'melhor empresa de desenvolvimento web',
          'criar loja online',
          'desenvolvimento de aplicativo web'
        ]
      },
      'desenvolvimento mobile': {
        primary: 'desenvolvimento mobile',
        semantic: [
          'criação de aplicativos',
          'apps mobile',
          'desenvolvimento android',
          'desenvolvimento ios',
          'aplicativo nativo',
          'app híbrido'
        ],
        entities: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
        intent: 'commercial',
        voiceQueries: [
          'como criar um aplicativo',
          'quanto custa fazer um app',
          'desenvolvimento de aplicativo móvel',
          'criar app para android e ios',
          'melhor tecnologia para app mobile'
        ]
      },
      'automação processos': {
        primary: 'automação de processos',
        semantic: [
          'automatização empresarial',
          'RPA robotic process automation',
          'workflow automation',
          'processos automáticos',
          'eficiência operacional'
        ],
        entities: ['Python', 'Power Automate', 'Zapier', 'UiPath', 'Automation Anywhere'],
        intent: 'commercial',
        voiceQueries: [
          'como automatizar processos da empresa',
          'o que é RPA',
          'automatização de tarefas repetitivas',
          'ROI automação processos',
          'implementar automação empresarial'
        ]
      },
      'devops infraestrutura': {
        primary: 'devops e infraestrutura',
        semantic: [
          'infraestrutura em nuvem',
          'cloud computing',
          'CI/CD pipeline',
          'containerização',
          'orquestração containers',
          'monitoramento sistemas'
        ],
        entities: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
        intent: 'commercial',
        voiceQueries: [
          'o que é devops',
          'como implementar CI/CD',
          'infraestrutura cloud AWS',
          'containerização com docker',
          'monitoramento de aplicações'
        ]
      }
    };

    return Object.values(semanticMap).filter(keyword => 
      keyword.primary.includes(primaryKeyword.toLowerCase()) ||
      keyword.semantic.some(sem => sem.includes(primaryKeyword.toLowerCase()))
    );
  }

  // Generate voice search optimized content
  static optimizeForVoiceSearch(content: string, keywords: SemanticKeyword[]): string {
    let optimizedContent = content;

    // Add conversational phrases
    const conversationalPhrases = [
      'Você sabia que',
      'A resposta é simples:',
      'Aqui está como',
      'O importante é entender que',
      'Na prática, isso significa',
      'Por exemplo',
      'Em outras palavras'
    ];

    // Add FAQ-style questions and answers
    keywords.forEach(keyword => {
      keyword.voiceQueries.forEach(query => {
        if (!optimizedContent.toLowerCase().includes(query.toLowerCase())) {
          optimizedContent += `\n\n**${query.charAt(0).toUpperCase() + query.slice(1)}?**\n`;
          optimizedContent += `${keyword.semantic[0]} é fundamental para ${keyword.primary}.`;
        }
      });
    });

    return optimizedContent;
  }

  // Generate entity-rich content
  static enrichWithEntities(content: string, entities: string[]): string {
    let enrichedContent = content;

    entities.forEach(entity => {
      // Add entity context if not already present
      if (!enrichedContent.toLowerCase().includes(entity.toLowerCase())) {
        enrichedContent += ` Utilizamos ${entity} como parte de nossa stack tecnológica.`;
      }
    });

    return enrichedContent;
  }

  // Calculate topical authority score
  static calculateTopicalAuthority(content: string, keywords: SemanticKeyword[]): number {
    let score = 0;
    const totalWords = content.split(' ').length;

    keywords.forEach(keyword => {
      // Primary keyword presence
      const primaryMatches = (content.toLowerCase().match(new RegExp(keyword.primary, 'g')) || []).length;
      score += (primaryMatches / totalWords) * 100;

      // Semantic keyword presence
      keyword.semantic.forEach(semantic => {
        const semanticMatches = (content.toLowerCase().match(new RegExp(semantic, 'g')) || []).length;
        score += (semanticMatches / totalWords) * 50;
      });

      // Entity presence
      keyword.entities.forEach(entity => {
        const entityMatches = (content.toLowerCase().match(new RegExp(entity, 'g')) || []).length;
        score += (entityMatches / totalWords) * 25;
      });
    });

    return Math.min(score, 100); // Cap at 100
  }

  // Generate structured data for better semantic understanding
  static generateSemanticStructuredData(
    title: string,
    description: string,
    keywords: SemanticKeyword[],
    url: string
  ) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "mainEntity": {
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "InovaMente Labs",
          "url": "https://www.inovamentelabs.com.br"
        },
        "areaServed": "Brasil",
        "serviceType": keywords.map(k => k.primary),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Tecnologia",
          "itemListElement": keywords.map(keyword => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": keyword.primary,
              "description": `Serviços especializados em ${keyword.primary}`,
              "category": keyword.intent
            }
          }))
        }
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".voice-optimized"],
        "xpath": "/html/head/title | //h1 | //h2"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };
  }

  // Generate voice search FAQ schema
  static generateVoiceSearchFAQ(keywords: SemanticKeyword[]) {
    const faqItems: any[] = [];

    keywords.forEach(keyword => {
      keyword.voiceQueries.forEach(query => {
        faqItems.push({
          "@type": "Question",
          "name": query,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${keyword.primary} envolve ${keyword.semantic.join(', ')} usando tecnologias como ${keyword.entities.join(', ')}.`
          }
        });
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems
    };
  }
}

// Content optimization utilities
export class ContentOptimizer {
  // Calculate readability score (simplified Flesch Reading Ease)
  static calculateReadabilityScore(text: string): number {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.trim().length > 0);
    const syllables = words.reduce((total, word) => total + this.countSyllables(word), 0);

    if (sentences.length === 0 || words.length === 0) return 0;

    const avgSentenceLength = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;

    // Simplified Flesch formula
    const score = 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgSyllablesPerWord);
    return Math.max(0, Math.min(100, score));
  }

  // Count syllables in a word (simplified)
  private static countSyllables(word: string): number {
    const vowels = 'aeiouAEIOU';
    let syllableCount = 0;
    let previousWasVowel = false;

    for (const char of word) {
      const isVowel = vowels.includes(char);
      if (isVowel && !previousWasVowel) {
        syllableCount++;
      }
      previousWasVowel = isVowel;
    }

    // Handle silent 'e'
    if (word.endsWith('e') && syllableCount > 1) {
      syllableCount--;
    }

    return Math.max(1, syllableCount);
  }

  // Analyze content sentiment (simplified)
  static analyzeSentiment(text: string): number {
    const positiveWords = ['excelente', 'ótimo', 'bom', 'melhor', 'qualidade', 'eficiente', 'inovador', 'sucesso'];
    const negativeWords = ['ruim', 'pior', 'problema', 'erro', 'falha', 'difícil', 'caro', 'lento'];

    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach(word => {
      if (positiveWords.some(pos => word.includes(pos))) positiveCount++;
      if (negativeWords.some(neg => word.includes(neg))) negativeCount++;
    });

    const total = positiveCount + negativeCount;
    if (total === 0) return 0;

    return ((positiveCount - negativeCount) / total) * 100;
  }

  // Calculate entity density
  static calculateEntityDensity(text: string, entities: string[]): Record<string, number> {
    const words = text.split(/\s+/).filter(w => w.trim().length > 0);
    const totalWords = words.length;
    const density: Record<string, number> = {};

    entities.forEach(entity => {
      const matches = (text.toLowerCase().match(new RegExp(entity.toLowerCase(), 'g')) || []).length;
      density[entity] = totalWords > 0 ? (matches / totalWords) * 100 : 0;
    });

    return density;
  }

  // Generate content optimization report
  static analyzeContent(text: string, keywords: SemanticKeyword[]): ContentOptimization {
    const allEntities = keywords.flatMap(k => k.entities);
    
    return {
      readabilityScore: this.calculateReadabilityScore(text),
      sentimentScore: this.analyzeSentiment(text),
      topicalRelevance: SemanticSEO.calculateTopicalAuthority(text, keywords),
      entityDensity: this.calculateEntityDensity(text, allEntities),
      semanticCoverage: this.calculateSemanticCoverage(text, keywords)
    };
  }

  // Calculate how well content covers semantic keywords
  private static calculateSemanticCoverage(text: string, keywords: SemanticKeyword[]): number {
    let totalCoverage = 0;
    const lowerText = text.toLowerCase();

    keywords.forEach(keyword => {
      let keywordCoverage = 0;
      
      // Check primary keyword
      if (lowerText.includes(keyword.primary.toLowerCase())) {
        keywordCoverage += 40;
      }

      // Check semantic keywords (60% weight)
      const semanticMatches = keyword.semantic.filter(sem => 
        lowerText.includes(sem.toLowerCase())
      ).length;
      keywordCoverage += (semanticMatches / keyword.semantic.length) * 60;

      totalCoverage += keywordCoverage;
    });

    return keywords.length > 0 ? totalCoverage / keywords.length : 0;
  }
}