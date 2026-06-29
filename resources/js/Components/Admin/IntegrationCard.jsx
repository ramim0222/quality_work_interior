import IntegrationToggle from '@/Components/Admin/IntegrationToggle';

export default function IntegrationCard({
    integration,
    index,
    onToggle,
    onFieldChange,
    onTest,
    onSave,
}) {
    return (
        <div
            className="admin-card admin-integrations-card"
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            <div className="admin-integrations-card-head">
                <div className="admin-integrations-card-brand">
                    <div
                        className="admin-integrations-icon"
                        style={{ background: integration.iconBg, color: integration.iconColor }}
                    >
                        {integration.abbr}
                    </div>
                    <div>
                        <div className="admin-integrations-card-name">{integration.name}</div>
                        <div className="admin-integrations-card-type">{integration.type}</div>
                    </div>
                </div>
                <div className="admin-integrations-card-controls">
                    <div className="admin-integrations-dot" style={{ background: integration.statusColor }} />
                    <IntegrationToggle
                        enabled={integration.enabled}
                        onToggle={() => onToggle(integration.id)}
                        label={`Toggle ${integration.name}`}
                    />
                </div>
            </div>

            <div className="admin-integrations-fields">
                <div>
                    <label className="admin-integrations-lbl" htmlFor={`${integration.id}-field1`}>
                        {integration.field1Label}
                    </label>
                    <input
                        id={`${integration.id}-field1`}
                        className="admin-integrations-fi"
                        value={integration.field1Value}
                        onChange={(e) => onFieldChange(integration.id, 'field1Value', e.target.value)}
                    />
                    <p className="admin-integrations-help">{integration.field1Help}</p>
                </div>
                {integration.hasField2 && (
                    <div>
                        <label className="admin-integrations-lbl" htmlFor={`${integration.id}-field2`}>
                            {integration.field2Label}
                        </label>
                        <input
                            id={`${integration.id}-field2`}
                            type="password"
                            className="admin-integrations-fi"
                            value={integration.field2Value}
                            onChange={(e) => onFieldChange(integration.id, 'field2Value', e.target.value)}
                        />
                        <p className="admin-integrations-help">{integration.field2Help}</p>
                    </div>
                )}
            </div>

            <div className="admin-integrations-card-foot">
                <div>
                    <div className="admin-integrations-tested-label">Last tested</div>
                    <div className="admin-integrations-tested-value" style={{ color: integration.statusColor }}>
                        {integration.lastTested}
                    </div>
                </div>
                <div className="admin-integrations-card-actions">
                    <button
                        type="button"
                        className="admin-integrations-test-btn"
                        onClick={() => onTest(integration.id)}
                    >
                        Test
                    </button>
                    <button
                        type="button"
                        className="admin-integrations-save-btn"
                        onClick={() => onSave(integration.id)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
