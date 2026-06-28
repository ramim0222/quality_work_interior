import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { filterProjects, projectFilters, PROJECTS_PAGE_SIZE } from '@/data/projectsData';

function animateCards(cards, { fromY = 40, scale = 1, duration = 0.7, stagger = 0.06 } = {}) {
    if (!cards.length) return;
    gsap.fromTo(
        cards,
        { y: fromY, autoAlpha: 0, scale },
        { y: 0, autoAlpha: 1, scale: 1, duration, ease: 'power3.out', stagger, delay: 0.03 },
    );
}

export default function ProjectsGridSection() {
    const sectionRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [page, setPage] = useState(1);
    const prevPageRef = useRef(1);
    const prevFilterRef = useRef('all');
    const isFirstFilterAnim = useRef(true);

    const filtered = filterProjects(activeFilter);
    const visibleProjects = filtered.slice(0, page * PROJECTS_PAGE_SIZE);
    const visibleCount = visibleProjects.length;
    const totalCount = filtered.length;
    const canLoadMore = visibleCount < totalCount;

    useGsapContext(sectionRef, (scope) => {
        const cards = scope.querySelectorAll('[data-proj-card]');
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 40, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                    delay: (i % 3) * 0.07,
                },
            );
        });
    }, []);

    useEffect(() => {
        if (!sectionRef.current) return;

        if (prevFilterRef.current !== activeFilter) {
            prevFilterRef.current = activeFilter;
            if (isFirstFilterAnim.current) {
                isFirstFilterAnim.current = false;
                return;
            }
            const cards = sectionRef.current.querySelectorAll('[data-proj-card]');
            animateCards(cards, { fromY: 28, scale: 0.97, duration: 0.55, stagger: 0.06 });
            prevPageRef.current = 1;
            return;
        }

        if (page > prevPageRef.current) {
            const cards = sectionRef.current.querySelectorAll('[data-proj-card]');
            const newCards = Array.from(cards).slice((page - 1) * PROJECTS_PAGE_SIZE);
            animateCards(newCards, { fromY: 40, duration: 0.65, stagger: 0.07 });
            prevPageRef.current = page;
        }
    }, [activeFilter, page, visibleCount]);

    const handleFilter = (key) => {
        setActiveFilter(key);
        setPage(1);
        prevPageRef.current = 1;
    };

    return (
        <section ref={sectionRef} style={{ background: 'var(--paper)', padding: 'clamp(48px,6vh,72px) 0 clamp(72px,10vh,120px)' }}>
            <div className="qw-container">
                <div style={{ marginBottom: 44 }}>
                    <div className="projects-filter-scroll" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                        {projectFilters.map((f) => (
                            <button
                                key={f.key}
                                type="button"
                                className={`filter-pill${activeFilter === f.key ? ' active' : ''}`}
                                onClick={() => handleFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--text-muted)' }}>
                            {visibleCount} projects
                        </span>
                        <div style={{ height: 1, flex: 1, background: 'var(--line)' }} />
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'var(--text-muted)' }}>Sorted by most recent</span>
                    </div>
                </div>

                {visibleCount === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                        <div style={{ fontFamily: "'Fraunces',serif", fontSize: '2rem', color: 'var(--text-muted)', fontOpticalSizing: 'auto', marginBottom: 12 }}>No projects yet</div>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.9rem', color: 'var(--text-muted)' }}>Try selecting a different category.</p>
                    </div>
                ) : (
                    <div className="projects-masonry">
                        {visibleProjects.map((proj) => (
                            <div key={proj.id} className="proj-card-wrap">
                                <Link
                                    href={`/projects/${proj.slug}`}
                                    className="projects-index-card"
                                    data-proj-card
                                >
                                    <div style={{ overflow: 'hidden', height: proj.h, position: 'relative' }}>
                                        <div
                                            className="thumb-inner"
                                            style={{
                                                height: '100%',
                                                background: `repeating-linear-gradient(-45deg,${proj.bg1},${proj.bg1} 7px,${proj.bg2} 7px,${proj.bg2} 30px)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                        </div>
                                        <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(20,17,15,.6)', backdropFilter: 'blur(5px)', borderRadius: 6, padding: '4px 10px' }}>
                                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 600, color: 'rgba(246,242,236,.8)', letterSpacing: '.06em' }}>{proj.category}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '18px 20px 16px' }}>
                                        <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.05rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 8, lineHeight: 1.25 }}>{proj.title}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)' }}>
                                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem' }}>{proj.location}</span>
                                                </div>
                                                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--text-muted)' }}>{proj.year}</span>
                                            </div>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {canLoadMore && (
                    <div style={{ textAlign: 'center', marginTop: 52 }}>
                        <button
                            type="button"
                            onClick={() => setPage((p) => p + 1)}
                            className="projects-load-more"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                            Load more projects
                        </button>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)', marginTop: 12 }}>
                            Showing {visibleCount} of {totalCount}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
