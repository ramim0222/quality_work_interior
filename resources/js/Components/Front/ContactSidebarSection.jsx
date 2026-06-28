import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { contactAgents, contactTrustBadges } from '@/data/contactData';

export default function ContactSidebarSection() {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        gsap.from(scope.querySelector('.contact-right-card'), {
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.5,
        });
    }, []);

    return (
        <div ref={sectionRef} className="contact-right-sticky" style={{ position: 'sticky', top: 104 }}>
            <div className="contact-right-card">
                <div style={{ height: 220, background: 'repeating-linear-gradient(-45deg,#D4CFC6,#D4CFC6 5px,#DEDAD2 5px,#DEDAD2 22px)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)' }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50% 50% 50% 0', background: 'var(--brass)', transform: 'rotate(-45deg)', boxShadow: '0 4px 16px rgba(176,137,79,.4)' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#fff', position: 'absolute', top: 16, left: 16 }} />
                    </div>
                    <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'rgba(20,17,15,.6)', backdropFilter: 'blur(4px)', borderRadius: 7, padding: '5px 12px' }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: '#fff', letterSpacing: '.06em' }}>Jalan Besar, Singapore</span>
                    </div>
                    <a href="https://maps.google.com/?q=Jalan+Besar+Singapore" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, background: 'rgba(255,255,255,.9)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </a>
                </div>
                <div style={{ padding: '20px 22px', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 10 }}>Office Address</div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', color: 'var(--text)', lineHeight: 1.65, marginBottom: 4, fontWeight: 500 }}>Jalan Besar / Sim Lim Tower</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>Singapore</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.8rem', color: 'var(--text-muted)', marginTop: 6 }}>Also: 194 Rivervale Drive, S540194</p>
                </div>
                <div style={{ padding: '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80' }} />
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>Chat with our team</span>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>Online now</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {contactAgents.map((agent) => (
                            <a key={agent.name} href={agent.wa} target="_blank" rel="noreferrer" className="contact-agent-row">
                                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--paper-2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces',serif", fontSize: '.92rem', color: 'var(--brass)', fontOpticalSizing: 'auto' }}>{agent.initials}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', fontWeight: 600, color: 'var(--text)' }}>{agent.name}</div>
                                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'var(--text-muted)' }}>{agent.role}</div>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </a>
                        ))}
                    </div>
                    <div style={{ marginTop: 14, padding: '10px 14px', background: 'var(--paper)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)' }}>Mon – Sun · 8am – 11pm</span>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'var(--brass)', background: 'rgba(176,137,79,.1)', borderRadius: 999, padding: '3px 9px' }}>24HR</span>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
                {contactTrustBadges.map((badge) => (
                    <span key={badge} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 500, color: 'var(--text-muted)', background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 999, padding: '5px 12px' }}>{badge}</span>
                ))}
            </div>
        </div>
    );
}
