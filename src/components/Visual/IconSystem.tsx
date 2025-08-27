'use client';

import { SVGProps, CSSProperties } from 'react';

// Sistema de ícones SVG otimizado
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: keyof typeof icons;
  size?: number | string;
  color?: string;
  className?: string;
}

export function Icon({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '', 
  ...props 
}: IconProps) {
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color}
      className={className}
      {...props}
    />
  );
}

// Biblioteca de ícones SVG otimizada
const icons = {
  // Tecnologia
  code: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  
  mobile: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4zm5 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
    </svg>
  ),
  
  cloud: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
    </svg>
  ),
  
  automation: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  
  analytics: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),
  
  // Interface
  menu: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  ),
  
  close: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  ),
  
  check: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  
  arrow: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  ),
  
  // Comunicação
  email: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  
  phone: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  ),
  
  whatsapp: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
    </svg>
  ),
  
  // Negócios
  star: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
  
  users: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M16 7c0-2.76-2.24-5-5-5S6 4.24 6 7s2.24 5 5 5 5-2.24 5-5zM12 14c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
    </svg>
  ),
  
  trophy: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v6a1 1 0 01-1 1h-2v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"/>
    </svg>
  )
};

// Componente para ícones animados
export function AnimatedIcon({ 
  name, 
  animation = 'pulse',
  duration = '2s',
  ...props 
}: IconProps & {
  animation?: 'pulse' | 'spin' | 'bounce' | 'ping';
  duration?: string;
}) {
  const animationClasses = {
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    bounce: 'animate-bounce',
    ping: 'animate-ping'
  };

  return (
    <div 
      className={animationClasses[animation]}
      style={{ animationDuration: duration }}
    >
      <Icon name={name} {...props} />
    </div>
  );
}

// Componente para ícones com badge
export function IconWithBadge({
  name,
  badge,
  badgeColor = 'bg-red-500',
  badgePosition = 'top-right',
  ...props
}: IconProps & {
  badge?: string | number;
  badgeColor?: string;
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}) {
  const positionClasses = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1'
  };

  return (
    <div className="relative inline-block">
      <Icon name={name} {...props} />
      {badge && (
        <span 
          className={`
            absolute ${positionClasses[badgePosition]} 
            ${badgeColor} text-white text-xs rounded-full 
            min-w-[16px] h-4 flex items-center justify-center px-1
            border-2 border-white
          `}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

// Componente para grades de ícones
export function IconGrid({
  items,
  columns = 3,
  gap = 4,
  iconSize = 48,
  showLabels = true
}: {
  items: Array<{
    name: keyof typeof icons;
    label: string;
    description?: string;
    color?: string;
  }>;
  columns?: number;
  gap?: number;
  iconSize?: number;
  showLabels?: boolean;
}) {
  return (
    <div 
      className={`grid gap-${gap}`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          <div className="p-4 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
            <Icon 
              name={item.name} 
              size={iconSize} 
              color={item.color || 'currentColor'} 
            />
          </div>
          {showLabels && (
            <div className="mt-2">
              <div className="font-semibold text-gray-900">{item.label}</div>
              {item.description && (
                <div className="text-sm text-gray-500 mt-1">{item.description}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Componente para ícones inline com texto
export function InlineIcon({
  name,
  text,
  position = 'left',
  gap = 2,
  ...props
}: IconProps & {
  text: string;
  position?: 'left' | 'right';
  gap?: number;
}) {
  const gapClass = `gap-${gap}`;
  
  return (
    <div className={`flex items-center ${gapClass}`}>
      {position === 'left' && <Icon name={name} {...props} />}
      <span>{text}</span>
      {position === 'right' && <Icon name={name} {...props} />}
    </div>
  );
}

export default Icon;