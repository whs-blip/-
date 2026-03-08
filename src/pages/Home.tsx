import { Hero } from '../components/home/Hero';
import { MarqueeBand } from '../components/home/MarqueeBand';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { DynastyGallery } from '../components/home/DynastyGallery';
import { WorkflowSection } from '../components/home/WorkflowSection';
import { PricingSection } from '../components/home/PricingSection';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <MarqueeBand />
      <FeaturesSection />
      <DynastyGallery />
      <WorkflowSection />
      <PricingSection />
    </div>
  );
}
