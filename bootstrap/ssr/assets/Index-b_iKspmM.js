import { jsxs, jsx } from "react/jsx-runtime";
import { W as WhatsAppIcon, u as useGsapContext, F as FrontLayout } from "./useGsapContext-ClCZzQWm.js";
import { Link } from "@inertiajs/react";
import { useRef, Fragment } from "react";
import { s as serviceCatalog, r as reassuranceItems } from "./servicesData-DFahS6mZ.js";
import gsap from "gsap";
import { S as ServicesLeadCtaSection } from "./ServicesLeadCtaSection-BYdj9lY4.js";
import "gsap/ScrollTrigger";
function ServicesHeroSection() {
  return /* @__PURE__ */ jsxs("section", { style: { background: "var(--ink)", padding: "clamp(120px,18vh,180px) 0 clamp(80px,10vh,120px)", position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -220, right: -220, width: 640, height: 640, borderRadius: "50%", border: "1px solid rgba(176,137,79,.07)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: -130, right: -130, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(176,137,79,.1)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", bottom: -100, left: -80, width: 340, height: 340, borderRadius: "50%", border: "1px solid rgba(176,137,79,.05)", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(246,242,236,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,236,.02) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" } }),
    /* @__PURE__ */ jsx("div", { className: "qw-container", style: { position: "relative", zIndex: 1 }, children: /* @__PURE__ */ jsxs("div", { className: "services-hero-grid", style: { display: "grid", gridTemplateColumns: "1fr 380px", gap: 80, alignItems: "flex-end" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 32, animation: "fadeUp .7s .05s both" }, children: [
          /* @__PURE__ */ jsx(Link, { href: "/", style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "rgba(246,242,236,.3)" }, children: "Home" }),
          /* @__PURE__ */ jsx("span", { style: { color: "rgba(246,242,236,.2)", fontSize: ".7rem" }, children: "›" }),
          /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".72rem", color: "var(--brass)" }, children: "Services" })
        ] }),
        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", fontWeight: 600, color: "var(--brass)", letterSpacing: ".22em", textTransform: "uppercase", display: "block", marginBottom: 20, animation: "fadeUp .7s .12s both" }, children: "What We Do" }),
        /* @__PURE__ */ jsxs("h1", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "clamp(2.6rem,5vw,4.8rem)", lineHeight: 0.96, color: "var(--text-onDark)", letterSpacing: "-.025em", fontOpticalSizing: "auto", animation: "maskUp .9s .25s both" }, children: [
          "Twelve services,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: { fontStyle: "italic", fontWeight: 300, color: "rgba(246,242,236,.6)" }, children: "one trusted" }),
          /* @__PURE__ */ jsx("br", {}),
          "team."
        ] }),
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", lineHeight: 1.72, color: "rgba(246,242,236,.5)", maxWidth: 500, marginTop: 28, animation: "fadeUp .8s .55s both" }, children: "From a leaking tap to a full commercial fit-out — we cover every renovation and maintenance need across Singapore, available 24 hours a day." })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { animation: "fadeUp .8s .65s both" }, children: /* @__PURE__ */ jsxs("div", { style: { background: "rgba(246,242,236,.05)", border: "1px solid rgba(246,242,236,.08)", borderRadius: 16, padding: "32px 28px", backdropFilter: "blur(8px)" }, children: [
        [
          ["Residential", "HDB · Condo · Landed"],
          ["Commercial", "Retail · F&B · Office"],
          ["Coverage", "All Singapore"],
          ["Response", "24 / 7"]
        ].map(([label, value], i, arr) => /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
              borderBottom: i < arr.length - 1 ? "1px solid rgba(246,242,236,.08)" : "none"
            },
            children: [
              /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".8rem", color: "rgba(246,242,236,.45)" }, children: label }),
              /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".75rem", color: "var(--brass)" }, children: value })
            ]
          },
          label
        )),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/6598683650?text=Hi%2C%20I'd%20like%20a%20free%20quote",
            style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--wa)", color: "#fff", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".85rem", padding: "12px 20px", borderRadius: 999, marginTop: 22 },
            children: [
              /* @__PURE__ */ jsx(WhatsAppIcon, { size: 14, color: "#fff" }),
              "Get a Free Quote"
            ]
          }
        )
      ] }) })
    ] }) })
  ] });
}
function ServicesGridSection() {
  const sectionRef = useRef(null);
  useGsapContext(sectionRef, (scope) => {
    const cards = scope.querySelectorAll(".services-index-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
          delay: i % 4 * 0.07
        }
      );
    });
  });
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "svc-grid-section", style: { background: "var(--paper)", padding: "clamp(72px,10vh,120px) 0" }, children: /* @__PURE__ */ jsxs("div", { className: "qw-container", children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }, children: [
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem", color: "var(--brass)", letterSpacing: ".08em" }, children: "12 services" }),
      /* @__PURE__ */ jsx("div", { style: { flex: 1, height: 1, background: "var(--line)" } }),
      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".68rem", color: "var(--text-muted)" }, children: "Scroll to explore all" })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "svc-grid", className: "services-index-grid", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }, children: serviceCatalog.map((svc) => /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/services/${svc.slug}`,
        className: "services-index-card",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "thumb-wrap", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "thumb-inner",
                style: { background: `repeating-linear-gradient(-45deg,${svc.bg1},${svc.bg1} 6px,${svc.bg2} 6px,${svc.bg2} 26px)` },
                children: /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
                  /* @__PURE__ */ jsx("div", { style: { width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }, children: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,.35)", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
                    /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                    /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("span", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(255,255,255,.25)", letterSpacing: ".1em", textTransform: "uppercase" }, children: [
                    "photo · ",
                    svc.slug
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { style: { position: "absolute", top: 14, left: 14, background: "rgba(20,17,15,.55)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "4px 10px" }, children: /* @__PURE__ */ jsx("span", { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", fontWeight: 500, color: "var(--brass)" }, children: svc.num }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "22px 22px 20px" }, children: [
            /* @__PURE__ */ jsx("h2", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.08rem", color: "var(--text)", lineHeight: 1.22, letterSpacing: "-.01em", fontOpticalSizing: "auto", marginBottom: 8 }, children: svc.name }),
            /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".8rem", lineHeight: 1.6, color: "var(--text-muted)", marginBottom: 18 }, children: svc.desc }),
            /* @__PURE__ */ jsxs("span", { className: "arrow-link", children: [
              "View details",
              /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }) })
            ] })
          ] })
        ]
      },
      svc.slug
    )) })
  ] }) });
}
function StripIcon({ icon }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brass)",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const icons = {
    clock: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
    ] }),
    home: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
      /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
    ] }),
    map: /* @__PURE__ */ jsxs("svg", { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
    ] }),
    shield: /* @__PURE__ */ jsx("svg", { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
    check: /* @__PURE__ */ jsx("svg", { ...props, children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) })
  };
  return icons[icon] || null;
}
function ServicesReassuranceStrip() {
  return /* @__PURE__ */ jsx("section", { style: { background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }, children: /* @__PURE__ */ jsx("div", { className: "qw-container", children: /* @__PURE__ */ jsx("div", { className: "services-strip-grid", style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0", gap: 24 }, children: reassuranceItems.map((item, i) => /* @__PURE__ */ jsxs(Fragment, { children: [
    i > 0 && /* @__PURE__ */ jsx("div", { className: "services-strip-divider", style: { width: 1, height: 40, background: "var(--line)", flexShrink: 0 } }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }, children: [
      /* @__PURE__ */ jsx("div", { style: { width: 36, height: 36, borderRadius: 10, background: "rgba(176,137,79,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx(StripIcon, { icon: item.icon }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".82rem", fontWeight: 600, color: "var(--text)" }, children: item.title }),
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", color: "var(--text-muted)" }, children: item.desc })
      ] })
    ] })
  ] }, item.title)) }) }) });
}
function ServicesIndex() {
  return /* @__PURE__ */ jsxs(FrontLayout, { title: "Services — Quality Work Interior", navbarVariant: "solid", activePath: "/services", children: [
    /* @__PURE__ */ jsx(ServicesHeroSection, {}),
    /* @__PURE__ */ jsx(ServicesGridSection, {}),
    /* @__PURE__ */ jsx(ServicesReassuranceStrip, {}),
    /* @__PURE__ */ jsx(ServicesLeadCtaSection, {})
  ] });
}
export {
  ServicesIndex as default
};
