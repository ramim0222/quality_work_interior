import { Link } from '@inertiajs/react';

function NavCard({ project, direction }) {
    const isPrev = direction === 'prev';

    return (
        <Link href={`/projects/${project.slug}`} className="project-nav-card" style={{ background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexDirection: isPrev ? 'row' : 'row-reverse' }}>
                <div style={{ width: 120, height: 100, flexShrink: 0, overflow: 'hidden' }}>
                    <div
                        className="nc-inner"
                        style={{
                            height: '100%',
                            background: `repeating-linear-gradient(-45deg,${project.bg1},${project.bg1} 6px,${project.bg2} 6px,${project.bg2} 24px)`,
                        }}
                    />
                </div>
                <div style={{ padding: '20px 24px', flex: 1, textAlign: isPrev ? 'left' : 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: isPrev ? 'flex-start' : 'flex-end', gap: 6, marginBottom: 8 }}>
                        {isPrev && (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
                        )}
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                            {isPrev ? 'Previous' : 'Next'}
                        </span>
                        {!isPrev && (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
                        )}
                    </div>
                    <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', lineHeight: 1.3 }}>{project.title}</h3>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'var(--text-muted)' }}>{project.category} · {project.location}</span>
                </div>
            </div>
        </Link>
    );
}

export default function ProjectDetailNavSection({ prev, next }) {
    return (
        <section style={{ background: 'var(--paper)', padding: 'clamp(56px,7vh,80px) 0', borderTop: '1px solid var(--line)' }}>
            <div className="qw-container">
                <div className="project-nav-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                    {prev ? <NavCard project={prev} direction="prev" /> : <div />}
                    {next ? <NavCard project={next} direction="next" /> : <div />}
                </div>
                <div style={{ textAlign: 'center', marginTop: 28 }}>
                    <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Inter',sans-serif", fontSize: '.83rem', fontWeight: 600, color: 'var(--brass)' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
                        All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
