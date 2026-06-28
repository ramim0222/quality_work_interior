import { serviceCatalog } from './servicesData';

function waLinkFor(slug, name) {
    return `https://wa.me/6598683650?text=${encodeURIComponent(`Hi, I'd like a quote for ${name}`)}`;
}

function defaultGallery(bg1, bg2, label) {
    return [
        { label: `before · ${label}`, h: 280, bg1, bg2 },
        { label: 'after · completed works', h: 360, bg1, bg2: bg1 },
        { label: 'detail · fixtures', h: 240, bg1: bg2, bg2: bg1 },
        { label: 'materials & finish', h: 320, bg1, bg2 },
        { label: 'layout & planning', h: 200, bg1: bg2, bg2: bg1 },
        { label: 'after · handover', h: 380, bg1, bg2 },
        { label: 'lighting & ceiling', h: 260, bg1: bg2, bg2: bg1 },
    ];
}

const detailBySlug = {
    'bathroom-renovation': {
        headline: 'Bathroom\nRenovation\nWorks.',
        summary: 'We transform HDB, condo and landed bathrooms from tired to timeless — handling every element from waterproofing and tiling to plumbing, fixtures, and lighting.',
        stat: '7–12 days',
        statLabel: 'typical bathroom reno',
        heroPhotoLabel: 'hero photo · bathroom renovation',
        tags: ['HDB Approved', 'Waterproofing Specialist', 'Supply & Install', '12-Month Warranty'],
        overviewHeadline: 'A bathroom that works harder, and looks better.',
        overviewParas: [
            'Our bathroom renovation service covers full gut-and-rebuild projects as well as targeted upgrades. Whether you\'re updating an aging HDB bathroom, transforming a condo ensuite, or fitting out a luxury master bath in a landed property — our team manages every trade under one roof.',
            'We handle waterproofing membranes, ceramic and porcelain tiling, concealed plumbing, bathroom fixtures (WC, vanity, shower, bathtub), lighting, ventilation, and glass works. You receive a single point of contact, a detailed material schedule, and a clean site on completion.',
        ],
        scopeChips: ['Waterproofing', 'Wall & Floor Tiling', 'Plumbing Works', 'Fixtures & Fittings', 'Glass Screens', 'Lighting', 'False Ceiling', 'Ventilation Fan'],
        checklist: [
            { title: 'Waterproofing membrane', detail: 'Full floor and wet-wall membrane application with 24-hour flood test' },
            { title: 'Ceramic & porcelain tiling', detail: 'Floor, wall, feature tiles — material options provided' },
            { title: 'Concealed plumbing', detail: 'All supply and waste pipes re-routed and concealed' },
            { title: 'WC, vanity & shower', detail: 'Supply and installation of all sanitaryware and fittings' },
            { title: 'Glass shower screen', detail: '10mm tempered glass, frameless or semi-frameless' },
            { title: 'Lighting & exhaust fan', detail: 'LED downlights, waterproof fittings, exhaust ventilation' },
            { title: 'Hacking & disposal', detail: 'Old tiles, fittings and debris removed and disposed off-site' },
            { title: 'Site protection & clean-up', detail: 'Neighbouring areas protected; full clean-up on completion' },
        ],
        processTitle: 'bathroom renovation',
        steps: [
            { num: '01', phase: 'Day 1–2', title: 'Hacking & Waterproofing', desc: 'Existing tiles and fittings are removed. Waterproofing membrane is applied to all wet surfaces and a 24-hour water ponding test is conducted before proceeding.' },
            { num: '02', phase: 'Day 3–6', title: 'Tiling & Plumbing Rough-in', desc: 'Floor and wall tiles are laid to agreed layout. Plumbing supply and waste pipes are re-routed and tested before concealment.' },
            { num: '03', phase: 'Day 7–10', title: 'Fixtures, Glass & Electrical', desc: 'Sanitaryware, shower screens, vanity and WC are installed. Lighting, exhaust fan and any electrical points are completed by our licensed electrician.' },
            { num: '04', phase: 'Day 11–12', title: 'Snagging & Handover', desc: 'Full walkthrough with the homeowner, all snag items resolved on-site. Site protected areas removed, thorough clean-up, and warranty documentation issued.' },
        ],
        gallery: defaultGallery('#8898A8', '#98A8B8', 'hdb master bath'),
        relatedSlugs: ['kitchen-renovation', 'ceiling-partition-vinyl-flooring', 'hacking-reinstatement'],
    },
};

