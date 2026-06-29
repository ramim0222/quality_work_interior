import ProjectToggle from '@/Components/Admin/ProjectToggle';

const tableColumns = ['Title', 'Category', 'Year', 'Published', ''];

export default function ProjectsTableSection({
    projects,
    onTogglePublished,
    onEdit,
    onDelete,
}) {
    return (
        <div className="admin-card admin-projects-table-card admin-fade-section" style={{ animationDelay: '0.1s' }}>
            <div className="admin-projects-table-scroll">
                <div className="admin-projects-table-desktop">
                    <div className="admin-projects-tr admin-projects-tr--head">
                        <div />
                        {tableColumns.map((col) => (
                            <span key={col || 'actions'} className="admin-projects-th">{col}</span>
                        ))}
                    </div>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="admin-projects-tr"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            <div
                                className="admin-projects-thumb"
                                style={{
                                    background: `repeating-linear-gradient(-45deg, ${project.bg1}, ${project.bg1} 4px, ${project.bg2} 4px, ${project.bg2} 16px)`,
                                }}
                            />
                            <div className="admin-projects-title-cell">
                                <div className="admin-projects-title">{project.title}</div>
                                <div className="admin-projects-slug">{project.slug}</div>
                            </div>
                            <span className="admin-projects-category">{project.category}</span>
                            <span className="admin-projects-year">{project.year}</span>
                            <div>
                                <ProjectToggle
                                    enabled={project.published}
                                    onToggle={() => onTogglePublished(project.id)}
                                    label={`Toggle published for ${project.title}`}
                                />
                            </div>
                            <div className="admin-projects-row-actions">
                                <button
                                    type="button"
                                    className="admin-projects-edit-btn"
                                    onClick={() => onEdit(project)}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="admin-projects-del-btn"
                                    onClick={() => onDelete(project.id)}
                                >
                                    Del
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="admin-projects-mobile-list">
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className="admin-projects-mobile-card"
                        style={{ animationDelay: `${index * 0.04}s` }}
                    >
                        <div className="admin-projects-mobile-top">
                            <div
                                className="admin-projects-thumb"
                                style={{
                                    background: `repeating-linear-gradient(-45deg, ${project.bg1}, ${project.bg1} 4px, ${project.bg2} 4px, ${project.bg2} 16px)`,
                                }}
                            />
                            <div className="admin-projects-title-cell">
                                <div className="admin-projects-title">{project.title}</div>
                                <div className="admin-projects-slug">{project.slug}</div>
                            </div>
                            <ProjectToggle
                                enabled={project.published}
                                onToggle={() => onTogglePublished(project.id)}
                                label={`Toggle published for ${project.title}`}
                            />
                        </div>
                        <div className="admin-projects-mobile-meta">
                            <span className="admin-projects-category">{project.category}</span>
                            <span className="admin-projects-year">{project.year}</span>
                        </div>
                        <div className="admin-projects-row-actions admin-projects-row-actions--mobile">
                            <button
                                type="button"
                                className="admin-projects-edit-btn"
                                onClick={() => onEdit(project)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="admin-projects-del-btn"
                                onClick={() => onDelete(project.id)}
                            >
                                Del
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
