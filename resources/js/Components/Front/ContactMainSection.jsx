import ContactFormSection from '@/Components/Front/ContactFormSection';
import ContactSidebarSection from '@/Components/Front/ContactSidebarSection';

export default function ContactMainSection() {
    return (
        <section style={{ background: 'var(--paper)', padding: 'clamp(64px,8vh,100px) 0 clamp(80px,12vh,140px)' }}>
            <div className="qw-container">
                <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, alignItems: 'start' }}>
                    <ContactFormSection />
                    <ContactSidebarSection />
                </div>
            </div>
        </section>
    );
}
