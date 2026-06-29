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
            { id: 'leads', label: 'Leads', href: '/admin/leads', icon: 'leads', badge: '12' },
            { id: 'carousell', label: 'Carousell Leads', href: '/admin/carousell-leads', icon: 'carousell' },
        ],
    },
    {
        label: 'Growth',
        items: [
            { id: 'tracking', label: 'Tracking', href: '/admin/tracking', icon: 'tracking' },
            { id: 'integrations', label: 'Integrations', href: '/admin/integrations', icon: 'integrations', statusDots: ['ok', 'ok', 'warn'] },
            { id: 'costs', label: 'Cost Management', href: '/admin/costs', icon: 'costs' },
        ],
    },
    {
        label: 'Content',
        items: [
            { id: 'projects-cms', label: 'Projects CMS', href: '/admin/projects', icon: 'projects' },
            { id: 'services-cms', label: 'Services CMS', href: '/admin/services', icon: 'services' },
        ],
    },
];
