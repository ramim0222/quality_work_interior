import { dashboardKpis } from '@/data/dashboardData';

function KpiIcon({ type, color }) {
    const props = { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' };

    switch (type) {
        case 'users':
            return (
                <svg {...props}>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            );
        case 'trend':
            return (
                <svg {...props}>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            );
        case 'dollar':
            return (
                <svg {...props}>
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            );
        case 'check':
            return (
                <svg {...props}>
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            );
        case 'spend':
            return (
                <svg {...props}>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
            );
        default:
            return null;
    }
}

function DeltaIcon({ up }) {
    const props = { width: 9, height: 9, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 3 };
    return up ? (
        <svg {...props}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    ) : (
        <svg {...props}><path d="M12 5v14M5 12l7 7 7-7" /></svg>
    );
}

export default function DashboardKpiSection({ kpis = dashboardKpis }) {
    return (
        <div className="admin-kpi-grid">
            {kpis.map((kpi, index) => (
                <div
                    key={kpi.label}
                    className="admin-card admin-kpi-card"
                    style={{ animationDelay: `${index * 0.06}s` }}
                >
                    <div className="admin-kpi-head">
                        <span className="admin-kpi-label">{kpi.label}</span>
                        <div className="admin-kpi-icon" style={{ background: kpi.iconBg }}>
                            <KpiIcon type={kpi.icon} color={kpi.iconColor} />
                        </div>
                    </div>
                    <div className="admin-kpi-value">{kpi.value}</div>
                    <svg className="admin-spark" width="100%" height="28" viewBox="0 0 120 28" preserveAspectRatio="none">
                        <polyline points={kpi.spark} fill="none" stroke={kpi.sparkColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="admin-kpi-delta-wrap">
                        <span className="admin-kpi-delta" style={{ color: kpi.deltaColor }}>
                            <DeltaIcon up={kpi.deltaUp} />
                            {kpi.delta}
                        </span>
                        <span className="admin-kpi-delta-note">vs last period</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
