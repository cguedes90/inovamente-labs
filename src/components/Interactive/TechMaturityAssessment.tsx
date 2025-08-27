'use client';

import React, { useState } from 'react';

interface AssessmentQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    text: string;
    score: number;
    description: string;
  }[];
}

interface AssessmentResult {
  overallScore: number;
  level: string;
  categoryScores: {
    [key: string]: number;
  };
  recommendations: string[];
  priorities: string[];
}

const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    category: 'Infraestrutura',
    question: 'Como está a infraestrutura tecnológica da sua empresa?',
    options: [
      { text: 'Servidores físicos locais, sem backup automatizado', score: 1, description: 'Infraestrutura tradicional' },
      { text: 'Mix de local e cloud, alguns backups automáticos', score: 2, description: 'Híbrida básica' },
      { text: 'Principalmente cloud, backups e monitoramento', score: 3, description: 'Cloud intermediário' },
      { text: 'Cloud nativo, auto-scaling, disaster recovery completo', score: 4, description: 'Cloud avançado' }
    ]
  },
  {
    id: 2,
    category: 'Desenvolvimento',
    question: 'Como funciona o processo de desenvolvimento de software?',
    options: [
      { text: 'Sem processo definido, deploy manual, sem testes', score: 1, description: 'Ad-hoc' },
      { text: 'Processo básico, alguns testes manuais', score: 2, description: 'Básico estruturado' },
      { text: 'CI/CD básico, testes automatizados parciais', score: 3, description: 'DevOps inicial' },
      { text: 'CI/CD completo, testes automatizados, deploy contínuo', score: 4, description: 'DevOps maduro' }
    ]
  },
  {
    id: 3,
    category: 'Dados',
    question: 'Como sua empresa gerencia e utiliza dados?',
    options: [
      { text: 'Planilhas Excel, dados espalhados, sem análises', score: 1, description: 'Manual/Excel' },
      { text: 'Banco de dados básico, relatórios simples', score: 2, description: 'BD tradicional' },
      { text: 'Data warehouse, dashboards, algumas análises', score: 3, description: 'BI intermediário' },
      { text: 'Data lake, machine learning, analytics em tempo real', score: 4, description: 'Data-driven' }
    ]
  },
  {
    id: 4,
    category: 'Segurança',
    question: 'Qual o nível de segurança implementado?',
    options: [
      { text: 'Antivírus básico, senhas simples, sem políticas', score: 1, description: 'Básica' },
      { text: 'Firewall, senhas complexas, backup básico', score: 2, description: 'Intermediária' },
      { text: '2FA, políticas de segurança, monitoramento básico', score: 3, description: 'Estruturada' },
      { text: 'Zero trust, SOC, compliance, auditoria contínua', score: 4, description: 'Enterprise' }
    ]
  },
  {
    id: 5,
    category: 'Automação',
    question: 'Quanto dos processos empresariais são automatizados?',
    options: [
      { text: 'Tudo manual, sem ferramentas de automação', score: 1, description: '0-10% automatizado' },
      { text: 'Algumas automações simples (email, relatórios)', score: 2, description: '10-30% automatizado' },
      { text: 'Automação de workflows principais', score: 3, description: '30-60% automatizado' },
      { text: 'Processos críticos totalmente automatizados', score: 4, description: '60%+ automatizado' }
    ]
  },
  {
    id: 6,
    category: 'Integração',
    question: 'Como os sistemas da empresa se comunicam?',
    options: [
      { text: 'Sistemas isolados, sem integração', score: 1, description: 'Silos completos' },
      { text: 'Algumas integrações pontuais via CSV/email', score: 2, description: 'Integração manual' },
      { text: 'APIs básicas, integrações semi-automatizadas', score: 3, description: 'APIs intermediárias' },
      { text: 'API-first, microserviços, event-driven architecture', score: 4, description: 'Totalmente integrado' }
    ]
  },
  {
    id: 7,
    category: 'Monitoramento',
    question: 'Como vocês monitoram performance e problemas?',
    options: [
      { text: 'Usuários reportam problemas, sem monitoramento', score: 1, description: 'Reativo' },
      { text: 'Logs básicos, verificação manual periódica', score: 2, description: 'Log básico' },
      { text: 'Monitoramento de infraestrutura, alertas básicos', score: 3, description: 'Monitoramento ativo' },
      { text: 'APM completo, observabilidade, alertas inteligentes', score: 4, description: 'Observabilidade total' }
    ]
  },
  {
    id: 8,
    category: 'Experiência',
    question: 'Como é a experiência do usuário com seus sistemas?',
    options: [
      { text: 'Interface antiga, lenta, muitas reclamações', score: 1, description: 'UX problemática' },
      { text: 'Interface funcional, alguns problemas de usabilidade', score: 2, description: 'UX básica' },
      { text: 'Interface moderna, responsiva, boa usabilidade', score: 3, description: 'UX boa' },
      { text: 'UX excepcional, mobile-first, acessibilidade completa', score: 4, description: 'UX excelente' }
    ]
  }
];

