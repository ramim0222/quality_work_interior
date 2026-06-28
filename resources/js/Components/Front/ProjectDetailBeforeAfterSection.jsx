import { useEffect, useRef, useState } from 'react';

export default function ProjectDetailBeforeAfterSection({ project }) {
    const containerRef = useRef(null);
    const afterRef = useRef(null);
    const dividerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const activeRef = useRef(false);

    const { beforeBg1, beforeBg2, afterBg1, afterBg2 } = project.beforeAfter;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateWidth = () => setContainerWidth(container.offsetWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);

        const move = (clientX) => {
            const rect = container.getBoundingClientRect();
            let pct = (clientX - rect.left) / rect.width;
            pct = Math.max(0.04, Math.min(0.96, pct));
            if (afterRef.current) afterRef.current.style.width = `${pct * 100}%`;
            if (dividerRef.current) dividerRef.current.style.left = `${pct * 100}%`;
        };

        const onDown = (e) => {
            activeRef.current = true;
            e.preventDefault();
        };
        const onUp = () => { activeRef.current = false; };
        const onMove = (e) => {
            if (!activeRef.current) return;
            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            move(cx);
        };

        container.addEventListener('mousedown', onDown);
        container.addEventListener('touchstart', onDown, { passive: false });
        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('mouseup', onUp);
        window.addEventListener('touchend', onUp);

        return () => {
            window.removeEventListener('resize', updateWidth);
            container.removeEventListener('mousedown', onDown);
            container.removeEventListener('touchstart', onDown);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('mouseup', onUp);
            window.removeEventListener('touchend', onUp);
        };
    }, [project.slug]);

    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div style={{ textAlign: 'center', marginBottom: 44 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Transformation</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.5rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                        Before &amp; <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>after</em>
                    </h2>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.85rem', color: 'var(--text-muted)', marginTop: 10 }}>Drag the handle to compare</p>
                </div>

                <div
                    ref={containerRef}
                    className="project-ba-container"
                    style={{ height: 'clamp(360px,52vh,600px)', maxWidth: 1000, margin: '0 auto', position: 'relative', borderRadius: 18, overflow: 'hidden', cursor: 'ew-resize' }}
                >
                    <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(-45deg,${beforeBg1},${beforeBg1} 8px,${beforeBg2} 8px,${beforeBg2} 36px)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(255,255,255,.15)', letterSpacing: '.1em', textTransform: 'uppercase' }}>before photo</span>
                    </div>
                    <div ref={afterRef} className="project-ba-after" style={{ position: 'absolute', inset: 0, width: '50%', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', inset: 0, width: containerWidth || '100%', background: `repeating-linear-gradient(-45deg,${afterBg1},${afterBg1} 8px,${afterBg2} 8px,${afterBg2} 36px)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', color: 'rgba(255,255,255,.15)', letterSpacing: '.1em', textTransform: 'uppercase' }}>after photo</span>
                        </div>
                    </div>
                    <div ref={dividerRef} className="project-ba-divider" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 3, background: '#fff', boxShadow: '0 0 12px rgba(0,0,0,.4)', zIndex: 10, transform: 'translateX(-50%)' }}>
                        <div className="project-ba-handle" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 44, height: 44, borderRadius: '50%', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l-6-6 6-6M15 6l6 6-6 6" /></svg>
                        </div>
                    </div>
                    <div className="project-ba-label-before">Before</div>
                    <div className="project-ba-label-after">After</div>
                </div>
            </div>
        </section>
    );
}
