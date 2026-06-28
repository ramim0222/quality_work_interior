function TimelineIcon({ type, color }) {
    const props = { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' };

    switch (type) {
        case 'msg':
            return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
        case 'check':
            return <svg {...props}><polyline points="20 6 9 17 4 12" /></svg>;
        case 'form':
            return (
                <svg {...props}>
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                </svg>
            );
        case 'phone':
            return <svg {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72" /></svg>;
        default:
            return null;
    }
}

export default function LeadsDetailDrawer({
    open,
    lead,
    timeline,
    pipeline,
    noteText,
    onClose,
    onStageChange,
    onNoteChange,
    onAddNote,
}) {
    if (!lead) return null;

    const phoneDigits = lead.phone.replace(/\D/g, '');

    return (
        <>
            <button type="button" className={`admin-leads-drawer-bg${open ? ' open' : ''}`} aria-label="Close lead detail" onClick={onClose} />
            <aside className={`admin-leads-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
                <div className="admin-leads-drawer-inner">
                    <div className="admin-leads-drawer-head">
                        <h2 className="admin-leads-drawer-title">Lead Detail</h2>
                        <button type="button" className="admin-leads-drawer-close" aria-label="Close" onClick={onClose}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="admin-leads-drawer-body">
                        <div className="admin-leads-drawer-identity">
                            <div className="admin-leads-drawer-avatar">{lead.initials}</div>
                            <div>
                                <div className="admin-leads-drawer-name">{lead.name}</div>
                                <div className="admin-leads-mono admin-leads-drawer-phone">{lead.phone}</div>
                                <div className="admin-leads-drawer-email">{lead.email}</div>
                            </div>
                        </div>

                        <div className="admin-leads-drawer-actions">
                            <a href={`https://wa.me/${phoneDigits}`} className="admin-leads-drawer-wa" target="_blank" rel="noreferrer">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                            <a href={`tel:${phoneDigits}`} className="admin-leads-drawer-call">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                Call
                            </a>
                        </div>

                        <div className="admin-leads-drawer-info">
                            <div className="admin-leads-drawer-info-grid">
                                <div>
                                    <div className="admin-leads-drawer-label">Service</div>
                                    <div className="admin-leads-drawer-value">{lead.service}</div>
                                </div>
                                <div>
                                    <div className="admin-leads-drawer-label">Value</div>
                                    <div className="admin-leads-mono admin-leads-drawer-value">{lead.value}</div>
                                </div>
                                <div>
                                    <div className="admin-leads-drawer-label">Source</div>
                                    <span className="admin-leads-pill" style={{ background: lead.srcBg, color: lead.srcColor }}>{lead.source}</span>
                                </div>
                                <div>
                                    <div className="admin-leads-drawer-label">Received</div>
                                    <div className="admin-leads-mono admin-leads-drawer-muted">{lead.created}</div>
                                </div>
                            </div>
                            <div className="admin-leads-drawer-utm">
                                <div className="admin-leads-drawer-label">UTM Attribution</div>
                                <div className="admin-leads-utm-tags">
                                    <span>source: {lead.utmSource}</span>
                                    <span>medium: {lead.utmMedium}</span>
                                    <span>campaign: {lead.utmCampaign}</span>
                                </div>
                            </div>
                        </div>

                        <div className="admin-leads-pipeline">
                            <div className="admin-leads-drawer-label admin-leads-drawer-label--section">Pipeline Stage</div>
                            <div className="admin-leads-pipeline-track">
                                {pipeline.map((stage) => (
                                    <div key={stage.key} className="admin-leads-pipeline-step-wrap">
                                        <button
                                            type="button"
                                            className="admin-leads-pipeline-step"
                                            onClick={() => onStageChange(stage.key)}
                                        >
                                            <div
                                                className="admin-leads-pipeline-dot"
                                                style={{ background: stage.bg, borderColor: stage.border }}
                                            >
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={stage.iconColor} strokeWidth="2.5" strokeLinecap="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span style={{ color: stage.labelColor }}>{stage.label}</span>
                                        </button>
                                        {stage.notLast && (
                                            <div className="admin-leads-pipeline-line" style={{ background: stage.lineColor }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="admin-leads-notes">
                            <div className="admin-leads-drawer-label admin-leads-drawer-label--section">Add Note</div>
                            <textarea
                                className="admin-leads-note-input"
                                value={noteText}
                                onChange={(e) => onNoteChange(e.target.value)}
                                placeholder="Add a note about this lead…"
                                rows={3}
                            />
                            <button type="button" className="admin-leads-note-save" onClick={onAddNote}>Save Note</button>
                        </div>

                        <div className="admin-leads-timeline">
                            <div className="admin-leads-drawer-label admin-leads-drawer-label--section">Activity</div>
                            <div className="admin-leads-timeline-list">
                                {timeline.map((event) => (
                                    <div key={`${event.icon}-${event.text}`} className="admin-leads-tl-item">
                                        <div className="admin-leads-tl-icon" style={{ background: event.iconBg }}>
                                            <TimelineIcon type={event.icon} color={event.iconColor} />
                                        </div>
                                        <div>
                                            <div className="admin-leads-tl-text">{event.text}</div>
                                            <div className="admin-leads-mono admin-leads-tl-time">{event.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="admin-leads-drawer-foot">
                        <button type="button" className="admin-leads-drawer-save">Save Changes</button>
                        <button type="button" className="admin-leads-drawer-delete">Delete</button>
                    </div>
                </div>
            </aside>
        </>
    );
}
