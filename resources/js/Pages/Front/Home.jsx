import FrontLayout from '@/Layouts/FrontLayout';
import HeroSection from '@/Components/Front/HeroSection';
import IntroSection from '@/Components/Front/IntroSection';
import ServicesSection from '@/Components/Front/ServicesSection';
import ProjectsSection from '@/Components/Front/ProjectsSection';
import ProcessSection from '@/Components/Front/ProcessSection';
import WhySection from '@/Components/Front/WhySection';
import TestimonialsSection from '@/Components/Front/TestimonialsSection';
import FaqSection from '@/Components/Front/FaqSection';
import LeadCtaSection from '@/Components/Front/LeadCtaSection';

export default function Home() {
    return (
        <FrontLayout title="Quality Work Interior">
            <HeroSection />
            <IntroSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <WhySection />
            <TestimonialsSection />
            <FaqSection />
            <LeadCtaSection />
        </FrontLayout>
    );
}
