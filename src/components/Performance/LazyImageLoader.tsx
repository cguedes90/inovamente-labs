'use client';

import React, { useState, useRef, useEffect } from 'react';

interface LazyImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImageLoader: React.FC<LazyImageLoaderProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyOEMxNi42ODYzIDI4IDEzLjk5OTkgMjUuMzEzNyAxMy45OTk5IDIyQzEzLjk5OTkgMTguNjg2MyAxNi42ODYzIDE2IDIwIDE2QzIzLjMxMzcgMTYgMjYgMTguNjg2MyAyNiAyMkMyNiAyNS4zMTM3IDIzLjMxMzcgMjggMjAgMjhaTTIwIDI0QzIxLjEwNDYgMjQgMjIgMjMuMTA0NiAyMiAyMkMyMiAyMC44OTU0IDIxLjEwNDYgMjAgMjAgMjBDMTguODk1NCAyMCAxOCAyMC44OTU0IDE4IDIyQzE4IDIzLjEwNDYgMTguODk1NCAyNCAyMCAyNFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+',
  width,
  height,
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px'
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto'
  };

  const placeholderStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url("${placeholder}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 0 : 1
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div style={placeholderStyle}>
          <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
            <p className="text-sm">Erro ao carregar imagem</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
        />
      )}
    </div>
  );
};