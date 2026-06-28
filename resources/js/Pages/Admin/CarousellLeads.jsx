import AdminLayout from '@/Layouts/AdminLayout';
import CarousellLeadsPageContent from '@/Components/Admin/CarousellLeadsPageContent';

export default function CarousellLeads() {
    return (
        <AdminLayout title="Carousell Leads" activeNav="carousell" layout="leads">
            <CarousellLeadsPageContent />
        </AdminLayout>
    );
}
