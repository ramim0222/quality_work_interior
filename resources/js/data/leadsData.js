export const leadsTabDefs = [
    { key: 'all', label: 'All' },
    { key: 'new', label: 'New' },
    { key: 'contacted', label: 'Contacted' },
    { key: 'quoted', label: 'Quoted' },
    { key: 'won', label: 'Won' },
    { key: 'lost', label: 'Lost' },
];

export const leadsTabCounts = {
    all: 12,
    new: 3,
    contacted: 3,
    quoted: 3,
    won: 2,
    lost: 1,
};

export const leadsSourceOptions = [
    { value: '', label: 'All sources' },
    { value: 'Form', label: 'Website Form' },
    { value: 'WhatsApp', label: 'WhatsApp' },
    { value: 'Call', label: 'Call' },
    { value: 'Carousell', label: 'Carousell' },
];

export const leadsServiceOptions = [
    '',
    'Bathroom Renovation',
    'Kitchen Renovation',
    'Spa Centre Renovation',
    'Electrical Maintenance',
    'KTV Renovation',
    'Retail Shop Renovation',
    'General Plumbing',
    'Home Extension',
];

export const pipelineStages = [
    { key: 'new', label: 'New' },
    { key: 'contacted', label: 'Contacted' },
    { key: 'quoted', label: 'Quoted' },
    { key: 'won', label: 'Won' },
    { key: 'lost', label: 'Lost' },
];

