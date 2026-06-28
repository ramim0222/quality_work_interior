import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function AboutLeadCtaSection() {
    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(80px,10vh,120px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="qw-container" style={{ position: 'relative', zIndex: 1, maxWidth: 660 }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18 }}>Get In Touch</span>
                <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.4rem)', lineHeight: 1, color: 'var(--text)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', marginBottom: 16 }}>
                    Ready to renovate?<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>Let&apos;s talk.</em>
                </h2>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.92rem', color: 'var(--text-muted)', marginBottom: 36, lineHeight: 1.7 }}>
                    Free site assessment · Written quote · No obligation
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote"
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.9rem', padding: '14px 28px', borderRadius: 999 }}
                    >
                        <WhatsAppIcon size={16} color="#fff" />
                        WhatsApp Us Now
                    </a>
                    <a
                        href="tel:+6598683650"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.9rem', padding: '14px 24px', borderRadius: 999, border: '1.5px solid var(--line)' }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                        Call 9868 3650
                    </a>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--text-muted)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.85rem', padding: '14px 16px' }}>
                        Use the form
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
