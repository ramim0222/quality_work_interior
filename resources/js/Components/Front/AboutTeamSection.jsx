import { useRef } from 'react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { aboutTeam } from '@/data/aboutData';

export default function AboutTeamSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        const cards = scope.querySelectorAll('.about-team-card');
        gsap.from(cards, {
            y: 40,
            autoAlpha: 0,
            stagger: 0.09,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: scope.querySelector('.about-team-grid'), start: 'top 76%', once: true },
        });
    });

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>The Team</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3vw,2.8rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                            People you can<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>count on</em>
                        </h2>
                    </div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.85rem', color: 'var(--text-muted)', maxWidth: 280, textAlign: 'right', marginBottom: 6 }}>
                        Our team of licensed tradespeople and project managers are on call 24 hours a day.
                    </p>
                </div>
                <div className="about-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
                    {aboutTeam.map((person) => (
                        <div key={person.name} className="about-team-card">
                            <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                                <div
                                    className="photo-inner"
                                    style={{
                                        height: '100%',
                                        background: `repeating-linear-gradient(-45deg,${person.bg1},${person.bg1} 7px,${person.bg2} 7px,${person.bg2} 30px)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces',serif", fontSize: '1.8rem', color: 'rgba(255,255,255,.7)', fontOpticalSizing: 'auto' }}>{person.initials}</div>
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>photo · {person.name}</span>
                                </div>
                            </div>
                            <div style={{ padding: '20px 20px 18px' }}>
                                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--brass)', marginBottom: 6, letterSpacing: '.04em' }}>{person.dept}</div>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.05rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 3 }}>{person.name}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', color: 'var(--text-muted)', marginBottom: 16 }}>{person.role}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid var(--line)' }}>
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', color: 'var(--text-muted)' }}>{person.note}</span>
                                    <a href={person.wa} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.68rem', padding: '6px 12px', borderRadius: 999 }}>
                                        <WhatsAppIcon size={11} color="#fff" />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