export const allLeads = [
    { id: 1, initials: 'AR', name: 'Ahmad Razif', email: 'ahmad@email.com', phone: '+65 9123 4567', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Bathroom Renovation', status: 'New', stBg: 'rgba(37,211,102,.1)', stColor: 'var(--ok)', value: 'S$8,000', created: '28 Jun, 9:02am', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'bathroom-sg', stKey: 'new' },
    { id: 2, initials: 'SL', name: 'Sarah Lim', email: 'sarah@email.com', phone: '+65 8234 5678', source: 'WhatsApp', srcBg: 'rgba(37,211,102,.12)', srcColor: 'var(--ok)', service: 'Kitchen Renovation', status: 'Quoted', stBg: 'rgba(176,137,79,.12)', stColor: 'var(--brass)', value: 'S$14,500', created: '28 Jun, 8:44am', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'kitchen-sg', stKey: 'quoted' },
    { id: 3, initials: 'MT', name: 'Marcus Tan', email: 'marcus@email.com', phone: '+65 9345 6789', source: 'Call', srcBg: 'rgba(20,17,15,.07)', srcColor: 'var(--text)', service: 'Spa Centre Renovation', status: 'Contacted', stBg: 'rgba(20,17,15,.07)', stColor: 'var(--text-muted)', value: 'S$42,000', created: '27 Jun, 4:30pm', utmSource: 'direct', utmMedium: 'none', utmCampaign: '(none)', stKey: 'contacted' },
    { id: 4, initials: 'FN', name: 'Fatimah Noor', email: 'fatimah@email.com', phone: '+65 8456 7890', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Electrical Maintenance', status: 'Won', stBg: 'rgba(46,125,82,.1)', stColor: 'var(--ok)', value: 'S$3,200', created: '27 Jun, 11:15am', utmSource: 'meta', utmMedium: 'paid_social', utmCampaign: 'electrical-q2', stKey: 'won' },
    { id: 5, initials: 'JY', name: 'Jason Yeo', email: 'jason@email.com', phone: '+65 9567 8901', source: 'Carousell', srcBg: 'rgba(238,36,32,.1)', srcColor: '#C62828', service: 'Retail Shop Renovation', status: 'New', stBg: 'rgba(37,211,102,.1)', stColor: 'var(--ok)', value: 'S$28,000', created: '27 Jun, 9:50am', utmSource: 'carousell', utmMedium: 'platform', utmCampaign: 'carousell', stKey: 'new' },
    { id: 6, initials: 'PK', name: 'Priya Kamala', email: 'priya@email.com', phone: '+65 8678 9012', source: 'WhatsApp', srcBg: 'rgba(37,211,102,.12)', srcColor: 'var(--ok)', service: 'Home Extension', status: 'Lost', stBg: 'rgba(178,58,58,.08)', stColor: 'var(--err)', value: '—', created: '26 Jun, 3:10pm', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'home-ext', stKey: 'lost' },
    { id: 7, initials: 'DL', name: 'David Lim', email: 'david@email.com', phone: '+65 9789 0123', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Ceiling & Vinyl', status: 'Contacted', stBg: 'rgba(20,17,15,.07)', stColor: 'var(--text-muted)', value: 'S$6,500', created: '26 Jun, 10:00am', utmSource: 'tiktok', utmMedium: 'paid_social', utmCampaign: 'flooring-q2', stKey: 'contacted' },
    { id: 8, initials: 'RH', name: 'Ravi Hadiman', email: 'ravi@email.com', phone: '+65 8890 1234', source: 'Call', srcBg: 'rgba(20,17,15,.07)', srcColor: 'var(--text)', service: 'General Plumbing', status: 'Quoted', stBg: 'rgba(176,137,79,.12)', stColor: 'var(--brass)', value: 'S$1,800', created: '25 Jun, 2:45pm', utmSource: 'direct', utmMedium: 'none', utmCampaign: '(none)', stKey: 'quoted' },
    { id: 9, initials: 'WC', name: 'Wei Chen', email: 'wei@email.com', phone: '+65 9901 2345', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'KTV Renovation', status: 'Won', stBg: 'rgba(46,125,82,.1)', stColor: 'var(--ok)', value: 'S$65,000', created: '24 Jun, 9:00am', utmSource: 'meta', utmMedium: 'paid_social', utmCampaign: 'ktv-q2', stKey: 'won' },
    { id: 10, initials: 'AN', name: 'Aisha Nasir', email: 'aisha@email.com', phone: '+65 8012 3456', source: 'WhatsApp', srcBg: 'rgba(37,211,102,.12)', srcColor: 'var(--ok)', service: 'Bathroom Renovation', status: 'New', stBg: 'rgba(37,211,102,.1)', stColor: 'var(--ok)', value: 'S$7,200', created: '24 Jun, 7:30am', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'bathroom-sg', stKey: 'new' },
    { id: 11, initials: 'TW', name: 'Tom Wong', email: 'tom@email.com', phone: '+65 9123 4560', source: 'Carousell', srcBg: 'rgba(238,36,32,.1)', srcColor: '#C62828', service: 'Remodels & Paintings', status: 'Contacted', stBg: 'rgba(20,17,15,.07)', stColor: 'var(--text-muted)', value: 'S$11,000', created: '23 Jun, 5:20pm', utmSource: 'carousell', utmMedium: 'platform', utmCampaign: 'carousell', stKey: 'contacted' },
    { id: 12, initials: 'MR', name: 'Maya Rajan', email: 'maya@email.com', phone: '+65 8234 5670', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Kitchen Renovation', status: 'Quoted', stBg: 'rgba(176,137,79,.12)', stColor: 'var(--brass)', value: 'S$18,500', created: '22 Jun, 11:45am', utmSource: 'google', utmMedium: 'cpc', utmCampaign: 'kitchen-sg', stKey: 'quoted' },
];

export function buildLeadTimeline(lead) {
    const events = [
        { icon: 'form', text: `Lead submitted via ${lead.source}`, time: lead.created, iconBg: 'rgba(176,137,79,.1)', iconColor: 'var(--brass)' },
        { icon: 'msg', text: 'Auto-reply sent via WhatsApp', time: lead.created, iconBg: 'rgba(37,211,102,.1)', iconColor: 'var(--ok)' },
    ];

    if (lead.stKey !== 'new') {
        events.unshift({ icon: 'phone', text: 'First contact made', time: '1 day ago', iconBg: 'rgba(20,17,15,.07)', iconColor: 'var(--text-muted)' });
    }
    if (lead.stKey === 'quoted' || lead.stKey === 'won') {
        events.unshift({ icon: 'check', text: `Quote sent — ${lead.value}`, time: '2 days ago', iconBg: 'rgba(46,125,82,.1)', iconColor: 'var(--ok)' });
    }
    if (lead.stKey === 'won') {
        events.unshift({ icon: 'check', text: 'Job won — marked as Won', time: '3 days ago', iconBg: 'rgba(46,125,82,.1)', iconColor: 'var(--ok)' });
    }

    return events.reverse();
}

export function buildPipeline(activeStage) {
    const order = ['new', 'contacted', 'quoted', 'won', 'lost'];
    const activeIndex = order.indexOf(activeStage);

    return pipelineStages.map((stage, index) => {
        const done = index <= activeIndex;
        const active = stage.key === activeStage;

        return {
            ...stage,
            bg: active ? 'var(--brass)' : done ? 'rgba(176,137,79,.15)' : 'var(--paper)',
            border: active ? 'var(--brass)' : done ? 'var(--brass)' : 'var(--line)',
            iconColor: done ? (active ? '#FFF8EE' : 'var(--brass)') : 'var(--line)',
            labelColor: active ? 'var(--brass)' : done ? 'var(--text-muted)' : 'var(--line)',
            lineColor: index < activeIndex ? 'var(--brass)' : 'var(--line)',
            notLast: stage.key !== 'lost',
        };
    });
}