export const TechMaturityAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: {[key: number]: number}) => {
    let totalScore = 0;
    const categoryScores: {[key: string]: number} = {};
    const categoryCount: {[key: string]: number} = {};

    assessmentQuestions.forEach((question, index) => {
      const score = userAnswers[index] || 1;
      totalScore += score;
      
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = 0;
        categoryCount[question.category] = 0;
      }
      
      categoryScores[question.category] += score;
      categoryCount[question.category]++;
    });

    // Normalizar scores das categorias (1-4 para 0-100)
    Object.keys(categoryScores).forEach(category => {
      categoryScores[category] = Math.round(((categoryScores[category] / categoryCount[category]) - 1) * 33.33);
    });

    const overallScore = Math.round(((totalScore / assessmentQuestions.length) - 1) * 33.33);
    
    let level = '';
    let recommendations: string[] = [];
    let priorities: string[] = [];

    if (overallScore < 25) {
      level = 'Iniciante';
      recommendations = [
        'Migrar sistemas críticos para cloud',
        'Implementar backups automatizados',
        'Estabelecer processos básicos de desenvolvimento',
        'Investir em ferramentas de produtividade'
      ];
      priorities = ['Infraestrutura', 'Segurança', 'Backup'];
    } else if (overallScore < 50) {
      level = 'Intermediário';
      recommendations = [
        'Implementar CI/CD básico',
        'Automatizar processos repetitivos',
        'Melhorar integração entre sistemas',
        'Estabelecer monitoramento proativo'
      ];
      priorities = ['Automação', 'Integração', 'DevOps'];
    } else if (overallScore < 75) {
      level = 'Avançado';
      recommendations = [
        'Adotar arquitetura de microserviços',
        'Implementar observabilidade completa',
        'Otimizar performance e escalabilidade',
        'Desenvolver capacidades de ML/AI'
      ];
      priorities = ['Escalabilidade', 'Performance', 'Innovation'];
    } else {
      level = 'Expert';
      recommendations = [
        'Liderar inovação tecnológica do mercado',
        'Contribuir com open source',
        'Implementar edge computing',
        'Explorar tecnologias emergentes'
      ];
      priorities = ['Inovação', 'Liderança', 'Futuro'];
    }

    setResult({
      overallScore,
      level,
      categoryScores,
      recommendations,
      priorities
    });
    setShowResult(true);
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante': return 'from-red-500 to-orange-500';
      case 'Intermediário': return 'from-yellow-500 to-amber-500';
      case 'Avançado': return 'from-blue-500 to-indigo-500';
      case 'Expert': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Iniciante': return '🌱';
      case 'Intermediário': return '🚀';
      case 'Avançado': return '⚡';
      case 'Expert': return '👑';
      default: return '📊';
    }
  };

  if (showResult && result) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          {/* Header com resultado */}
          <div className={`bg-gradient-to-r ${getLevelColor(result.level)} p-8 text-white`}>
            <div className="text-center">
              <div className="text-6xl mb-4">{getLevelIcon(result.level)}</div>
              <div className="text-4xl font-bold mb-2">{result.overallScore}%</div>
              <div className="text-2xl font-semibold">
                Maturidade Tecnológica: {result.level}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Scores por categoria */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📊 Análise por Categoria
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(result.categoryScores).map(([category, score]) => (
                  <div key={category} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-1">{score}%</div>
                      <div className="text-sm text-gray-600">{category}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${score >= 75 ? 'bg-green-500' : score >= 50 ? 'bg-blue-500' : score >= 25 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recomendações */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Recomendações Prioritárias
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="text-gray-700">{recommendation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Áreas prioritárias */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔥 Áreas de Foco Prioritário
              </h3>
              <div className="flex flex-wrap gap-3">
                {result.priorities.map((priority, index) => (
                  <div key={index} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                    {priority}
                  </div>
                ))}
              </div>
            </div>

            {/* Plano de ação */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📅 Plano de Ação Sugerido
              </h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-purple-800 mb-3">Curto Prazo (1-3 meses)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Auditoria técnica completa</li>
                      <li>• Implementar backups automatizados</li>
                      <li>• Melhorar segurança básica</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-800 mb-3">Médio Prazo (3-6 meses)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Migração para cloud</li>
                      <li>• Automação de processos</li>
                      <li>• Integração de sistemas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-800 mb-3">Longo Prazo (6+ meses)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Arquitetura moderna</li>
                      <li>• Analytics avançado</li>
                      <li>• Inovação contínua</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={restartAssessment}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Refazer Avaliação
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Receber Plano Detalhado
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              📊 Avaliação de Maturidade Tecnológica
            </h2>
            <p className="text-gray-600">
              Descubra o nível tecnológico da sua empresa e receba um plano personalizado de evolução
            </p>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              Questão {currentQuestion + 1} de {assessmentQuestions.length}
            </div>
            <div className="text-sm font-medium text-blue-600">
              {Math.round(((currentQuestion + 1) / assessmentQuestions.length) * 100)}% completo
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {assessmentQuestions[currentQuestion].category}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {assessmentQuestions[currentQuestion].question}
            </h3>
            
            <div className="space-y-4">
              {assessmentQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 group-hover:text-blue-800 mb-1">
                        {option.text}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-blue-600">
                        {option.description}
                      </div>
                    </div>
                    <div className="ml-4 text-gray-400 group-hover:text-blue-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Progress info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div className="text-sm text-purple-700">
                <div className="font-medium">Avaliação baseada em 200+ empresas analisadas</div>
                <div>
                  Cada resposta é pontuada de 1-4 baseada em benchmarks da indústria. 
                  Ao final, você receberá um diagnóstico detalhado e plano de ação personalizado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};