export default function DashboardRecentLeadsSection({ leads }) {
    return (
        <div className="admin-card admin-fade-section admin-section-pad-wide admin-leads-card" style={{ animationDelay: '0.3s' }}>
            <div className="admin-section-head">
                <h3 className="admin-section-title">Recent Leads</h3>
                <a href="#" className="admin-section-link admin-section-link--icon">
                    View all
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div className="admin-leads-table-wrap admin-leads-desktop">
                <div className="admin-leads-table">
                    <div className="admin-leads-head">
                        {['Name', 'Source', 'Service', 'Status', 'Time'].map((col, i) => (
                            <span key={col} className={`admin-leads-col admin-leads-col--${i}`}>{col}</span>
                        ))}
                    </div>
                    {leads.map((lead) => (
                        <div key={lead.name} className="admin-leads-row">
                            <div className="admin-leads-col admin-leads-col--0">
                                <div className="admin-leads-name">
                                    <div className="admin-leads-avatar">{lead.initials}</div>
                                    <span className="admin-leads-name-text">{lead.name}</span>
                                </div>
                            </div>
                            <div className="admin-leads-col admin-leads-col--1">
                                <span className="admin-src-badge" style={{ background: lead.srcBg, color: lead.srcColor }}>{lead.source}</span>
                            </div>
                            <div className="admin-leads-col admin-leads-col--2">
                                <span className="admin-leads-service">{lead.service}</span>
                            </div>
                            <div className="admin-leads-col admin-leads-col--3">
                                <span className="admin-status-pill" style={{ background: lead.statusBg, color: lead.statusColor }}>{lead.status}</span>
                            </div>
                            <div className="admin-leads-col admin-leads-col--4">
                                <span className="admin-leads-time">{lead.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="admin-leads-mobile-list">
                {leads.map((lead) => (
                    <article key={lead.name} className="admin-lead-mobile-card">
                        <div className="admin-lead-mobile-top">
                            <div className="admin-leads-name">
                                <div className="admin-leads-avatar">{lead.initials}</div>
                                <div className="admin-lead-mobile-identity">
                                    <span className="admin-leads-name-text">{lead.name}</span>
                                    <span className="admin-lead-mobile-service">{lead.service}</span>
                                </div>
                            </div>
                            <span className="admin-leads-time">{lead.time}</span>
                        </div>
                        <div className="admin-lead-mobile-foot">
                            <span className="admin-src-badge" style={{ background: lead.srcBg, color: lead.srcColor }}>{lead.source}</span>
                            <span className="admin-status-pill" style={{ background: lead.statusBg, color: lead.statusColor }}>{lead.status}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
