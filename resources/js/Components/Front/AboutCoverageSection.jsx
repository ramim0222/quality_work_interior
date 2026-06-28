import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { coverageAreas } from '@/data/aboutData';

export default function AboutCoverageSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        scope.querySelectorAll('[data-area]').forEach((el, i) => {
            gsap.fromTo(
                el,
                { x: -20, autoAlpha: 0 },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                    delay: i * 0.055,
                },
            );
        });
    });

    return (
        <section ref={sectionRef} style={{ background: 'var(--ink)', padding: 'clamp(80px,12vh,140px) 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -200, right: -200, width: 580, height: 580, borderRadius: '50%', border: '1px solid rgba(176,137,79,.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -150, left: -150, width: 420, height: 420, borderRadius: '50%', border: '1px solid rgba(176,137,79,.05)', pointerEvents: 'none' }} />
            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="about-cover-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18 }}>Coverage</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3vw,2.8rem)', lineHeight: 1.04, color: 'var(--text-onDark)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 24 }}>
                            We come to you,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.5)' }}>island-wide.</em>
                        </h2>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.95rem', lineHeight: 1.75, color: 'rgba(246,242,236,.5)', marginBottom: 36 }}>
                            Our base is at Jalan Besar, but our teams operate across all planning regions of Singapore — from Sengkang and Punggol in the north-east to Jurong and Tuas in the west, CBD in the centre, and everywhere in between.
                        </p>
                        <div style={{ background: 'rgba(246,242,236,.04)', border: '1px solid var(--line-dark)', borderRadius: 14, padding: '20px 24px' }}>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 600, color: 'rgba(246,242,236,.3)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>Main office</div>
                            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', color: 'rgba(246,242,236,.65)', lineHeight: 1.65 }}>Jalan Besar / Sim Lim Tower area<br />Singapore · Mon–Sun 8am–11pm</p>
                            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--line-dark)' }}>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 600, color: 'rgba(246,242,236,.3)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 6 }}>Also serves</div>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.8rem', color: 'rgba(246,242,236,.45)' }}>194 Rivervale Drive · Singapore 540194</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 600, color: 'rgba(246,242,236,.28)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 8 }}>Areas we serve</div>
                        <div>
                            {coverageAreas.map((area) => (
                                <div key={area.name} className="about-area-item" data-area>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brass)', flexShrink: 0 }} />
                                    <div style={{ flex: 1 }}>
                                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', fontWeight: 500, color: 'var(--text-onDark)' }}>{area.name}</span>
                                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.35)', marginLeft: 10 }}>{area.detail}</span>
                                    </div>
                                    {area.highlight && (
                                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'var(--brass)', background: 'rgba(176,137,79,.15)', borderRadius: 999, padding: '3px 9px', letterSpacing: '.06em' }}>Primary</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
