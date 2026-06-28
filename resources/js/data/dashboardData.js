const chartBars = [
    { x: 42, y: 28, h: 52 }, { x: 80, y: 18, h: 62 }, { x: 118, y: 38, h: 42 },
    { x: 156, y: 12, h: 68 }, { x: 194, y: 24, h: 56 }, { x: 232, y: 8, h: 72 },
    { x: 270, y: 20, h: 60 }, { x: 308, y: 32, h: 48 }, { x: 346, y: 14, h: 66 },
    { x: 384, y: 26, h: 54 }, { x: 422, y: 6, h: 74 }, { x: 460, y: 18, h: 62 },
    { x: 498, y: 30, h: 50 }, { x: 536, y: 10, h: 70 },
];

const leadCounts = [8, 12, 7, 15, 10, 18, 13, 9, 16, 11, 20, 14, 8, 17];
const maxL = 20;

const chartDots = chartBars.map((bar, i) => ({
    x: bar.x + 12,
    y: 80 - ((leadCounts[i] / maxL) * 68),
}));

const chartLine = chartDots.map((dot) => `${dot.x},${dot.y}`).join(' ');

export const dashboardKpis = [
    {
        label: 'Total Leads',
        value: '847',
        icon: 'users',
        iconBg: 'rgba(176,137,79,.1)',
        iconColor: 'var(--brass)',
        spark: '0,22 20,18 40,20 60,10 80,15 100,8 120,12',
        sparkColor: 'var(--brass)',
        delta: '+18%',
        deltaUp: true,
        deltaColor: 'var(--ok)',
    },
    {
        label: 'This Period',
        value: '312',
        icon: 'trend',
        iconBg: 'rgba(46,125,82,.1)',
        iconColor: 'var(--ok)',
        spark: '0,24 20,20 40,16 60,18 80,10 100,14 120,8',
        sparkColor: 'var(--ok)',
        delta: '+24%',
        deltaUp: true,
        deltaColor: 'var(--ok)',
    },
    {
        label: 'Avg CPL',
        value: 'S$24',
        icon: 'dollar',
        iconBg: 'rgba(201,132,43,.1)',
        iconColor: 'var(--warn)',
        spark: '0,8 20,14 40,10 60,18 80,12 100,20 120,16',
        sparkColor: 'var(--warn)',
        delta: '+S$2.10',
        deltaUp: false,
        deltaColor: 'var(--err)',
    },
    {
        label: 'Won Jobs',
        value: '58',
        icon: 'check',
        iconBg: 'rgba(46,125,82,.1)',
        iconColor: 'var(--ok)',
        spark: '0,20 20,16 40,18 60,10 80,14 100,8 120,10',
        sparkColor: 'var(--ok)',
        delta: '+8',
        deltaUp: true,
        deltaColor: 'var(--ok)',
    },
    {
        label: 'Total Spend',
        value: 'S$7.8k',
        icon: 'spend',
        iconBg: 'rgba(178,58,58,.08)',
        iconColor: 'var(--err)',
        spark: '0,16 20,20 40,14 60,22 80,10 100,18 120,14',
        sparkColor: 'var(--err)',
        delta: '+12%',
        deltaUp: false,
        deltaColor: 'var(--err)',
    },
];

export const dashboardSources = [
    { label: 'Website Form', color: 'var(--brass)', pct: 38 },
    { label: 'WhatsApp Click', color: 'var(--wa)', pct: 28 },
    { label: 'Call Click', color: 'var(--brass-deep)', pct: 14 },
    { label: 'Carousell', color: '#9C7A4A', pct: 12 },
    { label: 'Other', color: 'rgba(20,17,15,.15)', pct: 8 },
];

export const dashboardChart = {
    bars: chartBars,
    line: chartLine,
    dots: chartDots,
    labels: [
        { x: 54, t: 'Jun 1' },
        { x: 156, t: 'Jun 5' },
        { x: 270, t: 'Jun 10' },
        { x: 384, t: 'Jun 15' },
        { x: 460, t: 'Jun 20' },
        { x: 548, t: 'Jun 27' },
    ],
};

