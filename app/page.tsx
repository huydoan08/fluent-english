'use client';

import { GoToTop } from '@/components/go-to-top';
import { HeroSection } from '@/components/hero-section';
import { FeatureCards } from '@/components/feature-cards';
import { CtaSection } from '@/components/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeatureCards />
      <CtaSection />
      <GoToTop />
    </div>
  );
}
