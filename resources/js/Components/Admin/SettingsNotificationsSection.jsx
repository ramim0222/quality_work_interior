import ProjectToggle from '@/Components/Admin/ProjectToggle';

export default function SettingsNotificationsSection({
    emails,
    toggles,
    onUpdateEmail,
    onAddEmail,
    onRemoveEmail,
    onToggle,
    onSave,
}) {
    return (
        <div className="admin-settings-panel admin-fade-section admin-settings-panel--narrow">
            <div className="admin-settings-panel-head">
                <h2 className="admin-settings-panel-title">Notifications</h2>
                <p className="admin-settings-panel-desc">Configure who gets notified and when.</p>
            </div>
            <div className="admin-card admin-settings-card">
                <h3 className="admin-settings-subtitle">Email recipients for new leads</h3>
                <div className="admin-settings-email-list">
                    {emails.map((email, index) => (
                        <div key={`email-${index}`} className="admin-settings-email-row">
                            <input
                                type="email"
                                className="admin-settings-fi admin-settings-fi--sm"
                                value={email}
                                onChange={(e) => onUpdateEmail(index, e.target.value)}
                                aria-label={`Notification email ${index + 1}`}
                            />
                            <button type="button" className="admin-settings-remove-icon-btn" aria-label={`Remove email ${index + 1}`} onClick={() => onRemoveEmail(index)}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                <button type="button" className="admin-settings-add-dashed-btn" onClick={onAddEmail}>+ Add email</button>
            </div>
            <div className="admin-card admin-settings-card admin-settings-card--toggles">
                {toggles.map((item, index) => (
                    <div key={item.id} className="admin-settings-toggle-row" style={{ animationDelay: `${index * 0.04}s` }}>
                        <div>
                            <div className="admin-settings-toggle-label">{item.label}</div>
                            <div className="admin-settings-toggle-desc">{item.desc}</div>
                        </div>
                        <ProjectToggle
                            enabled={item.enabled}
                            onToggle={() => onToggle(item.id)}
                            label={item.label}
                        />
                    </div>
                ))}
            </div>
            <button type="button" className="admin-settings-save-btn" onClick={onSave}>Save Notification Settings</button>
        </div>
    );
}
