import { jsxs, jsx } from "react/jsx-runtime";
import { u as useGsapContext, F as FrontLayout } from "./useGsapContext-ClCZzQWm.js";
import { Link } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { S as ServicesLeadCtaSection } from "./ServicesLeadCtaSection-BYdj9lY4.js";
import "gsap/ScrollTrigger";
function ProjectsHeroSection() {
  return /* @__PURE__ */ jsxs("section", { style: { background: "var(--ink)", padding: "clamp(120px,16vh,172px) 0 clamp(64px,8vh,100px)", position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -200, right: -200, width: 620, height: 620, borderRadius: "50%", border: "1px solid rgba(176,137,79,.07)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -110, right: -110, width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(176,137,79,.1)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: -120, left: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(176,137,79,.05)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(246,242,236,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.02) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 28, animation: "fadeUp .7s .05s both" }, children: [
        /* @__PURE__ */ jsx(Link, { href: "/", style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "rgba(246,242,236,.3)" }, children: "Home" }),
        /* @__PURE__ */ jsx("span", { style: { color: "rgba(246,242,236,.2)", fontSize: ".8rem" }, children: "›" }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--brass)" }, children: "Projects" })
      ] }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 18, animation: "fadeUp .7s .12s both" }, children: "Our Work" }),
      /* @__PURE__ */ jsxs("h1", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.6rem,5vw,4.6rem)", lineHeight: 0.96, color: "var(--text-onDark)", letterSpacing: "-.025em", fontOpticalSizing: "auto", maxWidth: 700, marginBottom: 24, animation: "maskUp .9s .28s both" }, children: [
        "Recently completed",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.55)" }, children: "across Singapore." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.72, color: "rgba(246,242,236,.48)", maxWidth: 480, marginBottom: 44, animation: "fadeUp .8s .5s both" }, children: "Over 1,200 projects delivered across residential and commercial spaces. Browse our portfolio and find inspiration for your own renovation." }),
      /* @__PURE__ */ jsx("div", { className: "projects-hero-stats", style: { display: "flex", gap: 0, animation: "fadeUp .8s .62s both" }, children: [
        ["1,200+", "Projects completed"],
        ["12", "Service categories"],
        ["8+", "Years experience"]
      ].map(([val, label], i) => /* @__PURE__ */ jsxs("div", { style: { padding: "20px 32px", paddingLeft: i === 0 ? 0 : 32, borderRight: i < 2 ? "1px solid var(--line-dark)" : "none" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontSize: "2.4rem", color: "var(--brass)", lineHeight: 1, fontOpticalSizing: "auto" }, children: val }),
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".65rem", fontWeight: 600, color: "rgba(246,242,236,.35)", textTransform: "uppercase", letterSpacing: ".12em", marginTop: 6 }, children: label })
      ] }, label)) })
    ] })
  ] });
}
const projectFilters = [
  { key: "all", label: "All" },
  { key: "spa", label: "Spa" },
  { key: "ktv", label: "KTV" },
  { key: "retail", label: "Retail" },
  { key: "home", label: "Home" },
  { key: "bathroom", label: "Bathroom" },
  { key: "kitchen", label: "Kitchen" },
  { key: "flooring", label: "Flooring" },
  { key: "painting", label: "Painting" },
  { key: "electrical", label: "Electrical" },
  { key: "plumbing", label: "Plumbing" },
  { key: "roller", label: "Roller Shutter" }
];
const projectCatalog = [
  { id: 1, slug: "modern-hdb-master-bath", key: "bathroom", category: "Bathroom", title: "Modern HDB Master Bath", location: "Sengkang", year: "2025", h: 300, bg1: "#8898A8", bg2: "#98A8B8" },
  { id: 2, slug: "open-plan-kitchen-remodel", key: "kitchen", category: "Kitchen", title: "Open-Plan Kitchen Remodel", location: "Tampines", year: "2025", h: 240, bg1: "#A8886A", bg2: "#B49878" },
  { id: 3, slug: "wellness-spa-fit-out", key: "spa", category: "Spa", title: "Wellness Spa Full Fit-out", location: "Orchard", year: "2025", h: 360, bg1: "#C4A882", bg2: "#CEBFA0" },
  { id: 4, slug: "fashion-boutique-renovation", key: "retail", category: "Retail", title: "Fashion Boutique Renovation", location: "ION Orchard", year: "2025", h: 280, bg1: "#B09070", bg2: "#BAA080" },
  { id: 5, slug: "ktv-lounge-premium-fit-out", key: "ktv", category: "KTV", title: "KTV Lounge Premium Fit-out", location: "Jalan Besar", year: "2024", h: 320, bg1: "#8A7060", bg2: "#957B6A" },
  { id: 6, slug: "landed-home-extension", key: "home", category: "Home", title: "Landed Home Extension, 2 Rooms", location: "Punggol", year: "2024", h: 260, bg1: "#A89070", bg2: "#B4A080" },
  { id: 7, slug: "full-flat-vinyl-flooring", key: "flooring", category: "Flooring", title: "Full-Flat Vinyl Flooring", location: "Bishan", year: "2024", h: 220, bg1: "#909898", bg2: "#A0A8A8" },
  { id: 8, slug: "condo-ensuite-transformation", key: "bathroom", category: "Bathroom", title: "Condo Ensuite Transformation", location: "Marina Bay", year: "2024", h: 340, bg1: "#8898A8", bg2: "#9AAABB" },
  { id: 9, slug: "full-home-remodel-repaint", key: "painting", category: "Painting", title: "Full-Home Remodel & Repaint", location: "Clementi", year: "2024", h: 260, bg1: "#C8A880", bg2: "#D4B890" },
  { id: 10, slug: "hdb-kitchen-cabinet-overhaul", key: "kitchen", category: "Kitchen", title: "HDB Kitchen — Cabinet Overhaul", location: "Woodlands", year: "2024", h: 300, bg1: "#A8886A", bg2: "#B29070" },
  { id: 11, slug: "commercial-rewiring-db-upgrade", key: "electrical", category: "Electrical", title: "Commercial Rewiring & DB Upgrade", location: "Toa Payoh", year: "2024", h: 220, bg1: "#707888", bg2: "#808898" },
  { id: 12, slug: "nail-spa-boutique-fit-out", key: "spa", category: "Spa", title: "Nail Spa Boutique Fit-out", location: "Bugis", year: "2024", h: 300, bg1: "#C4A882", bg2: "#CCBA96" },
  { id: 13, slug: "room-addition-converted-study", key: "home", category: "Home", title: "Room Addition — Converted Study", location: "Sengkang", year: "2023", h: 240, bg1: "#A89070", bg2: "#B8A080" },
  { id: 14, slug: "roller-shutter-shophouse", key: "roller", category: "Roller Shutter", title: "Roller Shutter — 3-Unit Shophouse", location: "Little India", year: "2023", h: 200, bg1: "#887870", bg2: "#988880" },
  { id: 15, slug: "fnb-cafe-interior-fit-out", key: "retail", category: "Retail", title: "F&B Café Interior Fit-out", location: "Tanjong Pagar", year: "2023", h: 340, bg1: "#B09070", bg2: "#C0A080" },
  { id: 16, slug: "terraced-house-three-bathrooms", key: "bathroom", category: "Bathroom", title: "Terraced House — 3 Bathrooms", location: "Hougang", year: "2023", h: 280, bg1: "#8898A8", bg2: "#9AA8B8" },
  { id: 17, slug: "full-plumbing-repipe-hdb", key: "plumbing", category: "Plumbing", title: "Full Plumbing Re-pipe — HDB 5-rm", location: "Jurong West", year: "2023", h: 220, bg1: "#7898A0", bg2: "#88A8B0" },
  { id: 18, slug: "office-vinyl-flooring-3000sqft", key: "flooring", category: "Flooring", title: "Office Vinyl Flooring — 3,000 sqft", location: "CBD", year: "2023", h: 300, bg1: "#909898", bg2: "#A0A8A8" }
];
const PROJECTS_PAGE_SIZE = 9;
function filterProjects(activeFilter) {
  if (activeFilter === "all") return projectCatalog;
  return projectCatalog.filter((p) => p.key === activeFilter);
}
function animateCards(cards, { fromY = 40, scale = 1, duration = 0.7, stagger = 0.06 } = {}) {
  if (!cards.length) return;
  gsap.fromTo(
    cards,
    { y: fromY, autoAlpha: 0, scale },
    { y: 0, autoAlpha: 1, scale: 1, duration, ease: "power3.out", stagger, delay: 0.03 }
  );
}
function ProjectsGridSection() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [page, setPage] = useState(1);
  const prevPageRef = useRef(1);
  const prevFilterRef = useRef("all");
  const isFirstFilterAnim = useRef(true);
  const filtered = filterProjects(activeFilter);
  const visibleProjects = filtered.slice(0, page * PROJECTS_PAGE_SIZE);
  const visibleCount = visibleProjects.length;
  const totalCount = filtered.length;
  const canLoadMore = visibleCount < totalCount;
  useGsapContext(sectionRef, (scope) => {
    const cards = scope.querySelectorAll("[data-proj-card]");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
          delay: i % 3 * 0.07
        }
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
      const cards = sectionRef.current.querySelectorAll("[data-proj-card]");
      animateCards(cards, { fromY: 28, scale: 0.97, duration: 0.55, stagger: 0.06 });
      prevPageRef.current = 1;
      return;
    }
    if (page > prevPageRef.current) {
      const cards = sectionRef.current.querySelectorAll("[data-proj-card]");
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
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, style: { background: "var(--paper)", padding: "clamp(48px,6vh,72px) 0 clamp(72px,10vh,120px)" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: 44 }, children: [
      /* @__PURE__ */ jsx("div", { className: "projects-filter-scroll", style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }, children: projectFilters.map((f) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `filter-pill${activeFilter === f.key ? " active" : ""}`,
          onClick: () => handleFilter(f.key),
          children: f.label
        },
        f.key
      )) }),
      /* @__PURE__ */ jsxs("div", { style: { marginTop: 16, display: "flex", alignItems: "center", gap: 10 }, children: [
        /* @__PURE__ */ jsxs("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem", color: "var(--text-muted)" }, children: [
          visibleCount,
          " projects"
        ] }),
        /* @__PURE__ */ jsx("div", { style: { height: 1, flex: 1, background: "var(--line)" } }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", color: "var(--text-muted)" }, children: "Sorted by most recent" })
      ] })
    ] }),
    visibleCount === 0 ? /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", padding: "80px 20px" }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontSize: "2rem", color: "var(--text-muted)", fontOpticalSizing: "auto", marginBottom: 12 }, children: "No projects yet" }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".9rem", color: "var(--text-muted)" }, children: "Try selecting a different category." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "projects-masonry", children: visibleProjects.map((proj) => /* @__PURE__ */ jsx("div", { className: "proj-card-wrap", children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/projects/${proj.slug}`,
        className: "projects-index-card",
        "data-proj-card": true,
        children: [
          /* @__PURE__ */ jsxs("div", { style: { overflow: "hidden", height: proj.h, position: "relative" }, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "thumb-inner",
                style: {
                  height: "100%",
                  background: `repeating-linear-gradient(-45deg,${proj.bg1},${proj.bg1} 7px,${proj.bg2} 7px,${proj.bg2} 30px)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,.18)", strokeWidth: "1.2", children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
                  /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                  /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 14, left: 14, background: "rgba(20,17,15,.6)", backdropFilter: "blur(5px)", borderRadius: 6, padding: "4px 10px" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", fontWeight: 600, color: "rgba(246,242,236,.8)", letterSpacing: ".06em" }, children: proj.category }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "18px 20px 16px" }, children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.05rem", color: "var(--text)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 8, lineHeight: 1.25 }, children: proj.title }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 4, color: "var(--text-muted)" }, children: [
                  /* @__PURE__ */ jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: [
                    /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
                    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem" }, children: proj.location })
                ] }),
                /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".65rem", color: "var(--text-muted)" }, children: proj.year })
              ] }),
              /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "var(--brass)", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
            ] })
          ] })
        ]
      }
    ) }, proj.id)) }),
    canLoadMore && /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginTop: 52 }, children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setPage((p) => p + 1),
          className: "projects-load-more",
          children: [
            /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12l7 7 7-7" }) }),
            "Load more projects"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--text-muted)", marginTop: 12 }, children: [
        "Showing ",
        visibleCount,
        " of ",
        totalCount
      ] })
    ] })
  ] }) });
}
function ProjectsLeadCtaSection() {
  return /* @__PURE__ */ jsx(ServicesLeadCtaSection, {});
}
function ProjectsIndex() {
  return /* @__PURE__ */ jsxs(FrontLayout, { title: "Projects — Quality Work Interior", navbarVariant: "solid", activePath: "/projects", children: [
    /* @__PURE__ */ jsx(ProjectsHeroSection, {}),
    /* @__PURE__ */ jsx(ProjectsGridSection, {}),
    /* @__PURE__ */ jsx(ProjectsLeadCtaSection, {})
  ] });
}
export {
  ProjectsIndex as default
};
