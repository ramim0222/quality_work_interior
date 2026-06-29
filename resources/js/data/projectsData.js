export const projectCategoryFilterOptions = [
    { value: '', label: 'All categories' },
    { value: 'Bathroom', label: 'Bathroom' },
    { value: 'Kitchen', label: 'Kitchen' },
    { value: 'Spa', label: 'Spa' },
    { value: 'KTV', label: 'KTV' },
    { value: 'Retail', label: 'Retail' },
];

export const projectServiceCategories = [
    'Bathroom Renovation',
    'Kitchen Renovation',
    'Spa Centre Renovation',
    'KTV Renovation',
    'Retail Shop Renovation',
    'Home Extension',
    'Ceiling & Vinyl Flooring',
    'Remodels & Paintings',
    'Hacking & Reinstatement',
    'Electrical Maintenance',
    'General Plumbing',
    'Roller Shutter Repair',
];

export const projectGallerySlots = ['img 1', 'img 2', 'img 3', 'img 4'];

export const emptyProject = {
    id: null,
    title: '',
    slug: '',
    category: 'Bathroom Renovation',
    location: '',
    year: '2025',
    summary: '',
    body: '',
    published: true,
    bg1: '#8898A8',
    bg2: '#98A8B8',
};

export const initialProjects = [
    { id: 1, title: 'Modern HDB Master Bath', slug: 'modern-hdb-master-bath', category: 'Bathroom Renovation', year: '2025', published: true, location: 'Sengkang, Singapore', summary: 'A complete master bathroom transformation with modern fixtures.', bg1: '#8898A8', bg2: '#98A8B8' },
    { id: 2, title: 'Open-Plan Kitchen Remodel', slug: 'open-plan-kitchen-remodel', category: 'Kitchen Renovation', year: '2025', published: true, location: 'Tampines, Singapore', summary: 'Open-plan kitchen with custom cabinetry and quartz countertops.', bg1: '#A8886A', bg2: '#B49878' },
    { id: 3, title: 'Wellness Spa Full Fit-out', slug: 'wellness-spa-fit-out', category: 'Spa Centre Renovation', year: '2025', published: true, location: 'Orchard, Singapore', summary: 'Full spa centre renovation with treatment rooms and reception.', bg1: '#C4A882', bg2: '#CEBFA0' },
    { id: 4, title: 'Fashion Boutique Renovation', slug: 'fashion-boutique-renovation', category: 'Retail Renovation', year: '2025', published: true, location: 'Bugis, Singapore', summary: 'Retail boutique fit-out with display lighting and fitting rooms.', bg1: '#B09070', bg2: '#BAA080' },
    { id: 5, title: 'KTV Lounge Premium Fit-out', slug: 'ktv-lounge-premium-fit-out', category: 'KTV Renovation', year: '2024', published: true, location: 'Clarke Quay, Singapore', summary: 'Premium KTV lounge with acoustic treatment and VIP rooms.', bg1: '#8A7060', bg2: '#957B6A' },
    { id: 6, title: 'Landed Home Extension — 2 Rooms', slug: 'landed-home-extension', category: 'Home Extension', year: '2024', published: true, location: 'Serangoon, Singapore', summary: 'Two-room extension with structural works and full finishing.', bg1: '#A89070', bg2: '#B4A080' },
    { id: 7, title: 'Full-Flat Vinyl Flooring', slug: 'full-flat-vinyl-flooring', category: 'Ceiling & Vinyl', year: '2024', published: false, location: 'Jurong West, Singapore', summary: 'Complete vinyl flooring replacement across a 4-room HDB flat.', bg1: '#909898', bg2: '#A0A8A8' },
    { id: 8, title: 'Condo Ensuite Transformation', slug: 'condo-ensuite-transformation', category: 'Bathroom Renovation', year: '2024', published: true, location: 'River Valley, Singapore', summary: 'Luxury ensuite upgrade with rain shower and heated floors.', bg1: '#8898A8', bg2: '#9AAABB' },
    { id: 9, title: 'Full-Home Remodel & Repaint', slug: 'full-home-remodel-repaint', category: 'Remodels & Paintings', year: '2024', published: true, location: 'Bishan, Singapore', summary: 'Whole-home repaint and minor remodel across living areas.', bg1: '#C8A880', bg2: '#D4B890' },
    { id: 10, title: 'HDB Kitchen Cabinet Overhaul', slug: 'hdb-kitchen-cabinet-overhaul', category: 'Kitchen Renovation', year: '2024', published: false, location: 'Woodlands, Singapore', summary: 'Custom cabinet replacement with soft-close hardware.', bg1: '#A8886A', bg2: '#B29070' },
];

export function matchesCategoryFilter(category, filter) {
    if (!filter) return true;
    return category.toLowerCase().includes(filter.toLowerCase());
}

export function matchesSearch(project, query) {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    return project.title.toLowerCase().includes(q) || project.slug.toLowerCase().includes(q);
}
