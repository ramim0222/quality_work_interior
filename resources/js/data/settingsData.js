export const settingsTabs = [
    { key: 'profile', label: 'Business Profile', icon: 'building' },
    { key: 'whatsapp', label: 'WhatsApp Numbers', icon: 'phone' },
    { key: 'users', label: 'Users & Roles', icon: 'users' },
    { key: 'notifications', label: 'Notifications', icon: 'bell' },
];

export const initialBusinessProfile = {
    businessName: 'Quality Work Interior Pte. Ltd.',
    uen: '202531526C',
    registeredAddress: '194 Rivervale Drive, Singapore 540194',
    operationsAddress: 'Jalan Besar / Sim Lim Tower area, Singapore',
    email: 'hello@qualitywork.sg',
    phone: '+65 9868 3650',
    openingHours: 'Mon – Sun, 8am – 11pm',
    website: 'https://qualitywork.sg',
    aboutBlurb: "Singapore's trusted renovation partner. Licensed contractor. HDB approved. 1,200+ projects since 2016.",
};

export const initialWaContacts = [
    { id: 1, name: 'Md Rashel', role: 'Project Lead', number: '+65 9868 3650' },
    { id: 2, name: 'Sales Team', role: 'General Enquiries', number: '+65 9868 3650' },
];

export const initialSettingsUsers = [
    { id: 1, initials: 'A', name: 'Admin User', email: 'admin@qualitywork.sg', role: 'admin' },
    { id: 2, initials: 'R', name: 'Md Rashel', email: 'rashel@qualitywork.sg', role: 'admin' },
    { id: 3, initials: 'S', name: 'Siti Rahimah', email: 'siti@qualitywork.sg', role: 'staff' },
];

export const initialNotifEmails = ['admin@qualitywork.sg', 'rashel@qualitywork.sg'];

export const initialNotifToggles = [
    { id: 'new-lead', label: 'New lead notification', desc: 'Email when a new lead is submitted via any channel', enabled: true },
    { id: 'daily-digest', label: 'Daily summary digest', desc: '9am summary of leads received in the past 24h', enabled: true },
    { id: 'wa-click', label: 'WhatsApp click alert', desc: 'Notify when a visitor clicks the WhatsApp widget', enabled: false },
    { id: 'failed-event', label: 'Failed server event alert', desc: 'Alert if a CAPI / server-side event returns error', enabled: true },
];

export const userRoleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'staff', label: 'Staff' },
];
