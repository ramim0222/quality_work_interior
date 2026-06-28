import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { services } from '@/data/homeData';

export default function ServicesSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, () => {
        gsap.from('[data-reveal-card]', {
            y: 44,
            opacity: 0,
            stagger: 0.055,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 68%',
                once: true,
            },
        });
    });

    return (
        <section ref={sectionRef} id="services-section" style={{ background: 'var(--paper-2)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>What We Do</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3.2vw,3rem)', lineHeight: 1.02, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                            12 specialisations,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>one trusted team</em>
                        </h2>
                    </div>
                    <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)', flexShrink: 0, marginBottom: 6 }}>
                        All Services <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>

                <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
                    {services.map((svc) => (
                        <Link
                            key={svc.num}
                            href={`/services/${svc.slug}`}
                            className="svc-card"
                            data-reveal-card
                            style={{ display: 'block', background: 'var(--paper)', borderRadius: 14, border: '1px solid var(--line)', overflow: 'hidden' }}
                        >
                            <div style={{ height: 160, overflow: 'hidden' }}>
                                <div className="svc-thumb-inner" style={{ height: '100%', background: 'repeating-linear-gradient(-45deg,#E4DED5,#E4DED5 5px,#EAE4DC 5px,#EAE4DC 22px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(20,17,15,.12)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                            </div>
                            <div style={{ padding: '20px 20px 18px' }}>
                                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', fontWeight: 500, color: 'var(--brass)', marginBottom: 10, letterSpacing: '.04em' }}>{svc.num}</div>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.02rem', color: 'var(--text)', lineHeight: 1.22, letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 6 }}>{svc.name}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.75rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{svc.desc}</p>
                                <div className="svc-underline" style={{ height: 1.5, background: 'var(--brass)', marginTop: 16, borderRadius: 1 }} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
