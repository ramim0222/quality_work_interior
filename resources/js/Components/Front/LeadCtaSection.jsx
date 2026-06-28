import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function LeadCtaSection() {
    return (
        <section style={{ background: 'var(--ink)', padding: 'clamp(80px,12vh,140px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {[
                ['-200px', '-200px', '560px', 0.07],
                ['-120px', '-120px', '340px', 0.1],
                [null, null, '500px', 0.06, '-180px', '-180px'],
            ].map((r, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: r[0],
                        right: r[1],
                        bottom: r[4],
                        left: r[5],
                        width: r[2],
                        height: r[2],
                        borderRadius: '50%',
                        border: `1px solid rgba(176,137,79,${r[3]})`,
                        pointerEvents: 'none',
                    }}
                />
            ))}
            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: 680, margin: '0 auto' }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 20 }}>Get Started Today</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.6rem)', lineHeight: 1, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', marginBottom: 16 }}>
                        Ready to renovate?<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.5)' }}>Let&apos;s talk.</em>
                    </h2>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.95rem', color: 'rgba(246,242,236,.42)', marginBottom: 40, lineHeight: 1.7 }}>
                        Our team typically responds within 1 hour. Free site assessment, no obligation.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote"
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.95rem', padding: '15px 30px', borderRadius: 999 }}
                        >
                            <WhatsAppIcon size={18} color="#fff" />
                            WhatsApp Us Now
                        </a>
                        <a
                            href="tel:+6598683650"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'rgba(246,242,236,.72)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.95rem', padding: '15px 26px', borderRadius: 999, border: '1.5px solid rgba(246,242,236,.18)' }}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                            Call 9868 3650
                        </a>
                        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'rgba(246,242,236,.4)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.87rem', padding: '15px 20px' }}>
                            Or use the form <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.25)', marginTop: 32, letterSpacing: '.04em' }}>
                        Serving Sengkang · Punggol · Hougang · Tampines · Jurong · CBD · and all Singapore
                    </p>
                </div>
            </div>
        </section>
    );
}
