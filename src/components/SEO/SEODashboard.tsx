'use client';

import { useState, useEffect } from 'react';
import { useSEOMetrics, useKeywordTracking } from '@/hooks/useSemanticSEO';

interface SEODashboardProps {
  url?: string;
  keywords?: string[];
  showFloating?: boolean;
}

export function SEODashboard({ 
  url = 'https://www.inovamentelabs.com.br', 
  keywords = ['desenvolvimento web', 'desenvolvimento mobile', 'automação processos'],
  showFloating = false
}: SEODashboardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const metrics = useSEOMetrics(url);
  const { rankings, trends } = useKeywordTracking(keywords);

  const overallScore = calculateOverallScore(metrics, rankings);

  if (showFloating) {
    return (
      <div className="fixed bottom-20 right-4 z-40">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`
            w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white font-bold
            transition-all duration-300 hover:scale-110
            ${overallScore >= 80 ? 'bg-green-500' : overallScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}
          `}
        >
          📊
        </button>

        {isVisible && (
          <div className="absolute bottom-14 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <SEODashboardContent metrics={metrics} rankings={rankings} trends={trends} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      <SEODashboardContent metrics={metrics} rankings={rankings} trends={trends} />
    </div>
  );
}

function SEODashboardContent({ 
  metrics, 
  rankings, 
  trends 
}: { 
  metrics: any; 
  rankings: Record<string, number>;
  trends: Record<string, 'up' | 'down' | 'stable'>;
}) {
  return (
    <>
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h3 className="font-semibold flex items-center">
          <span className="mr-2">📈</span>
          SEO Performance
        </h3>
        <p className="text-sm opacity-90">Atualizações em tempo real</p>
      </div>

      {/* Content */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {/* Core Web Vitals */}
        {metrics.coreWebVitals && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">⚡</span>
              Core Web Vitals
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <WebVitalCard
                name="LCP"
                value={`${metrics.coreWebVitals.lcp.toFixed(1)}s`}
                status={metrics.coreWebVitals.lcp <= 2.5 ? 'good' : metrics.coreWebVitals.lcp <= 4 ? 'needs-improvement' : 'poor'}
              />
              <WebVitalCard
                name="FID"
                value={`${metrics.coreWebVitals.fid.toFixed(0)}ms`}
                status={metrics.coreWebVitals.fid <= 100 ? 'good' : metrics.coreWebVitals.fid <= 300 ? 'needs-improvement' : 'poor'}
              />
              <WebVitalCard
                name="CLS"
                value={metrics.coreWebVitals.cls.toFixed(3)}
                status={metrics.coreWebVitals.cls <= 0.1 ? 'good' : metrics.coreWebVitals.cls <= 0.25 ? 'needs-improvement' : 'poor'}
              />
            </div>
          </div>
        )}

        {/* Mobile Usability */}
        {metrics.mobileUsability && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📱</span>
              Mobile Usability
            </h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`
                  w-3 h-3 rounded-full
                  ${metrics.mobileUsability.score >= 90 ? 'bg-green-500' : 
                    metrics.mobileUsability.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}
                `}></div>
                <span className="font-semibold">{metrics.mobileUsability.score.toFixed(0)}/100</span>
              </div>
              <span className="text-sm text-gray-500">
                {metrics.mobileUsability.issues} problemas
              </span>
            </div>
          </div>
        )}

        {/* Structured Data */}
        {metrics.structuredDataValidation && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🏷️</span>
              Structured Data
            </h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`
                  w-3 h-3 rounded-full
                  ${metrics.structuredDataValidation.isValid ? 'bg-green-500' : 'bg-red-500'}
                `}></div>
                <span className="text-sm">
                  {metrics.structuredDataValidation.isValid ? 'Válido' : 'Problemas encontrados'}
                </span>
              </div>
              <div className="flex space-x-2 text-sm">
                {metrics.structuredDataValidation.errors > 0 && (
                  <span className="text-red-600">{metrics.structuredDataValidation.errors} erros</span>
                )}
                {metrics.structuredDataValidation.warnings > 0 && (
                  <span className="text-yellow-600">{metrics.structuredDataValidation.warnings} avisos</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Keyword Rankings */}
        {Object.keys(rankings).length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🔍</span>
              Rankings
            </h4>
            <div className="space-y-2">
              {Object.entries(rankings).slice(0, 3).map(([keyword, ranking]) => (
                <div key={keyword} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 truncate flex-1">{keyword}</span>
                  <div className="flex items-center space-x-2 ml-2">
                    <span className="font-semibold">#{ranking}</span>
                    <TrendIndicator trend={trends[keyword]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function WebVitalCard({ 
  name, 
  value, 
  status 
}: { 
  name: string; 
  value: string; 
  status: 'good' | 'needs-improvement' | 'poor';
}) {
  const statusColors = {
    good: 'bg-green-100 text-green-700 border-green-200',
    'needs-improvement': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    poor: 'bg-red-100 text-red-700 border-red-200'
  };

  return (
    <div className={`p-2 rounded-lg border text-center ${statusColors[status]}`}>
      <div className="font-semibold text-xs">{name}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  );
}

function TrendIndicator({ trend }: { trend: 'up' | 'down' | 'stable' }) {
  const trendStyles = {
    up: 'text-green-500',
    down: 'text-red-500',
    stable: 'text-gray-400'
  };

  const trendIcons = {
    up: '↗️',
    down: '↘️',
    stable: '➡️'
  };

  return (
    <span className={`text-xs ${trendStyles[trend]}`}>
      {trendIcons[trend]}
    </span>
  );
}

function calculateOverallScore(metrics: any, rankings: Record<string, number>): number {
  let score = 0;
  let factors = 0;

  // Core Web Vitals (40% weight)
  if (metrics.coreWebVitals) {
    const lcpScore = metrics.coreWebVitals.lcp <= 2.5 ? 100 : metrics.coreWebVitals.lcp <= 4 ? 70 : 30;
    const fidScore = metrics.coreWebVitals.fid <= 100 ? 100 : metrics.coreWebVitals.fid <= 300 ? 70 : 30;
    const clsScore = metrics.coreWebVitals.cls <= 0.1 ? 100 : metrics.coreWebVitals.cls <= 0.25 ? 70 : 30;
    
    score += (lcpScore + fidScore + clsScore) / 3 * 0.4;
    factors += 0.4;
  }

  // Mobile Usability (25% weight)
  if (metrics.mobileUsability) {
    score += metrics.mobileUsability.score * 0.25;
    factors += 0.25;
  }

  // Structured Data (15% weight)
  if (metrics.structuredDataValidation) {
    const structuredScore = metrics.structuredDataValidation.isValid ? 100 : 50;
    score += structuredScore * 0.15;
    factors += 0.15;
  }

  // Keywords (20% weight)
  if (Object.keys(rankings).length > 0) {
    const avgRanking = Object.values(rankings).reduce((sum, rank) => sum + rank, 0) / Object.values(rankings).length;
    const rankingScore = Math.max(0, 100 - avgRanking); // Better ranking = higher score
    score += rankingScore * 0.2;
    factors += 0.2;
  }

  return factors > 0 ? score / factors : 0;
}

export default SEODashboard;