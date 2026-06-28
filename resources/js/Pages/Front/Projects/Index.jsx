import FrontLayout from '@/Layouts/FrontLayout';
import ProjectsHeroSection from '@/Components/Front/ProjectsHeroSection';
import ProjectsGridSection from '@/Components/Front/ProjectsGridSection';
import ProjectsLeadCtaSection from '@/Components/Front/ProjectsLeadCtaSection';

export default function ProjectsIndex() {
    return (
        <FrontLayout title="Projects — Quality Work Interior" activePath="/projects">
            <ProjectsHeroSection />
            <ProjectsGridSection />
            <ProjectsLeadCtaSection />
        </FrontLayout>
    );
}
