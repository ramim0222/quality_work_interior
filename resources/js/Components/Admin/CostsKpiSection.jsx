import { costsKpis } from '@/data/costsData';

export default function CostsKpiSection({ kpis = costsKpis }) {
    return (
        <div className="admin-costs-kpi-grid">
            {kpis.map((kpi, index) => (
                <div
                    key={kpi.label}
                    className="admin-card admin-costs-kpi-card"
                    style={{ animationDelay: `${index * 0.06}s` }}
                >
                    <div className="admin-costs-kpi-label">{kpi.label}</div>
                    <div className="admin-costs-kpi-value">{kpi.value}</div>
                    <div className="admin-costs-kpi-delta" style={{ color: kpi.deltaColor }}>{kpi.delta}</div>
                </div>
            ))}
        </div>
    );
}
