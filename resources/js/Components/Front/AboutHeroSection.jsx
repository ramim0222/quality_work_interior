import { Link } from '@inertiajs/react';
import { aboutHeroIntro } from '@/data/aboutData';

export default function AboutHeroSection() {
    return (
        <section style={{ minHeight: '82vh', background: 'var(--ink)', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(246,242,236,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.025) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -240, right: -240, width: 680, height: 680, borderRadius: '50%', border: '1px solid rgba(176,137,79,.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -140, right: -140, width: 420, height: 420, borderRadius: '50%', border: '1px solid rgba(176,137,79,.1)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -10, fontFamily: "'Fraunces',serif", fontSize: 260, fontWeight: 400, color: 'rgba(246,242,236,.025)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', fontOpticalSizing: 'auto' }}>2016</div>

            <div className="qw-container" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(64px,10vh,110px)', paddingTop: 120, width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, animation: 'fadeUp .7s .05s both' }}>
                    <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.3)' }}>Home</Link>
                    <span style={{ color: 'rgba(246,242,236,.2)' }}>›</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>About</span>
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 20, animation: 'fadeUp .7s .15s both' }}>
                    Our Story
                </span>
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)', lineHeight: .95, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', maxWidth: 820, animation: 'maskUp .9s .3s both' }}>
                    Built on<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.6)' }}>craftsmanship</em><br />and trust.
                </h1>
                <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 52, animation: 'fadeUp .8s .62s both', maxWidth: 900 }}>
                    {aboutHeroIntro.map((text) => (
                        <p key={text.slice(0, 40)} style={{ fontFamily: "'Inter',sans-serif", fontSize: '1rem', lineHeight: 1.78, color: 'rgba(246,242,236,.52)' }}>{text}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
