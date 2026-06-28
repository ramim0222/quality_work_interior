import { leadsServiceOptions, leadsSourceOptions } from '@/data/leadsData';

export default function LeadsToolbarSection({
    tabs,
    onTabChange,
    filterSource,
    filterService,
    onSourceChange,
    onServiceChange,
}) {
    return (
        <div className="admin-leads-toolbar">
            <div className="admin-leads-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        className={`admin-leads-tab${tab.active ? ' on' : ''}`}
                        onClick={() => onTabChange(tab.key)}
                    >
                        {tab.label}
                        <span className="admin-leads-tab-count">{tab.count}</span>
                    </button>
                ))}
            </div>

            <div className="admin-leads-filters">
                <select
                    className="admin-leads-fi"
                    value={filterSource}
                    onChange={(e) => onSourceChange(e.target.value)}
                    aria-label="Filter by source"
                >
                    {leadsSourceOptions.map((opt) => (
                        <option key={opt.value || 'all'} value={opt.value}>{opt.label}</option>
                    ))}
                </select>

                <select
                    className="admin-leads-fi"
                    value={filterService}
                    onChange={(e) => onServiceChange(e.target.value)}
                    aria-label="Filter by service"
                >
                    <option value="">All services</option>
                    {leadsServiceOptions.filter(Boolean).map((service) => (
                        <option key={service} value={service}>{service}</option>
                    ))}
                </select>

                <div className="admin-leads-date-filter">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Jun 1 – Jun 27</span>
                </div>
            </div>
        </div>
    );
}
