import { projectCatalog } from './projectsData';
import { serviceCatalog } from './servicesData';

function waLinkFor(title) {
    return `https://wa.me/6598683650?text=${encodeURIComponent(`Hi, I saw your ${title} project and I'd like a similar quote`)}`;
}

function serviceSlugForName(name) {
    const match = serviceCatalog.find((s) => s.name === name);
    return match?.slug ?? null;
}

function defaultGallery(bg1, bg2) {
    return [
        { caption: 'Main space — completed fit-out', h: 300, bg1, bg2 },
        { caption: 'Detail — fixtures and finishes', h: 240, bg1: bg2, bg2: bg1 },
        { caption: 'Feature area — lighting and materials', h: 360, bg1, bg2 },
        { caption: 'Corridor — flooring and wall treatment', h: 260, bg1: bg2, bg2: bg1 },
        { caption: 'Support zone — full fit-out', h: 220, bg1, bg2 },
        { caption: 'Wet zone — waterproofing and tile', h: 310, bg1: bg2, bg2: bg1 },
        { caption: 'Entrance — glass and hardware', h: 280, bg1, bg2 },
        { caption: 'Completed handover — all zones', h: 240, bg1: bg2, bg2: bg1 },
    ];
}

const keyToServices = {
    spa: ['Spa Centre Renovation', 'Ceiling, Partition & Vinyl Flooring', 'Remodels & Paintings', 'Electrical Maintenance'],
    ktv: ['KTV Renovation', 'Ceiling, Partition & Vinyl Flooring', 'Electrical Maintenance', 'Remodels & Paintings'],
    retail: ['Retail Shop Renovation', 'Ceiling, Partition & Vinyl Flooring', 'Remodels & Paintings', 'Electrical Maintenance'],
    home: ['Home Extension & Room Additions', 'Ceiling, Partition & Vinyl Flooring', 'Remodels & Paintings', 'Electrical Maintenance'],
    bathroom: ['Bathroom Renovation', 'General Plumbing & Handyman', 'Remodels & Paintings', 'Electrical Maintenance'],
    kitchen: ['Kitchen Renovation', 'General Plumbing & Handyman', 'Remodels & Paintings', 'Electrical Maintenance'],
    flooring: ['Ceiling, Partition & Vinyl Flooring', 'Remodels & Paintings'],
    painting: ['Remodels & Paintings', 'Ceiling, Partition & Vinyl Flooring'],
    electrical: ['Electrical Maintenance', 'Ceiling, Partition & Vinyl Flooring'],
    plumbing: ['General Plumbing & Handyman', 'Bathroom Renovation'],
    roller: ['Roller Shutter Repair', 'Electrical Maintenance'],
};

const detailBySlug = {
    'wellness-spa-fit-out': {
        breadcrumbLabel: 'Spa Centre Renovation',
        headline: 'Wellness Spa &\nfull fit-out,\nOrchard Road.',
        heroPhotoLabel: 'hero photo · spa centre renovation',
        meta: [
            { label: 'Category', value: 'Spa Centre Renovation' },
            { label: 'Location', value: 'Orchard Road, SG' },
            { label: 'Year', value: '2025' },
            { label: 'Duration', value: '28 working days' },
            { label: 'Scope', value: 'Full fit-out, 2,400 sqft' },
        ],
        briefLabel: 'The Brief',
        briefHeadline: 'From bare shell to premium spa.',
        writeup: [
            'The client — a boutique wellness operator — had secured a bare-shell unit on Orchard Road and needed a turn-key spa fit-out that could accommodate six treatment rooms, a reception area, a relaxation lounge, and a staff changing room, all within a demanding 28-working-day programme.',
            'Quality Work managed the complete scope: structural partition works, full M&E coordination, bespoke joinery for the reception counter and treatment bed alcoves, imported porcelain tiling throughout, specialist waterproofing in wet zones, and a curated lighting scheme designed around warm brass tones and indirect cove lighting.',
            'The result is a 2,400 sqft space that feels both calming and premium — a direct translation of the client\'s brand into physical form. The project was handed over on day 27, one day ahead of schedule, with zero outstanding defects.',
        ],
        quote: {
            text: '"The Quality Work team delivered a spa interior that exceeded every expectation. Professional, on-time, and immaculate workmanship."',
            cite: '— Project Owner, Wellness Spa · Orchard Road',
        },
        beforeAfter: {
            beforeBg1: '#888480',
            beforeBg2: '#98948E',
            afterBg1: '#C4A882',
            afterBg2: '#CEBFA0',
        },
        gallery: [
            { caption: 'Reception desk — bespoke joinery, brass finish', h: 300, bg1: '#C4A882', bg2: '#CEBFA0' },
            { caption: 'Treatment room — indirect cove lighting', h: 240, bg1: '#B8A898', bg2: '#C8B8A8' },
            { caption: 'Relaxation lounge — feature wall tiling', h: 360, bg1: '#C0A890', bg2: '#CAB8A0' },
            { caption: 'Corridor — imported porcelain, herringbone pattern', h: 260, bg1: '#A8A898', bg2: '#B8B8A8' },
            { caption: 'Staff changing room — full fit-out', h: 220, bg1: '#9898A8', bg2: '#A8A8B8' },
            { caption: 'Wet room — waterproofing + feature tile', h: 310, bg1: '#8898A8', bg2: '#98A8B8' },
            { caption: 'Entrance — glass partition + brass hardware', h: 280, bg1: '#B09878', bg2: '#C0A888' },
            { caption: 'Completed handover — all zones', h: 240, bg1: '#C8B090', bg2: '#D4C0A0' },
        ],
        servicesUsed: [
            'Spa Centre Renovation',
            'Ceiling, Partition & Vinyl Flooring',
            'Remodels & Paintings',
            'Electrical Maintenance',
            'General Plumbing & Handyman',
        ],
    },
};

