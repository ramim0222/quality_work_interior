import FrontLayout from '@/Layouts/FrontLayout';
import ServiceDetailHeroSection from '@/Components/Front/ServiceDetailHeroSection';
import ServiceDetailOverviewSection from '@/Components/Front/ServiceDetailOverviewSection';
import ServiceDetailGallerySection from '@/Components/Front/ServiceDetailGallerySection';
import ServiceDetailProcessSection from '@/Components/Front/ServiceDetailProcessSection';
import ServiceDetailRelatedSection from '@/Components/Front/ServiceDetailRelatedSection';
import ServiceDetailLeadCtaSection from '@/Components/Front/ServiceDetailLeadCtaSection';
import { getServiceDetail, getRelatedServices } from '@/data/serviceDetailData';

export default function ServicesPage({ slug }) {
    const service = getServiceDetail(slug);

    if (!service) {
        return (
            <FrontLayout
                title="Service Not Found"
                navbarVariant="solid"
                activePath="/services"
                scrollRefresh={false}
                mainProps={{ style: { paddingTop: 120, paddingBottom: 80, textAlign: 'center' } }}
            >
                <div className="qw-container">
                    <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: '2rem', marginBottom: 16 }}>Service not found</h1>
                    <a href="/services" style={{ color: 'var(--brass)', fontFamily: "'Inter',sans-serif" }}>← Back to all services</a>
                </div>
            </FrontLayout>
        );
    }

    const related = getRelatedServices(service.relatedSlugs);

    return (
        <FrontLayout
            title={`${service.name} — Quality Work Interior`}
            navbarVariant="solid"
            activePath="/services"
        >
            <ServiceDetailHeroSection service={service} />
            <ServiceDetailOverviewSection service={service} />
            <ServiceDetailGallerySection service={service} />
            <ServiceDetailProcessSection service={service} />
            <ServiceDetailRelatedSection related={related} />
            <ServiceDetailLeadCtaSection service={service} />
        </FrontLayout>
    );
}
