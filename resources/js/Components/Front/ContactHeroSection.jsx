import { Link } from '@inertiajs/react';

export default function ContactHeroSection() {
    return (
        <section style={{ background: 'var(--ink)', padding: 'clamp(120px,16vh,168px) 0 clamp(56px,7vh,80px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -200, right: -200, width: 580, height: 580, borderRadius: '50%', border: '1px solid rgba(176,137,79,.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -110, right: -110, width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(176,137,79,.1)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(246,242,236,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.02) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, animation: 'fadeUp .7s .05s both' }}>
                    <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.3)' }}>Home</Link>
                    <span style={{ color: 'rgba(246,242,236,.2)' }}>›</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>Contact</span>
                </div>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18, animation: 'fadeUp .7s .14s both' }}>
                    Get In Touch
                </span>
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.6rem,5vw,4.6rem)', lineHeight: .96, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', maxWidth: 680, animation: 'maskUp .9s .28s both' }}>
                    Tell us about<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.55)' }}>your space.</em>
                </h1>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1rem', lineHeight: 1.72, color: 'rgba(246,242,236,.48)', maxWidth: 480, marginTop: 22, animation: 'fadeUp .8s .52s both' }}>
                    Free site assessment, written quote, no obligation. Our team typically responds within 1 hour.
                </p>
            </div>
        </section>
    );
}
