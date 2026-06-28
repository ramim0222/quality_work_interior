import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

export default function ProjectDetailHeroSection({ project }) {
    const heroBgRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (heroBgRef.current) {
                heroBgRef.current.style.transform = 'scale(1)';
            }
        }, 80);
        return () => clearTimeout(timer);
    }, [project.slug]);

    const headlineParts = project.headline.split('\n');

    return (
        <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
            <div
                ref={heroBgRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(-45deg,${project.bg1},${project.bg1} 8px,${project.bg2} 8px,${project.bg2} 36px)`,
                    transform: 'scale(1.06)',
                    transition: 'transform 1.6s cubic-bezier(.16,1,.3,1)',
                }}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', pointerEvents: 'none' }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" style={{ margin: '0 auto 10px', display: 'block' }}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(255,255,255,.15)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{project.heroPhotoLabel}</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(20,17,15,.2) 0%,rgba(20,17,15,.15) 50%,rgba(20,17,15,.82) 100%)' }} />

            <div className="qw-container" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(52px,8vh,96px)', paddingTop: 120, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, animation: 'fadeUp .7s .1s both' }}>
                    <Link href="/projects" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.45)' }}>Projects</Link>
                    <span style={{ color: 'rgba(246,242,236,.25)' }}>›</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>{project.breadcrumbLabel}</span>
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18, animation: 'fadeUp .7s .18s both' }}>
                    Case Study
                </span>
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)', lineHeight: .95, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', maxWidth: 800, animation: 'maskUp .9s .32s both' }}>
                    {headlineParts.map((line, i) => (
                        <span key={i}>
                            {i === 1 ? (
                                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.65)' }}>{line}</em>
                            ) : (
                                line
                            )}
                            {i < headlineParts.length - 1 && <br />}
                        </span>
                    ))}
                </h1>
                <div style={{ position: 'absolute', bottom: 'clamp(28px,4vh,52px)', right: 'clamp(20px,5vw,80px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeUp .8s 1.2s both' }}>
                    <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,transparent,rgba(176,137,79,.5))' }} />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(176,137,79,.4)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Scroll</span>
                </div>
            </div>
        </section>
    );
}
