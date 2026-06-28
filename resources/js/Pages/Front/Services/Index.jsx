import FrontLayout from '@/Layouts/FrontLayout';
import ServicesHeroSection from '@/Components/Front/ServicesHeroSection';
import ServicesGridSection from '@/Components/Front/ServicesGridSection';
import ServicesReassuranceStrip from '@/Components/Front/ServicesReassuranceStrip';
import ServicesLeadCtaSection from '@/Components/Front/ServicesLeadCtaSection';

export default function ServicesIndex() {
    return (
        <FrontLayout title="Services — Quality Work Interior" activePath="/services">
            <ServicesHeroSection />
            <ServicesGridSection />
            <ServicesReassuranceStrip />
            <ServicesLeadCtaSection />
        </FrontLayout>
    );
}
