import AdminLayout from '@/Layouts/AdminLayout';
import IntegrationsActionsSection from '@/Components/Admin/IntegrationsActionsSection';
import IntegrationsStatusPillsSection from '@/Components/Admin/IntegrationsStatusPillsSection';
import IntegrationsGridSection from '@/Components/Admin/IntegrationsGridSection';
import IntegrationsDualTrackingSection from '@/Components/Admin/IntegrationsDualTrackingSection';
import { useIntegrationsPage } from '@/hooks/useIntegrationsPage';

export default function Integrations() {
    const page = useIntegrationsPage();

    return (
        <AdminLayout
            title="Pixels & Integrations"
            subtitle="Configure tracking pixels, API tokens and CAPI connections"
            activeNav="integrations"
        >
            <IntegrationsActionsSection onAddIntegration={page.addIntegration} />
            <IntegrationsStatusPillsSection integrations={page.integrations} />
            <IntegrationsGridSection
                integrations={page.integrations}
                onToggle={page.toggleIntegration}
                onFieldChange={page.updateField}
                onTest={page.testIntegration}
                onSave={page.saveIntegration}
            />
            <IntegrationsDualTrackingSection />
        </AdminLayout>
    );
}
