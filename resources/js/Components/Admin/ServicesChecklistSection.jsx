export default function ServicesChecklistSection({
    items,
    onUpdateItem,
    onRemoveItem,
    onAddItem,
}) {
    return (
        <div className="admin-card admin-services-card">
            <label className="admin-services-lbl admin-services-lbl--section">What&apos;s Included checklist</label>
            <div className="admin-services-checklist">
                {items.map((item, index) => (
                    <div key={`${item}-${index}`} className="admin-services-checklist-row">
                        <div className="admin-services-check-icon">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="3" strokeLinecap="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <input
                            className="admin-services-fi admin-services-fi--sm"
                            value={item}
                            onChange={(e) => onUpdateItem(index, e.target.value)}
                            aria-label={`Checklist item ${index + 1}`}
                        />
                        <button
                            type="button"
                            className="admin-services-check-remove"
                            aria-label={`Remove checklist item ${index + 1}`}
                            onClick={() => onRemoveItem(index)}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
                <button type="button" className="admin-services-add-item-btn" onClick={onAddItem}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add item
                </button>
            </div>
        </div>
    );
}
