import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import CoursesSection from '@/components/sections/courses';
import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection from '@/components/sections/work';
import InterestsSection from '@/components/sections/interests';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <InterestsSection />
      <WorkSection />
      <ExperienceSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
