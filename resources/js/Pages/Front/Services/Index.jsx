import { Head } from '@inertiajs/react';
import FrontNavbar from '@/Components/Front/FrontNavbar';
import FrontFooter from '@/Components/Front/FrontFooter';
import FrontScrollRefresh from '@/Components/Front/FrontScrollRefresh';
import ServicesHeroSection from '@/Components/Front/ServicesHeroSection';
import ServicesGridSection from '@/Components/Front/ServicesGridSection';
import ServicesReassuranceStrip from '@/Components/Front/ServicesReassuranceStrip';
import ServicesLeadCtaSection from '@/Components/Front/ServicesLeadCtaSection';
import '../../../../css/front.css';

export default function ServicesIndex() {
    return (
        <div className="qw-front">
            <Head title="Services — Quality Work Interior">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <FrontNavbar variant="solid" activePath="/services" />
            <FrontScrollRefresh />
            <main>
                <ServicesHeroSection />
                <ServicesGridSection />
                <ServicesReassuranceStrip />
                <ServicesLeadCtaSection />
            </main>
            <FrontFooter />
        </div>
    );
}
