import AdminLayout from '@/Layouts/AdminLayout';
import DashboardKpiSection from '@/Components/Admin/DashboardKpiSection';
import DashboardLeadsBySourceSection from '@/Components/Admin/DashboardLeadsBySourceSection';
import DashboardSpendVsLeadsSection from '@/Components/Admin/DashboardSpendVsLeadsSection';
import DashboardPlatformCostsSection from '@/Components/Admin/DashboardPlatformCostsSection';
import DashboardRecentLeadsSection from '@/Components/Admin/DashboardRecentLeadsSection';
import DashboardIntegrationHealthSection from '@/Components/Admin/DashboardIntegrationHealthSection';
import {
    dashboardChart,
    dashboardIntegrations,
    dashboardKpis,
    dashboardLeads,
    dashboardPlatforms,
    dashboardSources,
} from '@/data/dashboardData';

export default function Dashboard() {
    return (
        <AdminLayout
            title="Overview"
            subtitle="Good morning — here's what's happening."
            activeNav="dashboard"
        >
            <DashboardKpiSection kpis={dashboardKpis} />

            <div className="admin-row-charts">
                <DashboardLeadsBySourceSection sources={dashboardSources} />
                <DashboardSpendVsLeadsSection chart={dashboardChart} />
            </div>

            <div className="admin-row-leads">
                <DashboardPlatformCostsSection platforms={dashboardPlatforms} />
                <DashboardRecentLeadsSection leads={dashboardLeads} />
            </div>

            <DashboardIntegrationHealthSection integrations={dashboardIntegrations} />
        </AdminLayout>
    );
}
