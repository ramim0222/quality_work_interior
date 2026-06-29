import AdminLayout from '@/Layouts/AdminLayout';
import CostsToolbarSection from '@/Components/Admin/CostsToolbarSection';
import CostsKpiSection from '@/Components/Admin/CostsKpiSection';
import CostsPlatformBreakdownSection from '@/Components/Admin/CostsPlatformBreakdownSection';
import CostsDailyChartSection from '@/Components/Admin/CostsDailyChartSection';
import CostsEntriesTableSection from '@/Components/Admin/CostsEntriesTableSection';
import { useCostsPage } from '@/hooks/useCostsPage';

export default function Costs() {
    const page = useCostsPage();

    return (
        <AdminLayout
            title="Cost Management"
            subtitle="Spend, CPL and ROI by platform · June 2025"
            activeNav="costs"
        >
            <CostsToolbarSection
                monthFilter={page.monthFilter}
                onMonthChange={page.setMonthFilter}
                onLogSpend={page.logSpend}
            />
            <CostsKpiSection />
            <div className="admin-costs-breakdown-row">
                <CostsPlatformBreakdownSection />
                <CostsDailyChartSection />
            </div>
            <CostsEntriesTableSection
                entries={page.entries}
                platformFilter={page.platformFilter}
                onPlatformChange={page.setPlatformFilter}
            />
        </AdminLayout>
    );
}
