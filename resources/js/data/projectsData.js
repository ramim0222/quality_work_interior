export const projectFilters = [
    { key: 'all', label: 'All' },
    { key: 'spa', label: 'Spa' },
    { key: 'ktv', label: 'KTV' },
    { key: 'retail', label: 'Retail' },
    { key: 'home', label: 'Home' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'flooring', label: 'Flooring' },
    { key: 'painting', label: 'Painting' },
    { key: 'electrical', label: 'Electrical' },
    { key: 'plumbing', label: 'Plumbing' },
    { key: 'roller', label: 'Roller Shutter' },
];

export const projectCatalog = [
    { id: 1, slug: 'modern-hdb-master-bath', key: 'bathroom', category: 'Bathroom', title: 'Modern HDB Master Bath', location: 'Sengkang', year: '2025', h: 300, bg1: '#8898A8', bg2: '#98A8B8' },
    { id: 2, slug: 'open-plan-kitchen-remodel', key: 'kitchen', category: 'Kitchen', title: 'Open-Plan Kitchen Remodel', location: 'Tampines', year: '2025', h: 240, bg1: '#A8886A', bg2: '#B49878' },
    { id: 3, slug: 'wellness-spa-fit-out', key: 'spa', category: 'Spa', title: 'Wellness Spa Full Fit-out', location: 'Orchard', year: '2025', h: 360, bg1: '#C4A882', bg2: '#CEBFA0' },
    { id: 4, slug: 'fashion-boutique-renovation', key: 'retail', category: 'Retail', title: 'Fashion Boutique Renovation', location: 'ION Orchard', year: '2025', h: 280, bg1: '#B09070', bg2: '#BAA080' },
    { id: 5, slug: 'ktv-lounge-premium-fit-out', key: 'ktv', category: 'KTV', title: 'KTV Lounge Premium Fit-out', location: 'Jalan Besar', year: '2024', h: 320, bg1: '#8A7060', bg2: '#957B6A' },
    { id: 6, slug: 'landed-home-extension', key: 'home', category: 'Home', title: 'Landed Home Extension, 2 Rooms', location: 'Punggol', year: '2024', h: 260, bg1: '#A89070', bg2: '#B4A080' },
    { id: 7, slug: 'full-flat-vinyl-flooring', key: 'flooring', category: 'Flooring', title: 'Full-Flat Vinyl Flooring', location: 'Bishan', year: '2024', h: 220, bg1: '#909898', bg2: '#A0A8A8' },
    { id: 8, slug: 'condo-ensuite-transformation', key: 'bathroom', category: 'Bathroom', title: 'Condo Ensuite Transformation', location: 'Marina Bay', year: '2024', h: 340, bg1: '#8898A8', bg2: '#9AAABB' },
    { id: 9, slug: 'full-home-remodel-repaint', key: 'painting', category: 'Painting', title: 'Full-Home Remodel & Repaint', location: 'Clementi', year: '2024', h: 260, bg1: '#C8A880', bg2: '#D4B890' },
    { id: 10, slug: 'hdb-kitchen-cabinet-overhaul', key: 'kitchen', category: 'Kitchen', title: 'HDB Kitchen — Cabinet Overhaul', location: 'Woodlands', year: '2024', h: 300, bg1: '#A8886A', bg2: '#B29070' },
    { id: 11, slug: 'commercial-rewiring-db-upgrade', key: 'electrical', category: 'Electrical', title: 'Commercial Rewiring & DB Upgrade', location: 'Toa Payoh', year: '2024', h: 220, bg1: '#707888', bg2: '#808898' },
    { id: 12, slug: 'nail-spa-boutique-fit-out', key: 'spa', category: 'Spa', title: 'Nail Spa Boutique Fit-out', location: 'Bugis', year: '2024', h: 300, bg1: '#C4A882', bg2: '#CCBA96' },
    { id: 13, slug: 'room-addition-converted-study', key: 'home', category: 'Home', title: 'Room Addition — Converted Study', location: 'Sengkang', year: '2023', h: 240, bg1: '#A89070', bg2: '#B8A080' },
    { id: 14, slug: 'roller-shutter-shophouse', key: 'roller', category: 'Roller Shutter', title: 'Roller Shutter — 3-Unit Shophouse', location: 'Little India', year: '2023', h: 200, bg1: '#887870', bg2: '#988880' },
    { id: 15, slug: 'fnb-cafe-interior-fit-out', key: 'retail', category: 'Retail', title: 'F&B Café Interior Fit-out', location: 'Tanjong Pagar', year: '2023', h: 340, bg1: '#B09070', bg2: '#C0A080' },
    { id: 16, slug: 'terraced-house-three-bathrooms', key: 'bathroom', category: 'Bathroom', title: 'Terraced House — 3 Bathrooms', location: 'Hougang', year: '2023', h: 280, bg1: '#8898A8', bg2: '#9AA8B8' },
    { id: 17, slug: 'full-plumbing-repipe-hdb', key: 'plumbing', category: 'Plumbing', title: 'Full Plumbing Re-pipe — HDB 5-rm', location: 'Jurong West', year: '2023', h: 220, bg1: '#7898A0', bg2: '#88A8B0' },
    { id: 18, slug: 'office-vinyl-flooring-3000sqft', key: 'flooring', category: 'Flooring', title: 'Office Vinyl Flooring — 3,000 sqft', location: 'CBD', year: '2023', h: 300, bg1: '#909898', bg2: '#A0A8A8' },
];

export const PROJECTS_PAGE_SIZE = 9;

export function filterProjects(activeFilter) {
    if (activeFilter === 'all') return projectCatalog;
    return projectCatalog.filter((p) => p.key === activeFilter);
}
