import FrontLayout from '@/Layouts/FrontLayout';
import ContactHeroSection from '@/Components/Front/ContactHeroSection';
import ContactMainSection from '@/Components/Front/ContactMainSection';

export default function Contact() {
    return (
        <FrontLayout title="Contact — Quality Work Interior" activePath="/contact">
            <ContactHeroSection />
            <ContactMainSection />
        </FrontLayout>
    );
}
