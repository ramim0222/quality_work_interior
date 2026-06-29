import { useCallback, useState } from 'react';
import {
    initialBusinessProfile,
    initialNotifEmails,
    initialNotifToggles,
    initialSettingsUsers,
    initialWaContacts,
} from '@/data/settingsData';

export function useSettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [businessProfile, setBusinessProfile] = useState(initialBusinessProfile);
    const [waContacts, setWaContacts] = useState(initialWaContacts);
    const [users, setUsers] = useState(initialSettingsUsers);
    const [notifEmails, setNotifEmails] = useState(initialNotifEmails);
    const [notifToggles, setNotifToggles] = useState(initialNotifToggles);

    const updateProfileField = useCallback((field) => (event) => {
        setBusinessProfile((prev) => ({ ...prev, [field]: event.target.value }));
    }, []);

    const updateWaContact = useCallback((id, field, value) => {
        setWaContacts((prev) => prev.map((contact) => (
            contact.id === id ? { ...contact, [field]: value } : contact
        )));
    }, []);

    const addWaContact = useCallback(() => {
        setWaContacts((prev) => [
            ...prev,
            { id: Date.now(), name: '', role: '', number: '' },
        ]);
    }, []);

    const removeWaContact = useCallback((id) => {
        setWaContacts((prev) => prev.filter((contact) => contact.id !== id));
    }, []);

    const updateUserRole = useCallback((id, role) => {
        setUsers((prev) => prev.map((user) => (
            user.id === id ? { ...user, role } : user
        )));
    }, []);

    const removeUser = useCallback((id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    }, []);

    const inviteUser = useCallback(() => {}, []);

    const updateNotifEmail = useCallback((index, value) => {
        setNotifEmails((prev) => prev.map((email, i) => (i === index ? value : email)));
    }, []);

    const addNotifEmail = useCallback(() => {
        setNotifEmails((prev) => [...prev, '']);
    }, []);

    const removeNotifEmail = useCallback((index) => {
        setNotifEmails((prev) => prev.filter((_, i) => i !== index));
    }, []);

    const toggleNotif = useCallback((id) => {
        setNotifToggles((prev) => prev.map((item) => (
            item.id === id ? { ...item, enabled: !item.enabled } : item
        )));
    }, []);

    const saveProfile = useCallback(() => {}, []);
    const saveWhatsapp = useCallback(() => {}, []);
    const saveNotifications = useCallback(() => {}, []);

    return {
        activeTab,
        setActiveTab,
        businessProfile,
        waContacts,
        users,
        notifEmails,
        notifToggles,
        updateProfileField,
        updateWaContact,
        addWaContact,
        removeWaContact,
        updateUserRole,
        removeUser,
        inviteUser,
        updateNotifEmail,
        addNotifEmail,
        removeNotifEmail,
        toggleNotif,
        saveProfile,
        saveWhatsapp,
        saveNotifications,
    };
}
