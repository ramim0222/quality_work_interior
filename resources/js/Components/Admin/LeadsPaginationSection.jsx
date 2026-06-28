export default function LeadsPaginationSection({ visibleCount, totalCount }) {
    return (
        <div className="admin-leads-pagination">
            <span className="admin-leads-pagination-text">
                Showing {visibleCount} of {totalCount} leads
            </span>
            <div className="admin-leads-pagination-btns">
                <button type="button" className="admin-leads-page-btn" aria-label="Previous page">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button type="button" className="admin-leads-page-btn admin-leads-page-btn--active">1</button>
                <button type="button" className="admin-leads-page-btn">2</button>
                <button type="button" className="admin-leads-page-btn">3</button>
                <button type="button" className="admin-leads-page-btn" aria-label="Next page">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
