import ProjectToggle from '@/Components/Admin/ProjectToggle';

export default function ServicesListSection({
    services,
    selectedId,
    onSelect,
    onTogglePublished,
}) {
    return (
        <aside className="admin-services-list admin-fade-section">
            <div className="admin-services-list-hint">
                <p>Drag to reorder · toggle to publish/unpublish</p>
            </div>
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`admin-services-row${service.id === selectedId ? ' admin-services-row--selected' : ''}`}
                    style={{ animationDelay: `${index * 0.03}s` }}
                    onClick={() => onSelect(service.id)}
                    onKeyDown={(e) => e.key === 'Enter' && onSelect(service.id)}
                    role="button"
                    tabIndex={0}
                >
                    <div className="admin-services-drag" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="5" r="1" />
                            <circle cx="9" cy="12" r="1" />
                            <circle cx="9" cy="19" r="1" />
                            <circle cx="15" cy="5" r="1" />
                            <circle cx="15" cy="12" r="1" />
                            <circle cx="15" cy="19" r="1" />
                        </svg>
                    </div>
                    <div className="admin-services-num">{service.num}</div>
                    <div className="admin-services-name">{service.name}</div>
                    <div
                        className="admin-services-toggle-wrap"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="presentation"
                    >
                        <ProjectToggle
                            enabled={service.published}
                            onToggle={() => onTogglePublished(service.id)}
                            label={`Toggle published for ${service.name}`}
                        />
                    </div>
                </div>
            ))}
        </aside>
    );
}
