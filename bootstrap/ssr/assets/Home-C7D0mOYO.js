import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { W as WhatsAppIcon, u as useGsapContext, s as serviceCatalog, F as FrontNavbar, a as FrontScrollRefresh, b as FrontFooter } from "./front-Cj9kKNUW.js";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { style: { minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg,#1A1714 0,#1A1714 8px,#201D1A 8px,#201D1A 36px)" } }),
    /* @__PURE__ */ jsxs("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none" }, children: [
      /* @__PURE__ */ jsxs("svg", { width: "56", height: "56", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(176,137,79,.2)", strokeWidth: "1", strokeLinecap: "round", style: { margin: "0 auto 12px", display: "block" }, children: [
        /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".65rem", color: "rgba(176,137,79,.2)", letterSpacing: ".14em", textTransform: "uppercase" }, children: "hero photo · interior renovation" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,17,15,.35) 0%, rgba(20,17,15,.2) 40%, rgba(20,17,15,.78) 100%)" } }),
    /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { position: "relative", zIndex: 2, paddingBottom: "clamp(64px,10vh,120px)", paddingTop: 120, width: "100%" }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", fontWeight: 600, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--brass)", display: "block", marginBottom: 28, animation: "fadeUp .8s .1s both" }, children: "24 Hour Service · Singapore" }),
      /* @__PURE__ */ jsx("h1", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.8rem,5.5vw,5.2rem)", lineHeight: 0.95, color: "var(--text-onDark)", letterSpacing: "-.025em", fontOpticalSizing: "auto", maxWidth: 820 }, children: ["Renovation &", /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.72)" }, children: "maintenance," }, "em"), "done right,", "across Singapore."].map((line, i) => /* @__PURE__ */ jsx("span", { style: { display: "block", overflow: "hidden" }, children: /* @__PURE__ */ jsx("span", { style: { display: "block", animation: `maskUp .9s cubic-bezier(.16,1,.3,1) ${0.25 + i * 0.18}s both` }, children: line }) }, i)) }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.72, color: "rgba(246,242,236,.55)", maxWidth: 460, marginTop: 28, animation: "fadeUp .8s .95s both" }, children: "From HDB bathrooms to commercial spa centres — 12 specialisations, 1,200+ jobs completed, available 24 hours." }),
      /* @__PURE__ */ jsxs("div", { className: "hero-btns", style: { display: "flex", gap: 12, marginTop: 40, alignItems: "center", flexWrap: "wrap", animation: "fadeUp .8s 1.1s both" }, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote",
            style: { display: "inline-flex", alignItems: "center", gap: 9, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".9rem", padding: "14px 28px", borderRadius: 999 },
            children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { size: 16, color: "#fff" }),
              "WhatsApp Us"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/projects",
            style: { display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(246,242,236,.65)", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".9rem", padding: "14px 22px", borderRadius: 999, border: "1.5px solid rgba(246,242,236,.18)" },
            children: [
              "View Our Work",
              /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "absolute", bottom: 36, right: "clamp(20px,5vw,80px)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, animation: "fadeUp .8s 1.4s both" }, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 1, height: 48, background: "linear-gradient(to bottom,transparent,rgba(176,137,79,.5))", animation: "scrollBounce 2s infinite" } }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", color: "rgba(176,137,79,.45)", letterSpacing: ".14em", textTransform: "uppercase" }, children: "Scroll" })
    ] })
  ] });
}
function IntroSection() {
  const statYearsRef = useRef(null);
  const statJobsRef = useRef(null);
  const statServicesRef = useRef(null);
  const statHoursRef = useRef(null);
  const sectionRef = useRef(null);
  useGsapContext(sectionRef, () => {
    const counters = [
      { ref: statYearsRef, target: 8, suffix: "+" },
      { ref: statJobsRef, target: 1200, suffix: "+" },
      { ref: statServicesRef, target: 12, suffix: "" }
    ];
    counters.forEach(({ ref, target, suffix }) => {
      const el = ref.current;
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + suffix;
        },
        scrollTrigger: { trigger: el, start: "top 82%", once: true }
      });
    });
    if (statHoursRef.current) {
      gsap.from(statHoursRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: statHoursRef.current, start: "top 82%", once: true }
      });
    }
  });
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, style: { background: "var(--paper)", padding: "clamp(80px,12vh,140px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "intro-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 80 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 20 }, children: "Our Craft" }),
        /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto", marginBottom: 28 }, children: [
          "Every space holds",
          /* @__PURE__ */ jsx("br", {}),
          "a story waiting",
          /* @__PURE__ */ jsx("br", {}),
          "to be ",
          /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: "told well." })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.78, color: "var(--text-muted)", maxWidth: 440, marginBottom: 24 }, children: "We work across HDB flats, landed homes, commercial offices, retail boutiques, and F&B spaces — bringing the same care for craftsmanship and commitment to timelines regardless of project size." }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1rem", lineHeight: 1.78, color: "var(--text-muted)", maxWidth: 440 }, children: "Licensed, insured, and trusted by over 1,200 Singapore households and businesses since 2016." }),
        /* @__PURE__ */ jsxs(Link, { href: "/about", style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 600, color: "var(--brass)", marginTop: 32 }, children: [
          "Our Story",
          /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", height: 480 }, children: [
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", right: 0, top: 0, width: "72%", height: "68%", borderRadius: 18, overflow: "hidden", background: "repeating-linear-gradient(-45deg,#E0DAD0,#E0DAD0 6px,#E8E2D8 6px,#E8E2D8 28px)" }, children: /* @__PURE__ */ jsxs("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(20,17,15,.15)", strokeWidth: "1.2", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
            /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
          ] }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", color: "rgba(20,17,15,.2)", letterSpacing: ".1em", textTransform: "uppercase" }, children: "after" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", left: 0, bottom: 0, width: "68%", height: "62%", borderRadius: 18, overflow: "hidden", background: "repeating-linear-gradient(-45deg,#D4CFC6,#D4CFC6 6px,#DDD8CF 6px,#DDD8CF 28px)", boxShadow: "0 20px 60px -12px rgba(20,17,15,.22)" }, children: /* @__PURE__ */ jsxs("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(20,17,15,.15)", strokeWidth: "1.2", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
            /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
          ] }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", color: "rgba(20,17,15,.2)", letterSpacing: ".1em", textTransform: "uppercase" }, children: "before" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { style: { position: "absolute", bottom: "32%", right: "2%", background: "var(--ink)", borderRadius: 12, padding: "12px 18px", boxShadow: "0 12px 32px -6px rgba(20,17,15,.3)" }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem", color: "var(--brass)", marginBottom: 2 }, children: "avg. project" }),
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontSize: "1.4rem", color: "var(--text-onDark)", fontOpticalSizing: "auto" }, children: "12 days" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", background: "var(--paper-2)" }, children: [
      { ref: statYearsRef, id: "stat-years", val: "8+", label: "Years" },
      { ref: statJobsRef, id: "stat-jobs", val: "1200+", label: "Jobs Done" },
      { ref: statServicesRef, id: "stat-services", val: "12", label: "Services" },
      { ref: statHoursRef, id: "stat-hours", val: "24/7", label: "Response" }
    ].map((s, i) => /* @__PURE__ */ jsxs("div", { style: { padding: "36px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid var(--line)" : "none" }, children: [
      /* @__PURE__ */ jsx("div", { ref: s.ref, style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "2.8rem", color: "var(--brass)", lineHeight: 1, letterSpacing: "-.025em", fontOpticalSizing: "auto" }, children: s.val }),
      /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--text-muted)", marginTop: 8, letterSpacing: ".12em", textTransform: "uppercase" }, children: s.label })
    ] }, s.id)) })
  ] }) });
}
const services = serviceCatalog.map(({ num, slug, name, shortDesc }) => ({
  num,
  slug,
  name,
  desc: shortDesc
}));
const projects = [
  { title: "Modern HDB Master Bath", category: "Bathroom Renovation", location: "Sengkang", year: "2024" },
  { title: "KTV Lounge Fit-out", category: "KTV Renovation", location: "Jalan Besar", year: "2024" },
  { title: "Fashion Retail Boutique", category: "Retail Renovation", location: "Orchard", year: "2024" },
  { title: "Landed Home Extension", category: "Home Extension", location: "Punggol", year: "2023" },
  { title: "Spa & Wellness Centre", category: "Spa Renovation", location: "Tampines", year: "2023" },
  { title: "Corporate Office Remodel", category: "Remodels & Paintings", location: "CBD", year: "2023" }
];
const processSteps = [
  { num: "01", title: "Site Assessment", desc: "We visit, measure, and understand your vision and requirements in detail." },
  { num: "02", title: "Detailed Quote", desc: "Clear scope, materials specification, timeline, and itemised pricing." },
  { num: "03", title: "Build & Execute", desc: "Our certified team brings your space to life, on schedule." },
  { num: "04", title: "Handover & Warranty", desc: "Full walkthrough, snagging list resolved, and 12-month warranty." }
];
const whyUs = [
  { icon: "shield", title: "Licensed & Insured", desc: "HDB approved, BCA compliant, fully insured for your protection" },
  { icon: "clock", title: "24/7 Response", desc: "Emergency line active around the clock, every day of the year" },
  { icon: "home", title: "Residential & Commercial", desc: "HDB, condo, landed, retail, F&B, and hospitality spaces" },
  { icon: "check", title: "End-to-End Service", desc: "Design consultation, sourcing, build, and final handover" },
  { icon: "map", title: "All Singapore Coverage", desc: "Sengkang, Punggol, Hougang and island-wide service" },
  { icon: "tag", title: "Transparent Pricing", desc: "Detailed written quotes, no hidden charges, ever" }
];
const testimonials = [
  { quote: "Quality Work transformed our spa centre beyond all expectations. Professional, punctual, and the finish is immaculate. Every client who walks in asks who did the renovation.", author: "Priya S.", project: "Spa Centre Renovation · Tampines", initials: "PS" },
  { quote: "Our HDB bathroom looked tired for years. Quality Work completed a full renovation in 12 days — clean work, zero mess left behind, and the results are stunning.", author: "David L.", project: "Bathroom Renovation · Sengkang", initials: "DL" },
  { quote: "Competitive quote, honest timeline, and they answered WhatsApp at 11pm when we had a last-minute query. Best contractor we've worked with for commercial fit-outs in Singapore.", author: "Mei Lin T.", project: "Retail Boutique · Orchard", initials: "MT" }
];
const faqs = [
  { q: "How long does a typical bathroom renovation take?", a: "Most bathroom renovations take 7–14 working days depending on scope. We provide a detailed timeline in your quote so there are no surprises." },
  { q: "Do you work on both HDB and private properties?", a: "Yes — we handle HDB flats, condominiums, landed properties, and commercial spaces across all Singapore. All HDB works are completed by our licensed HDB contractors." },
  { q: "Is Quality Work licensed by HDB and BCA?", a: "Yes. Quality Work Interior holds the relevant renovation contractor licenses for HDB works, and our electricians are licensed by the Energy Market Authority (EMA)." },
  { q: "How does the quoting process work?", a: "We do a free site assessment, then prepare a detailed written quote with a full scope-of-works and materials list. No hidden costs — what you see is what you pay." },
  { q: "Do you provide a warranty on completed work?", a: "Yes. All renovation works come with a 12-month defects warranty. Electrical and plumbing workmanship carries a 6-month warranty." },
  { q: "Can you work evenings, weekends, or public holidays?", a: "We operate Mon–Sun 8am–11pm. Emergency response for electrical and plumbing faults is available 24 hours a day, 7 days a week." }
];
function ServicesSection() {
  const sectionRef = useRef(null);
  useGsapContext(sectionRef, () => {
    gsap.from("[data-reveal-card]", {
      y: 44,
      opacity: 0,
      stagger: 0.055,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 68%",
        once: true
      }
    });
  });
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "services-section", style: { background: "var(--paper-2)", padding: "clamp(80px,12vh,140px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "What We Do" }),
        /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.02, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: [
          "12 specialisations,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: "one trusted team" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/services", style: { display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 600, color: "var(--brass)", flexShrink: 0, marginBottom: 6 }, children: [
        "All Services ",
        /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "svc-grid", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }, children: services.map((svc) => /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/services/${svc.slug}`,
        className: "svc-card",
        "data-reveal-card": true,
        style: { display: "block", background: "var(--paper)", borderRadius: 14, border: "1px solid var(--line)", overflow: "hidden" },
        children: [
          /* @__PURE__ */ jsx("div", { style: { height: 160, overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { className: "svc-thumb-inner", style: { height: "100%", background: "repeating-linear-gradient(-45deg,#E4DED5,#E4DED5 5px,#EAE4DC 5px,#EAE4DC 22px)", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(20,17,15,.12)", strokeWidth: "1.2", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
            /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
          ] }) }) }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "20px 20px 18px" }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".6rem", fontWeight: 500, color: "var(--brass)", marginBottom: 10, letterSpacing: ".04em" }, children: svc.num }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.02rem", color: "var(--text)", lineHeight: 1.22, letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 6 }, children: svc.name }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".75rem", color: "var(--text-muted)", lineHeight: 1.55 }, children: svc.desc }),
            /* @__PURE__ */ jsx("div", { className: "svc-underline", style: { height: 1.5, background: "var(--brass)", marginTop: 16, borderRadius: 1 } })
          ] })
        ]
      },
      svc.num
    )) })
  ] }) });
}
function ProjectsSection() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  useGsapContext(pinRef, () => {
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;
    ScrollTrigger.refresh(true);
    const dist = track.scrollWidth - pin.offsetWidth + 160;
    if (dist > 0) {
      gsap.to(track, {
        x: -dist,
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          pin: true,
          scrub: 1,
          end: () => `+=${dist + 100}`,
          invalidateOnRefresh: true
        }
      });
    }
  });
  return /* @__PURE__ */ jsxs("section", { ref: pinRef, id: "projects-pin", style: { background: "var(--ink)", padding: "clamp(80px,12vh,140px) 0", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,5vw,80px)", marginBottom: 44 }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "Selected Work" }),
        /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.02, color: "var(--text-onDark)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: [
          "Featured",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.5)" }, children: "projects" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/projects", style: { display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 600, color: "var(--brass)", marginBottom: 6 }, children: [
        "All Projects ",
        /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { paddingLeft: "clamp(20px,5vw,80px)", overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { ref: trackRef, style: { display: "flex", gap: 22, width: "max-content" }, children: projects.map((proj) => /* @__PURE__ */ jsxs(
      Link,
      {
        href: "/projects",
        className: "proj-card",
        style: { display: "block", width: 380, flexShrink: 0, borderRadius: 16, overflow: "hidden", background: "var(--ink-soft)", border: "1px solid var(--line-dark)" },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { height: 280, overflow: "hidden", position: "relative" }, children: [
            /* @__PURE__ */ jsx("div", { className: "proj-thumb-inner", style: { height: "100%", background: "repeating-linear-gradient(-45deg,#201D1A,#201D1A 7px,#272320 7px,#272320 30px)", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(176,137,79,.2)", strokeWidth: "1", children: [
              /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
              /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
              /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 16, right: 16, background: "rgba(20,17,15,.7)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "4px 10px" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", color: "rgba(246,242,236,.6)" }, children: proj.year }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "22px 22px 20px" }, children: [
            /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".62rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".12em", textTransform: "uppercase", display: "block", marginBottom: 8 }, children: proj.category }),
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.15rem", color: "var(--text-onDark)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 8 }, children: proj.title }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 5, color: "rgba(246,242,236,.35)" }, children: [
              /* @__PURE__ */ jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
              ] }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem" }, children: proj.location })
            ] })
          ] })
        ]
      },
      proj.title
    )) }) }),
    /* @__PURE__ */ jsx("div", { style: { maxWidth: 1320, margin: "24px auto 0", padding: "0 clamp(20px,5vw,80px)" }, children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 32, height: 1, background: "rgba(176,137,79,.4)" } }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".62rem", color: "rgba(246,242,236,.3)", letterSpacing: ".12em", textTransform: "uppercase" }, children: "Scroll to explore" })
    ] }) })
  ] });
}
function ProcessSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  useGsapContext(sectionRef, () => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 58%",
            end: "bottom 62%",
            scrub: 0.6
          }
        }
      );
    }
  });
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "process-section", style: { background: "var(--paper)", padding: "clamp(80px,12vh,140px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: 72 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "How It Works" }),
      /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3.2vw,3rem)", lineHeight: 1.02, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: [
        "Four steps to a",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: "transformed space" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 27, left: "calc(12.5%)", right: "calc(12.5%)", height: 1, background: "var(--line)" } }),
      /* @__PURE__ */ jsx("div", { ref: lineRef, style: { position: "absolute", top: 27, left: "calc(12.5%)", right: "calc(12.5%)", height: 1, background: "var(--brass)", transformOrigin: "left", transform: "scaleX(0)" } }),
      /* @__PURE__ */ jsx("div", { className: "process-grid", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, position: "relative" }, children: processSteps.map((step) => /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { width: 54, height: 54, borderRadius: "50%", background: "var(--brass)", margin: "0 auto 28px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, boxShadow: "0 0 0 8px var(--paper)" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem", fontWeight: 500, color: "#FFF8EE" }, children: step.num }) }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.1rem", color: "var(--text)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 10 }, children: step.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".82rem", lineHeight: 1.65, color: "var(--text-muted)" }, children: step.desc })
      ] }, step.num)) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: 60 }, children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/6598683650?text=I'd%20like%20to%20start%20a%20project",
        style: { display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "var(--text-onDark)", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".875rem", padding: "13px 26px", borderRadius: 999 },
        children: [
          "Start Your Project Today",
          /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
        ]
      }
    ) })
  ] }) });
}
function WhyIcon({ icon }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brass)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const icons = {
    shield: /* @__PURE__ */ jsx("svg", { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
    clock: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
    ] }),
    home: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
      /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
    ] }),
    check: /* @__PURE__ */ jsx("svg", { ...props, children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }),
    map: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
    ] }),
    tag: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" }),
      /* @__PURE__ */ jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })
    ] })
  };
  return icons[icon] || null;
}
function WhySection() {
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper-2)", padding: "clamp(80px,12vh,140px) 0" }, children: /* @__PURE__ */ jsx("div", { className: "qw-container", children: /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "why-sticky", style: { position: "sticky", top: 100 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "Why Us" }),
      /* @__PURE__ */ jsx("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3vw,2.8rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto", marginBottom: 24 }, children: "The case for Quality Work" }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".9rem", lineHeight: 1.75, color: "var(--text-muted)" }, children: "We don't just renovate spaces — we build long-term trust with every homeowner and business we serve." }),
      /* @__PURE__ */ jsxs(Link, { href: "/about", style: { display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 600, color: "var(--brass)", marginTop: 24 }, children: [
        "About the company ",
        /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "why-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }, children: whyUs.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "why-card",
        style: { background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 14, padding: "28px 24px" },
        children: [
          /* @__PURE__ */ jsx("div", { style: { width: 44, height: 44, borderRadius: 12, background: "rgba(176,137,79,.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }, children: /* @__PURE__ */ jsx(WhyIcon, { icon: item.icon }) }),
          /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".9rem", fontWeight: 600, color: "var(--text)", marginBottom: 7 }, children: item.title }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".8rem", lineHeight: 1.6, color: "var(--text-muted)" }, children: item.desc })
        ]
      },
      item.icon
    )) })
  ] }) }) });
}
function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const quoteRef = useRef(null);
  const animateQuote = () => {
    if (!quoteRef.current) return;
    gsap.fromTo(quoteRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  };
  const prev = () => {
    setIdx((i) => Math.max(0, i - 1));
    animateQuote();
  };
  const next = () => {
    setIdx((i) => Math.min(testimonials.length - 1, i + 1));
    animateQuote();
  };
  const t = testimonials[idx];
  const dotW = (i) => idx === i ? 24 : 8;
  const dotBg = (i) => idx === i ? "var(--brass)" : "rgba(246,242,236,.2)";
  return /* @__PURE__ */ jsxs("section", { style: { background: "var(--ink)", padding: "clamp(80px,12vh,140px) 0", overflow: "hidden", position: "relative" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(176,137,79,.06)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: -150, left: -150, width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(176,137,79,.05)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: 60 }, children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "Client Stories" }),
        /* @__PURE__ */ jsx("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2rem,3vw,2.8rem)", lineHeight: 1.02, color: "var(--text-onDark)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: "What our clients say" })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { maxWidth: 760, margin: "0 auto", textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center", gap: 4, marginBottom: 32 }, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "var(--brass)", children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }, i)) }),
        /* @__PURE__ */ jsxs("div", { ref: quoteRef, children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontSize: "6rem", lineHeight: 0.5, color: "rgba(176,137,79,.18)", marginBottom: 24, fontOpticalSizing: "auto" }, children: "“" }),
          /* @__PURE__ */ jsx("blockquote", { style: { fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: "clamp(1.3rem,2.2vw,1.65rem)", lineHeight: 1.5, color: "var(--text-onDark)", letterSpacing: "-.01em", fontStyle: "italic", fontOpticalSizing: "auto", marginBottom: 36 }, children: t.quote }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }, children: [
            /* @__PURE__ */ jsx("div", { style: { width: 44, height: 44, borderRadius: "50%", background: "rgba(176,137,79,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces',serif", fontSize: ".9rem", color: "var(--brass)", fontOpticalSizing: "auto" }, children: t.initials }),
            /* @__PURE__ */ jsxs("div", { style: { textAlign: "left" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".85rem", fontWeight: 600, color: "var(--text-onDark)" }, children: t.author }),
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "rgba(246,242,236,.4)", marginTop: 2 }, children: t.project })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 44 }, children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: prev, disabled: idx === 0, style: { width: 42, height: 42, borderRadius: "50%", border: "1px solid var(--line-dark)", background: "transparent", cursor: idx === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(246,242,236,.5)", opacity: idx === 0 ? 0.3 : 1, transition: "opacity .2s" }, children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M15 18l-6-6 6-6" }) }) }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: testimonials.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setIdx(i);
                animateQuote();
              },
              "aria-label": `View testimonial ${i + 1}`,
              style: { width: dotW(i), height: 4, borderRadius: 2, background: dotBg(i), transition: "all .3s", cursor: "pointer", border: "none", padding: 0 }
            },
            i
          )) }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: next, disabled: idx === testimonials.length - 1, style: { width: 42, height: 42, borderRadius: "50%", border: "1px solid var(--line-dark)", background: "transparent", cursor: idx === testimonials.length - 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(246,242,236,.5)", opacity: idx === testimonials.length - 1 ? 0.3 : 1, transition: "opacity .2s" }, children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M9 18l6-6-6-6" }) }) })
        ] })
      ] })
    ] })
  ] });
}
function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx((prev) => prev === i ? null : i);
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper)", padding: "clamp(80px,12vh,140px) 0" }, children: /* @__PURE__ */ jsx("div", { className: "qw-container", children: /* @__PURE__ */ jsxs("div", { className: "faq-grid", style: { display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { position: "sticky", top: 100 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "FAQs" }),
      /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(1.8rem,2.8vw,2.6rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto", marginBottom: 20 }, children: [
        "Questions",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: "answered" })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".87rem", lineHeight: 1.72, color: "var(--text-muted)", marginBottom: 28 }, children: "Can't find what you're looking for? Chat with us directly." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://wa.me/6598683650",
          style: { display: "inline-flex", alignItems: "center", gap: 8, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".83rem", padding: "11px 22px", borderRadius: 999 },
          children: [
            /* @__PURE__ */ jsx(WhatsAppIcon, { size: 14, color: "#fff" }),
            "Ask on WhatsApp"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: faqs.map((faq, i) => {
      const isOpen = openIdx === i;
      return /* @__PURE__ */ jsxs("div", { style: { borderBottom: "1px solid var(--line)" }, children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggle(i),
            style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "22px 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" },
            children: [
              /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".95rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.45, flex: 1 }, children: faq.q }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1.5px solid var(--line)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isOpen ? "#fff" : "var(--text-muted)",
                    background: isOpen ? "var(--brass)" : "transparent",
                    borderColor: isOpen ? "var(--brass)" : "var(--line)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform .3s, background .2s, border-color .2s, color .2s"
                  },
                  children: /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14" }) })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "faq-answer", style: { maxHeight: isOpen ? 400 : 0 }, children: /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".875rem", lineHeight: 1.78, color: "var(--text-muted)", paddingBottom: 22 }, children: faq.a }) })
      ] }, i);
    }) })
  ] }) }) });
}
function LeadCtaSection() {
  return /* @__PURE__ */ jsxs("section", { style: { background: "var(--ink)", padding: "clamp(80px,12vh,140px) 0", textAlign: "center", position: "relative", overflow: "hidden" }, children: [
    [
      ["-200px", "-200px", "560px", 0.07],
      ["-120px", "-120px", "340px", 0.1],
      [null, null, "500px", 0.06, "-180px", "-180px"]
    ].map((r, i) => /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          top: r[0],
          right: r[1],
          bottom: r[4],
          left: r[5],
          width: r[2],
          height: r[2],
          borderRadius: "50%",
          border: `1px solid rgba(176,137,79,${r[3]})`,
          pointerEvents: "none"
        }
      },
      i
    )),
    /* @__PURE__ */ jsx("div", { className: "qw-container", style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: 680, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 20 }, children: "Get Started Today" }),
      /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.2rem,4vw,3.6rem)", lineHeight: 1, color: "var(--text-onDark)", letterSpacing: "-.025em", fontOpticalSizing: "auto", marginBottom: 16 }, children: [
        "Ready to renovate?",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.5)" }, children: "Let's talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".95rem", color: "rgba(246,242,236,.42)", marginBottom: 40, lineHeight: 1.7 }, children: "Our team typically responds within 1 hour. Free site assessment, no obligation." }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote",
            style: { display: "inline-flex", alignItems: "center", gap: 10, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".95rem", padding: "15px 30px", borderRadius: 999 },
            children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { size: 18, color: "#fff" }),
              "WhatsApp Us Now"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+6598683650",
            style: { display: "inline-flex", alignItems: "center", gap: 9, color: "rgba(246,242,236,.72)", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".95rem", padding: "15px 26px", borderRadius: 999, border: "1.5px solid rgba(246,242,236,.18)" },
            children: [
              /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" }) }),
              "Call 9868 3650"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Link, { href: "/contact", style: { display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(246,242,236,.4)", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".87rem", padding: "15px 20px" }, children: [
          "Or use the form ",
          /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "rgba(246,242,236,.25)", marginTop: 32, letterSpacing: ".04em" }, children: "Serving Sengkang · Punggol · Hougang · Tampines · Jurong · CBD · and all Singapore" })
    ] }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "qw-front", children: [
    /* @__PURE__ */ jsxs(Head, { title: "Quality Work Interior", children: [
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap", rel: "stylesheet" })
    ] }),
    /* @__PURE__ */ jsx(FrontNavbar, {}),
    /* @__PURE__ */ jsx(FrontScrollRefresh, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(IntroSection, {}),
      /* @__PURE__ */ jsx(ServicesSection, {}),
      /* @__PURE__ */ jsx(ProjectsSection, {}),
      /* @__PURE__ */ jsx(ProcessSection, {}),
      /* @__PURE__ */ jsx(WhySection, {}),
      /* @__PURE__ */ jsx(TestimonialsSection, {}),
      /* @__PURE__ */ jsx(FaqSection, {}),
      /* @__PURE__ */ jsx(LeadCtaSection, {})
    ] }),
    /* @__PURE__ */ jsx(FrontFooter, {})
  ] });
}
export {
  Home as default
};
