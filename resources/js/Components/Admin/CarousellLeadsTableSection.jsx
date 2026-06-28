const tableStatuses = ['New', 'Contacted', 'Quoted', 'Won', 'Lost'];

export default function CarousellLeadsTableSection({ leads, leadCount, onStatusChange }) {
    return (
        <div className="admin-card admin-carousell-table-card admin-carousell-fade" style={{ animationDelay: '0.1s' }}>
            <div className="admin-carousell-table-head-bar">
                <h3 className="admin-carousell-table-title">{leadCount} Carousell leads</h3>
                <button type="button" className="admin-carousell-export-btn">Export CSV</button>
            </div>

            <div className="admin-carousell-table-scroll">
                <div className="admin-carousell-table-desktop">
                    <div className="admin-carousell-tr admin-carousell-tr--head">
                        <div />
                        {['Name', 'Phone', 'Service', 'Status', 'Value', 'Date', ''].map((col) => (
                            <span key={col || 'actions'} className="admin-carousell-th">{col}</span>
                        ))}
                    </div>
                    {leads.map((lead, index) => (
                        <div
                            key={lead.id}
                            className="admin-carousell-tr"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            <div className="admin-carousell-source-dot" />
                            <div className="admin-carousell-name-cell">
                                <div className="admin-carousell-avatar">{lead.initials}</div>
                                <div className="admin-carousell-name-meta">
                                    <div className="admin-carousell-row-name">{lead.name}</div>
                                    <div className="admin-carousell-row-sub">{lead.service}</div>
                                </div>
                            </div>
                            <span className="admin-carousell-mono">{lead.phone}</span>
                            <span className="admin-carousell-service-text">{lead.service}</span>
                            <div>
                                <select
                                    className="admin-carousell-status-select"
                                    value={lead.status}
                                    style={{ background: lead.stBg, color: lead.stColor }}
                                    onChange={(e) => onStatusChange(lead.id, e.target.value)}
                                    aria-label={`Status for ${lead.name}`}
                                >
                                    {tableStatuses.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
                            <span className="admin-carousell-mono admin-carousell-value">{lead.value}</span>
                            <span className="admin-carousell-mono admin-carousell-date">{lead.date}</span>
                            <div className="admin-carousell-row-actions">
                                <button type="button" className="admin-carousell-edit-btn" aria-label={`Edit ${lead.name}`}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="admin-carousell-mobile-list">
                {leads.map((lead, index) => (
                    <article
                        key={lead.id}
                        className="admin-carousell-mobile-card"
                        style={{ animationDelay: `${index * 0.04}s` }}
                    >
                        <div className="admin-carousell-mobile-top">
                            <div className="admin-carousell-source-dot" />
                            <div className="admin-carousell-name-cell">
                                <div className="admin-carousell-avatar">{lead.initials}</div>
                                <div className="admin-carousell-name-meta">
                                    <div className="admin-carousell-row-name">{lead.name}</div>
                                    <div className="admin-carousell-row-sub">{lead.service}</div>
                                </div>
                            </div>
                            <span className="admin-carousell-mono admin-carousell-date">{lead.date}</span>
                        </div>
                        <div className="admin-carousell-mobile-meta">
                            <span className="admin-carousell-mono">{lead.phone}</span>
                            <span className="admin-carousell-mono admin-carousell-value">{lead.value}</span>
                        </div>
                        <div className="admin-carousell-mobile-foot">
                            <select
                                className="admin-carousell-status-select"
                                value={lead.status}
                                style={{ background: lead.stBg, color: lead.stColor }}
                                onChange={(e) => onStatusChange(lead.id, e.target.value)}
                                aria-label={`Status for ${lead.name}`}
                            >
                                {tableStatuses.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                            <button type="button" className="admin-carousell-edit-btn" aria-label={`Edit ${lead.name}`}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
