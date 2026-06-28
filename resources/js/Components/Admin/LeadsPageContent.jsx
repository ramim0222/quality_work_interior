import LeadsTopbarSection from '@/Components/Admin/LeadsTopbarSection';
import LeadsToolbarSection from '@/Components/Admin/LeadsToolbarSection';
import LeadsTableSection from '@/Components/Admin/LeadsTableSection';
import LeadsPaginationSection from '@/Components/Admin/LeadsPaginationSection';
import LeadsBulkBar from '@/Components/Admin/LeadsBulkBar';
import LeadsDetailDrawer from '@/Components/Admin/LeadsDetailDrawer';
import { useLeadsPage } from '@/hooks/useLeadsPage';

export default function LeadsPageContent() {
    const leads = useLeadsPage();

    return (
        <>
            <LeadsTopbarSection
                totalCount={leads.totalCount}
                searchQ={leads.searchQ}
                onSearchChange={leads.setSearchQ}
            />
            <LeadsToolbarSection
                tabs={leads.tabs}
                onTabChange={leads.setTab}
                filterSource={leads.filterSource}
                filterService={leads.filterService}
                onSourceChange={leads.setFilterSource}
                onServiceChange={leads.setFilterService}
            />
            <div className="admin-leads-body">
                <LeadsTableSection
                    leads={leads.filteredLeads}
                    allSelected={leads.allSelected}
                    selectedIds={leads.selectedIds}
                    onToggleAll={leads.toggleAll}
                    onToggleRow={leads.toggleRow}
                    onOpenLead={leads.openLead}
                />
                <LeadsPaginationSection
                    visibleCount={leads.visibleCount}
                    totalCount={leads.totalCount}
                />
            </div>
            <LeadsBulkBar
                open={leads.selectedCount > 0}
                selectedCount={leads.selectedCount}
                onClear={leads.clearSelection}
            />
            <LeadsDetailDrawer
                open={leads.drawerOpen}
                lead={leads.activeLead}
                timeline={leads.activeLeadTimeline}
                pipeline={leads.pipeline}
                noteText={leads.noteText}
                onClose={leads.closeDrawer}
                onStageChange={leads.setActiveStage}
                onNoteChange={leads.setNoteText}
                onAddNote={leads.addNote}
            />
        </>
    );
}
