import { Link } from '@inertiajs/react';

export default function ProjectsHeroSection() {
    return (
        <section style={{ background: 'var(--ink)', padding: 'clamp(120px,16vh,172px) 0 clamp(64px,8vh,100px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -200, right: -200, width: 620, height: 620, borderRadius: '50%', border: '1px solid rgba(176,137,79,.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -110, right: -110, width: 380, height: 380, borderRadius: '50%', border: '1px solid rgba(176,137,79,.1)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -120, left: -80, width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(176,137,79,.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(246,242,236,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.02) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, animation: 'fadeUp .7s .05s both' }}>
                    <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.3)' }}>Home</Link>
                    <span style={{ color: 'rgba(246,242,236,.2)', fontSize: '.8rem' }}>›</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>Projects</span>
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18, animation: 'fadeUp .7s .12s both' }}>
                    Our Work
                </span>
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.6rem,5vw,4.6rem)', lineHeight: .96, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', maxWidth: 700, marginBottom: 24, animation: 'maskUp .9s .28s both' }}>
                    Recently completed<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.55)' }}>across Singapore.</em>
                </h1>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1rem', lineHeight: 1.72, color: 'rgba(246,242,236,.48)', maxWidth: 480, marginBottom: 44, animation: 'fadeUp .8s .5s both' }}>
                    Over 1,200 projects delivered across residential and commercial spaces. Browse our portfolio and find inspiration for your own renovation.
                </p>

                <div className="projects-hero-stats" style={{ display: 'flex', gap: 0, animation: 'fadeUp .8s .62s both' }}>
                    {[
                        ['1,200+', 'Projects completed'],
                        ['12', 'Service categories'],
                        ['8+', 'Years experience'],
                    ].map(([val, label], i) => (
                        <div key={label} style={{ padding: '20px 32px', paddingLeft: i === 0 ? 0 : 32, borderRight: i < 2 ? '1px solid var(--line-dark)' : 'none' }}>
                            <div style={{ fontFamily: "'Fraunces',serif", fontSize: '2.4rem', color: 'var(--brass)', lineHeight: 1, fontOpticalSizing: 'auto' }}>{val}</div>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', fontWeight: 600, color: 'rgba(246,242,236,.35)', textTransform: 'uppercase', letterSpacing: '.12em', marginTop: 6 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
