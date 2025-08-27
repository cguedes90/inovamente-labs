'use client';

import { useState, useEffect, useRef } from 'react';
import Icon from './IconSystem';

// Componente para estatísticas animadas
export function AnimatedStats({
  stats,
  duration = 2000,
  startOnView = true
}: {
  stats: Array<{
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    icon?: string;
    color?: string;
  }>;
  duration?: number;
  startOnView?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(!startOnView);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 50);
      
      return setInterval(() => {
        setAnimatedValues(prev => {
          const newValues = [...prev];
          if (newValues[index] < stat.value) {
            newValues[index] = Math.min(newValues[index] + increment, stat.value);
          }
          return newValues;
        });
      }, 50);
    });

    const timeout = setTimeout(() => {
      intervals.forEach(clearInterval);
    }, duration);

    return () => {
      intervals.forEach(clearInterval);
      clearTimeout(timeout);
    };
  }, [isVisible, stats, duration]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <span className="text-2xl" style={{ color: stat.color }}>
                {stat.icon || '📊'}
              </span>
            </div>
          </div>
          <div 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: stat.color }}
          >
            {stat.prefix}{Math.round(animatedValues[index]).toLocaleString()}{stat.suffix}
          </div>
          <div className="text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Componente para barras de progresso
export function ProgressBar({
  items,
  showPercentage = true,
  height = 8,
  animated = true
}: {
  items: Array<{
    label: string;
    value: number;
    maxValue?: number;
    color?: string;
  }>;
  showPercentage?: boolean;
  height?: number;
  animated?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {items.map((item, index) => {
        const percentage = ((item.value / (item.maxValue || 100)) * 100);
        
        return (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
              {showPercentage && (
                <span className="text-sm text-gray-500">
                  {percentage.toFixed(0)}%
                </span>
              )}
            </div>
            <div 
              className="w-full bg-gray-200 rounded-full overflow-hidden"
              style={{ height }}
            >
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  animated ? 'transform' : ''
                }`}
                style={{
                  width: isVisible ? `${percentage}%` : '0%',
                  backgroundColor: item.color || '#3B82F6'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Componente para gráfico de comparação
export function ComparisonChart({
  title,
  items,
  type = 'bar'
}: {
  title: string;
  items: Array<{
    label: string;
    value: number;
    color?: string;
  }>;
  type?: 'bar' | 'circle';
}) {
  const maxValue = Math.max(...items.map(item => item.value));

  if (type === 'circle') {
    return (
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-8">{title}</h3>
        <div className="flex justify-center items-end space-x-8">
          {items.map((item, index) => {
            const size = 60 + (item.value / maxValue) * 80; // 60px to 140px
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="rounded-full flex items-center justify-center text-white font-bold mb-3"
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: item.color || '#3B82F6',
                    fontSize: `${size / 6}px`
                  }}
                >
                  {item.value}
                </div>
                <span className="text-sm text-gray-600 max-w-20 text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => {
          const width = (item.value / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center">
              <div className="w-24 text-sm text-gray-600 text-right pr-4">
                {item.label}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2 text-white text-sm font-medium"
                  style={{
                    width: `${width}%`,
                    backgroundColor: item.color || '#3B82F6'
                  }}
                >
                  {width > 20 && item.value}
                </div>
                {width <= 20 && (
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-700">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente para timeline interativa
export function InteractiveTimeline({
  events,
  direction = 'vertical'
}: {
  events: Array<{
    date: string;
    title: string;
    description: string;
    icon?: string;
    color?: string;
    image?: string;
  }>;
  direction?: 'vertical' | 'horizontal';
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (direction === 'horizontal') {
    return (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded">
          <div 
            className="h-full bg-blue-500 rounded transition-all duration-500"
            style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
          />
        </div>
        
        {/* Events */}
        <div className="flex justify-between">
          {events.map((event, index) => (
            <div 
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div 
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center mb-4 z-10
                  transition-all duration-300
                  ${index <= activeIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}
                `}
              >
                <span className="text-sm">{event.icon || index + 1}</span>
              </div>
              
              <div className="text-center max-w-32">
                <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                <div className="font-semibold text-gray-900 text-sm mb-2">
                  {event.title}
                </div>
                {index === activeIndex && (
                  <div className="text-xs text-gray-600">
                    {event.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 rounded">
        <div 
          className="w-full bg-blue-500 rounded transition-all duration-500"
          style={{ height: `${((activeIndex + 1) / events.length) * 100}%` }}
        />
      </div>
      
      {/* Events */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-12">
            <div 
              className={`
                absolute -left-2 w-8 h-8 rounded-full flex items-center justify-center
                cursor-pointer transition-all duration-300
                ${index <= activeIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}
              `}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-sm">{event.icon || index + 1}</span>
            </div>
            
            <div 
              className={`
                p-4 rounded-lg border transition-all duration-300
                ${index === activeIndex ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}
              `}
            >
              <div className="text-sm text-gray-500 mb-1">{event.date}</div>
              <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
              
              {event.image && (
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="mt-4 w-full h-32 object-cover rounded"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para processo step-by-step
export function ProcessSteps({
  steps,
  currentStep = 0,
  interactive = false
}: {
  steps: Array<{
    title: string;
    description: string;
    icon?: string;
    duration?: string;
    details?: string[];
  }>;
  currentStep?: number;
  interactive?: boolean;
}) {
  const [activeStep, setActiveStep] = useState(currentStep);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`
            relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
            ${index === activeStep 
              ? 'border-blue-500 bg-blue-50 shadow-lg' 
              : index < activeStep 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-200 bg-white hover:border-gray-300'
            }
          `}
          onClick={() => interactive && setActiveStep(index)}
        >
          {/* Step number */}
          <div className="absolute -top-4 left-6">
            <div 
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${index === activeStep 
                  ? 'bg-blue-500 text-white' 
                  : index < activeStep 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-300 text-gray-600'
                }
              `}
            >
              {index < activeStep ? '✓' : index + 1}
            </div>
          </div>

          {/* Arrow to next step (not on last step) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              →
            </div>
          )}

          {/* Step content */}
          <div className="mt-4">
            {step.icon && (
              <div className="text-3xl mb-3">{step.icon}</div>
            )}
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            
            {step.duration && (
              <div className="text-sm text-blue-600 font-semibold mb-3">
                ⏱️ {step.duration}
              </div>
            )}
            
            <p className="text-gray-600 text-sm mb-4">
              {step.description}
            </p>

            {/* Step details */}
            {step.details && index === activeStep && (
              <ul className="space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-xs text-gray-500 flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnimatedStats;