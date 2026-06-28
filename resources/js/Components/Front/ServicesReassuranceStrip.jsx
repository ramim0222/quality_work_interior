import { Fragment } from 'react';
import { reassuranceItems } from '@/data/servicesData';

function StripIcon({ icon }) {
    const props = {
        width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
        stroke: 'var(--brass)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
    };
    const icons = {
        clock: <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        home: <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        map: <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        shield: <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        check: <svg {...props}><polyline points="20 6 9 17 4 12" /></svg>,
    };
    return icons[icon] || null;
}

export default function ServicesReassuranceStrip() {
    return (
        <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            <div className="qw-container">
                <div className="services-strip-grid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0', gap: 24 }}>
                    {reassuranceItems.map((item, i) => (
                        <Fragment key={item.title}>
                            {i > 0 && <div className="services-strip-divider" style={{ width: 1, height: 40, background: 'var(--line)', flexShrink: 0 }} />}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(176,137,79,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <StripIcon icon={item.icon} />
                                </div>
                                <div>
                                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', fontWeight: 600, color: 'var(--text)' }}>{item.title}</div>
                                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
