import { Link } from '@inertiajs/react';

export default function ProjectDetailServicesUsedSection({ project }) {
    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(56px,7vh,80px) 0' }}>
            <div className="qw-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '.16em', textTransform: 'uppercase', flexShrink: 0 }}>Services used</span>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {project.servicesUsedLinks.map(({ name, slug }) => (
                            slug ? (
                                <Link
                                    key={name}
                                    href={`/services/${slug}`}
                                    className="project-service-chip"
                                >
                                    {name}
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </Link>
                            ) : (
                                <span key={name} className="project-service-chip">{name}</span>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
