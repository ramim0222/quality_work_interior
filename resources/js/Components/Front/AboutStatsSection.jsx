import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';

export default function AboutStatsSection() {
    const sectionRef = useRef(null);
    const yearsRef = useRef(null);
    const jobsRef = useRef(null);
    const servicesRef = useRef(null);

    useGsapContext(sectionRef, () => {
        [
            { ref: yearsRef, target: 8, suffix: '+' },
            { ref: jobsRef, target: 1200, suffix: '+' },
            { ref: servicesRef, target: 12, suffix: '' },
        ].forEach(({ ref, target, suffix }) => {
            const el = ref.current;
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => { el.textContent = Math.floor(obj.val) + suffix; },
                scrollTrigger: { trigger: el, start: 'top 82%', once: true },
            });
        });
    });

    const stats = [
        { ref: yearsRef, initial: '8+', label: 'Years' },
        { ref: jobsRef, initial: '1200+', label: 'Projects' },
        { ref: servicesRef, initial: '12', label: 'Services' },
        { ref: null, initial: '24/7', label: 'Response' },
    ];

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)' }}>
            <div className="qw-container">
                <div className="about-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid var(--line)' }}>
                    {stats.map(({ ref, initial, label }, i) => (
                        <div key={label} style={{ padding: '44px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
                            <div ref={ref} style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '3.2rem', color: 'var(--brass)', lineHeight: 1, letterSpacing: '-.025em', fontOpticalSizing: 'auto' }}>{initial}</div>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: 8, letterSpacing: '.12em', textTransform: 'uppercase' }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
