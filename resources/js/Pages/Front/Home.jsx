import { Head } from '@inertiajs/react';
import FrontNavbar from '@/Components/Front/FrontNavbar';
import FrontFooter from '@/Components/Front/FrontFooter';
import HeroSection from '@/Components/Front/HeroSection';
import IntroSection from '@/Components/Front/IntroSection';
import ServicesSection from '@/Components/Front/ServicesSection';
import ProjectsSection from '@/Components/Front/ProjectsSection';
import ProcessSection from '@/Components/Front/ProcessSection';
import WhySection from '@/Components/Front/WhySection';
import TestimonialsSection from '@/Components/Front/TestimonialsSection';
import FaqSection from '@/Components/Front/FaqSection';
import LeadCtaSection from '@/Components/Front/LeadCtaSection';
import '../../../css/front.css';

export default function Home() {
    return (
        <div className="qw-front">
            <Head title="Quality Work Interior">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <FrontNavbar />
            <main>
                <HeroSection />
                <IntroSection />
                <ServicesSection />
                <ProjectsSection />
                <ProcessSection />
                <WhySection />
                <TestimonialsSection />
                <FaqSection />
                <LeadCtaSection />
            </main>
            <FrontFooter />
        </div>
    );
}
