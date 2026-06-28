import { Head } from '@inertiajs/react';
import FrontNavbar from '@/Components/Front/FrontNavbar';
import FrontFooter from '@/Components/Front/FrontFooter';
import FrontScrollRefresh from '@/Components/Front/FrontScrollRefresh';
import ServiceDetailHeroSection from '@/Components/Front/ServiceDetailHeroSection';
import ServiceDetailOverviewSection from '@/Components/Front/ServiceDetailOverviewSection';
import ServiceDetailGallerySection from '@/Components/Front/ServiceDetailGallerySection';
import ServiceDetailProcessSection from '@/Components/Front/ServiceDetailProcessSection';
import ServiceDetailRelatedSection from '@/Components/Front/ServiceDetailRelatedSection';
import ServiceDetailLeadCtaSection from '@/Components/Front/ServiceDetailLeadCtaSection';
import { getServiceDetail, getRelatedServices } from '@/data/serviceDetailData';
import '../../../../css/front.css';

export default function ServicesPage({ slug }) {
    const service = getServiceDetail(slug);

    if (!service) {
        return (
            <div className="qw-front">
                <Head title="Service Not Found" />
                <FrontNavbar variant="solid" activePath="/services" />
                <main style={{ paddingTop: 120, paddingBottom: 80, textAlign: 'center' }}>
                    <div className="qw-container">
                        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: '2rem', marginBottom: 16 }}>Service not found</h1>
                        <a href="/services" style={{ color: 'var(--brass)', fontFamily: "'Inter',sans-serif" }}>← Back to all services</a>
                    </div>
                </main>
                <FrontFooter />
            </div>
        );
    }

    const related = getRelatedServices(service.relatedSlugs);

    return (
        <div className="qw-front">
            <Head title={`${service.name} — Quality Work Interior`}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <FrontNavbar variant="solid" activePath="/services" />
            <FrontScrollRefresh />
            <main>
                <ServiceDetailHeroSection service={service} />
                <ServiceDetailOverviewSection service={service} />
                <ServiceDetailGallerySection service={service} />
                <ServiceDetailProcessSection service={service} />
                <ServiceDetailRelatedSection related={related} />
                <ServiceDetailLeadCtaSection service={service} />
            </main>
            <FrontFooter />
        </div>
    );
}
