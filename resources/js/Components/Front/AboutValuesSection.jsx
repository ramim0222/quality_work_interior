import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import AboutValueIcon from '@/Components/Front/AboutValueIcon';
import { aboutValues } from '@/data/aboutData';

export default function AboutValuesSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        const cards = scope.querySelectorAll('.about-val-card');
        gsap.from(cards, {
            y: 40,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: scope.querySelector('.about-val-grid'), start: 'top 74%', once: true },
        });
    });

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper-2)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>What We Stand For</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3vw,2.8rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                        Four values, every<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>single project</em>
                    </h2>
                </div>
                <div className="about-val-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
                    {aboutValues.map((val) => (
                        <div key={val.title} className="about-val-card">
                            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(176,137,79,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                                <AboutValueIcon icon={val.icon} />
                            </div>
                            <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 10 }}>{val.title}</h3>
                            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.83rem', lineHeight: 1.68, color: 'var(--text-muted)' }}>{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
