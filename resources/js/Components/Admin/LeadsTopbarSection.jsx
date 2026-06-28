import { useAdminLayout } from '@/contexts/AdminLayoutContext';

export default function LeadsTopbarSection({ totalCount, searchQ, onSearchChange }) {
    const { onMenuToggle, menuOpen } = useAdminLayout();

    return (
        <header className="admin-leads-topbar">
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

            <div className="admin-leads-topbar-heading">
                <h1 className="admin-leads-topbar-title">Leads</h1>
                <p className="admin-leads-topbar-subtitle">{totalCount} total · 12 new today</p>
            </div>

            <div className="admin-leads-topbar-actions">
                <div className="admin-leads-search">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        type="search"
                        value={searchQ}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search leads…"
                        aria-label="Search leads"
                    />
                </div>

                <button type="button" className="admin-leads-btn admin-leads-btn--outline">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span className="admin-leads-btn-text">Export CSV</span>
                </button>

                <button type="button" className="admin-leads-btn admin-leads-btn--primary">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    <span className="admin-leads-btn-text">New Lead</span>
                </button>
            </div>
        </header>
    );
}
