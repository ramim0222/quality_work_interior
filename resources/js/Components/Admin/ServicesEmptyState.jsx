export default function ServicesEmptyState() {
    return (
        <div className="admin-services-empty admin-fade-section">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
            <p>Select a service to edit</p>
        </div>
    );
}
