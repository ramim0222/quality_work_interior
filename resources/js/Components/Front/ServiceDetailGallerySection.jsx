import { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';

function GalleryLightbox({ open, label, bg1, bg2, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div
            className={`service-lightbox${open ? ' open' : ''}`}
            onClick={onClose}
            role="presentation"
        >
            <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
                <div
                    className="service-lightbox-img"
                    style={{ background: `repeating-linear-gradient(-45deg,${bg1},${bg1} 7px,${bg2} 7px,${bg2} 32px)` }}
                >
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</span>
                </div>
                <button type="button" onClick={onClose} style={{ position: 'absolute', top: -16, right: -16, width: 40, height: 40, borderRadius: '50%', background: 'var(--paper)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.3)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
}

export default function ServiceDetailGallerySection({ service }) {
    const sectionRef = useRef(null);
    const [lightbox, setLightbox] = useState(null);

    useGsapContext(sectionRef, (scope) => {
        const items = scope.querySelectorAll('[data-gallery-item]');
        items.forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 40, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                    delay: (i % 3) * 0.08,
                },
            );
        });
    }, [service.slug]);

    return (
        <>
            <section ref={sectionRef} id="gallery-section" style={{ background: 'var(--paper)', padding: 'clamp(72px,10vh,120px) 0' }}>
                <div className="qw-container">
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Our Work</span>
                            <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.5rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                                {service.name}<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>project gallery</em>
                            </h2>
                        </div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>Click to enlarge</span>
                    </div>

                    <div className="gallery-grid">
                        {service.gallery.map((img) => (
                            <button
                                key={img.label}
                                type="button"
                                data-gallery-item
                                className="gallery-item"
                                onClick={() => setLightbox(img)}
                            >
                                <div
                                    className="gi-inner"
                                    style={{
                                        background: `repeating-linear-gradient(-45deg,${img.bg1},${img.bg1} 6px,${img.bg2} 6px,${img.bg2} 26px)`,
                                        height: img.h,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{img.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <GalleryLightbox
                open={!!lightbox}
                label={lightbox?.label ?? ''}
                bg1={lightbox?.bg1 ?? service.bg1}
                bg2={lightbox?.bg2 ?? service.bg2}
                onClose={() => setLightbox(null)}
            />
        </>
    );
}
