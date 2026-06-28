import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    allLeads,
    buildLeadTimeline,
    buildPipeline,
    leadsTabCounts,
    leadsTabDefs,
} from '@/data/leadsData';

export function useLeadsPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeLead, setActiveLead] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [activeStage, setActiveStage] = useState('new');
    const [searchQ, setSearchQ] = useState('');
    const [filterSource, setFilterSource] = useState('');
    const [filterService, setFilterService] = useState('');
    const [noteText, setNoteText] = useState('');

    const filteredLeads = useMemo(() => {
        let result = allLeads;

        if (activeTab !== 'all') {
            result = result.filter((lead) => lead.stKey === activeTab);
        }
        if (filterSource) {
            result = result.filter((lead) => lead.source === filterSource);
        }
        if (filterService) {
            result = result.filter((lead) => lead.service.includes(filterService));
        }
        if (searchQ.trim()) {
            const q = searchQ.toLowerCase();
            result = result.filter((lead) => (
                `${lead.name}${lead.phone}${lead.email}${lead.service}`.toLowerCase().includes(q)
            ));
        }

        return result;
    }, [activeTab, filterSource, filterService, searchQ]);

    const allSelected = filteredLeads.length > 0 && filteredLeads.every((lead) => selectedIds.includes(lead.id));

    const setTab = useCallback((key) => {
        setActiveTab(key);
        setSelectedIds([]);
    }, []);

    const toggleAll = useCallback(() => {
        setSelectedIds(allSelected ? [] : filteredLeads.map((lead) => lead.id));
    }, [allSelected, filteredLeads]);

    const toggleRow = useCallback((leadId) => {
        setSelectedIds((ids) => (
            ids.includes(leadId) ? ids.filter((id) => id !== leadId) : [...ids, leadId]
        ));
    }, []);

    const clearSelection = useCallback(() => setSelectedIds([]), []);

    const openLead = useCallback((lead) => {
        setActiveLead(lead);
        setActiveStage(lead.stKey);
        setDrawerOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
        setActiveLead(null);
        setNoteText('');
    }, []);

    const addNote = useCallback(() => {
        setNoteText('');
    }, []);

    const activeLeadTimeline = useMemo(
        () => (activeLead ? buildLeadTimeline(activeLead) : []),
        [activeLead],
    );

    const pipeline = useMemo(() => buildPipeline(activeStage), [activeStage]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') closeDrawer();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [closeDrawer]);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
        return undefined;
    }, [drawerOpen]);

    return {
        tabs: leadsTabDefs.map((tab) => ({
            ...tab,
            count: leadsTabCounts[tab.key],
            active: tab.key === activeTab,
        })),
        filteredLeads,
        totalCount: allLeads.length,
        visibleCount: filteredLeads.length,
        allSelected,
        selectedIds,
        selectedCount: selectedIds.length,
        searchQ,
        filterSource,
        filterService,
        drawerOpen,
        activeLead,
        activeStage,
        activeLeadTimeline,
        pipeline,
        noteText,
        setSearchQ,
        setFilterSource,
        setFilterService,
        setActiveStage,
        setNoteText,
        setTab,
        toggleAll,
        toggleRow,
        clearSelection,
        openLead,
        closeDrawer,
        addNote,
    };
}
