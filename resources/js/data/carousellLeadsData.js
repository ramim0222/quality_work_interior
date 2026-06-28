export const carousellServiceOptions = [
    '',
    'Bathroom Renovation',
    'Kitchen Renovation',
    'Spa Centre Renovation',
    'KTV Renovation',
    'Retail Shop Renovation',
    'Home Extension & Room Additions',
    'Ceiling, Partition & Vinyl Flooring',
    'Remodels & Paintings',
    'Hacking & Reinstatement',
    'Electrical Maintenance',
    'General Plumbing & Handyman',
    'Roller Shutter Repair',
];

export const carousellStatusOptions = [
    { value: '', label: 'All statuses' },
    { value: 'New', label: 'New' },
    { value: 'Contacted', label: 'Contacted' },
    { value: 'Quoted', label: 'Quoted' },
    { value: 'Won', label: 'Won' },
    { value: 'Lost', label: 'Lost' },
];

export const carousellFormStatusOptions = [
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'quoted', label: 'Quoted' },
];

export const carousellMonthOptions = ['Jun 2025', 'May 2025', 'Apr 2025'];

export const statusStyles = {
    New: { stBg: 'rgba(37,211,102,.1)', stColor: 'var(--ok)' },
    Contacted: { stBg: 'rgba(20,17,15,.07)', stColor: 'var(--text-muted)' },
    Quoted: { stBg: 'rgba(176,137,79,.12)', stColor: 'var(--brass)' },
    Won: { stBg: 'rgba(46,125,82,.1)', stColor: 'var(--ok)' },
    Lost: { stBg: 'rgba(178,58,58,.08)', stColor: 'var(--err)' },
};

export const initialCarousellLeads = [
    { id: 1, initials: 'JY', name: 'Jason Yeo', phone: '+65 9567 8901', service: 'Retail Shop Renovation', status: 'New', ...statusStyles.New, value: 'S$28,000', date: '27 Jun' },
    { id: 2, initials: 'TW', name: 'Tom Wong', phone: '+65 9123 4560', service: 'Remodels & Paintings', status: 'Contacted', ...statusStyles.Contacted, value: 'S$11,000', date: '24 Jun' },
    { id: 3, initials: 'LS', name: 'Linda Sim', phone: '+65 8890 2341', service: 'Bathroom Renovation', status: 'Quoted', ...statusStyles.Quoted, value: 'S$9,500', date: '22 Jun' },
    { id: 4, initials: 'RK', name: 'Rajan Kumar', phone: '+65 9012 3456', service: 'Kitchen Renovation', status: 'Won', ...statusStyles.Won, value: 'S$15,000', date: '19 Jun' },
    { id: 5, initials: 'GH', name: 'Grace Hoon', phone: '+65 8234 5670', service: 'Electrical Maintenance', status: 'New', ...statusStyles.New, value: 'S$2,800', date: '18 Jun' },
    { id: 6, initials: 'BT', name: 'Ben Toh', phone: '+65 9345 6781', service: 'Ceiling & Vinyl Flooring', status: 'Lost', ...statusStyles.Lost, value: '—', date: '15 Jun' },
    { id: 7, initials: 'MA', name: 'Mary Ang', phone: '+65 8456 7892', service: 'Hacking & Reinstatement', status: 'Contacted', ...statusStyles.Contacted, value: 'S$6,200', date: '12 Jun' },
    { id: 8, initials: 'HC', name: 'Henry Chan', phone: '+65 9678 9013', service: 'General Plumbing', status: 'Won', ...statusStyles.Won, value: 'S$1,900', date: '8 Jun' },
];

export function leadInitials(name) {
    return name.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
}

export function formatLeadDate(dateValue) {
    if (!dateValue) return 'Today';
    return new Date(`${dateValue}T12:00:00`).toLocaleDateString('en-SG', { day: 'numeric', month: 'short' });
}

export function buildCarousellSummary(leads) {
    const won = leads.filter((lead) => lead.status === 'Won').length;
    const conversionRate = leads.length ? Math.round((won / leads.length) * 100) : 0;

    return [
        { label: 'Total Leads', value: String(leads.length), note: 'Jun 2025', color: 'var(--text)' },
        { label: 'Won', value: String(won), note: `conversion rate ${conversionRate}%`, color: 'var(--ok)' },
        { label: 'Platform Spend', value: 'S$1,300', note: 'CarouBiz Jun', color: 'var(--text)' },
        { label: 'CPL', value: 'S$26.00', note: 'spend ÷ leads', color: 'var(--warn)' },
    ];
}

export function statusFromFormKey(key) {
    const map = {
        new: 'New',
        contacted: 'Contacted',
        quoted: 'Quoted',
    };
    return map[key] || 'New';
}
