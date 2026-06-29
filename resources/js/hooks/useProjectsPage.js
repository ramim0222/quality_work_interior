import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    emptyProject,
    initialProjects,
    matchesCategoryFilter,
    matchesSearch,
} from '@/data/projectsData';

export function useProjectsPage() {
    const [projects, setProjects] = useState(initialProjects);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [editorOpen, setEditorOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(emptyProject);

    const filteredProjects = useMemo(() => (
        projects.filter((project) => (
            matchesSearch(project, searchQuery) && matchesCategoryFilter(project.category, categoryFilter)
        ))
    ), [projects, searchQuery, categoryFilter]);

    const publishedCount = useMemo(
        () => projects.filter((project) => project.published).length,
        [projects],
    );

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setEditorOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        if (editorOpen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
        return undefined;
    }, [editorOpen]);

    const openNew = useCallback(() => {
        setEditingProject({ ...emptyProject });
        setEditorOpen(true);
    }, []);

    const openEdit = useCallback((project) => {
        setEditingProject({ ...project, body: project.body || '' });
        setEditorOpen(true);
    }, []);

    const closeEditor = useCallback(() => {
        setEditorOpen(false);
    }, []);

    const togglePublished = useCallback((id) => {
        setProjects((prev) => prev.map((project) => (
            project.id === id ? { ...project, published: !project.published } : project
        )));
    }, []);

    const deleteProject = useCallback((id) => {
        setProjects((prev) => prev.filter((project) => project.id !== id));
    }, []);

    const updateEditingField = useCallback((field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setEditingProject((prev) => ({ ...prev, [field]: value }));
    }, []);

    const toggleEditingPublished = useCallback(() => {
        setEditingProject((prev) => ({ ...prev, published: !prev.published }));
    }, []);

    const saveProject = useCallback(() => {
        setProjects((prev) => {
            if (editingProject.id) {
                return prev.map((project) => (
                    project.id === editingProject.id ? { ...editingProject } : project
                ));
            }
            const nextId = Math.max(0, ...prev.map((p) => p.id)) + 1;
            return [{ ...editingProject, id: nextId }, ...prev];
        });
        setEditorOpen(false);
    }, [editingProject]);

    return {
        projects: filteredProjects,
        totalCount: projects.length,
        publishedCount,
        searchQuery,
        categoryFilter,
        editorOpen,
        editingProject,
        setSearchQuery,
        setCategoryFilter,
        openNew,
        openEdit,
        closeEditor,
        togglePublished,
        deleteProject,
        updateEditingField,
        toggleEditingPublished,
        saveProject,
    };
}
