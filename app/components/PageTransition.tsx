'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      {/* Transition overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-150 pointer-events-none'
        }`}
      />
      
      {/* Page content */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'scale-95 opacity-50' 
            : 'scale-100 opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
} 