export default function DashboardIntegrationHealthSection({ integrations }) {
    return (
        <div className="admin-card admin-fade-section admin-integration-health" style={{ animationDelay: '0.35s' }}>
            <div className="admin-integration-head">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span className="admin-integration-title">Integration Health</span>
            </div>
            <div className="admin-integration-divider admin-integration-divider--head" />
            <div className="admin-integration-list">
                {integrations.map((intg) => (
                    <div key={intg.name} className="admin-integration-item">
                        <div className="admin-integration-dot" style={{ background: intg.color }} />
                        <span className="admin-integration-name">{intg.name}</span>
                        <span className="admin-integration-status" style={{ color: intg.color }}>{intg.status}</span>
                    </div>
                ))}
            </div>
            <a href="#" className="admin-integration-config">Configure →</a>
        </div>
    );
}
