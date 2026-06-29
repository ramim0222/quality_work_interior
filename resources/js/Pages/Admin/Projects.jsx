import AdminLayout from '@/Layouts/AdminLayout';
import ProjectsToolbarSection from '@/Components/Admin/ProjectsToolbarSection';
import ProjectsTableSection from '@/Components/Admin/ProjectsTableSection';
import ProjectsEditorDrawer from '@/Components/Admin/ProjectsEditorDrawer';
import { useProjectsPage } from '@/hooks/useProjectsPage';

export default function Projects() {
    const page = useProjectsPage();

    return (
        <AdminLayout
            title="Projects CMS"
            subtitle={`${page.totalCount} projects · ${page.publishedCount} published`}
            activeNav="projects-cms"
        >
            <ProjectsToolbarSection
                searchQuery={page.searchQuery}
                categoryFilter={page.categoryFilter}
                onSearchChange={page.setSearchQuery}
                onCategoryChange={page.setCategoryFilter}
                onAddProject={page.openNew}
            />
            <ProjectsTableSection
                projects={page.projects}
                onTogglePublished={page.togglePublished}
                onEdit={page.openEdit}
                onDelete={page.deleteProject}
            />
            <ProjectsEditorDrawer
                open={page.editorOpen}
                project={page.editingProject}
                onClose={page.closeEditor}
                onFieldChange={page.updateEditingField}
                onTogglePublished={page.toggleEditingPublished}
                onSave={page.saveProject}
            />
        </AdminLayout>
    );
}
