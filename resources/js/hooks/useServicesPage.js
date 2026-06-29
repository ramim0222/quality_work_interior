import { useCallback, useMemo, useState } from 'react';
import { cloneService, initialServices } from '@/data/servicesData';

export function useServicesPage() {
    const [services, setServices] = useState(initialServices);
    const [selectedId, setSelectedId] = useState(1);
    const [draft, setDraft] = useState(() => cloneService(initialServices[0]));

    const selectedService = useMemo(
        () => services.find((service) => service.id === selectedId) || null,
        [services, selectedId],
    );

    const selectService = useCallback((id) => {
        setSelectedId(id);
        setServices((prev) => {
            const service = prev.find((item) => item.id === id);
            if (service) {
                setDraft(cloneService(service));
            }
            return prev;
        });
    }, []);

    const togglePublished = useCallback((id) => {
        setServices((prev) => prev.map((service) => (
            service.id === id ? { ...service, published: !service.published } : service
        )));
        if (selectedId === id) {
            setDraft((prev) => ({ ...prev, published: !prev.published }));
        }
    }, [selectedId]);

    const updateDraftField = useCallback((field) => (event) => {
        setDraft((prev) => ({ ...prev, [field]: event.target.value }));
    }, []);

    const updateChecklistItem = useCallback((index, value) => {
        setDraft((prev) => {
            const checklist = [...prev.checklist];
            checklist[index] = value;
            return { ...prev, checklist };
        });
    }, []);

    const removeChecklistItem = useCallback((index) => {
        setDraft((prev) => ({
            ...prev,
            checklist: prev.checklist.filter((_, i) => i !== index),
        }));
    }, []);

    const addChecklistItem = useCallback(() => {
        setDraft((prev) => ({
            ...prev,
            checklist: [...prev.checklist, 'New checklist item'],
        }));
    }, []);

    const removeRelated = useCallback((name) => {
        setDraft((prev) => ({
            ...prev,
            related: prev.related.filter((item) => item !== name),
        }));
    }, []);

    const addRelated = useCallback(() => {
        setDraft((prev) => ({
            ...prev,
            related: [...prev.related, 'Related service'],
        }));
    }, []);

    const saveChanges = useCallback(() => {
        setServices((prev) => prev.map((service) => (
            service.id === selectedId ? cloneService(draft) : service
        )));
    }, [draft, selectedId]);

    const discardChanges = useCallback(() => {
        if (selectedService) {
            setDraft(cloneService(selectedService));
        }
    }, [selectedService]);

    return {
        services,
        selectedId,
        draft,
        hasSelected: Boolean(selectedService),
        selectService,
        togglePublished,
        updateDraftField,
        updateChecklistItem,
        removeChecklistItem,
        addChecklistItem,
        removeRelated,
        addRelated,
        saveChanges,
        discardChanges,
    };
}
