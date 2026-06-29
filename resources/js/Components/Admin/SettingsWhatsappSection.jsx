export default function SettingsWhatsappSection({
    contacts,
    onUpdateContact,
    onAddContact,
    onRemoveContact,
    onSave,
}) {
    return (
        <div className="admin-settings-panel admin-fade-section">
            <div className="admin-settings-panel-head">
                <h2 className="admin-settings-panel-title">WhatsApp Contacts</h2>
                <p className="admin-settings-panel-desc">Shown in the floating WhatsApp widget on all public pages.</p>
            </div>
            <div className="admin-card admin-settings-card admin-settings-card--flush">
                <div className="admin-settings-card-bar">
                    <span className="admin-settings-card-bar-title">{contacts.length} contacts</span>
                    <button type="button" className="admin-settings-add-chip-btn" onClick={onAddContact}>+ Add Contact</button>
                </div>
                {contacts.map((contact, index) => (
                    <div key={contact.id} className="admin-settings-wa-row" style={{ animationDelay: `${index * 0.04}s` }}>
                        <div>
                            <label className="admin-settings-lbl">Name</label>
                            <input className="admin-settings-fi admin-settings-fi--sm" value={contact.name} onChange={(e) => onUpdateContact(contact.id, 'name', e.target.value)} />
                        </div>
                        <div>
                            <label className="admin-settings-lbl">Role</label>
                            <input className="admin-settings-fi admin-settings-fi--sm" value={contact.role} onChange={(e) => onUpdateContact(contact.id, 'role', e.target.value)} />
                        </div>
                        <div>
                            <label className="admin-settings-lbl">Number</label>
                            <input className="admin-settings-fi admin-settings-fi--sm admin-settings-fi--mono" value={contact.number} onChange={(e) => onUpdateContact(contact.id, 'number', e.target.value)} />
                        </div>
                        <button type="button" className="admin-settings-remove-icon-btn" aria-label={`Remove ${contact.name || 'contact'}`} onClick={() => onRemoveContact(contact.id)}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <div className="admin-settings-note">
                <p>
                    The first contact in the list appears as the primary agent. Each entry generates a{' '}
                    <code>wa.me/</code> deep-link pre-filled with the service enquiry text.
                </p>
            </div>
            <button type="button" className="admin-settings-save-btn" onClick={onSave}>Save WhatsApp Contacts</button>
        </div>
    );
}
