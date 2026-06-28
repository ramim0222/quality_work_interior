import FrontLayout from '@/Layouts/FrontLayout';
import AboutHeroSection from '@/Components/Front/AboutHeroSection';
import AboutStatsSection from '@/Components/Front/AboutStatsSection';
import AboutStorySection from '@/Components/Front/AboutStorySection';
import AboutValuesSection from '@/Components/Front/AboutValuesSection';
import AboutTeamSection from '@/Components/Front/AboutTeamSection';
import AboutCoverageSection from '@/Components/Front/AboutCoverageSection';
import AboutLeadCtaSection from '@/Components/Front/AboutLeadCtaSection';

export default function About() {
    return (
        <FrontLayout title="About — Quality Work Interior" activePath="/about">
            <AboutHeroSection />
            <AboutStatsSection />
            <AboutStorySection />
            <AboutValuesSection />
            <AboutTeamSection />
            <AboutCoverageSection />
            <AboutLeadCtaSection />
        </FrontLayout>
    );
}
