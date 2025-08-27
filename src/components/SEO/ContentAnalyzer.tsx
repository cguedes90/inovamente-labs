'use client';

import { useState, useEffect } from 'react';
import { useContentOptimization, useSemanticSEO } from '@/hooks/useSemanticSEO';

interface ContentAnalyzerProps {
  content: string;
  primaryKeyword: string;
  showAnalysis?: boolean;
}

export function ContentAnalyzer({ 
  content, 
  primaryKeyword, 
  showAnalysis = false 
}: ContentAnalyzerProps) {
  const { keywords } = useSemanticSEO(primaryKeyword);
  const { optimization, suggestions } = useContentOptimization(content, keywords);
  const [isVisible, setIsVisible] = useState(showAnalysis);

  if (!optimization) return null;

  return (
    <div className="content-analyzer">
      {showAnalysis && (
        <div className="fixed bottom-4 right-4 w-96 max-h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">📊 Análise de SEO</h3>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                {isVisible ? '−' : '+'}
              </button>
            </div>
          </div>
          
          {isVisible && (
            <div className="p-4 max-h-80 overflow-y-auto">
              {/* Métricas principais */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <ScoreCard
                  title="Legibilidade"
                  score={optimization.readabilityScore}
                  icon="📖"
                />
                <ScoreCard
                  title="Relevância"
                  score={optimization.topicalRelevance}
                  icon="🎯"
                />
                <ScoreCard
                  title="Semântica"
                  score={optimization.semanticCoverage}
                  icon="🔍"
                />
                <ScoreCard
                  title="Sentimento"
                  score={optimization.sentimentScore + 50} // Normalize to 0-100
                  icon="😊"
                />
              </div>

              {/* Densidade de entidades */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">🏷️ Entidades</h4>
                <div className="space-y-1">
                  {Object.entries(optimization.entityDensity).slice(0, 3).map(([entity, density]) => (
                    <div key={entity} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{entity}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300"
                            style={{ width: `${Math.min(density * 20, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-8">
                          {density.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sugestões */}
              {suggestions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💡 Sugestões</h4>
                  <ul className="space-y-2">
                    {suggestions.slice(0, 3).map((suggestion, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-yellow-500 mt-0.5">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ScoreCard({ title, score, icon }: { title: string; score: number; icon: string }) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'from-green-400 to-emerald-500';
    if (score >= 50) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getTextColor = (score: number) => {
    if (score >= 70) return 'text-green-700';
    if (score >= 50) return 'text-yellow-700';
    return 'text-red-700';
  };

  return (
    <div className="p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-600">{title}</span>
        <span className="text-sm">{icon}</span>
      </div>
      <div className="flex items-end space-x-2">
        <span className={`text-lg font-bold ${getTextColor(score)}`}>
          {Math.round(score)}
        </span>
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getScoreColor(score)} transition-all duration-500`}
            style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Component for inline content suggestions
export function InlineContentSuggestions({ 
  primaryKeyword, 
  currentContent 
}: { 
  primaryKeyword: string;
  currentContent: string;
}) {
  const { keywords } = useSemanticSEO(primaryKeyword);
  const [showSuggestions, setShowSuggestions] = useState(false);

  if (!keywords.length) return null;

  const missingEntities = keywords[0]?.entities.filter(entity =>
    !currentContent.toLowerCase().includes(entity.toLowerCase())
  ) || [];

  const missingSemanticKeywords = keywords[0]?.semantic.filter(semantic =>
    !currentContent.toLowerCase().includes(semantic.toLowerCase())
  ) || [];

  const missingVoiceQueries = keywords[0]?.voiceQueries.filter(query =>
    !currentContent.toLowerCase().includes(query.toLowerCase())
  ) || [];

  return (
    <div className="inline-content-suggestions mt-8">
      <button
        onClick={() => setShowSuggestions(!showSuggestions)}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <span>💡</span>
        <span>Sugestões de Otimização de Conteúdo</span>
        <span className="transform transition-transform">
          {showSuggestions ? '↑' : '↓'}
        </span>
      </button>

      {showSuggestions && (
        <div className="mt-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Missing Entities */}
            {missingEntities.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🏷️</span>
                  Tecnologias a Mencionar
                </h4>
                <ul className="space-y-2">
                  {missingEntities.slice(0, 3).map((entity, index) => (
                    <li key={index} className="text-sm text-gray-700 bg-white px-3 py-2 rounded-lg">
                      {entity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Missing Semantic Keywords */}
            {missingSemanticKeywords.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🔍</span>
                  Termos Relacionados
                </h4>
                <ul className="space-y-2">
                  {missingSemanticKeywords.slice(0, 3).map((keyword, index) => (
                    <li key={index} className="text-sm text-gray-700 bg-white px-3 py-2 rounded-lg">
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Voice Search Opportunities */}
            {missingVoiceQueries.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🗣️</span>
                  Perguntas de Voz
                </h4>
                <ul className="space-y-2">
                  {missingVoiceQueries.slice(0, 2).map((query, index) => (
                    <li key={index} className="text-sm text-gray-700 bg-white px-3 py-2 rounded-lg">
                      {query}?
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
            <h5 className="font-semibold text-gray-900 mb-2">📝 Exemplo de Otimização:</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              "Para quem busca <strong>{primaryKeyword}</strong>, é importante entender que isso envolve{' '}
              {keywords[0]?.semantic.slice(0, 2).join(' e ')}. Utilizamos tecnologias como{' '}
              {keywords[0]?.entities.slice(0, 2).join(' e ')} para garantir os melhores resultados."
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentAnalyzer;