import AdminRowCheckbox from '@/Components/Admin/AdminRowCheckbox';

export default function LeadsTableSection({
    leads,
    allSelected,
    selectedIds,
    onToggleAll,
    onToggleRow,
    onOpenLead,
}) {
    return (
        <>
            <div className="admin-leads-table-card admin-card">
                <div className="admin-leads-table-desktop">
                    <div className="admin-leads-table-head">
                        <div className="admin-leads-table-head-cell admin-leads-col-check">
                            <AdminRowCheckbox checked={allSelected} onToggle={onToggleAll} />
                        </div>
                        {['Name', 'Phone', 'Source', 'Service', 'Status', 'Value', 'Created', ''].map((col) => (
                            <span key={col || 'arrow'} className="admin-leads-th">{col}</span>
                        ))}
                    </div>
                    {leads.map((lead, index) => {
                        const selected = selectedIds.includes(lead.id);
                        return (
                            <div
                                key={lead.id}
                                className={`admin-leads-tr${selected ? ' selected' : ''}`}
                                style={{ animationDelay: `${index * 0.03}s` }}
                                onClick={() => onOpenLead(lead)}
                                onKeyDown={(e) => e.key === 'Enter' && onOpenLead(lead)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="admin-leads-col-check" onClick={(e) => e.stopPropagation()}>
                                    <AdminRowCheckbox
                                        checked={selected}
                                        onToggle={() => onToggleRow(lead.id)}
                                    />
                                </div>
                                <div className="admin-leads-name-cell">
                                    <div className="admin-leads-row-avatar">{lead.initials}</div>
                                    <div className="admin-leads-name-meta">
                                        <div className="admin-leads-row-name">{lead.name}</div>
                                        <div className="admin-leads-row-email">{lead.email}</div>
                                    </div>
                                </div>
                                <span className="admin-leads-mono">{lead.phone}</span>
                                <div>
                                    <span className="admin-leads-pill" style={{ background: lead.srcBg, color: lead.srcColor }}>{lead.source}</span>
                                </div>
                                <span className="admin-leads-service-text">{lead.service}</span>
                                <div>
                                    <span className="admin-leads-pill" style={{ background: lead.stBg, color: lead.stColor }}>{lead.status}</span>
                                </div>
                                <span className="admin-leads-mono admin-leads-value">{lead.value}</span>
                                <span className="admin-leads-mono admin-leads-created">{lead.created}</span>
                                <svg className="admin-leads-row-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                        );
                    })}
                </div>

                <div className="admin-leads-mobile-list">
                    {leads.map((lead, index) => {
                        const selected = selectedIds.includes(lead.id);
                        return (
                            <article
                                key={lead.id}
                                className={`admin-leads-mobile-card${selected ? ' selected' : ''}`}
                                style={{ animationDelay: `${index * 0.04}s` }}
                            >
                                <div className="admin-leads-mobile-top">
                                    <AdminRowCheckbox
                                        checked={selected}
                                        onToggle={() => onToggleRow(lead.id)}
                                    />
                                    <button type="button" className="admin-leads-mobile-main" onClick={() => onOpenLead(lead)}>
                                        <div className="admin-leads-row-avatar">{lead.initials}</div>
                                        <div className="admin-leads-name-meta">
                                            <div className="admin-leads-row-name">{lead.name}</div>
                                            <div className="admin-leads-row-email">{lead.email}</div>
                                        </div>
                                    </button>
                                    <span className="admin-leads-mono admin-leads-created">{lead.created}</span>
                                </div>
                                <div className="admin-leads-mobile-meta">
                                    <span className="admin-leads-pill" style={{ background: lead.srcBg, color: lead.srcColor }}>{lead.source}</span>
                                    <span className="admin-leads-pill" style={{ background: lead.stBg, color: lead.stColor }}>{lead.status}</span>
                                    <span className="admin-leads-mono admin-leads-value">{lead.value}</span>
                                </div>
                                <div className="admin-leads-mobile-foot">
                                    <span className="admin-leads-service-text">{lead.service}</span>
                                    <span className="admin-leads-mono">{lead.phone}</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
