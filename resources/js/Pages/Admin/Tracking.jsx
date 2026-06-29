import AdminLayout from '@/Layouts/AdminLayout';
import TrackingHealthSection from '@/Components/Admin/TrackingHealthSection';
import TrackingIntegrationBarSection from '@/Components/Admin/TrackingIntegrationBarSection';
import TrackingTypeTabsSection from '@/Components/Admin/TrackingTypeTabsSection';
import TrackingEventsTableSection from '@/Components/Admin/TrackingEventsTableSection';
import TrackingExplainerSection from '@/Components/Admin/TrackingExplainerSection';
import { useTrackingPage } from '@/hooks/useTrackingPage';

export default function Tracking() {
    const page = useTrackingPage();

    return (
        <AdminLayout
            title="Tracking"
            subtitle="Client + server event log · deduplication status"
            activeNav="tracking"
        >
            <TrackingHealthSection />
            <TrackingIntegrationBarSection />
            <TrackingTypeTabsSection
                activeType={page.activeType}
                onTypeChange={page.setActiveType}
            />
            <TrackingEventsTableSection events={page.events} />
            <TrackingExplainerSection />
        </AdminLayout>
    );
}
