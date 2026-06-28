export const adminNavSections = [
    {
        label: 'Overview',
        items: [
            { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
        ],
    },
    {
        label: 'Leads',
        items: [
            { id: 'leads', label: 'Leads', href: '#', icon: 'leads', badge: '12' },
            { id: 'carousell', label: 'Carousell Leads', href: '#', icon: 'carousell' },
        ],
    },
    {
        label: 'Growth',
        items: [
            { id: 'tracking', label: 'Tracking', href: '#', icon: 'tracking' },
            { id: 'integrations', label: 'Integrations', href: '#', icon: 'integrations', statusDots: ['ok', 'ok', 'warn'] },
            { id: 'costs', label: 'Cost Management', href: '#', icon: 'costs' },
        ],
    },
    {
        label: 'Content',
        items: [
            { id: 'projects-cms', label: 'Projects CMS', href: '#', icon: 'projects' },
            { id: 'services-cms', label: 'Services CMS', href: '#', icon: 'services' },
        ],
    },
];
