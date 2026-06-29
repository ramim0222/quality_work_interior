import { trackingIntegrations } from '@/data/trackingData';

export default function TrackingIntegrationBarSection({ integrations = trackingIntegrations }) {
    return (
        <div className="admin-card admin-tracking-integration-bar admin-fade-section" style={{ animationDelay: '0.2s' }}>
            <span className="admin-tracking-integration-title">Integration Health</span>
            <div className="admin-tracking-integration-divider" />
            <div className="admin-tracking-integration-list">
                {integrations.map((integration) => (
                    <div key={integration.name} className="admin-tracking-integration-item">
                        <div className="admin-tracking-dot" style={{ background: integration.color }} />
                        <span className="admin-tracking-integration-name">{integration.name}</span>
                        <span className="admin-tracking-integration-status" style={{ color: integration.color }}>
                            {integration.status}
                        </span>
                    </div>
                ))}
            </div>
            <a href="#" className="admin-tracking-integration-link">Configure →</a>
        </div>
    );
}
