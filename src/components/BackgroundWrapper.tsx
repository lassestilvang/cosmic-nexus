'use client';

import dynamic from 'next/dynamic';

// Lazy load ParticlesBackground for better performance
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
  loading: () => null
});

export default function BackgroundWrapper() {
  return <ParticlesBackground />;
}