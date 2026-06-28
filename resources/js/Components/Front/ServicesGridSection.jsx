import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { serviceCatalog } from '@/data/servicesData';

export default function ServicesGridSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        const cards = scope.querySelectorAll('.services-index-card');
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 48, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 88%', once: true },
                    delay: (i % 4) * 0.07,
                },
            );
        });
    });

    return (
        <section ref={sectionRef} id="svc-grid-section" style={{ background: 'var(--paper)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 52 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--brass)', letterSpacing: '.08em' }}>12 services</span>
                    <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', color: 'var(--text-muted)' }}>Scroll to explore all</span>
                </div>

                <div id="svc-grid" className="services-index-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
                    {serviceCatalog.map((svc) => (
                        <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="services-index-card"
                        >
                            <div className="thumb-wrap">
                                <div
                                    className="thumb-inner"
                                    style={{ background: `repeating-linear-gradient(-45deg,${svc.bg1},${svc.bg1} 6px,${svc.bg2} 6px,${svc.bg2} 26px)` }}
                                >
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                                            </svg>
                                        </div>
                                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                                            photo · {svc.slug}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(20,17,15,.55)', backdropFilter: 'blur(6px)', borderRadius: 6, padding: '4px 10px' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem', fontWeight: 500, color: 'var(--brass)' }}>{svc.num}</span>
                                </div>
                            </div>
                            <div style={{ padding: '22px 22px 20px' }}>
                                <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.08rem', color: 'var(--text)', lineHeight: 1.22, letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 8 }}>{svc.name}</h2>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.8rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: 18 }}>{svc.desc}</p>
                                <span className="arrow-link">
                                    View details
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
