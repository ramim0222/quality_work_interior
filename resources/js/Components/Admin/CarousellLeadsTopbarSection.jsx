import { useAdminLayout } from '@/contexts/AdminLayoutContext';
import { carousellMonthOptions, carousellStatusOptions } from '@/data/carousellLeadsData';

export default function CarousellLeadsTopbarSection({
    statusFilter,
    monthFilter,
    onStatusChange,
    onMonthChange,
}) {
    const { onMenuToggle, menuOpen } = useAdminLayout();

    return (
        <header className="admin-carousell-topbar">
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

            <div className="admin-carousell-topbar-brand">
                <div className="admin-carousell-logo">
                    <span>CR</span>
                </div>
                <div>
                    <h1 className="admin-carousell-topbar-title">Carousell Leads</h1>
                    <p className="admin-carousell-topbar-subtitle">Manual entry · source auto-tagged &quot;Carousell&quot;</p>
                </div>
            </div>

            <div className="admin-carousell-topbar-filters">
                <select
                    className="admin-carousell-fi admin-carousell-fi--compact"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                    aria-label="Filter by status"
                >
                    {carousellStatusOptions.map((opt) => (
                        <option key={opt.value || 'all'} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <select
                    className="admin-carousell-fi admin-carousell-fi--compact"
                    value={monthFilter}
                    onChange={(e) => onMonthChange(e.target.value)}
                    aria-label="Filter by month"
                >
                    {carousellMonthOptions.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>
        </header>
    );
}
