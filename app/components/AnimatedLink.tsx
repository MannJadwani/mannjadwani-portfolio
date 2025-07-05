'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedLink({ href, children, className, onClick }: AnimatedLinkProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    // Start zoom animation
    setIsAnimating(true);
    
    // Create zoom effect
    const zoomOverlay = document.createElement('div');
    zoomOverlay.className = 'fixed inset-0 z-[100] bg-black opacity-0 transition-all duration-700 ease-in-out';
    zoomOverlay.style.transform = 'scale(0.8)';
    document.body.appendChild(zoomOverlay);

    // Animate zoom in
    setTimeout(() => {
      zoomOverlay.style.opacity = '1';
      zoomOverlay.style.transform = 'scale(1.2)';
    }, 50);

    // Navigate after animation
    setTimeout(() => {
      router.push(href);
      
      // Clean up overlay after navigation
      setTimeout(() => {
        if (document.body.contains(zoomOverlay)) {
          document.body.removeChild(zoomOverlay);
        }
        setIsAnimating(false);
      }, 100);
    }, 400);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} ${isAnimating ? 'pointer-events-none' : ''}`}
    >
      {children}
    </Link>
  );
} 