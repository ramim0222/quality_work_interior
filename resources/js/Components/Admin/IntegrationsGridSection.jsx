import IntegrationCard from '@/Components/Admin/IntegrationCard';

export default function IntegrationsGridSection({
    integrations,
    onToggle,
    onFieldChange,
    onTest,
    onSave,
}) {
    return (
        <div className="admin-integrations-grid admin-fade-section" style={{ animationDelay: '0.12s' }}>
            {integrations.map((integration, index) => (
                <IntegrationCard
                    key={integration.id}
                    integration={integration}
                    index={index}
                    onToggle={onToggle}
                    onFieldChange={onFieldChange}
                    onTest={onTest}
                    onSave={onSave}
                />
            ))}
        </div>
    );
}
