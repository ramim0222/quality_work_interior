export default function LeadsBulkBar({ open, selectedCount, onClear }) {
    return (
        <div className={`admin-leads-bulk-bar${open ? ' open' : ''}`}>
            <span className="admin-leads-bulk-count">{selectedCount} selected</span>
            <div className="admin-leads-bulk-divider" />
            <button type="button" className="admin-leads-bulk-action">Mark Contacted</button>
            <button type="button" className="admin-leads-bulk-action">Mark Quoted</button>
            <button type="button" className="admin-leads-bulk-action admin-leads-bulk-action--muted">Export</button>
            <button type="button" className="admin-leads-bulk-action admin-leads-bulk-action--clear" onClick={onClear}>
                ✕ Clear
            </button>
        </div>
    );
}
