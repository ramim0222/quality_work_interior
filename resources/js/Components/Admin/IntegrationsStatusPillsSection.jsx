export default function IntegrationsStatusPillsSection({ integrations }) {
    return (
        <div className="admin-integrations-pills admin-fade-section" style={{ animationDelay: '0.06s' }}>
            {integrations.map((integration, index) => (
                <div
                    key={integration.id}
                    className="admin-integrations-pill"
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <div className="admin-integrations-dot" style={{ background: integration.statusColor }} />
                    <span className="admin-integrations-pill-name">{integration.name}</span>
                    <span className="admin-integrations-pill-status" style={{ color: integration.statusColor }}>
                        {integration.statusLabel}
                    </span>
                </div>
            ))}
        </div>
    );
}
