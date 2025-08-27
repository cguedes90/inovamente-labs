'use client';

import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: 'startup' | 'enterprise' | 'ecommerce' | 'tech';
}

interface QuizResult {
  score: number;
  category: string;
  recommendation: string;
  nextSteps: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o principal desafio da sua empresa atualmente?",
    options: [
      "Validar uma ideia de produto rapidamente",
      "Integrar sistemas que não conversam entre si",
      "Escalar aplicação para mais usuários",
      "Automatizar processos manuais repetitivos"
    ],
    correct: 0,
    explanation: "Cada desafio requer uma abordagem específica e estratégica.",
    category: 'startup'
  },
  {
    id: 2,
    question: "Quantos usuários simultâneos sua aplicação precisa suportar?",
    options: [
      "Menos de 100",
      "100 - 1.000",
      "1.000 - 10.000",
      "Mais de 10.000"
    ],
    correct: 3,
    explanation: "O volume de usuários determina a arquitetura necessária.",
    category: 'tech'
  },
  {
    id: 3,
    question: "Como você classifica o nível de maturidade tecnológica da sua empresa?",
    options: [
      "Iniciante - poucos sistemas digitais",
      "Intermediário - alguns sistemas isolados",
      "Avançado - sistemas integrados parcialmente",
      "Expert - arquitetura moderna e escalável"
    ],
    correct: 1,
    explanation: "A maturidade atual define a estratégia de evolução tecnológica.",
    category: 'enterprise'
  },
  {
    id: 4,
    question: "Qual é o seu orçamento aproximado para projetos de tecnologia?",
    options: [
      "Até R$ 50.000",
      "R$ 50.000 - R$ 150.000",
      "R$ 150.000 - R$ 500.000",
      "Acima de R$ 500.000"
    ],
    correct: 1,
    explanation: "O orçamento determina o escopo e cronograma do projeto.",
    category: 'startup'
  },
  {
    id: 5,
    question: "Quanto tempo sua equipe gasta semanalmente em tarefas manuais?",
    options: [
      "Menos de 10 horas",
      "10 - 20 horas",
      "20 - 40 horas",
      "Mais de 40 horas"
    ],
    correct: 2,
    explanation: "Tempo em tarefas manuais indica potencial de automação e ROI.",
    category: 'enterprise'
  },
  {
    id: 6,
    question: "Qual é a principal métrica que vocês querem melhorar?",
    options: [
      "Velocidade de entrega de features",
      "Redução de custos operacionais",
      "Aumento de conversão/vendas",
      "Melhoria da experiência do usuário"
    ],
    correct: 2,
    explanation: "A métrica principal guia a estratégia de implementação.",
    category: 'ecommerce'
  },
  {
    id: 7,
    question: "Como está a performance atual da sua aplicação principal?",
    options: [
      "Excelente - carrega em menos de 1 segundo",
      "Boa - carrega entre 1-3 segundos",
      "Regular - carrega entre 3-5 segundos",
      "Ruim - demora mais de 5 segundos"
    ],
    correct: 3,
    explanation: "Performance impacta diretamente na experiência do usuário e conversão.",
    category: 'tech'
  },
  {
    id: 8,
    question: "Qual é o maior gargalo tecnológico que impede o crescimento?",
    options: [
      "Falta de integração entre sistemas",
      "Aplicação não escala com demanda",
      "Processos manuais que consomem tempo",
      "Falta de visibilidade/analytics dos dados"
    ],
    correct: 1,
    explanation: "Identificar gargalos é essencial para priorizar investimentos.",
    category: 'enterprise'
  }
];

