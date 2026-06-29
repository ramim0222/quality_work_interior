import { userRoleOptions } from '@/data/settingsData';

export default function SettingsUsersSection({
    users,
    onRoleChange,
    onRemove,
    onInvite,
}) {
    return (
        <div className="admin-settings-panel admin-fade-section">
            <div className="admin-settings-panel-head admin-settings-panel-head--row">
                <div>
                    <h2 className="admin-settings-panel-title">Users &amp; Roles</h2>
                    <p className="admin-settings-panel-desc">Manage who has access to this admin portal.</p>
                </div>
                <button type="button" className="admin-settings-invite-btn" onClick={onInvite}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Invite User
                </button>
            </div>
            <div className="admin-card admin-settings-card admin-settings-card--flush">
                <div className="admin-settings-users-tr admin-settings-users-tr--head">
                    {['Name', 'Email', 'Role', ''].map((col) => (
                        <span key={col || 'actions'} className="admin-settings-th">{col}</span>
                    ))}
                </div>
                {users.map((user, index) => (
                    <div key={user.id} className="admin-settings-users-tr" style={{ animationDelay: `${index * 0.04}s` }}>
                        <div className="admin-settings-user-cell">
                            <div className="admin-settings-user-avatar">{user.initials}</div>
                            <span className="admin-settings-user-name">{user.name}</span>
                        </div>
                        <span className="admin-settings-user-email">{user.email}</span>
                        <select
                            className="admin-settings-fi admin-settings-fi--role"
                            value={user.role}
                            onChange={(e) => onRoleChange(user.id, e.target.value)}
                            aria-label={`Role for ${user.name}`}
                        >
                            {userRoleOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                        <div className="admin-settings-user-actions">
                            <button type="button" className="admin-settings-remove-btn" onClick={() => onRemove(user.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
