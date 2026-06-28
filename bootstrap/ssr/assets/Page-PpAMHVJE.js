import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { W as WhatsAppIcon, u as useGsapContext, F as FrontLayout } from "./useGsapContext-ClCZzQWm.js";
import { useRef, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import gsap from "gsap";
import { s as serviceCatalog } from "./servicesData-DFahS6mZ.js";
import "gsap/ScrollTrigger";
function ServiceDetailHeroSection({ service }) {
  const heroImgRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = "scale(1)";
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [service.slug]);
  const headlineLines = service.headline.split("\n");
  return /* @__PURE__ */ jsx("section", { style: { paddingTop: 80, background: "var(--paper)", minHeight: "88vh", display: "flex", alignItems: "stretch" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container service-detail-hero-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, width: "100%" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { padding: "clamp(60px,8vh,100px) clamp(0px,4vw,60px) clamp(60px,8vh,100px) 0", display: "flex", flexDirection: "column", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 28, animation: "fadeUp .7s .05s both" }, children: [
        /* @__PURE__ */ jsx(Link, { href: "/", style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--text-muted)" }, children: "Home" }),
        /* @__PURE__ */ jsx("span", { style: { color: "var(--line)", fontSize: ".8rem" }, children: "›" }),
        /* @__PURE__ */ jsx(Link, { href: "/services", style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--text-muted)" }, children: "Services" }),
        /* @__PURE__ */ jsx("span", { style: { color: "var(--line)", fontSize: ".8rem" }, children: "›" }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--brass)" }, children: service.name })
      ] }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 18, animation: "fadeUp .7s .15s both" }, children: "Service" }),
      /* @__PURE__ */ jsx("h1", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.4rem,4.2vw,4rem)", lineHeight: 0.96, color: "var(--text)", letterSpacing: "-.025em", fontOpticalSizing: "auto", marginBottom: 24, animation: "maskUp .9s .28s both" }, children: headlineLines.map((line, i) => /* @__PURE__ */ jsx("span", { style: { display: "block" }, children: line }, i)) }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1.02rem", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: 480, marginBottom: 36, animation: "fadeUp .8s .52s both" }, children: service.summary }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 11, alignItems: "center", flexWrap: "wrap", animation: "fadeUp .8s .65s both" }, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: service.waLink,
            style: { display: "inline-flex", alignItems: "center", gap: 8, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".88rem", padding: "13px 24px", borderRadius: 999 },
            children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { size: 15, color: "#fff" }),
              "WhatsApp about this"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+6598683650",
            style: { display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".88rem", padding: "13px 20px", borderRadius: 999, border: "1.5px solid var(--line)" },
            children: [
              /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" }) }),
              "Call 9868 3650"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32, animation: "fadeUp .8s .78s both" }, children: service.tags.map((tag) => /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 500, color: "var(--text-muted)", background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 999, padding: "5px 12px" }, children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "relative", overflow: "hidden", minHeight: 560, animation: "scaleIn .9s .2s both" }, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: heroImgRef,
          style: {
            position: "absolute",
            inset: 0,
            background: `repeating-linear-gradient(-45deg,${service.bg1},${service.bg1} 7px,${service.bg2} 7px,${service.bg2} 32px)`,
            transform: "scale(1.08)",
            transition: "transform 1.4s cubic-bezier(.16,1,.3,1)"
          },
          children: /* @__PURE__ */ jsxs("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, children: [
            /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,.2)", strokeWidth: "1", strokeLinecap: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
              /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
              /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
            ] }),
            /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".62rem", color: "rgba(255,255,255,.18)", letterSpacing: ".12em", textTransform: "uppercase" }, children: service.heroPhotoLabel })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { style: { position: "absolute", bottom: 36, left: -1, background: "var(--ink)", borderRadius: "0 14px 14px 0", padding: "18px 24px", boxShadow: "0 12px 40px -6px rgba(20,17,15,.35)", zIndex: 2 }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".65rem", color: "var(--brass)", marginBottom: 3, letterSpacing: ".04em" }, children: "avg. completion" }),
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontSize: "1.5rem", color: "var(--text-onDark)", fontOpticalSizing: "auto" }, children: service.stat }),
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", color: "rgba(246,242,236,.38)", marginTop: 2 }, children: service.statLabel })
      ] })
    ] })
  ] }) });
}
function ServiceDetailOverviewSection({ service }) {
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper-2)", padding: "clamp(72px,10vh,120px) 0" }, children: /* @__PURE__ */ jsx("div", { className: "qw-container", children: /* @__PURE__ */ jsxs("div", { className: "service-detail-overview-grid", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 18 }, children: "Overview" }),
      /* @__PURE__ */ jsx("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(1.8rem,2.6vw,2.5rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto", marginBottom: 28 }, children: service.overviewHeadline }),
      service.overviewParas.map((para, i) => /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".98rem", lineHeight: 1.82, color: "var(--text-muted)", marginBottom: 20 }, children: para }, i)),
      /* @__PURE__ */ jsxs("div", { style: { marginTop: 32 }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".62rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }, children: "Scope includes" }),
        /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: service.scopeChips.map((chip) => /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".75rem", color: "var(--text)", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 999, padding: "6px 14px" }, children: chip }, chip)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { background: "var(--paper)", borderRadius: 18, padding: "36px 32px", border: "1px solid var(--line)", boxShadow: "0 8px 32px -10px rgba(20,17,15,.1)" }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.2rem", color: "var(--text)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 24 }, children: "What's included" }),
      /* @__PURE__ */ jsx("div", { children: service.checklist.map((item) => /* @__PURE__ */ jsxs("div", { className: "check-item", children: [
        /* @__PURE__ */ jsx("div", { style: { width: 22, height: 22, borderRadius: "50%", background: "rgba(176,137,79,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }, children: /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "var(--brass)", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".85rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }, children: item.title }),
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".75rem", color: "var(--text-muted)", marginTop: 2, lineHeight: 1.5 }, children: item.detail })
        ] })
      ] }, item.title)) }),
      /* @__PURE__ */ jsxs("div", { style: { marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)" }, children: [
        /* @__PURE__ */ jsxs("a", { href: service.waLink, style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--brass)", color: "#FFF8EE", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".85rem", padding: "12px 20px", borderRadius: 999 }, children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, { size: 14, color: "#FFF8EE" }),
          "Get a Quote via WhatsApp"
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", color: "var(--text-muted)", textAlign: "center", marginTop: 10 }, children: "Free site assessment · No obligation" })
      ] })
    ] })
  ] }) }) });
}
function GalleryLightbox({ open, label, bg1, bg2, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `service-lightbox${open ? " open" : ""}`,
      onClick: onClose,
      role: "presentation",
      children: /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "service-lightbox-img",
            style: { background: `repeating-linear-gradient(-45deg,${bg1},${bg1} 7px,${bg2} 7px,${bg2} 32px)` },
            children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".65rem", color: "rgba(255,255,255,.2)", letterSpacing: ".1em", textTransform: "uppercase" }, children: label })
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: onClose, style: { position: "absolute", top: -16, right: -16, width: 40, height: 40, borderRadius: "50%", background: "var(--paper)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,.3)" }, children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "var(--ink)", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12" }) }) })
      ] })
    }
  );
}
function ServiceDetailGallerySection({ service }) {
  const sectionRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);
  useGsapContext(sectionRef, (scope) => {
    const items = scope.querySelectorAll("[data-gallery-item]");
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          delay: i % 3 * 0.08
        }
      );
    });
  }, [service.slug]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "gallery-section", style: { background: "var(--paper)", padding: "clamp(72px,10vh,120px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 16 }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 12 }, children: "Our Work" }),
          /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(1.8rem,2.6vw,2.5rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: [
            service.name,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: "project gallery" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--text-muted)", marginBottom: 6 }, children: "Click to enlarge" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gallery-grid", children: service.gallery.map((img) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "data-gallery-item": true,
          className: "gallery-item",
          onClick: () => setLightbox(img),
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "gi-inner",
              style: {
                background: `repeating-linear-gradient(-45deg,${img.bg1},${img.bg1} 6px,${img.bg2} 6px,${img.bg2} 26px)`,
                height: img.h,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10
              },
              children: [
                /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,.25)", strokeWidth: "1.2", strokeLinecap: "round", children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
                  /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                  /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
                ] }),
                /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(255,255,255,.2)", letterSpacing: ".1em", textTransform: "uppercase" }, children: img.label })
              ]
            }
          )
        },
        img.label
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(
      GalleryLightbox,
      {
        open: !!lightbox,
        label: lightbox?.label ?? "",
        bg1: lightbox?.bg1 ?? service.bg1,
        bg2: lightbox?.bg2 ?? service.bg2,
        onClose: () => setLightbox(null)
      }
    )
  ] });
}
function ServiceDetailProcessSection({ service }) {
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper-2)", padding: "clamp(72px,10vh,120px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: 60 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 14 }, children: "Our Process" }),
      /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(1.8rem,2.6vw,2.5rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: [
        "How we handle your",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "var(--text-muted)" }, children: service.processTitle })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 0, maxWidth: 900, margin: "0 auto" }, children: service.steps.map((step) => /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "80px 1fr", gap: 28, padding: "32px 0", borderBottom: "1px solid var(--line)" }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }, children: /* @__PURE__ */ jsx("div", { style: { width: 52, height: 52, borderRadius: "50%", background: "var(--brass)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem", fontWeight: 500, color: "#FFF8EE" }, children: step.num }) }) }),
      /* @__PURE__ */ jsxs("div", { style: { paddingTop: 12 }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".65rem", fontWeight: 700, color: "var(--brass)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 6 }, children: step.phase }),
        /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.18rem", color: "var(--text)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 8 }, children: step.title }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".88rem", lineHeight: 1.72, color: "var(--text-muted)" }, children: step.desc })
      ] })
    ] }, step.num)) })
  ] }) });
}
function ServiceDetailRelatedSection({ related }) {
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper)", padding: "clamp(72px,10vh,120px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 12 }, children: "Explore More" }),
        /* @__PURE__ */ jsx("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(1.8rem,2.6vw,2.4rem)", lineHeight: 1.04, color: "var(--text)", letterSpacing: "-.02em", fontOpticalSizing: "auto" }, children: "Related services" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: "/services", style: { display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "'Inter',sans-serif", fontSize: ".83rem", fontWeight: 600, color: "var(--brass)", marginBottom: 6 }, children: [
        "All 12 services ",
        /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "related-grid", style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }, children: related.map((svc) => /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/services/${svc.slug}`,
        className: "rel-card",
        style: { background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { height: 200, overflow: "hidden", position: "relative" }, children: [
            /* @__PURE__ */ jsx("div", { className: "rc-inner", style: { height: "100%", background: `repeating-linear-gradient(-45deg,${svc.bg1},${svc.bg1} 6px,${svc.bg2} 6px,${svc.bg2} 28px)`, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,.2)", strokeWidth: "1.2", children: [
              /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
              /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
              /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(20,17,15,.55)", backdropFilter: "blur(4px)", borderRadius: 5, padding: "3px 9px" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".6rem", color: "var(--brass)" }, children: svc.num }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "20px 20px 18px" }, children: [
            /* @__PURE__ */ jsx("h3", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.02rem", color: "var(--text)", letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 6 }, children: svc.name }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".77rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 14 }, children: svc.desc }),
            /* @__PURE__ */ jsxs("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".75rem", fontWeight: 600, color: "var(--brass)", display: "inline-flex", alignItems: "center", gap: 5 }, children: [
              "View service ",
              /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
            ] })
          ] })
        ]
      },
      svc.slug
    )) })
  ] }) });
}
function ServiceDetailLeadCtaSection({ service }) {
  return /* @__PURE__ */ jsxs("section", { style: { background: "var(--ink)", padding: "clamp(80px,10vh,120px) 0", textAlign: "center", position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -180, right: -180, width: 520, height: 520, borderRadius: "50%", border: "1px solid rgba(176,137,79,.07)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -100, right: -100, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(176,137,79,.1)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: -160, left: -160, width: 440, height: 440, borderRadius: "50%", border: "1px solid rgba(176,137,79,.05)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { position: "relative", zIndex: 1, maxWidth: 640 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 18 }, children: "Get Started" }),
      /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.2rem,4vw,3.4rem)", lineHeight: 1, color: "var(--text-onDark)", letterSpacing: "-.025em", fontOpticalSizing: "auto", marginBottom: 16 }, children: [
        "Ready to renovate?",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.45)" }, children: "Let's talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".92rem", color: "rgba(246,242,236,.4)", marginBottom: 36, lineHeight: 1.7 }, children: "Free site assessment · Written quote · 12-month warranty on all works" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs("a", { href: service.waLink, style: { display: "inline-flex", alignItems: "center", gap: 9, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".9rem", padding: "14px 28px", borderRadius: 999 }, children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, { size: 16, color: "#fff" }),
          "WhatsApp about this service"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "tel:+6598683650", style: { display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(246,242,236,.65)", fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".9rem", padding: "14px 24px", borderRadius: 999, border: "1.5px solid rgba(246,242,236,.16)" }, children: [
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" }) }),
          "Call 9868 3650"
        ] })
      ] })
    ] })
  ] });
}
function waLinkFor(slug, name) {
  return `https://wa.me/6598683650?text=${encodeURIComponent(`Hi, I'd like a quote for ${name}`)}`;
}
function defaultGallery(bg1, bg2, label) {
  return [
    { label: `before · ${label}`, h: 280, bg1, bg2 },
    { label: "after · completed works", h: 360, bg1, bg2: bg1 },
    { label: "detail · fixtures", h: 240, bg1: bg2, bg2: bg1 },
    { label: "materials & finish", h: 320, bg1, bg2 },
    { label: "layout & planning", h: 200, bg1: bg2, bg2: bg1 },
    { label: "after · handover", h: 380, bg1, bg2 },
    { label: "lighting & ceiling", h: 260, bg1: bg2, bg2: bg1 }
  ];
}
const detailBySlug = {
  "bathroom-renovation": {
    headline: "Bathroom\nRenovation\nWorks.",
    summary: "We transform HDB, condo and landed bathrooms from tired to timeless — handling every element from waterproofing and tiling to plumbing, fixtures, and lighting.",
    stat: "7–12 days",
    statLabel: "typical bathroom reno",
    heroPhotoLabel: "hero photo · bathroom renovation",
    tags: ["HDB Approved", "Waterproofing Specialist", "Supply & Install", "12-Month Warranty"],
    overviewHeadline: "A bathroom that works harder, and looks better.",
    overviewParas: [
      "Our bathroom renovation service covers full gut-and-rebuild projects as well as targeted upgrades. Whether you're updating an aging HDB bathroom, transforming a condo ensuite, or fitting out a luxury master bath in a landed property — our team manages every trade under one roof.",
      "We handle waterproofing membranes, ceramic and porcelain tiling, concealed plumbing, bathroom fixtures (WC, vanity, shower, bathtub), lighting, ventilation, and glass works. You receive a single point of contact, a detailed material schedule, and a clean site on completion."
    ],
    scopeChips: ["Waterproofing", "Wall & Floor Tiling", "Plumbing Works", "Fixtures & Fittings", "Glass Screens", "Lighting", "False Ceiling", "Ventilation Fan"],
    checklist: [
      { title: "Waterproofing membrane", detail: "Full floor and wet-wall membrane application with 24-hour flood test" },
      { title: "Ceramic & porcelain tiling", detail: "Floor, wall, feature tiles — material options provided" },
      { title: "Concealed plumbing", detail: "All supply and waste pipes re-routed and concealed" },
      { title: "WC, vanity & shower", detail: "Supply and installation of all sanitaryware and fittings" },
      { title: "Glass shower screen", detail: "10mm tempered glass, frameless or semi-frameless" },
      { title: "Lighting & exhaust fan", detail: "LED downlights, waterproof fittings, exhaust ventilation" },
      { title: "Hacking & disposal", detail: "Old tiles, fittings and debris removed and disposed off-site" },
      { title: "Site protection & clean-up", detail: "Neighbouring areas protected; full clean-up on completion" }
    ],
    processTitle: "bathroom renovation",
    steps: [
      { num: "01", phase: "Day 1–2", title: "Hacking & Waterproofing", desc: "Existing tiles and fittings are removed. Waterproofing membrane is applied to all wet surfaces and a 24-hour water ponding test is conducted before proceeding." },
      { num: "02", phase: "Day 3–6", title: "Tiling & Plumbing Rough-in", desc: "Floor and wall tiles are laid to agreed layout. Plumbing supply and waste pipes are re-routed and tested before concealment." },
      { num: "03", phase: "Day 7–10", title: "Fixtures, Glass & Electrical", desc: "Sanitaryware, shower screens, vanity and WC are installed. Lighting, exhaust fan and any electrical points are completed by our licensed electrician." },
      { num: "04", phase: "Day 11–12", title: "Snagging & Handover", desc: "Full walkthrough with the homeowner, all snag items resolved on-site. Site protected areas removed, thorough clean-up, and warranty documentation issued." }
    ],
    gallery: defaultGallery("#8898A8", "#98A8B8", "hdb master bath"),
    relatedSlugs: ["kitchen-renovation", "ceiling-partition-vinyl-flooring", "hacking-reinstatement"]
  }
};
function buildDefaultDetail(catalog) {
  const nameLower = catalog.name.toLowerCase();
  const words = catalog.name.split(" ");
  const headline = words.length > 2 ? `${words.slice(0, 2).join(" ")}
${words.slice(2).join(" ")}.` : `${catalog.name}.`;
  return {
    headline,
    summary: catalog.desc,
    stat: "7–14 days",
    statLabel: `typical ${nameLower} timeline`,
    heroPhotoLabel: `hero photo · ${catalog.slug}`,
    tags: ["HDB Approved", "Licensed Contractor", "Supply & Install", "12-Month Warranty"],
    overviewHeadline: `Professional ${catalog.name.toLowerCase()} across Singapore.`,
    overviewParas: [
      `Quality Work Interior delivers end-to-end ${nameLower} for HDB flats, condominiums, landed homes, and commercial spaces. Our team handles assessment, material selection, build, and handover with clear timelines and transparent pricing.`,
      `Every project includes site protection, licensed trades where required, and a defects warranty. Contact us for a free site assessment and detailed written quote — available 24 hours a day.`
    ],
    scopeChips: ["Site Assessment", "Material Supply", "Licensed Trades", "Project Management", "Clean Handover"],
    checklist: [
      { title: "Free site assessment", detail: "On-site visit, measurements, and scope discussion" },
      { title: "Detailed written quote", detail: "Itemised pricing with materials and timeline" },
      { title: "Licensed workmanship", detail: "HDB-approved contractors and certified trades" },
      { title: "Quality materials", detail: "Durable finishes suited to Singapore conditions" },
      { title: "Project coordination", detail: "Single point of contact throughout the build" },
      { title: "Site protection", detail: "Adjacent areas protected during works" },
      { title: "Snagging & handover", detail: "Walkthrough and punch-list resolved before sign-off" },
      { title: "12-month warranty", detail: "Defects warranty on all renovation workmanship" }
    ],
    processTitle: nameLower,
    steps: [
      { num: "01", phase: "Step 1", title: "Site Assessment", desc: "We visit your property, understand requirements, and confirm scope and access." },
      { num: "02", phase: "Step 2", title: "Quote & Planning", desc: "Detailed written quote with materials, timeline, and payment schedule." },
      { num: "03", phase: "Step 3", title: "Build & Execute", desc: "Our certified team completes the works on schedule with regular updates." },
      { num: "04", phase: "Step 4", title: "Handover & Warranty", desc: "Final walkthrough, snag resolution, and warranty documentation issued." }
    ],
    gallery: defaultGallery(catalog.bg1, catalog.bg2, catalog.slug),
    relatedSlugs: serviceCatalog.filter((s) => s.slug !== catalog.slug).slice(0, 3).map((s) => s.slug)
  };
}
function getServiceDetail(slug) {
  const catalog = serviceCatalog.find((s) => s.slug === slug);
  if (!catalog) return null;
  const detail = detailBySlug[slug] ?? buildDefaultDetail(catalog);
  return {
    ...catalog,
    ...detail,
    waLink: waLinkFor(slug, catalog.name)
  };
}
function getRelatedServices(slugs) {
  return slugs.map((slug) => serviceCatalog.find((s) => s.slug === slug)).filter(Boolean);
}
function ServicesPage({ slug }) {
  const service = getServiceDetail(slug);
  if (!service) {
    return /* @__PURE__ */ jsx(
      FrontLayout,
      {
        title: "Service Not Found",
        navbarVariant: "solid",
        activePath: "/services",
        scrollRefresh: false,
        mainProps: { style: { paddingTop: 120, paddingBottom: 80, textAlign: "center" } },
        children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
          /* @__PURE__ */ jsx("h1", { style: { fontFamily: "'Fraunces',serif", fontSize: "2rem", marginBottom: 16 }, children: "Service not found" }),
          /* @__PURE__ */ jsx("a", { href: "/services", style: { color: "var(--brass)", fontFamily: "'Inter',sans-serif" }, children: "← Back to all services" })
        ] })
      }
    );
  }
  const related = getRelatedServices(service.relatedSlugs);
  return /* @__PURE__ */ jsxs(
    FrontLayout,
    {
      title: `${service.name} — Quality Work Interior`,
      navbarVariant: "solid",
      activePath: "/services",
      children: [
        /* @__PURE__ */ jsx(ServiceDetailHeroSection, { service }),
        /* @__PURE__ */ jsx(ServiceDetailOverviewSection, { service }),
        /* @__PURE__ */ jsx(ServiceDetailGallerySection, { service }),
        /* @__PURE__ */ jsx(ServiceDetailProcessSection, { service }),
        /* @__PURE__ */ jsx(ServiceDetailRelatedSection, { related }),
        /* @__PURE__ */ jsx(ServiceDetailLeadCtaSection, { service })
      ]
    }
  );
}
export {
  ServicesPage as default
};
