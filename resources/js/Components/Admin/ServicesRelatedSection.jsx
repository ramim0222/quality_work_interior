export default function ServicesRelatedSection({ related, onRemove, onAdd }) {
    return (
        <div className="admin-card admin-services-card">
            <label className="admin-services-lbl admin-services-lbl--section">Related Services</label>
            <div className="admin-services-related">
                {related.map((name) => (
                    <div key={name} className="admin-services-related-chip">
                        <span>{name}</span>
                        <button type="button" className="admin-services-related-remove" aria-label={`Remove ${name}`} onClick={() => onRemove(name)}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
                <button type="button" className="admin-services-related-add" onClick={onAdd}>+ Add</button>
            </div>
        </div>
    );
}
