export default function DashboardSpendVsLeadsSection({ chart }) {
    return (
        <div className="admin-card admin-fade-section admin-section-pad-wide admin-combo-card" style={{ animationDelay: '0.2s' }}>
            <div className="admin-chart-head">
                <div className="admin-chart-head-text">
                    <h3 className="admin-section-title">Spend vs Leads</h3>
                    <p className="admin-section-subtitle">June 2025 — daily</p>
                </div>
                <div className="admin-chart-legend">
                    <div className="admin-chart-legend-item">
                        <div className="admin-chart-legend-bar admin-chart-legend-bar--spend" />
                        <span>Spend (S$)</span>
                    </div>
                    <div className="admin-chart-legend-item">
                        <div className="admin-chart-legend-bar admin-chart-legend-bar--leads" />
                        <span>Leads</span>
                    </div>
                </div>
            </div>
            <p className="admin-chart-scroll-hint">Swipe chart to view all days</p>
            <div className="admin-chart-scroll">
                <svg viewBox="0 0 600 140" width="600" height="140" className="admin-combo-chart" aria-label="Spend vs leads daily chart">
                    <text x="0" y="12" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-muted)" textAnchor="start">S$800</text>
                    <text x="0" y="48" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-muted)" textAnchor="start">S$400</text>
                    <text x="0" y="84" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-muted)" textAnchor="start">S$0</text>
                    <line x1="36" y1="8" x2="600" y2="8" stroke="var(--line)" strokeWidth=".5" />
                    <line x1="36" y1="44" x2="600" y2="44" stroke="var(--line)" strokeWidth=".5" />
                    <line x1="36" y1="80" x2="600" y2="80" stroke="var(--line)" strokeWidth=".5" />
                    {chart.bars.map((bar, i) => (
                        <rect key={i} x={bar.x} y={bar.y} width="24" height={bar.h} fill="rgba(176,137,79,.18)" rx="3" />
                    ))}
                    <polyline points={chart.line} fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {chart.dots.map((dot, i) => (
                        <circle key={i} cx={dot.x} cy={dot.y} r="3" fill="var(--brass)" stroke="#fff" strokeWidth="1.5" />
                    ))}
                    {chart.labels.map((lbl) => (
                        <text key={lbl.t} x={lbl.x} y="100" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-muted)" textAnchor="middle">{lbl.t}</text>
                    ))}
                </svg>
            </div>
        </div>
    );
}
