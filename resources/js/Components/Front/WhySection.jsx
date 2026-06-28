import { Link } from '@inertiajs/react';
import { whyUs } from '@/data/homeData';

function WhyIcon({ icon }) {
    const props = {
        width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
        stroke: 'var(--brass)', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round',
    };
    const icons = {
        shield: <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        clock: <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        home: <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        check: <svg {...props}><polyline points="20 6 9 17 4 12" /></svg>,
        map: <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        tag: <svg {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
    };
    return icons[icon] || null;
}

export default function WhySection() {
    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
                    <div className="why-sticky" style={{ position: 'sticky', top: 100 }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Why Us</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3vw,2.8rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 24 }}>
                            The case for Quality Work
                        </h2>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.9rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                            We don&apos;t just renovate spaces — we build long-term trust with every homeowner and business we serve.
                        </p>
                        <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)', marginTop: 24 }}>
                            About the company <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>

                    <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        {whyUs.map((item) => (
                            <div
                                key={item.icon}
                                className="why-card"
                                style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 14, padding: '28px 24px' }}
                            >
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(176,137,79,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                                    <WhyIcon icon={item.icon} />
                                </div>
                                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: '.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: 7 }}>{item.title}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.8rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