export const TechQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: number[]) => {
    let score = 0;
    const categoryScores = {
      startup: 0,
      enterprise: 0,
      ecommerce: 0,
      tech: 0
    };

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        score++;
      }
      categoryScores[question.category]++;
    });

    // Determinar categoria principal baseada nas respostas
    let primaryCategory = 'startup';
    let recommendation = '';
    let nextSteps: string[] = [];

    // Análise baseada em padrões de resposta
    const needsScaling = userAnswers[1] >= 2; // Mais de 1000 usuários
    const hasIntegrationNeeds = userAnswers[0] === 1; // Problema de integração
    const needsAutomation = userAnswers[4] >= 2; // Mais de 20h manuais
    const hasPerformanceIssues = userAnswers[6] >= 2; // Performance regular/ruim

    if (needsScaling && hasPerformanceIssues) {
      primaryCategory = 'tech';
      recommendation = 'Sua empresa precisa de uma arquitetura escalável e otimização de performance. Recomendamos investir em microserviços e infraestrutura cloud-native.';
      nextSteps = [
        'Auditoria de performance e arquitetura',
        'Planejamento de migração para microserviços',
        'Implementação de monitoramento avançado',
        'Otimização de banco de dados e cache'
      ];
    } else if (hasIntegrationNeeds || needsAutomation) {
      primaryCategory = 'enterprise';
      recommendation = 'Sua empresa se beneficiaria de integração de sistemas e automação de processos. Isso pode reduzir custos e aumentar eficiência significativamente.';
      nextSteps = [
        'Mapeamento de processos atuais',
        'Identificação de oportunidades de integração',
        'Desenvolvimento de APIs e middleware',
        'Implementação gradual de automações'
      ];
    } else if (userAnswers[5] === 2) { // Foco em conversão
      primaryCategory = 'ecommerce';
      recommendation = 'Foque em otimização de conversão e experiência do usuário. E-commerce bem otimizado pode aumentar vendas em 20-40%.';
      nextSteps = [
        'Análise de funil de conversão',
        'Otimização de UX/UI',
        'Implementação de analytics avançado',
        'Testes A/B para melhorias contínuas'
      ];
    } else {
      primaryCategory = 'startup';
      recommendation = 'Para startups, recomendamos começar com MVP para validar rapidamente suas hipóteses de negócio com menor investimento e risco.';
      nextSteps = [
        'Workshop de Discovery e definição de MVP',
        'Prototipação e testes de usabilidade',
        'Desenvolvimento de MVP em 30 dias',
        'Análise de métricas e iteração rápida'
      ];
    }

    setResult({
      score: Math.round((score / questions.length) * 100),
      category: primaryCategory,
      recommendation,
      nextSteps
    });
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'startup': return '🚀 Foco em MVP e Validação';
      case 'enterprise': return '🏢 Integração e Automação';
      case 'ecommerce': return '🛒 Otimização de Conversão';
      case 'tech': return '⚡ Escalabilidade e Performance';
      default: return '💡 Solução Personalizada';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'startup': return 'from-purple-500 to-pink-500';
      case 'enterprise': return 'from-blue-500 to-indigo-500';
      case 'ecommerce': return 'from-green-500 to-emerald-500';
      case 'tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  if (showResult && result) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header com resultado */}
          <div className={`bg-gradient-to-r ${getCategoryColor(result.category)} p-8 text-white`}>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{result.score}%</div>
              <div className="text-xl opacity-90">Compatibilidade Tecnológica</div>
              <div className="text-2xl font-semibold mt-4">
                {getCategoryTitle(result.category)}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Recomendação */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Recomendação Personalizada
              </h3>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  {result.recommendation}
                </p>
              </div>
            </div>

            {/* Próximos passos */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Próximos Passos Recomendados
              </h3>
              <div className="grid gap-4">
                {result.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="text-gray-700">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={restartQuiz}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Refazer Quiz
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Agendar Consultoria Gratuita
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                WhatsApp: (11) 99999-9999
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <div className="text-sm">
                  <div className="font-medium text-yellow-800">Avaliação Inicial</div>
                  <div className="text-yellow-700">
                    Este quiz fornece uma recomendação inicial baseada em padrões da indústria. 
                    Para uma análise completa e personalizada, recomendamos uma consultoria técnica detalhada.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        {/* Progress */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              🎯 Quiz: Qual Solução Tecnológica Sua Empresa Precisa?
            </h2>
            <div className="text-sm text-gray-500">
              {currentQuestion + 1} de {questions.length}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center mr-4 group-hover:border-blue-500">
                      <div className="w-4 h-4 bg-gray-300 rounded-full group-hover:bg-blue-500"></div>
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Info sobre o quiz */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div className="text-sm text-gray-600">
                <div className="font-medium">Sobre este quiz:</div>
                <div>
                  Desenvolvido com base em nossa experiência com +200 projetos. 
                  Cada pergunta foi cuidadosamente elaborada para identificar suas necessidades tecnológicas específicas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};