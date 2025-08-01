'use client';

import { useEffect, useState } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface ToastContextType {
  addToast: (message: string, type: Toast['type'], duration?: number) => void;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: Toast['type'], duration: number = 5000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  const getToastStyles = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-400';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-red-600 border-red-400';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 border-yellow-400';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-400';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 border-gray-400';
    }
  };

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            ${getToastStyles(toast.type)}
            border backdrop-blur-lg text-white px-6 py-4 rounded-lg shadow-2xl
            transform transition-all duration-500 ease-in-out
            hover:scale-105 cursor-pointer
            animate-slide-in-right
          `}
          onClick={() => removeToast(toast.id)}
        >
          <div className="flex items-center space-x-3">
            <span className="text-lg">{getIcon(toast.type)}</span>
            <span className="font-medium">{toast.message}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                removeToast(toast.id);
              }}
              className="ml-auto text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
