import { useRef } from 'react';
import { Link } from '@inertiajs/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { projects } from '@/data/homeData';

export default function ProjectsSection() {
    const pinRef = useRef(null);
    const trackRef = useRef(null);

    useGsapContext(pinRef, () => {
        const track = trackRef.current;
        const pin = pinRef.current;
        if (!track || !pin) return;

        ScrollTrigger.refresh(true);
        const dist = track.scrollWidth - pin.offsetWidth + 160;
        if (dist > 0) {
            gsap.to(track, {
                x: -dist,
                ease: 'none',
                scrollTrigger: {
                    trigger: pin,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${dist + 100}`,
                    invalidateOnRefresh: true,
                },
            });
        }
    });

    return (
        <section ref={pinRef} id="projects-pin" style={{ background: 'var(--ink)', padding: 'clamp(80px,12vh,140px) 0', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)', marginBottom: 44 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Selected Work</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3.2vw,3rem)', lineHeight: 1.02, color: 'var(--text-onDark)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                            Featured<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.5)' }}>projects</em>
                        </h2>
                    </div>
                    <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)', marginBottom: 6 }}>
                        All Projects <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>

            <div style={{ paddingLeft: 'clamp(20px,5vw,80px)', overflow: 'hidden' }}>
                <div ref={trackRef} style={{ display: 'flex', gap: 22, width: 'max-content' }}>
                    {projects.map((proj) => (
                        <Link
                            key={proj.title}
                            href="/projects"
                            className="proj-card"
                            style={{ display: 'block', width: 380, flexShrink: 0, borderRadius: 16, overflow: 'hidden', background: 'var(--ink-soft)', border: '1px solid var(--line-dark)' }}
                        >
                            <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                                <div className="proj-thumb-inner" style={{ height: '100%', background: 'repeating-linear-gradient(-45deg,#201D1A,#201D1A 7px,#272320 7px,#272320 30px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(176,137,79,.2)" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                                <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(20,17,15,.7)', backdropFilter: 'blur(8px)', borderRadius: 6, padding: '4px 10px' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem', color: 'rgba(246,242,236,.6)' }}>{proj.year}</span>
                                </div>
                            </div>
                            <div style={{ padding: '22px 22px 20px' }}>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.12em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>{proj.category}</span>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.15rem', color: 'var(--text-onDark)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 8 }}>{proj.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(246,242,236,.35)' }}>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem' }}>{proj.location}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div style={{ maxWidth: 1320, margin: '24px auto 0', padding: '0 clamp(20px,5vw,80px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 1, background: 'rgba(176,137,79,.4)' }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', color: 'rgba(246,242,236,.3)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
