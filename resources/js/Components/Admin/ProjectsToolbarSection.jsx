import { projectCategoryFilterOptions } from '@/data/projectsData';

export default function ProjectsToolbarSection({
    searchQuery,
    categoryFilter,
    onSearchChange,
    onCategoryChange,
    onAddProject,
}) {
    return (
        <div className="admin-projects-toolbar admin-fade-section">
            <div className="admin-projects-search">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    type="search"
                    className="admin-projects-search-input"
                    placeholder="Search projects…"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    aria-label="Search projects"
                />
            </div>
            <select
                className="admin-projects-fi admin-projects-fi--compact"
                value={categoryFilter}
                onChange={(e) => onCategoryChange(e.target.value)}
                aria-label="Filter by category"
            >
                {projectCategoryFilterOptions.map((opt) => (
                    <option key={opt.value || 'all'} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <button type="button" className="admin-projects-add-btn" onClick={onAddProject}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Project
            </button>
        </div>
    );
}
