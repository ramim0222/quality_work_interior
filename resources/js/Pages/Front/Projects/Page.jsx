import FrontLayout from '@/Layouts/FrontLayout';
import ProjectDetailHeroSection from '@/Components/Front/ProjectDetailHeroSection';
import ProjectDetailMetaSection from '@/Components/Front/ProjectDetailMetaSection';
import ProjectDetailWriteupSection from '@/Components/Front/ProjectDetailWriteupSection';
import ProjectDetailBeforeAfterSection from '@/Components/Front/ProjectDetailBeforeAfterSection';
import ProjectDetailGallerySection from '@/Components/Front/ProjectDetailGallerySection';
import ProjectDetailServicesUsedSection from '@/Components/Front/ProjectDetailServicesUsedSection';
import ProjectDetailNavSection from '@/Components/Front/ProjectDetailNavSection';
import ProjectDetailLeadCtaSection from '@/Components/Front/ProjectDetailLeadCtaSection';
import { getProjectDetail, getAdjacentProjects } from '@/data/projectDetailData';

export default function ProjectsPage({ slug }) {
    const project = getProjectDetail(slug);

    if (!project) {
        return (
            <FrontLayout
                title="Project Not Found"
                navbarVariant="solid"
                activePath="/projects"
                scrollRefresh={false}
                mainProps={{ style: { paddingTop: 120, paddingBottom: 80, textAlign: 'center' } }}
            >
                <div className="qw-container">
                    <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: '2rem', marginBottom: 16 }}>Project not found</h1>
                    <a href="/projects" style={{ color: 'var(--brass)', fontFamily: "'Inter',sans-serif" }}>← Back to all projects</a>
                </div>
            </FrontLayout>
        );
    }

    const { prev, next } = getAdjacentProjects(slug);

    return (
        <FrontLayout
            title={`${project.title} — Quality Work Interior`}
            navbarVariant="transparent"
            activePath="/projects"
        >
            <ProjectDetailHeroSection project={project} />
            <ProjectDetailMetaSection project={project} />
            <ProjectDetailWriteupSection project={project} />
            <ProjectDetailBeforeAfterSection project={project} />
            <ProjectDetailGallerySection project={project} />
            <ProjectDetailServicesUsedSection project={project} />
            <ProjectDetailNavSection prev={prev} next={next} />
            <ProjectDetailLeadCtaSection />
        </FrontLayout>
    );
}
