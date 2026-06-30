import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import MissionSection from '../components/home/MissionSection';
import USAMapSection from '../components/home/USAMapSection';
import ServicesSection from '../components/home/ServicesSection';
import StorySection from '../components/home/StorySection';
import WaterFlowSection from '../components/home/WaterFlowSection';
import NewsSection from '../components/home/NewsSection';

export default function Home() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <MissionSection />
      <USAMapSection />
      <ServicesSection />
      <StorySection />
      <WaterFlowSection />
      <NewsSection />
    </>
  );
}
