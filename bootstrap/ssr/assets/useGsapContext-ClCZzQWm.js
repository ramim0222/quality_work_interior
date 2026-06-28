import { jsx, jsxs } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function WhatsAppIcon({ size = 16, color = "currentColor" }) {
  return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) });
}
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];
function FrontNavbar({ variant = "transparent", activePath = null }) {
  const isSolid = variant === "solid";
  useEffect(() => {
    const header = document.getElementById("qw-header");
    if (!header) return;
    const onScroll = () => {
      if (isSolid) {
        header.style.boxShadow = window.scrollY > 20 ? "0 2px 20px rgba(20,17,15,.08)" : "none";
        return;
      }
      const scrolled = window.scrollY > 80;
      header.style.background = scrolled ? "#F6F2EC" : "transparent";
      header.style.boxShadow = scrolled ? "0 1px 20px rgba(20,17,15,.08)" : "none";
      header.style.borderBottom = scrolled ? "1px solid rgba(20,17,15,.12)" : "none";
      const logo = document.getElementById("header-logo");
      const phone = document.getElementById("header-phone");
      if (logo) logo.style.color = scrolled ? "#14110F" : "#F6F2EC";
      if (phone) phone.style.color = scrolled ? "#6B635A" : "rgba(246,242,236,.38)";
      document.querySelectorAll("[data-nav]").forEach((el) => {
        if (el.dataset.active === "true") return;
        el.style.color = scrolled ? "rgba(20,17,15,.55)" : "rgba(246,242,236,.55)";
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSolid]);
  const navStyle = (href) => {
    const isActive = activePath === href;
    if (isSolid) {
      return {
        fontFamily: "'Inter',sans-serif",
        fontSize: ".83rem",
        color: isActive ? "var(--text)" : "var(--text-muted)",
        fontWeight: isActive ? 600 : 400,
        borderBottom: isActive ? "1.5px solid var(--brass)" : "none",
        paddingBottom: isActive ? 2 : 0
      };
    }
    return {
      fontFamily: "'Inter',sans-serif",
      fontSize: ".83rem",
      color: "rgba(246,242,236,.55)",
      fontWeight: 400,
      transition: "color .3s"
    };
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      id: "qw-header",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: isSolid ? "var(--paper)" : void 0,
        borderBottom: isSolid ? "1px solid var(--line)" : void 0,
        transition: "background .35s, box-shadow .35s, border-bottom .35s"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { display: "flex", alignItems: "center", height: 80, gap: 0 }, children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/",
            id: "header-logo",
            style: {
              fontFamily: "'Fraunces',serif",
              fontWeight: 400,
              fontSize: "1.25rem",
              color: isSolid ? "var(--text)" : "var(--text-onDark)",
              letterSpacing: "-.015em",
              flexShrink: 0,
              marginRight: 16,
              transition: "color .3s",
              fontOpticalSizing: "auto"
            },
            children: "Quality Work"
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              fontFamily: "'Inter',sans-serif",
              fontSize: ".58rem",
              fontWeight: 700,
              color: "var(--brass)",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              border: "1px solid rgba(176,137,79,.45)",
              borderRadius: 999,
              padding: "3px 9px",
              flexShrink: 0,
              marginRight: "auto"
            },
            children: "24/7"
          }
        ),
        /* @__PURE__ */ jsx("nav", { style: { display: "flex", gap: 28, alignItems: "center", marginRight: 40 }, children: navLinks.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            "data-nav": true,
            "data-active": activePath === link.href ? "true" : "false",
            href: link.href,
            style: navStyle(link.href),
            children: link.label
          },
          link.href
        )) }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }, children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              id: "header-phone",
              "data-nav": true,
              href: "tel:+6598683650",
              style: {
                fontFamily: "'Inter',sans-serif",
                fontSize: ".78rem",
                color: isSolid ? "var(--text-muted)" : "rgba(246,242,236,.38)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color .3s"
              },
              children: [
                /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" }) }),
                "9868 3650"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/6598683650",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "var(--brass)",
                color: "#FFF8EE",
                fontFamily: "'Inter',sans-serif",
                fontWeight: 600,
                fontSize: ".78rem",
                padding: "9px 20px",
                borderRadius: 999,
                letterSpacing: ".015em"
              },
              children: [
                /* @__PURE__ */ jsx(WhatsAppIcon, { size: 13, color: "#FFF8EE" }),
                "WhatsApp Us"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const serviceLinks = [
  { href: "/services/spa-centre-renovation", label: "Spa Centre Renovation" },
  { href: "/services/ktv-renovation", label: "KTV Renovation" },
  { href: "/services/retail-shop-renovation", label: "Retail Shop Renovation" },
  { href: "/services/home-extension-room-additions", label: "Home Extension" },
  { href: "/services/bathroom-renovation", label: "Bathroom Renovation" },
  { href: "/services/kitchen-renovation", label: "Kitchen Renovation" },
  { href: "/services/ceiling-partition-vinyl-flooring", label: "Ceiling & Vinyl Flooring" },
  { href: "/services/remodels-paintings", label: "Remodels & Paintings" },
  { href: "/services/hacking-reinstatement", label: "Hacking & Reinstatement" },
  { href: "/services/electrical-maintenance", label: "Electrical Maintenance" },
  { href: "/services/general-plumbing-handyman", label: "Plumbing & Handyman" },
  { href: "/services/roller-shutter-repair", label: "Roller Shutter Repair" }
];
const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" }
];
function FrontFooter() {
  return /* @__PURE__ */ jsxs("footer", { style: { background: "var(--ink)", padding: "80px 0 40px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(176,137,79,.14)" }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          bottom: -48,
          right: -16,
          fontFamily: "'Fraunces',serif",
          fontSize: 180,
          fontWeight: 400,
          color: "rgba(246,242,236,.022)",
          whiteSpace: "nowrap",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-.025em",
          fontOpticalSizing: "auto"
        },
        children: "Quality Work"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "qw-container", style: { position: "relative" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-grid", style: { display: "grid", gridTemplateColumns: "1.5fr 1.1fr .72fr 1fr", gap: 56, paddingBottom: 56, borderBottom: "1px solid var(--line-dark)" }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: "1.2rem", color: "var(--text-onDark)", letterSpacing: "-.015em", marginBottom: 12, fontOpticalSizing: "auto" }, children: "Quality Work Interior" }),
          /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".82rem", lineHeight: 1.72, color: "rgba(246,242,236,.38)", maxWidth: 240, marginBottom: 24 }, children: "Singapore's trusted renovation partner. Licensed contractor. UEN 202531526C." }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 9 }, children: [
            /* @__PURE__ */ jsx("a", { href: "#", style: { width: 34, height: 34, borderRadius: 8, border: "1px solid var(--line-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(246,242,236,.32)" }, children: /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { width: 34, height: 34, borderRadius: 8, border: "1px solid var(--line-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(246,242,236,.32)" }, children: /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
              /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" }),
              /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
            ] }) }),
            /* @__PURE__ */ jsx("a", { href: "#", style: { width: 34, height: 34, borderRadius: 8, border: "1px solid var(--line-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(246,242,236,.32)" }, children: /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l-.01-8.43a8.22 8.22 0 004.79 1.52V5.02a4.85 4.85 0 01-1.02-.33z" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", fontWeight: 700, color: "rgba(246,242,236,.26)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 16 }, children: "Services" }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: serviceLinks.map((link) => /* @__PURE__ */ jsx(Link, { href: link.href, style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "rgba(246,242,236,.42)" }, children: link.label }, link.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", fontWeight: 700, color: "rgba(246,242,236,.26)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 16 }, children: "Company" }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: companyLinks.map((link) => /* @__PURE__ */ jsx(Link, { href: link.href, style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "rgba(246,242,236,.42)" }, children: link.label }, link.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".6rem", fontWeight: 700, color: "rgba(246,242,236,.26)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 16 }, children: "Contact" }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(246,242,236,.24)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 3 }, children: "Address" }),
              /* @__PURE__ */ jsxs("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "rgba(246,242,236,.48)", lineHeight: 1.65 }, children: [
                "194 Rivervale Drive",
                /* @__PURE__ */ jsx("br", {}),
                "Singapore 540194"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(246,242,236,.24)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 3 }, children: "Phone" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+6598683650", style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "var(--brass)" }, children: "+65 9868 3650" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(246,242,236,.24)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 3 }, children: "Email" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:hello@qualitywork.sg", style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "var(--brass)" }, children: "hello@qualitywork.sg" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".58rem", color: "rgba(246,242,236,.24)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 3 }, children: "Hours" }),
              /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".79rem", color: "rgba(246,242,236,.48)" }, children: "Mon – Sun · 8am – 11pm" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, flexWrap: "wrap", gap: 12 }, children: [
        /* @__PURE__ */ jsx("p", { style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", color: "rgba(246,242,236,.2)" }, children: "© 2025 Quality Work Interior Pte. Ltd. · UEN 202531526C" }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 18 }, children: [
          /* @__PURE__ */ jsx(Link, { href: "/privacy", style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", color: "rgba(246,242,236,.2)" }, children: "Privacy" }),
          /* @__PURE__ */ jsx(Link, { href: "/terms", style: { fontFamily: "'Inter',sans-serif", fontSize: ".7rem", color: "rgba(246,242,236,.2)" }, children: "Terms" })
        ] })
      ] })
    ] })
  ] });
}
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
function refreshScrollTriggers(hard = true) {
  if (typeof window === "undefined") return;
  requestAnimationFrame(() => ScrollTrigger.refresh(hard));
}
function FrontScrollRefresh() {
  useEffect(() => {
    refreshScrollTriggers(true);
    const timers = [
      window.setTimeout(() => refreshScrollTriggers(true), 100),
      window.setTimeout(() => refreshScrollTriggers(true), 400)
    ];
    const onLoad = () => refreshScrollTriggers(true);
    window.addEventListener("load", onLoad);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return null;
}
function FrontLayout({
  title,
  children,
  navbarVariant = "transparent",
  activePath = null,
  scrollRefresh = true,
  mainProps = {}
}) {
  return /* @__PURE__ */ jsxs("div", { className: "qw-front", children: [
    /* @__PURE__ */ jsxs(Head, { title, children: [
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
          rel: "stylesheet"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(FrontNavbar, { variant: navbarVariant, activePath }),
    scrollRefresh && /* @__PURE__ */ jsx(FrontScrollRefresh, {}),
    /* @__PURE__ */ jsx("main", { ...mainProps, children }),
    /* @__PURE__ */ jsx(FrontFooter, {})
  ] });
}
function useGsapContext(scopeRef, createAnimations, deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || typeof window === "undefined") return;
    let ctx;
    let refreshTimer;
    let cancelled = false;
    const init = () => {
      if (cancelled) return;
      ctx?.revert();
      ctx = gsap.context(() => {
        createAnimations(scope);
      }, scope);
      refreshScrollTriggers(true);
      refreshTimer = window.setTimeout(() => {
        if (!cancelled) refreshScrollTriggers(true);
      }, 250);
    };
    const raf = requestAnimationFrame(init);
    const onLoad = () => refreshScrollTriggers(true);
    window.addEventListener("load", onLoad);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(refreshTimer);
      window.removeEventListener("load", onLoad);
      ctx?.revert();
    };
  }, deps);
}
export {
  FrontLayout as F,
  WhatsAppIcon as W,
  useGsapContext as u
};
