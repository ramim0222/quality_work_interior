export default function TrackingExplainerSection() {
    return (
        <div className="admin-tracking-explainer admin-fade-section" style={{ animationDelay: '0.35s' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" className="admin-tracking-explainer-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="admin-tracking-explainer-text">
                Every conversion fires twice — once{' '}
                <strong>client-side</strong> (browser pixel) and once{' '}
                <strong>server-side</strong> (Conversions API). A shared{' '}
                <span className="admin-tracking-explainer-code">event_id</span>{' '}
                deduplicates both hits at the platform level, preventing double-counting.
            </p>
        </div>
    );
}
