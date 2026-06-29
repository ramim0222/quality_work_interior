import { costsChart } from '@/data/costsData';

export default function CostsDailyChartSection({ chart = costsChart }) {
    return (
        <div className="admin-card admin-costs-chart-card admin-fade-section" style={{ animationDelay: '0.18s' }}>
            <div className="admin-costs-chart-head">
                <h3 className="admin-costs-section-title">Daily Spend vs Leads</h3>
                <div className="admin-costs-chart-legend">
                    <div className="admin-costs-legend-item">
                        <div className="admin-costs-legend-bar admin-costs-legend-bar--spend" />
                        <span>Spend</span>
                    </div>
                    <div className="admin-costs-legend-item">
                        <div className="admin-costs-legend-bar admin-costs-legend-bar--leads" />
                        <span>Leads</span>
                    </div>
                </div>
            </div>
            <p className="admin-costs-chart-hint">Swipe chart to view all days</p>
            <div className="admin-costs-chart-scroll">
                <svg viewBox="0 0 560 130" width="560" height="130" className="admin-costs-chart" aria-label="Daily spend vs leads chart">
                    <line x1="0" y1="10" x2="560" y2="10" stroke="var(--line)" strokeWidth="0.5" />
                    <line x1="0" y1="45" x2="560" y2="45" stroke="var(--line)" strokeWidth="0.5" />
                    <line x1="0" y1="80" x2="560" y2="80" stroke="var(--line)" strokeWidth="0.5" />
                    {chart.bars.map((bar, i) => (
                        <rect key={i} x={bar.x} y={bar.y} width="22" height={bar.h} fill="rgba(176,137,79,.2)" rx="3" className="admin-costs-chart-bar" style={{ animationDelay: `${i * 0.04}s` }} />
                    ))}
                    <polyline points={chart.line} fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="admin-costs-chart-line" />
                    {chart.dots.map((dot, i) => (
                        <circle key={i} cx={dot.x} cy={dot.y} r="3" fill="var(--brass)" stroke="#fff" strokeWidth="1.5" className="admin-costs-chart-dot" style={{ animationDelay: `${i * 0.04 + 0.3}s` }} />
                    ))}
                </svg>
            </div>
        </div>
    );
}
