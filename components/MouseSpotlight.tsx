'use client';

import { useEffect } from 'react';

export default function MouseSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById('spotlight');
      if (spotlight) {
        spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="spotlight"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background:
          'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(29, 78, 216, 0.15), transparent 80%)',
      }}
    ></div>
  );
}

