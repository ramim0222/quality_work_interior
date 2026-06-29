import AdminLayout from '@/Layouts/AdminLayout';
import ServicesListSection from '@/Components/Admin/ServicesListSection';
import ServicesEditorSection from '@/Components/Admin/ServicesEditorSection';
import { useServicesPage } from '@/hooks/useServicesPage';

export default function Services() {
    const page = useServicesPage();

    return (
        <AdminLayout
            title="Services CMS"
            subtitle={`${page.services.length} services · click to edit`}
            activeNav="services-cms"
            layout="services"
        >
            <div className="admin-services-split">
                <ServicesListSection
                    services={page.services}
                    selectedId={page.selectedId}
                    onSelect={page.selectService}
                    onTogglePublished={page.togglePublished}
                />
                <ServicesEditorSection
                    hasSelected={page.hasSelected}
                    draft={page.draft}
                    onFieldChange={page.updateDraftField}
                    onUpdateChecklistItem={page.updateChecklistItem}
                    onRemoveChecklistItem={page.removeChecklistItem}
                    onAddChecklistItem={page.addChecklistItem}
                    onRemoveRelated={page.removeRelated}
                    onAddRelated={page.addRelated}
                    onSave={page.saveChanges}
                    onDiscard={page.discardChanges}
                />
            </div>
        </AdminLayout>
    );
}
