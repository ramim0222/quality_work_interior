export default function DashboardLeadsBySourceSection({ sources, total = 847 }) {
    return (
        <div className="admin-card admin-fade-section admin-section-pad admin-donut-card" style={{ animationDelay: '0.15s' }}>
            <div className="admin-section-head">
                <h3 className="admin-section-title">Leads by Source</h3>
                <span className="admin-section-meta">Total: {total}</span>
            </div>
            <div className="admin-donut-layout">
                <div className="admin-donut-visual">
                    <svg className="admin-donut-chart" viewBox="0 0 100 100" aria-hidden="true">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--brass)" strokeWidth="18" strokeDasharray="90.7 148.1" strokeDashoffset="0" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--wa)" strokeWidth="18" strokeDasharray="66.9 171.9" strokeDashoffset="-90.7" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--brass-deep)" strokeWidth="18" strokeDasharray="33.4 205.3" strokeDashoffset="-157.6" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#9C7A4A" strokeWidth="18" strokeDasharray="28.7 210.1" strokeDashoffset="-191" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--line-dark)" strokeWidth="18" strokeDasharray="19.1 219.7" strokeDashoffset="-219.7" />
                        <circle cx="50" cy="50" r="28" fill="#fff" />
                        <text x="50" y="47" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--text)" transform="rotate(90,50,50)" fontWeight="500">{total}</text>
                        <text x="50" y="57" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" fill="var(--text-muted)" transform="rotate(90,50,50)">leads</text>
                    </svg>
                </div>
                <div className="admin-donut-legend">
                    {sources.map((src) => (
                        <div key={src.label} className="admin-donut-legend-row">
                            <div className="admin-donut-legend-swatch" style={{ background: src.color }} />
                            <span className="admin-donut-legend-label">{src.label}</span>
                            <span className="admin-donut-legend-pct">{src.pct}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
