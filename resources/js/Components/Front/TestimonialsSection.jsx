import { useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { testimonials } from '@/data/homeData';

export default function TestimonialsSection() {
    const [idx, setIdx] = useState(0);
    const quoteRef = useRef(null);

    const animateQuote = () => {
        if (!quoteRef.current) return;
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    };

    const prev = () => { setIdx((i) => Math.max(0, i - 1)); animateQuote(); };
    const next = () => { setIdx((i) => Math.min(testimonials.length - 1, i + 1)); animateQuote(); };

    const t = testimonials[idx];
    const dotW = (i) => (idx === i ? 24 : 8);
    const dotBg = (i) => (idx === i ? 'var(--brass)' : 'rgba(246,242,236,.2)');

    return (
        <section style={{ background: 'var(--ink)', padding: 'clamp(80px,12vh,140px) 0', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(176,137,79,.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -150, left: -150, width: 450, height: 450, borderRadius: '50%', border: '1px solid rgba(176,137,79,.05)', pointerEvents: 'none' }} />

            <div className="qw-container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Client Stories</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(2rem,3vw,2.8rem)', lineHeight: 1.02, color: 'var(--text-onDark)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                        What our clients say
                    </h2>
                </div>

                <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 32 }}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--brass)">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>

                    <div ref={quoteRef}>
                        <div style={{ fontFamily: "'Fraunces',serif", fontSize: '6rem', lineHeight: .5, color: 'rgba(176,137,79,.18)', marginBottom: 24, fontOpticalSizing: 'auto' }}>&ldquo;</div>
                        <blockquote style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: 'clamp(1.3rem,2.2vw,1.65rem)', lineHeight: 1.5, color: 'var(--text-onDark)', letterSpacing: '-.01em', fontStyle: 'italic', fontOpticalSizing: 'auto', marginBottom: 36 }}>
                            {t.quote}
                        </blockquote>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(176,137,79,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces',serif", fontSize: '.9rem', color: 'var(--brass)', fontOpticalSizing: 'auto' }}>
                                {t.initials}
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.85rem', fontWeight: 600, color: 'var(--text-onDark)' }}>{t.author}</div>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'rgba(246,242,236,.4)', marginTop: 2 }}>{t.project}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 44 }}>
                        <button type="button" onClick={prev} disabled={idx === 0} style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--line-dark)', background: 'transparent', cursor: idx === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(246,242,236,.5)', opacity: idx === 0 ? .3 : 1, transition: 'opacity .2s' }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => { setIdx(i); animateQuote(); }}
                                    aria-label={`View testimonial ${i + 1}`}
                                    style={{ width: dotW(i), height: 4, borderRadius: 2, background: dotBg(i), transition: 'all .3s', cursor: 'pointer', border: 'none', padding: 0 }}
                                />
                            ))}
                        </div>
                        <button type="button" onClick={next} disabled={idx === testimonials.length - 1} style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--line-dark)', background: 'transparent', cursor: idx === testimonials.length - 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(246,242,236,.5)', opacity: idx === testimonials.length - 1 ? .3 : 1, transition: 'opacity .2s' }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