function buildDefaultDetail(catalog) {
    const nameLower = catalog.name.toLowerCase();
    const words = catalog.name.split(' ');
    const headline = words.length > 2
        ? `${words.slice(0, 2).join(' ')}\n${words.slice(2).join(' ')}.`
        : `${catalog.name}.`;
    return {
        headline,
        summary: catalog.desc,
        stat: '7–14 days',
        statLabel: `typical ${nameLower} timeline`,
        heroPhotoLabel: `hero photo · ${catalog.slug}`,
        tags: ['HDB Approved', 'Licensed Contractor', 'Supply & Install', '12-Month Warranty'],
        overviewHeadline: `Professional ${catalog.name.toLowerCase()} across Singapore.`,
        overviewParas: [
            `Quality Work Interior delivers end-to-end ${nameLower} for HDB flats, condominiums, landed homes, and commercial spaces. Our team handles assessment, material selection, build, and handover with clear timelines and transparent pricing.`,
            `Every project includes site protection, licensed trades where required, and a defects warranty. Contact us for a free site assessment and detailed written quote — available 24 hours a day.`,
        ],
        scopeChips: ['Site Assessment', 'Material Supply', 'Licensed Trades', 'Project Management', 'Clean Handover'],
        checklist: [
            { title: 'Free site assessment', detail: 'On-site visit, measurements, and scope discussion' },
            { title: 'Detailed written quote', detail: 'Itemised pricing with materials and timeline' },
            { title: 'Licensed workmanship', detail: 'HDB-approved contractors and certified trades' },
            { title: 'Quality materials', detail: 'Durable finishes suited to Singapore conditions' },
            { title: 'Project coordination', detail: 'Single point of contact throughout the build' },
            { title: 'Site protection', detail: 'Adjacent areas protected during works' },
            { title: 'Snagging & handover', detail: 'Walkthrough and punch-list resolved before sign-off' },
            { title: '12-month warranty', detail: 'Defects warranty on all renovation workmanship' },
        ],
        processTitle: nameLower,
        steps: [
            { num: '01', phase: 'Step 1', title: 'Site Assessment', desc: 'We visit your property, understand requirements, and confirm scope and access.' },
            { num: '02', phase: 'Step 2', title: 'Quote & Planning', desc: 'Detailed written quote with materials, timeline, and payment schedule.' },
            { num: '03', phase: 'Step 3', title: 'Build & Execute', desc: 'Our certified team completes the works on schedule with regular updates.' },
            { num: '04', phase: 'Step 4', title: 'Handover & Warranty', desc: 'Final walkthrough, snag resolution, and warranty documentation issued.' },
        ],
        gallery: defaultGallery(catalog.bg1, catalog.bg2, catalog.slug),
        relatedSlugs: serviceCatalog.filter((s) => s.slug !== catalog.slug).slice(0, 3).map((s) => s.slug),
    };
}

export function getServiceDetail(slug) {
    const catalog = serviceCatalog.find((s) => s.slug === slug);
    if (!catalog) return null;

    const detail = detailBySlug[slug] ?? buildDefaultDetail(catalog);

    return {
        ...catalog,
        ...detail,
        waLink: waLinkFor(slug, catalog.name),
    };
}

export function getRelatedServices(slugs) {
    return slugs
        .map((slug) => serviceCatalog.find((s) => s.slug === slug))
        .filter(Boolean);
}
