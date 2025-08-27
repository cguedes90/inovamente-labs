'use client';

import React, { useState, useEffect, useRef, TouchEvent } from 'react';

// Mobile-first responsive navigation
interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  menuItems: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle, menuItems }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={onToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'translate-y-2'
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
            }`}
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onToggle}
      />

      {/* Mobile menu */}
      <nav
        ref={navRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={onToggle}
                >
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Contact buttons */}
          <div className="mt-8 space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              📞 Agendar Consultoria
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              💬 WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

// Touch-optimized carousel for mobile
interface MobileCarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const MobileCarousel: React.FC<MobileCarouselProps> = ({ 
  children, 
  autoPlay = false, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % children.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, children.length, isDragging]);

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < children.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const translateX = isDragging ? startX - currentX : 0;

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-out touch-pan-y"
        style={{
          transform: `translateX(${-currentIndex * 100 + (translateX / (carouselRef.current?.clientWidth || 1)) * 100}%)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Mobile-optimized form with better UX
interface MobileFormProps {
  onSubmit: (data: any) => void;
  fields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }>;
}

export const MobileForm: React.FC<MobileFormProps> = ({ onSubmit, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} é obrigatório`;
      }

      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Email inválido';
        }
      }

      if (field.type === 'tel' && formData[field.name]) {
        const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/;
        if (!phoneRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Telefone inválido';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'select' ? (
            <select
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Selecione...</option>
              {field.options?.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              rows={4}
              className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          ) : (
            <input
              type={field.type}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
              inputMode={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : 'text'}
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 font-semibold rounded-lg transition-colors ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
        } text-white`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </div>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  );
};

// Mobile-optimized sticky CTA
interface MobileStickyCtaProps {
  primaryAction: {
    label: string;
    onClick: () => void;
    icon?: string;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    icon?: string;
  };
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ 
  primaryAction, 
  secondaryAction 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 transform transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex gap-3">
        <button
          onClick={primaryAction.onClick}
          className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {primaryAction.icon && <span>{primaryAction.icon}</span>}
          {primaryAction.label}
        </button>
        
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="flex-1 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {secondaryAction.icon && <span>{secondaryAction.icon}</span>}
            {secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
};

// Mobile viewport height fix for iOS
export const useVhFix = () => {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);
};

// PWA installation prompt
export const usePwaInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setCanInstall(false);
      setDeferredPrompt(null);
    }
  };

  return { canInstall, promptInstall };
};