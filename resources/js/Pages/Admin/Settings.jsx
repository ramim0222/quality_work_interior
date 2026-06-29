import AdminLayout from '@/Layouts/AdminLayout';
import SettingsTabsSection from '@/Components/Admin/SettingsTabsSection';
import SettingsBusinessProfileSection from '@/Components/Admin/SettingsBusinessProfileSection';
import SettingsWhatsappSection from '@/Components/Admin/SettingsWhatsappSection';
import SettingsUsersSection from '@/Components/Admin/SettingsUsersSection';
import SettingsNotificationsSection from '@/Components/Admin/SettingsNotificationsSection';
import { useSettingsPage } from '@/hooks/useSettingsPage';

export default function Settings() {
    const page = useSettingsPage();

    return (
        <AdminLayout title="Settings" activeNav="settings" layout="settings">
            <div className="admin-settings-split">
                <SettingsTabsSection
                    activeTab={page.activeTab}
                    onTabChange={page.setActiveTab}
                />
                <div className="admin-settings-content">
                    {page.activeTab === 'profile' && (
                        <SettingsBusinessProfileSection
                            profile={page.businessProfile}
                            onFieldChange={page.updateProfileField}
                            onSave={page.saveProfile}
                        />
                    )}
                    {page.activeTab === 'whatsapp' && (
                        <SettingsWhatsappSection
                            contacts={page.waContacts}
                            onUpdateContact={page.updateWaContact}
                            onAddContact={page.addWaContact}
                            onRemoveContact={page.removeWaContact}
                            onSave={page.saveWhatsapp}
                        />
                    )}
                    {page.activeTab === 'users' && (
                        <SettingsUsersSection
                            users={page.users}
                            onRoleChange={page.updateUserRole}
                            onRemove={page.removeUser}
                            onInvite={page.inviteUser}
                        />
                    )}
                    {page.activeTab === 'notifications' && (
                        <SettingsNotificationsSection
                            emails={page.notifEmails}
                            toggles={page.notifToggles}
                            onUpdateEmail={page.updateNotifEmail}
                            onAddEmail={page.addNotifEmail}
                            onRemoveEmail={page.removeNotifEmail}
                            onToggle={page.toggleNotif}
                            onSave={page.saveNotifications}
                        />
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
