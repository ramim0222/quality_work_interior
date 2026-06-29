import { costsPlatformFilterOptions } from '@/data/costsData';

const tableColumns = ['Platform / Campaign', 'Date', 'Amount', 'Currency', 'Campaign', 'CPL', ''];

export default function CostsEntriesTableSection({
    entries,
    platformFilter,
    onPlatformChange,
}) {
    return (
        <div className="admin-card admin-costs-entries-card admin-fade-section" style={{ animationDelay: '0.25s' }}>
            <div className="admin-costs-entries-head">
                <h3 className="admin-costs-section-title">Spend Entries</h3>
                <select
                    className="admin-costs-fi admin-costs-fi--compact"
                    value={platformFilter}
                    onChange={(e) => onPlatformChange(e.target.value)}
                    aria-label="Filter by platform"
                >
                    {costsPlatformFilterOptions.map((opt) => (
                        <option key={opt.value || 'all'} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>

            <div className="admin-costs-table-scroll">
                <div className="admin-costs-table-desktop">
                    <div className="admin-costs-tr admin-costs-tr--head">
                        {tableColumns.map((col) => (
                            <span key={col || 'actions'} className="admin-costs-th">{col}</span>
                        ))}
                    </div>
                    {entries.map((entry, index) => (
                        <div
                            key={entry.id}
                            className="admin-costs-tr"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            <div className="admin-costs-platform-cell">
                                <div
                                    className="admin-costs-platform-icon"
                                    style={{ background: entry.iconBg, color: entry.iconColor }}
                                >
                                    {entry.abbr}
                                </div>
                                <span className="admin-costs-entry-platform">{entry.platform}</span>
                            </div>
                            <span className="admin-costs-mono admin-costs-muted">{entry.date}</span>
                            <span className="admin-costs-mono admin-costs-amount">S${entry.amount}</span>
                            <span className="admin-costs-mono admin-costs-muted">SGD</span>
                            <span className="admin-costs-campaign">{entry.campaign}</span>
                            <span className="admin-costs-mono admin-costs-cpl" style={{ color: entry.cplColor }}>S${entry.cpl}</span>
                            <button type="button" className="admin-costs-menu-btn" aria-label={`Actions for ${entry.platform}`}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                    <circle cx="5" cy="12" r="1" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="admin-costs-mobile-list">
                {entries.map((entry, index) => (
                    <article
                        key={entry.id}
                        className="admin-costs-mobile-card"
                        style={{ animationDelay: `${index * 0.04}s` }}
                    >
                        <div className="admin-costs-mobile-top">
                            <div className="admin-costs-platform-cell">
                                <div
                                    className="admin-costs-platform-icon"
                                    style={{ background: entry.iconBg, color: entry.iconColor }}
                                >
                                    {entry.abbr}
                                </div>
                                <span className="admin-costs-entry-platform">{entry.platform}</span>
                            </div>
                            <span className="admin-costs-mono admin-costs-amount">S${entry.amount}</span>
                        </div>
                        <div className="admin-costs-mobile-meta">
                            <span className="admin-costs-mono admin-costs-muted">{entry.date}</span>
                            <span className="admin-costs-mono admin-costs-cpl" style={{ color: entry.cplColor }}>S${entry.cpl} CPL</span>
                        </div>
                        <div className="admin-costs-campaign admin-costs-campaign--mobile">{entry.campaign}</div>
                    </article>
                ))}
            </div>
        </div>
    );
}
