'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`
        fixed pointer-events-none z-50 transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        left: position.x - 20,
        top: position.y - 20,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Glow externo */}
      <div className="absolute w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      
      {/* Glow médio */}
      <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg" />
      
      {/* Ponto central */}
      <div className="absolute w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" 
           style={{ left: '19px', top: '19px' }} />
    </div>
  );
}
