import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';

export default function IntroSection() {
    const statYearsRef = useRef(null);
    const statJobsRef = useRef(null);
    const statServicesRef = useRef(null);
    const statHoursRef = useRef(null);
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, () => {
        const counters = [
            { ref: statYearsRef, target: 8, suffix: '+' },
            { ref: statJobsRef, target: 1200, suffix: '+' },
            { ref: statServicesRef, target: 12, suffix: '' },
        ];
        counters.forEach(({ ref, target, suffix }) => {
            const el = ref.current;
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
                val: target,
                duration: 2.2,
                ease: 'power2.out',
                onUpdate: () => { el.textContent = Math.floor(obj.val) + suffix; },
                scrollTrigger: { trigger: el, start: 'top 82%', once: true },
            });
        });

        if (statHoursRef.current) {
            gsap.from(statHoursRef.current, {
                opacity: 0,
                y: 16,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: statHoursRef.current, start: 'top 82%', once: true },
            });
        }
    });

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 20 }}>
                            Our Craft
                        </span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3.2vw,3rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 28 }}>
                            Every space holds<br />a story waiting<br />to be <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>told well.</em>
                        </h2>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1rem', lineHeight: 1.78, color: 'var(--text-muted)', maxWidth: 440, marginBottom: 24 }}>
                            We work across HDB flats, landed homes, commercial offices, retail boutiques, and F&amp;B spaces — bringing the same care for craftsmanship and commitment to timelines regardless of project size.
                        </p>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1rem', lineHeight: 1.78, color: 'var(--text-muted)', maxWidth: 440 }}>
                            Licensed, insured, and trusted by over 1,200 Singapore households and businesses since 2016.
                        </p>
                        <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)', marginTop: 32 }}>
                            Our Story
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>

                    <div style={{ position: 'relative', height: 480 }}>
                        <div style={{ position: 'absolute', right: 0, top: 0, width: '72%', height: '68%', borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(-45deg,#E0DAD0,#E0DAD0 6px,#E8E2D8 6px,#E8E2D8 28px)' }}>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(20,17,15,.15)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(20,17,15,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>after</span>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '68%', height: '62%', borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(-45deg,#D4CFC6,#D4CFC6 6px,#DDD8CF 6px,#DDD8CF 28px)', boxShadow: '0 20px 60px -12px rgba(20,17,15,.22)' }}>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(20,17,15,.15)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(20,17,15,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>before</span>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: '32%', right: '2%', background: 'var(--ink)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 12px 32px -6px rgba(20,17,15,.3)' }}>
                            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--brass)', marginBottom: 2 }}>avg. project</div>
                            <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.4rem', color: 'var(--text-onDark)', fontOpticalSizing: 'auto' }}>12 days</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', background: 'var(--paper-2)' }}>
                    {[
                        { ref: statYearsRef, id: 'stat-years', val: '8+', label: 'Years' },
                        { ref: statJobsRef, id: 'stat-jobs', val: '1200+', label: 'Jobs Done' },
                        { ref: statServicesRef, id: 'stat-services', val: '12', label: 'Services' },
                        { ref: statHoursRef, id: 'stat-hours', val: '24/7', label: 'Response' },
                    ].map((s, i) => (
                        <div key={s.id} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
                            <div ref={s.ref} style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '2.8rem', color: 'var(--brass)', lineHeight: 1, letterSpacing: '-.025em', fontOpticalSizing: 'auto' }}>
                                {s.val}
                            </div>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--text-muted)', marginTop: 8, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
