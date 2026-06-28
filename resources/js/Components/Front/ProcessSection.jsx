import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { processSteps } from '@/data/homeData';

export default function ProcessSection() {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1, transformOrigin: 'left center', ease: 'power2.inOut',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 58%', end: 'bottom 62%', scrub: 0.6 },
                },
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="process-section" style={{ background: 'var(--paper)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div style={{ textAlign: 'center', marginBottom: 72 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>How It Works</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3.2vw,3rem)', lineHeight: 1.02, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                        Four steps to a<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>transformed space</em>
                    </h2>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 27, left: 'calc(12.5%)', right: 'calc(12.5%)', height: 1, background: 'var(--line)' }} />
                    <div ref={lineRef} style={{ position: 'absolute', top: 27, left: 'calc(12.5%)', right: 'calc(12.5%)', height: 1, background: 'var(--brass)', transformOrigin: 'left', transform: 'scaleX(0)' }} />

                    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, position: 'relative' }}>
                        {processSteps.map((step) => (
                            <div key={step.num} style={{ textAlign: 'center' }}>
                                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--brass)', margin: '0 auto 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, boxShadow: '0 0 0 8px var(--paper)' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', fontWeight: 500, color: '#FFF8EE' }}>{step.num}</span>
                                </div>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 10 }}>{step.title}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: 60 }}>
                    <a
                        href="https://wa.me/6598683650?text=I'd%20like%20to%20start%20a%20project"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ink)', color: 'var(--text-onDark)', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.875rem', padding: '13px 26px', borderRadius: 999 }}
                    >
                        Start Your Project Today
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
