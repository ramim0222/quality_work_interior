import { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';

function ProjectGalleryLightbox({ open, caption, bg1, bg2, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className={`project-lightbox${open ? ' open' : ''}`} onClick={onClose} role="presentation">
            <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
                <div
                    style={{
                        width: 800,
                        maxWidth: '92vw',
                        height: 540,
                        maxHeight: '85vh',
                        borderRadius: 16,
                        background: `repeating-linear-gradient(-45deg,${bg1},${bg1} 8px,${bg2} 8px,${bg2} 36px)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 32px 80px rgba(0,0,0,.5)',
                    }}
                >
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{caption}</span>
                </div>
                <button type="button" onClick={onClose} style={{ position: 'absolute', top: -16, right: -16, width: 40, height: 40, borderRadius: '50%', background: 'var(--paper)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.25)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
}

export default function ProjectDetailGallerySection({ project }) {
    const sectionRef = useRef(null);
    const [lightbox, setLightbox] = useState(null);

    useGsapContext(sectionRef, (scope) => {
        scope.querySelectorAll('[data-gal-item]').forEach((item, i) => {
            gsap.fromTo(
                item,
                { y: 36, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: item, start: 'top 88%', once: true },
                    delay: (i % 3) * 0.08,
                },
            );
            const cap = item.querySelector('[data-caption]');
            if (cap) {
                gsap.to(cap, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: item, start: 'top 80%', once: true },
                    delay: 0.2 + (i % 3) * 0.06,
                });
            }
        });
    }, [project.slug]);

    return (
        <>
            <section ref={sectionRef} id="gallery-sec" style={{ background: 'var(--paper)', padding: 'clamp(72px,10vh,120px) 0' }}>
                <div className="qw-container">
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Gallery</span>
                            <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.5rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                                Project <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>photography</em>
                            </h2>
                        </div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>Click to enlarge</span>
                    </div>

                    <div className="project-gal-grid">
                        {project.gallery.map((img) => (
                            <button
                                key={img.caption}
                                type="button"
                                className="project-gal-item"
                                data-gal-item
                                onClick={() => setLightbox(img)}
                            >
                                <div
                                    className="gi"
                                    style={{
                                        height: img.h,
                                        background: `repeating-linear-gradient(-45deg,${img.bg1},${img.bg1} 7px,${img.bg2} 7px,${img.bg2} 30px)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 8,
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                                <div data-caption className="project-gal-caption">
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)' }}>{img.caption}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectGalleryLightbox
                open={!!lightbox}
                caption={lightbox?.caption ?? ''}
                bg1={lightbox?.bg1 ?? project.bg1}
                bg2={lightbox?.bg2 ?? project.bg2}
                onClose={() => setLightbox(null)}
            />
        </>
    );
}
