'use client';

import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  style?: React.CSSProperties;
  hoverStyle?: {
    transform?: string;
    boxShadow?: string;
  };
}

export default function HoverCard({ children, style, hoverStyle }: HoverCardProps) {
  return (
    <div
      style={style}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        if (hoverStyle?.transform) {
          target.style.transform = hoverStyle.transform;
        }
        if (hoverStyle?.boxShadow) {
          target.style.boxShadow = hoverStyle.boxShadow;
        }
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = style?.transform || 'translateY(0)';
        target.style.boxShadow = style?.boxShadow || '0 20px 60px rgba(0, 0, 0, 0.1)';
      }}
    >
      {children}
    </div>
  );
}
