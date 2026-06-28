import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { aboutStoryParagraphs, licenceTags } from '@/data/aboutData';

export default function AboutStorySection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        scope.querySelectorAll('[data-reveal]').forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 28, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 84%', once: true },
                    delay: i * 0.06,
                },
            );
        });
    });

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
                    <div style={{ position: 'relative', height: 520 }}>
                        <div style={{ position: 'absolute', right: 0, top: 0, width: '74%', height: '66%', borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(-45deg,#D4CFC6,#D4CFC6 6px,#DDD8CF 6px,#DDD8CF 28px)' }}>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(20,17,15,.12)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(20,17,15,.18)', letterSpacing: '.1em', textTransform: 'uppercase' }}>team at work</span>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '68%', height: '62%', borderRadius: 18, overflow: 'hidden', background: 'repeating-linear-gradient(-45deg,#C4A882,#C4A882 6px,#CEBFA0 6px,#CEBFA0 28px)', boxShadow: '0 24px 60px -12px rgba(20,17,15,.22)' }}>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(255,255,255,.22)', letterSpacing: '.1em', textTransform: 'uppercase' }}>completed project</span>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: '44%', right: '2%', background: 'var(--ink)', borderRadius: 12, padding: '14px 20px', boxShadow: '0 12px 32px -6px rgba(20,17,15,.3)' }}>
                            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', color: 'var(--brass)', marginBottom: 3, letterSpacing: '.04em' }}>Reg. UEN</div>
                            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.85rem', color: 'var(--text-onDark)', letterSpacing: '.04em' }}>202531526C</div>
                        </div>
                    </div>

                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18 }}>Company Story</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.8vw,2.6rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 28 }}>
                            A decade spent getting renovation right.
                        </h2>
                        {aboutStoryParagraphs.map((para) => (
                            <p key={para.slice(0, 40)} data-reveal style={{ fontFamily: "'Inter',sans-serif", fontSize: '.98rem', lineHeight: 1.82, color: 'var(--text-muted)', marginBottom: 20 }}>{para}</p>
                        ))}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
                            {licenceTags.map((tag) => (
                                <span key={tag} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', fontWeight: 500, color: 'var(--text-muted)', background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 999, padding: '5px 14px' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
