import { useRef } from 'react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';

export default function ProjectDetailWriteupSection({ project }) {
    const sectionRef = useRef(null);

    useGsapContext(sectionRef, (scope) => {
        scope.querySelectorAll('[data-reveal]').forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 28, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 84%', once: true },
                    delay: i * 0.06,
                },
            );
        });
    }, [project.slug]);

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div className="project-body-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
                    <div style={{ position: 'sticky', top: 108 }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>{project.briefLabel}</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.6rem,2.4vw,2.2rem)', lineHeight: 1.06, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 20 }}>
                            {project.slug === 'wellness-spa-fit-out' ? (
                                <>From bare shell to <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>premium spa.</em></>
                            ) : (
                                project.briefHeadline
                            )}
                        </h2>
                        <a
                            href={project.waLink}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.8rem', padding: '10px 18px', borderRadius: 999 }}
                        >
                            <WhatsAppIcon size={13} color="#fff" />
                            Quote a similar project
                        </a>
                    </div>
                    <div>
                        {project.writeup.map((para) => (
                            <p key={para.slice(0, 40)} data-reveal style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 28 }}>
                                {para}
                            </p>
                        ))}
                        <blockquote data-reveal style={{ borderLeft: '3px solid var(--brass)', padding: '20px 28px', margin: '36px 0', background: 'var(--paper-2)', borderRadius: '0 12px 12px 0' }}>
                            <p style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: '1.18rem', lineHeight: 1.55, color: 'var(--text)', fontStyle: 'italic', fontOpticalSizing: 'auto' }}>{project.quote.text}</p>
                            <cite style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginTop: 12, fontStyle: 'normal' }}>{project.quote.cite}</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
