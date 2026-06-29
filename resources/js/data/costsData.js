const chartBars = [
    { x: 4, y: 32, h: 48 },
    { x: 44, y: 20, h: 60 },
    { x: 84, y: 38, h: 42 },
    { x: 124, y: 14, h: 66 },
    { x: 164, y: 26, h: 54 },
    { x: 204, y: 8, h: 72 },
    { x: 244, y: 22, h: 58 },
    { x: 284, y: 34, h: 46 },
    { x: 324, y: 12, h: 68 },
    { x: 364, y: 28, h: 52 },
    { x: 404, y: 6, h: 74 },
    { x: 444, y: 18, h: 62 },
    { x: 484, y: 30, h: 50 },
    { x: 524, y: 10, h: 70 },
];

const chartLeads = [6, 10, 5, 13, 9, 16, 11, 7, 14, 9, 18, 12, 8, 15];

export const costsKpis = [
    { label: 'Total Spend', value: 'S$7,800', delta: '↑ 12% vs May', deltaColor: 'var(--err)' },
    { label: 'Total Leads', value: '312', delta: '↑ 24% vs May', deltaColor: 'var(--ok)' },
    { label: 'Avg CPL', value: 'S$25', delta: '↑ S$2.10', deltaColor: 'var(--err)' },
    { label: 'Won Jobs', value: '58', delta: '↑ 8 vs May', deltaColor: 'var(--ok)' },
    { label: 'Budget Left', value: 'S$2,200', delta: 'of S$10k', deltaColor: 'var(--text-muted)' },
];

export const costsPlatforms = [
    { name: 'Google Ads', abbr: 'G', iconBg: 'rgba(66,133,244,.1)', iconColor: '#4285F4', spend: '2,840', pct: 86, leads: 158, cpl: '18.0', cplColor: 'var(--ok)', barColor: '#4285F4' },
    { name: 'Meta Ads', abbr: 'fb', iconBg: 'rgba(24,119,242,.1)', iconColor: '#1877F2', spend: '2,100', pct: 64, leads: 95, cpl: '22.1', cplColor: 'var(--ok)', barColor: '#1877F2' },
    { name: 'TikTok Ads', abbr: 'TT', iconBg: 'rgba(20,17,15,.06)', iconColor: '#14110F', spend: '1,560', pct: 47, leads: 50, cpl: '31.2', cplColor: 'var(--warn)', barColor: '#14110F' },
    { name: 'Carousell', abbr: 'CR', iconBg: 'rgba(238,36,32,.08)', iconColor: '#EE2420', spend: '1,300', pct: 40, leads: 49, cpl: '26.5', cplColor: 'var(--warn)', barColor: '#EE2420' },
];

export const costsChart = {
    bars: chartBars,
    line: chartBars.map((bar, i) => `${bar.x + 11},${80 - ((chartLeads[i] / 18) * 65)}`).join(' '),
    dots: chartBars.map((bar, i) => ({ x: bar.x + 11, y: 80 - ((chartLeads[i] / 18) * 65) })),
};

export const costsTotalSpend = 'S$7,800';

export const costsMonthOptions = ['Jun 2025', 'May 2025', 'Apr 2025'];

export const costsPlatformFilterOptions = [
    { value: '', label: 'All platforms' },
    { value: 'Google Ads', label: 'Google Ads' },
    { value: 'Meta Ads', label: 'Meta' },
    { value: 'TikTok Ads', label: 'TikTok' },
    { value: 'Carousell', label: 'Carousell' },
];

export const costsEntries = [
    { id: 1, abbr: 'G', platform: 'Google Ads', campaign: 'bathroom-sg Q2', date: '27 Jun', amount: '320', cpl: '17.8', cplColor: 'var(--ok)', iconBg: 'rgba(66,133,244,.1)', iconColor: '#4285F4' },
    { id: 2, abbr: 'fb', platform: 'Meta Ads', campaign: 'renovation-retargeting', date: '27 Jun', amount: '280', cpl: '23.3', cplColor: 'var(--ok)', iconBg: 'rgba(24,119,242,.1)', iconColor: '#1877F2' },
    { id: 3, abbr: 'TT', platform: 'TikTok Ads', campaign: 'kitchen-reno-sg', date: '27 Jun', amount: '195', cpl: '32.5', cplColor: 'var(--warn)', iconBg: 'rgba(20,17,15,.06)', iconColor: '#14110F' },
    { id: 4, abbr: 'CR', platform: 'Carousell', campaign: 'CarouBiz subscription', date: '26 Jun', amount: '150', cpl: '18.8', cplColor: 'var(--ok)', iconBg: 'rgba(238,36,32,.08)', iconColor: '#EE2420' },
    { id: 5, abbr: 'G', platform: 'Google Ads', campaign: 'spa-reno-sg', date: '25 Jun', amount: '290', cpl: '18.1', cplColor: 'var(--ok)', iconBg: 'rgba(66,133,244,.1)', iconColor: '#4285F4' },
    { id: 6, abbr: 'fb', platform: 'Meta Ads', campaign: 'electrical-q2', date: '24 Jun', amount: '240', cpl: '24.0', cplColor: 'var(--ok)', iconBg: 'rgba(24,119,242,.1)', iconColor: '#1877F2' },
    { id: 7, abbr: 'TT', platform: 'TikTok Ads', campaign: 'flooring-q2', date: '23 Jun', amount: '185', cpl: '37.0', cplColor: 'var(--err)', iconBg: 'rgba(20,17,15,.06)', iconColor: '#14110F' },
    { id: 8, abbr: 'CR', platform: 'Carousell', campaign: 'Sponsored coins', date: '22 Jun', amount: '200', cpl: '22.2', cplColor: 'var(--ok)', iconBg: 'rgba(238,36,32,.08)', iconColor: '#EE2420' },
];
