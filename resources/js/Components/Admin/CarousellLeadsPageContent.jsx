import CarousellLeadsTopbarSection from '@/Components/Admin/CarousellLeadsTopbarSection';
import CarousellSummarySection from '@/Components/Admin/CarousellSummarySection';
import CarousellLeadFormSection from '@/Components/Admin/CarousellLeadFormSection';
import CarousellLeadsTableSection from '@/Components/Admin/CarousellLeadsTableSection';
import { useCarousellLeadsPage } from '@/hooks/useCarousellLeadsPage';

export default function CarousellLeadsPageContent() {
    const page = useCarousellLeadsPage();

    return (
        <>
            <CarousellLeadsTopbarSection
                statusFilter={page.statusFilter}
                monthFilter={page.monthFilter}
                onStatusChange={page.setStatusFilter}
                onMonthChange={page.setMonthFilter}
            />
            <div className="admin-carousell-body">
                <CarousellSummarySection summary={page.summary} />
                <div className="admin-carousell-grid">
                    <CarousellLeadFormSection
                        form={page.form}
                        formError={page.formError}
                        onChange={page.updateForm}
                        onSubmit={page.addLead}
                    />
                    <CarousellLeadsTableSection
                        leads={page.leads}
                        leadCount={page.leadCount}
                        onStatusChange={page.updateLeadStatus}
                    />
                </div>
            </div>
        </>
    );
}
