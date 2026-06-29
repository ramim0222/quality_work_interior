import ProjectToggle from '@/Components/Admin/ProjectToggle';
import { projectGallerySlots, projectServiceCategories } from '@/data/projectsData';

export default function ProjectsEditorDrawer({
    open,
    project,
    onClose,
    onFieldChange,
    onTogglePublished,
    onSave,
}) {
    const title = project.title || 'New Project';

    return (
        <>
            <button
                type="button"
                className={`admin-projects-editor-bg${open ? ' open' : ''}`}
                aria-label="Close editor"
                onClick={onClose}
            />
            <aside className={`admin-projects-editor${open ? ' open' : ''}`} aria-hidden={!open}>
                <div className="admin-projects-editor-inner">
                    <div className="admin-projects-editor-head">
                        <h2 className="admin-projects-editor-title">{title}</h2>
                        <button type="button" className="admin-projects-editor-close" aria-label="Close" onClick={onClose}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="admin-projects-editor-body">
                        <div className="admin-projects-editor-row">
                            <div>
                                <label className="admin-projects-lbl" htmlFor="proj-title">Title *</label>
                                <input id="proj-title" className="admin-projects-fi" value={project.title} onChange={onFieldChange('title')} placeholder="Project title" />
                            </div>
                            <div>
                                <label className="admin-projects-lbl" htmlFor="proj-slug">Slug *</label>
                                <input id="proj-slug" className="admin-projects-fi admin-projects-fi--mono" value={project.slug} onChange={onFieldChange('slug')} placeholder="project-slug" />
                            </div>
                        </div>

                        <div>
                            <label className="admin-projects-lbl" htmlFor="proj-category">Service Category</label>
                            <select id="proj-category" className="admin-projects-fi" value={project.category} onChange={onFieldChange('category')}>
                                {projectServiceCategories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="admin-projects-editor-row">
                            <div>
                                <label className="admin-projects-lbl" htmlFor="proj-location">Location</label>
                                <input id="proj-location" className="admin-projects-fi" value={project.location} onChange={onFieldChange('location')} placeholder="Sengkang, Singapore" />
                            </div>
                            <div>
                                <label className="admin-projects-lbl" htmlFor="proj-year">Year</label>
                                <input id="proj-year" type="number" min="2016" max="2030" className="admin-projects-fi" value={project.year} onChange={onFieldChange('year')} placeholder="2025" />
                            </div>
                        </div>

                        <div>
                            <label className="admin-projects-lbl" htmlFor="proj-summary">Summary</label>
                            <textarea id="proj-summary" className="admin-projects-fi admin-projects-fi--area-sm" value={project.summary} onChange={onFieldChange('summary')} placeholder="One-paragraph summary shown in project cards…" rows={3} />
                        </div>

                        <div>
                            <label className="admin-projects-lbl" htmlFor="proj-body">Body (Markdown / Rich Text)</label>
                            <textarea id="proj-body" className="admin-projects-fi admin-projects-fi--body" value={project.body || ''} onChange={onFieldChange('body')} placeholder={'## The Brief\n\nDescribe the project in full…'} rows={6} />
                        </div>

                        <div>
                            <label className="admin-projects-lbl">Cover Image</label>
                            <div className="admin-projects-upload-zone">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                                <p className="admin-projects-upload-title">Drop image or click to upload</p>
                                <p className="admin-projects-upload-note">JPG, PNG, WebP · max 4MB</p>
                            </div>
                        </div>

                        <div>
                            <label className="admin-projects-lbl">Gallery (multi-select, reorderable)</label>
                            <div className="admin-projects-upload-zone admin-projects-upload-zone--compact">
                                <div className="admin-projects-gallery">
                                    {projectGallerySlots.map((slot) => (
                                        <div key={slot} className="admin-projects-gallery-slot">
                                            <span>{slot}</span>
                                        </div>
                                    ))}
                                    <div className="admin-projects-gallery-add">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="admin-projects-upload-note">Drag to reorder · click + to add</p>
                            </div>
                        </div>

                        <div className="admin-projects-editor-row">
                            <div>
                                <label className="admin-projects-lbl">Before Image</label>
                                <div className="admin-projects-upload-zone admin-projects-upload-zone--mini">
                                    <p className="admin-projects-upload-mini">Before photo</p>
                                </div>
                            </div>
                            <div>
                                <label className="admin-projects-lbl">After Image</label>
                                <div className="admin-projects-upload-zone admin-projects-upload-zone--mini">
                                    <p className="admin-projects-upload-mini">After photo</p>
                                </div>
                            </div>
                        </div>

                        <div className="admin-projects-published-bar">
                            <div>
                                <div className="admin-projects-published-title">Published</div>
                                <div className="admin-projects-published-note">Visible on the public Projects page</div>
                            </div>
                            <ProjectToggle
                                enabled={project.published}
                                onToggle={onTogglePublished}
                                label="Toggle project published status"
                            />
                        </div>
                    </div>

                    <div className="admin-projects-editor-foot">
                        <button type="button" className="admin-projects-save-btn" onClick={onSave}>Save Project</button>
                        <a href="#" className="admin-projects-preview-btn">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Preview
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}
