'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Simula progresso de loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center">
        {/* Logo animado */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-glow">
              <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-rotate-3d">
                <div className="flex items-center justify-center h-full">
                  <span className="text-white font-bold text-2xl">IM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <h1 className="text-4xl font-bold text-white mb-2 animate-pulse">
          InovaMente Labs
        </h1>
        <p className="text-gray-300 mb-8">
          Carregando experiência premium...
        </p>

        {/* Barra de progresso */}
        <div className="w-80 mx-auto mb-4">
          <div className="w-full bg-gray-700/30 rounded-full h-2 backdrop-blur-sm">
            <div 
              className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Porcentagem */}
        <div className="text-gray-400 text-sm">
          {Math.round(Math.min(progress, 100))}%
        </div>

        {/* Efeitos de partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
