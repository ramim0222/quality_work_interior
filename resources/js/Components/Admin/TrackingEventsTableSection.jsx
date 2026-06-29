const tableColumns = ['Event Type', 'Side', 'Platform', 'Event ID', 'Client', 'Server', 'Dedup'];

export default function TrackingEventsTableSection({ events }) {
    return (
        <div className="admin-card admin-tracking-events-card admin-fade-section" style={{ animationDelay: '0.3s' }}>
            <div className="admin-tracking-table-scroll">
                <div className="admin-tracking-table-desktop">
                    <div className="admin-tracking-ev-row admin-tracking-ev-row--head">
                        {tableColumns.map((col) => (
                            <span key={col} className="admin-tracking-th">{col}</span>
                        ))}
                    </div>
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="admin-tracking-ev-row"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            <div className="admin-tracking-type-cell">
                                <div className="admin-tracking-dot" style={{ background: event.typeColor }} />
                                <span className="admin-tracking-type-mono">{event.type}</span>
                            </div>
                            <span className="admin-tracking-chip" style={{ background: event.sideBg, color: event.sideColor }}>
                                {event.side}
                            </span>
                            <span className="admin-tracking-platform">{event.platform}</span>
                            <span className="admin-tracking-event-id">{event.eventId}</span>
                            <div className="admin-tracking-status-cell">
                                <div className="admin-tracking-dot admin-tracking-dot--sm" style={{ background: event.clientDotColor }} />
                                <span className="admin-tracking-status-text">{event.clientSt}</span>
                            </div>
                            <div className="admin-tracking-status-cell">
                                <div className="admin-tracking-dot admin-tracking-dot--sm" style={{ background: event.serverColor }} />
                                <span className="admin-tracking-status-text">{event.serverSt}</span>
                            </div>
                            <span className="admin-tracking-chip" style={{ background: event.dedupBg, color: event.dedupColor }}>
                                {event.dedup}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="admin-tracking-mobile-list">
                {events.map((event, index) => (
                    <article
                        key={event.id}
                        className="admin-tracking-mobile-card"
                        style={{ animationDelay: `${index * 0.04}s` }}
                    >
                        <div className="admin-tracking-mobile-top">
                            <div className="admin-tracking-type-cell">
                                <div className="admin-tracking-dot" style={{ background: event.typeColor }} />
                                <span className="admin-tracking-type-mono">{event.type}</span>
                            </div>
                            <span className="admin-tracking-chip" style={{ background: event.dedupBg, color: event.dedupColor }}>
                                {event.dedup}
                            </span>
                        </div>
                        <div className="admin-tracking-mobile-meta">
                            <span className="admin-tracking-chip" style={{ background: event.sideBg, color: event.sideColor }}>
                                {event.side}
                            </span>
                            <span className="admin-tracking-platform">{event.platform}</span>
                        </div>
                        <div className="admin-tracking-event-id admin-tracking-event-id--mobile">{event.eventId}</div>
                        <div className="admin-tracking-mobile-foot">
                            <div className="admin-tracking-status-cell">
                                <span className="admin-tracking-mobile-label">Client</span>
                                <div className="admin-tracking-dot admin-tracking-dot--sm" style={{ background: event.clientDotColor }} />
                                <span className="admin-tracking-status-text">{event.clientSt}</span>
                            </div>
                            <div className="admin-tracking-status-cell">
                                <span className="admin-tracking-mobile-label">Server</span>
                                <div className="admin-tracking-dot admin-tracking-dot--sm" style={{ background: event.serverColor }} />
                                <span className="admin-tracking-status-text">{event.serverSt}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
