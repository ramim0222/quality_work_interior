import { Link, usePage } from '@inertiajs/react';
import AdminNavIcon from '@/Components/Admin/AdminNavIcon';
import { adminNavSections } from '@/data/adminNavData';

function userInitials(name) {
    if (!name) return 'A';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export default function AdminSidebar({ activeNav = 'dashboard', open = false, onNavigate }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const displayName = user?.name ?? 'Admin User';
    const displayEmail = user?.email ?? 'admin@qualitywork.sg';

    return (
        <aside className={`admin-sidebar${open ? ' open' : ''}`}>
            <div className="admin-sidebar-head">
                <div className="admin-sidebar-logo">
                    <span>Q</span>
                </div>
                <div>
                    <div className="admin-sidebar-title">QW Admin</div>
                    <div className="admin-sidebar-version">v2025.6</div>
                </div>
                <button
                    type="button"
                    className="admin-sidebar-close"
                    aria-label="Close menu"
                    onClick={onNavigate}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <nav className="admin-sidebar-nav">
                {adminNavSections.map((section) => (
                    <div key={section.label}>
                        <div className={`admin-sidebar-section-label${section.label === 'Overview' ? ' admin-sidebar-section-label--first' : ''}`}>
                            {section.label}
                        </div>
                        {section.items.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`admin-nav-item${activeNav === item.id ? ' active' : ''}`}
                                onClick={onNavigate}
                            >
                                <AdminNavIcon name={item.icon} />
                                {item.label}
                                {item.badge && (
                                    <span className="admin-nav-badge">{item.badge}</span>
                                )}
                                {item.statusDots && (
                                    <div className="admin-nav-status-dots">
                                        {item.statusDots.map((dot, i) => (
                                            <div
                                                key={i}
                                                className={`admin-nav-status-dot${dot === 'warn' ? ' admin-nav-status-dot--warn' : ''}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="admin-sidebar-foot">
                <Link href="#" className="admin-nav-item" onClick={onNavigate}>
                    <AdminNavIcon name="settings" />
                    Settings
                </Link>
                <div className="admin-sidebar-user">
                    <div className="admin-sidebar-avatar">{userInitials(displayName)}</div>
                    <div className="admin-sidebar-user-meta">
                        <div className="admin-sidebar-user-name">{displayName}</div>
                        <div className="admin-sidebar-user-email">{displayEmail}</div>
                    </div>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="admin-sidebar-logout"
                        aria-label="Log out"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