function buildDefaultDetail(project) {
    const categoryLabel = project.category === 'Spa' ? 'Spa Centre Renovation'
        : project.category === 'KTV' ? 'KTV Renovation'
        : project.category === 'Retail' ? 'Retail Shop Renovation'
        : project.category === 'Home' ? 'Home Extension & Room Additions'
        : project.category === 'Bathroom' ? 'Bathroom Renovation'
        : project.category === 'Kitchen' ? 'Kitchen Renovation'
        : project.category === 'Flooring' ? 'Ceiling, Partition & Vinyl Flooring'
        : project.category === 'Painting' ? 'Remodels & Paintings'
        : project.category === 'Electrical' ? 'Electrical Maintenance'
        : project.category === 'Plumbing' ? 'General Plumbing & Handyman'
        : project.category === 'Roller Shutter' ? 'Roller Shutter Repair'
        : project.category;

    return {
        breadcrumbLabel: project.title,
        headline: `${project.title.split(' ').slice(0, 3).join(' ')}\n${project.location}.`,
        heroPhotoLabel: `hero photo · ${project.slug}`,
        meta: [
            { label: 'Category', value: categoryLabel },
            { label: 'Location', value: `${project.location}, SG` },
            { label: 'Year', value: project.year },
            { label: 'Duration', value: '14–28 working days' },
            { label: 'Scope', value: 'Full renovation scope' },
        ],
        briefLabel: 'The Brief',
        briefHeadline: `Delivering ${project.title.toLowerCase()}.`,
        writeup: [
            `Quality Work Interior completed this ${project.category.toLowerCase()} project in ${project.location}, delivering a finished space that meets the client's brief for quality, timeline, and workmanship.`,
            'Our team managed the full scope — from site protection and demolition through to final finishes, licensed trades coordination, and a clean handover with warranty documentation.',
            'The project was completed on schedule with zero outstanding defects at handover, reflecting our commitment to transparent communication and professional execution across every renovation category.',
        ],
        quote: {
            text: '"Quality Work delivered exactly what we needed — professional, on-time, and great workmanship throughout."',
            cite: `— Project Owner · ${project.location}`,
        },
        beforeAfter: {
            beforeBg1: '#888480',
            beforeBg2: '#98948E',
            afterBg1: project.bg1,
            afterBg2: project.bg2,
        },
        gallery: defaultGallery(project.bg1, project.bg2),
        servicesUsed: keyToServices[project.key] ?? [categoryLabel, 'Remodels & Paintings', 'Electrical Maintenance'],
    };
}

export function getProjectDetail(slug) {
    const project = projectCatalog.find((p) => p.slug === slug);
    if (!project) return null;

    const detail = detailBySlug[slug] ?? buildDefaultDetail(project);

    return {
        ...project,
        ...detail,
        waLink: waLinkFor(project.title),
        servicesUsedLinks: detail.servicesUsed.map((name) => ({
            name,
            slug: serviceSlugForName(name),
        })),
    };
}

export function getAdjacentProjects(slug) {
    const index = projectCatalog.findIndex((p) => p.slug === slug);
    if (index === -1) return { prev: null, next: null };

    return {
        prev: index > 0 ? projectCatalog[index - 1] : null,
        next: index < projectCatalog.length - 1 ? projectCatalog[index + 1] : null,
    };
}