export const dashboardPlatforms = [
    { name: 'Google Ads', abbr: 'G', iconBg: 'rgba(66,133,244,.1)', iconColor: '#4285F4', spend: '2,840', cpl: 18, barPct: 85, barColor: '#4285F4' },
    { name: 'Meta Ads', abbr: 'M', iconBg: 'rgba(24,119,242,.1)', iconColor: '#1877F2', spend: '2,100', cpl: 22, barPct: 65, barColor: '#1877F2' },
    { name: 'TikTok Ads', abbr: 'TT', iconBg: 'rgba(20,17,15,.06)', iconColor: '#14110F', spend: '1,560', cpl: 31, barPct: 48, barColor: '#14110F' },
    { name: 'Carousell', abbr: 'CR', iconBg: 'rgba(238,36,32,.08)', iconColor: '#EE2420', spend: '1,300', cpl: 26, barPct: 40, barColor: '#EE2420' },
];

export const dashboardLeads = [
    { initials: 'AR', name: 'Ahmad Razif', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Bathroom Reno', status: 'New', statusBg: 'rgba(37,211,102,.1)', statusColor: 'var(--ok)', time: '2m ago' },
    { initials: 'SL', name: 'Sarah Lim', source: 'WhatsApp', srcBg: 'rgba(37,211,102,.12)', srcColor: 'var(--ok)', service: 'Kitchen Reno', status: 'Quoted', statusBg: 'rgba(176,137,79,.12)', statusColor: 'var(--brass)', time: '18m ago' },
    { initials: 'MT', name: 'Marcus Tan', source: 'Call', srcBg: 'rgba(20,17,15,.06)', srcColor: 'var(--text)', service: 'Spa Reno', status: 'Contacted', statusBg: 'rgba(20,17,15,.06)', statusColor: 'var(--text-muted)', time: '1h ago' },
    { initials: 'FN', name: 'Fatimah Noor', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Electrical', status: 'Won', statusBg: 'rgba(46,125,82,.1)', statusColor: 'var(--ok)', time: '3h ago' },
    { initials: 'JY', name: 'Jason Yeo', source: 'Carousell', srcBg: 'rgba(238,36,32,.1)', srcColor: '#EE2420', service: 'Retail Reno', status: 'New', statusBg: 'rgba(37,211,102,.1)', statusColor: 'var(--ok)', time: '4h ago' },
    { initials: 'PK', name: 'Priya K.', source: 'WhatsApp', srcBg: 'rgba(37,211,102,.12)', srcColor: 'var(--ok)', service: 'Home Ext.', status: 'Lost', statusBg: 'rgba(178,58,58,.08)', statusColor: 'var(--err)', time: '6h ago' },
    { initials: 'DL', name: 'David Lim', source: 'Form', srcBg: 'rgba(176,137,79,.12)', srcColor: 'var(--brass)', service: 'Ceiling/Vinyl', status: 'Contacted', statusBg: 'rgba(20,17,15,.06)', statusColor: 'var(--text-muted)', time: '8h ago' },
    { initials: 'RH', name: 'Ravi H.', source: 'Call', srcBg: 'rgba(20,17,15,.06)', srcColor: 'var(--text)', service: 'Plumbing', status: 'Quoted', statusBg: 'rgba(176,137,79,.12)', statusColor: 'var(--brass)', time: '1d ago' },
];

export const dashboardIntegrations = [
    { name: 'Google Ads', color: '#4ADE80', status: 'Active' },
    { name: 'GA4', color: '#4ADE80', status: 'Active' },
    { name: 'Meta CAPI', color: '#4ADE80', status: 'Active' },
    { name: 'TikTok Events', color: 'var(--warn)', status: 'Warning' },
    { name: 'Google Tag', color: '#4ADE80', status: 'Active' },
];
