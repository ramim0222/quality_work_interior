import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function ServicesHeroSection() {
    return (
        <section style={{ background: 'var(--ink)', padding: 'clamp(120px,18vh,180px) 0 clamp(80px,10vh,120px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -220, right: -220, width: 640, height: 640, borderRadius: '50%', border: '1px solid rgba(176,137,79,.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: -130, right: -130, width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(176,137,79,.1)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -100, left: -80, width: 340, height: 340, borderRadius: '50%', border: '1px solid rgba(176,137,79,.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(246,242,236,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.02) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="services-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'flex-end' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, animation: 'fadeUp .7s .05s both' }}>
                            <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.3)' }}>Home</Link>
                            <span style={{ color: 'rgba(246,242,236,.2)', fontSize: '.7rem' }}>›</span>
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)' }}>Services</span>
                        </div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 20, animation: 'fadeUp .7s .12s both' }}>
                            What We Do
                        </span>
                        <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2.6rem,5vw,4.8rem)', lineHeight: .96, color: 'var(--text-onDark)', letterSpacing: '-.025em', fontOpticalSizing: 'auto', animation: 'maskUp .9s .25s both' }}>
                            Twelve services,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(246,242,236,.6)' }}>one trusted</em><br />team.
                        </h1>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', lineHeight: 1.72, color: 'rgba(246,242,236,.5)', maxWidth: 500, marginTop: 28, animation: 'fadeUp .8s .55s both' }}>
                            From a leaking tap to a full commercial fit-out — we cover every renovation and maintenance need across Singapore, available 24 hours a day.
                        </p>
                    </div>

                    <div style={{ animation: 'fadeUp .8s .65s both' }}>
                        <div style={{ background: 'rgba(246,242,236,.05)', border: '1px solid rgba(246,242,236,.08)', borderRadius: 16, padding: '32px 28px', backdropFilter: 'blur(8px)' }}>
                            {[
                                ['Residential', 'HDB · Condo · Landed'],
                                ['Commercial', 'Retail · F&B · Office'],
                                ['Coverage', 'All Singapore'],
                                ['Response', '24 / 7'],
                            ].map(([label, value], i, arr) => (
                                <div
                                    key={label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '18px 0',
                                        borderBottom: i < arr.length - 1 ? '1px solid rgba(246,242,236,.08)' : 'none',
                                    }}
                                >
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.8rem', color: 'rgba(246,242,236,.45)' }}>{label}</span>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.75rem', color: 'var(--brass)' }}>{value}</span>
                                </div>
                            ))}
                            <a
                                href="https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.85rem', padding: '12px 20px', borderRadius: 999, marginTop: 22 }}
                            >
                                <WhatsAppIcon size={14} color="#fff" />
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
