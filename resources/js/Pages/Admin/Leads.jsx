import AdminLayout from '@/Layouts/AdminLayout';
import LeadsPageContent from '@/Components/Admin/LeadsPageContent';

export default function Leads() {
    return (
        <AdminLayout title="Leads" activeNav="leads" layout="leads">
            <LeadsPageContent />
        </AdminLayout>
    );
}
