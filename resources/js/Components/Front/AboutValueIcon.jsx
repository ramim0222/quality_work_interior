export default function AboutValueIcon({ icon }) {
    const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--brass)', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

    if (icon === 'shield') {
        return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    }
    if (icon === 'star') {
        return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    }
    if (icon === 'clock') {
        return <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
    }
    return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
