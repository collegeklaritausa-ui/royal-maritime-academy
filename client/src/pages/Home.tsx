/*
 * Royal Sovereign Design Theme - Home Page
 * - Full landing page with all sections
 * - Stunning visual design with gold and navy
 * - Complete maritime academy showcase
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import DepartmentsSection from '@/components/DepartmentsSection';
import FeaturedCoursesSection from '@/components/FeaturedCoursesSection';
import DirectorSection from '@/components/DirectorSection';
import ProgramsSection from '@/components/ProgramsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DepartmentsSection />
        <FeaturedCoursesSection />
        <DirectorSection />
        <ProgramsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
