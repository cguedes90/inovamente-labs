'use client';

import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra de progresso no topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 transition-all duration-300 ease-out shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Indicador circular flutuante */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-300/30"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Progress circle */}
          <svg className="absolute top-0 left-0 w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-blue-500"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeLinecap="round"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
              <span className="text-white text-xs font-bold">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
