'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface MediaOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
}

export function MediaOptimizer({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  loading = 'lazy'
}: MediaOptimizerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  // Gerar placeholder blur dinâmico se não fornecido
  const generateBlurDataURL = useCallback((width: number, height: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Criar gradiente suave para placeholder
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(0.5, '#e5e7eb');
      gradient.addColorStop(1, '#d1d5db');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL('image/jpeg', 0.1);
  }, []);

  // Otimizar URL da imagem com parâmetros de qualidade
  useEffect(() => {
    if (src.startsWith('http') && !src.includes('?')) {
      // Adicionar parâmetros de otimização para CDNs populares
      let optimized = src;
      
      // Cloudinary
      if (src.includes('cloudinary.com')) {
        optimized = src.replace('/upload/', `/upload/f_auto,q_${quality},w_${width || 1200}/`);
      }
      // ImageKit
      else if (src.includes('imagekit.io')) {
        optimized = `${src}?tr=f-auto,q-${quality},w-${width || 1200}`;
      }
      // Outras otimizações genéricas
      else {
        optimized = `${src}?quality=${quality}&width=${width || 1200}&format=auto`;
      }
      
      setOptimizedSrc(optimized);
    }
  }, [src, quality, width]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(true);
  }, []);

  // Placeholder de erro
  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">Imagem não encontrada</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div 
          className="absolute inset-0 animate-pulse bg-gray-200"
          style={{ width, height }}
        />
      )}
      
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined)}
        sizes={sizes}
        quality={quality}
        loading={loading}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}

// Componente para galeria de imagens otimizada
export function OptimizedGallery({ 
  images, 
  columns = 3,
  gap = 4 
}: { 
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  }>;
  columns?: number;
  gap?: number;
}) {
  return (
    <div 
      className={`grid gap-${gap}`}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` 
      }}
    >
      {images.map((image, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <MediaOptimizer
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="transform transition-transform duration-300 group-hover:scale-105"
              sizes={`(max-width: 768px) 100vw, ${100/columns}vw`}
            />
          </div>
          {image.caption && (
            <p className="mt-2 text-sm text-gray-600 text-center">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// Componente para hero images responsivas
export function ResponsiveHeroImage({
  src,
  alt,
  mobileImage,
  tabletImage,
  desktopImage,
  children
}: {
  src: string;
  alt: string;
  mobileImage?: string;
  tabletImage?: string;
  desktopImage?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Mobile Image */}
      <div className="block md:hidden">
        <MediaOptimizer
          src={mobileImage || src}
          alt={alt}
          width={768}
          height={400}
          priority
          className="w-full h-full"
          sizes="100vw"
        />
      </div>
      
      {/* Tablet Image */}
      <div className="hidden md:block lg:hidden">
        <MediaOptimizer
          src={tabletImage || src}
          alt={alt}
          width={1024}
          height={500}
          priority
          className="w-full h-full"
          sizes="100vw"
        />
      </div>
      
      {/* Desktop Image */}
      <div className="hidden lg:block">
        <MediaOptimizer
          src={desktopImage || src}
          alt={alt}
          width={1920}
          height={600}
          priority
          className="w-full h-full"
          sizes="100vw"
        />
      </div>
      
      {/* Overlay content */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            {children}
          </div>
        </div>
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

// Componente para lazy loading de vídeos
export function LazyVideo({
  src,
  poster,
  width,
  height,
  className = '',
  controls = true,
  autoplay = false,
  muted = true,
  loop = false
}: {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  className?: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const videoElement = document.getElementById(`lazy-video-${src}`);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <div 
      id={`lazy-video-${src}`}
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {!isVisible && (
        <div className="flex items-center justify-center bg-gray-100 w-full h-full">
          {poster ? (
            <MediaOptimizer
              src={poster}
              alt="Video thumbnail"
              width={width}
              height={height}
              className="w-full h-full"
            />
          ) : (
            <div className="text-gray-400">
              <div className="text-6xl mb-4">▶️</div>
              <div>Clique para carregar o vídeo</div>
            </div>
          )}
        </div>
      )}
      
      {isVisible && (
        <video
          width={width}
          height={height}
          poster={poster}
          controls={controls}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          className="w-full h-full"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}
      
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
}

export default MediaOptimizer;