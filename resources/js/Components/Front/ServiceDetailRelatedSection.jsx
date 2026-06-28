import { Link } from '@inertiajs/react';

export default function ServiceDetailRelatedSection({ related }) {
    return (
        <section style={{ background: 'var(--paper)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Explore More</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.4rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>Related services</h2>
                    </div>
                    <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)', marginBottom: 6 }}>
                        All 12 services <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
                <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
                    {related.map((svc) => (
                        <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="rel-card"
                            style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)' }}
                        >
                            <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                                <div className="rc-inner" style={{ height: '100%', background: `repeating-linear-gradient(-45deg,${svc.bg1},${svc.bg1} 6px,${svc.bg2} 6px,${svc.bg2} 28px)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                                <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(20,17,15,.55)', backdropFilter: 'blur(4px)', borderRadius: 5, padding: '3px 9px' }}>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--brass)' }}>{svc.num}</span>
                                </div>
                            </div>
                            <div style={{ padding: '20px 20px 18px' }}>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.02rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 6 }}>{svc.name}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.77rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 14 }}>{svc.desc}</p>
                                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.75rem', fontWeight: 600, color: 'var(--brass)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                                    View service <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
