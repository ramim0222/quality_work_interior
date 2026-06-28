export default function ProjectDetailMetaSection({ project }) {
    return (
        <section style={{ background: '#fff', borderBottom: '1px solid var(--line)' }}>
            <div className="qw-container">
                <div className="project-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
                    {project.meta.map((m, i) => (
                        <div key={m.label} style={{ padding: '28px 0', borderRight: i < project.meta.length - 1 ? '1px solid var(--line)' : 'none' }}>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 6, padding: '0 clamp(16px,2vw,32px)' }}>{m.label}</div>
                            <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', padding: '0 clamp(16px,2vw,32px)' }}>{m.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
