import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function ServiceDetailHeroSection({ service }) {
    const heroImgRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (heroImgRef.current) {
                heroImgRef.current.style.transform = 'scale(1)';
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [service.slug]);

    const headlineLines = service.headline.split('\n');

    return (
        <section style={{ paddingTop: 80, background: 'var(--paper)', minHeight: '88vh', display: 'flex', alignItems: 'stretch' }}>
            <div className="qw-container service-detail-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, width: '100%' }}>
                <div style={{ padding: 'clamp(60px,8vh,100px) clamp(0px,4vw,60px) clamp(60px,8vh,100px) 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, animation: 'fadeUp .7s .05s both' }}>
                        <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)' }}>Home</Link>
                        <span style={{ color: 'var(--line)', fontSize: '.8rem' }}>›</span>
                        <Link href="/services" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)' }}>Services</Link>
                        <span style={{ color: 'var(--line)', fontSize: '.8rem' }}>›</span>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>{service.name}</span>
                    </div>

                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18, animation: 'fadeUp .7s .15s both' }}>
                        Service
                    </span>

                    <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.4rem,4.2vw,4rem)', lineHeight: .96, color: 'var(--text)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', marginBottom: 24, animation: 'maskUp .9s .28s both' }}>
                        {headlineLines.map((line, i) => (
                            <span key={i} style={{ display: 'block' }}>{line}</span>
                        ))}
                    </h1>

                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36, animation: 'fadeUp .8s .52s both' }}>
                        {service.summary}
                    </p>

                    <div style={{ display: 'flex', gap: 11, alignItems: 'center', flexWrap: 'wrap', animation: 'fadeUp .8s .65s both' }}>
                        <a
                            href={service.waLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.88rem', padding: '13px 24px', borderRadius: 999 }}
                        >
                            <WhatsAppIcon size={15} color="#fff" />
                            WhatsApp about this
                        </a>
                        <a
                            href="tel:+6598683650"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: '.88rem', padding: '13px 20px', borderRadius: 999, border: '1.5px solid var(--line)' }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                            Call 9868 3650
                        </a>
                    </div>

                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32, animation: 'fadeUp .8s .78s both' }}>
                        {service.tags.map((tag) => (
                            <span key={tag} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 500, color: 'var(--text-muted)', background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 999, padding: '5px 12px' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560, animation: 'scaleIn .9s .2s both' }}>
                    <div
                        ref={heroImgRef}
                        style={{
                            position: 'absolute', inset: 0,
                            background: `repeating-linear-gradient(-45deg,${service.bg1},${service.bg1} 7px,${service.bg2} 7px,${service.bg2} 32px)`,
                            transform: 'scale(1.08)',
                            transition: 'transform 1.4s cubic-bezier(.16,1,.3,1)',
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', color: 'rgba(255,255,255,.18)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{service.heroPhotoLabel}</span>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', bottom: 36, left: -1, background: 'var(--ink)', borderRadius: '0 14px 14px 0', padding: '18px 24px', boxShadow: '0 12px 40px -6px rgba(20,17,15,.35)', zIndex: 2 }}>
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--brass)', marginBottom: 3, letterSpacing: '.04em' }}>avg. completion</div>
                        <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.5rem', color: 'var(--text-onDark)', fontOpticalSizing: 'auto' }}>{service.stat}</div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', color: 'rgba(246,242,236,.38)', marginTop: 2 }}>{service.statLabel}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
