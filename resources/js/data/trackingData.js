const mk = (n) => `evt_${n}a3f${n}c2d`;

export const trackingHealthCards = [
    { label: 'Events Today', value: '284', note: '↑ 12% vs yesterday', color: '#4ADE80' },
    { label: 'Server Success', value: '96.4%', note: '13 errors today', color: '#4ADE80' },
    { label: 'Dedup Rate', value: '99.1%', note: '2 duplicates caught', color: '#4ADE80' },
    { label: 'TikTok Errors', value: '11', note: '429 rate-limit hits', color: 'var(--warn)' },
];

export const trackingIntegrations = [
    { name: 'Google Ads', color: '#4ADE80', status: 'Active' },
    { name: 'GA4', color: '#4ADE80', status: 'Active' },
    { name: 'Meta CAPI', color: '#4ADE80', status: 'Active' },
    { name: 'TikTok Events', color: 'var(--warn)', status: 'Rate-limited' },
    { name: 'Google Tag', color: '#4ADE80', status: 'Active' },
];

export const trackingTypeTabs = [
    { key: 'all', label: 'All events' },
    { key: 'form_submit', label: 'form_submit' },
    { key: 'wa_click', label: 'wa_click' },
    { key: 'call_click', label: 'call_click' },
    { key: 'page_view', label: 'page_view' },
    { key: 'view_content', label: 'view_content' },
];

export const allTrackingEvents = [
    { id: 1, type: 'form_submit', side: 'client', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: 'var(--brass)', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(1) },
    { id: 2, type: 'form_submit', side: 'server', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: 'var(--brass)', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(1) },
    { id: 3, type: 'form_submit', side: 'server', platform: 'Google', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: 'var(--brass)', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(1) },
    { id: 4, type: 'wa_click', side: 'client', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: 'var(--ok)', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(2) },
    { id: 5, type: 'wa_click', side: 'server', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: 'var(--ok)', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(2) },
    { id: 6, type: 'page_view', side: 'client', platform: 'GA4', clientOk: true, serverColor: 'rgba(20,17,15,.2)', serverSt: '—', dedup: 'N/A', dedupBg: 'rgba(20,17,15,.05)', dedupColor: 'var(--text-muted)', typeColor: 'rgba(20,17,15,.3)', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(3) },
    { id: 7, type: 'call_click', side: 'client', platform: 'Google', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: '#4285F4', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(4) },
    { id: 8, type: 'call_click', side: 'server', platform: 'Google', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: '#4285F4', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(4) },
    { id: 9, type: 'form_submit', side: 'server', platform: 'TikTok', clientOk: true, serverColor: 'var(--warn)', serverSt: '429', dedup: 'WARN', dedupBg: 'rgba(201,132,43,.12)', dedupColor: 'var(--warn)', typeColor: 'var(--brass)', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(5) },
    { id: 10, type: 'view_content', side: 'client', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: '#1877F2', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(6) },
    { id: 11, type: 'wa_click', side: 'server', platform: 'TikTok', clientOk: false, serverColor: '#F87171', serverSt: '500', dedup: 'ERR', dedupBg: 'rgba(178,58,58,.08)', dedupColor: 'var(--err)', typeColor: 'var(--ok)', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(7) },
    { id: 12, type: 'form_submit', side: 'client', platform: 'TikTok', clientOk: true, serverColor: 'var(--warn)', serverSt: '429', dedup: 'WARN', dedupBg: 'rgba(201,132,43,.12)', dedupColor: 'var(--warn)', typeColor: 'var(--brass)', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(5) },
    { id: 13, type: 'page_view', side: 'client', platform: 'GA4', clientOk: true, serverColor: 'rgba(20,17,15,.2)', serverSt: '—', dedup: 'N/A', dedupBg: 'rgba(20,17,15,.05)', dedupColor: 'var(--text-muted)', typeColor: 'rgba(20,17,15,.3)', sideBg: 'rgba(176,137,79,.1)', sideColor: 'var(--brass)', eventId: mk(8) },
    { id: 14, type: 'view_content', side: 'server', platform: 'Meta', clientOk: true, serverColor: '#4ADE80', serverSt: '200', dedup: 'OK', dedupBg: 'rgba(46,125,82,.1)', dedupColor: 'var(--ok)', typeColor: '#1877F2', sideBg: 'rgba(20,17,15,.07)', sideColor: 'var(--text)', eventId: mk(6) },
];

export function enrichTrackingEvent(event) {
    return {
        ...event,
        clientSt: event.clientOk ? '200' : '—',
        clientDotColor: event.clientOk ? '#4ADE80' : '#F87171',
    };
}
