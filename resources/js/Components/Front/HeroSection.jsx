import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function HeroSection() {
    return (
        <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg,#1A1714 0,#1A1714 8px,#201D1A 8px,#201D1A 36px)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', pointerEvents: 'none' }}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(176,137,79,.2)" strokeWidth="1" strokeLinecap="round" style={{ margin: '0 auto 12px', display: 'block' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'rgba(176,137,79,.2)', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                    hero photo · interior renovation
                </p>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,17,15,.35) 0%, rgba(20,17,15,.2) 40%, rgba(20,17,15,.78) 100%)' }} />
            <div className="qw-container" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(64px,10vh,120px)', paddingTop: 120, width: '100%' }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', fontWeight: 600, letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--brass)', display: 'block', marginBottom: 28, animation: 'fadeUp .8s .1s both' }}>
                    24 Hour Service · Singapore
                </span>
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5.2rem)', lineHeight: .95, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', maxWidth: 820 }}>
                    {['Renovation &', <em key="em" style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.72)' }}>maintenance,</em>, 'done right,', 'across Singapore.'].map((line, i) => (
                        <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
                            <span style={{ display: 'block', animation: `maskUp .9s cubic-bezier(.16,1,.3,1) ${0.25 + i * 0.18}s both` }}>{line}</span>
                        </span>
                    ))}
                </h1>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', lineHeight: 1.72, color: 'rgba(246,242,236,.55)', maxWidth: 460, marginTop: 28, animation: 'fadeUp .8s .95s both' }}>
                    From HDB bathrooms to commercial spa centres — 12 specialisations, 1,200+ jobs completed, available 24 hours.
                </p>
                <div className="hero-btns" style={{ display: 'flex', gap: 12, marginTop: 40, alignItems: 'center', flexWrap: 'wrap', animation: 'fadeUp .8s 1.1s both' }}>
                    <a
                        href="https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote"
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.9rem', padding: '14px 28px', borderRadius: 999 }}
                    >
                        <WhatsAppIcon size={16} color="#fff" />
                        WhatsApp Us
                    </a>
                    <Link
                        href="/projects"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(246,242,236,.65)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.9rem', padding: '14px 22px', borderRadius: 999, border: '1.5px solid rgba(246,242,236,.18)' }}
                    >
                        View Our Work
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 36, right: 'clamp(20px,5vw,80px)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, animation: 'fadeUp .8s 1.4s both' }}>
                <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom,transparent,rgba(176,137,79,.5))', animation: 'scrollBounce 2s infinite' }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(176,137,79,.45)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Scroll</span>
            </div>
        </section>
    );
}
