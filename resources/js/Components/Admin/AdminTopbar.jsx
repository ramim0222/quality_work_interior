export default function AdminTopbar({ title, subtitle, onMenuToggle, menuOpen = false }) {
    return (
        <header className="admin-topbar">
            <button
                type="button"
                className="admin-topbar-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={onMenuToggle}
            >
                <span className={`admin-topbar-menu-bar${menuOpen ? ' open' : ''}`} />
                <span className={`admin-topbar-menu-bar${menuOpen ? ' open' : ''}`} />
                <span className={`admin-topbar-menu-bar${menuOpen ? ' open' : ''}`} />
            </button>

            <div className="admin-topbar-heading">
                <h1 className="admin-topbar-title">{title}</h1>
                {subtitle && <p className="admin-topbar-subtitle">{subtitle}</p>}
            </div>

            <div className="admin-topbar-actions">
                <div className="admin-topbar-date">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="admin-topbar-date-text">Jun 1 – Jun 27, 2025</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>

                <button type="button" className="admin-topbar-notify" aria-label="Notifications">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                    <span className="admin-topbar-notify-dot" />
                </button>

                <button type="button" className="admin-topbar-new-lead">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span className="admin-topbar-new-lead-text">New Lead</span>
                </button>
            </div>
        </header>
    );
}
