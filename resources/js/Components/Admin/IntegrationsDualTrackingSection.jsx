import { Link } from '@inertiajs/react';

export default function IntegrationsDualTrackingSection() {
    return (
        <div className="admin-integrations-note admin-fade-section" style={{ animationDelay: '0.35s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" className="admin-integrations-note-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
                <div className="admin-integrations-note-title">Dual-tracking is active</div>
                <p className="admin-integrations-note-text">
                    Every conversion fires client-side (pixel) and server-side (CAPI). A shared{' '}
                    <span className="admin-integrations-note-code">event_id</span>{' '}
                    deduplicates both at the platform level. Check the{' '}
                    <Link href="/admin/tracking" className="admin-integrations-note-link">Tracking page</Link>{' '}
                    for real-time status.
                </p>
            </div>
        </div>
    );
}
