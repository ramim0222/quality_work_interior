import { Link } from '@inertiajs/react';

const serviceLinks = [
    { href: '/services/spa-centre-renovation', label: 'Spa Centre Renovation' },
    { href: '/services/ktv-renovation', label: 'KTV Renovation' },
    { href: '/services/retail-shop-renovation', label: 'Retail Shop Renovation' },
    { href: '/services/home-extension-room-additions', label: 'Home Extension' },
    { href: '/services/bathroom-renovation', label: 'Bathroom Renovation' },
    { href: '/services/kitchen-renovation', label: 'Kitchen Renovation' },
    { href: '/services/ceiling-partition-vinyl-flooring', label: 'Ceiling & Vinyl Flooring' },
    { href: '/services/remodels-paintings', label: 'Remodels & Paintings' },
    { href: '/services/hacking-reinstatement', label: 'Hacking & Reinstatement' },
    { href: '/services/electrical-maintenance', label: 'Electrical Maintenance' },
    { href: '/services/general-plumbing-handyman', label: 'Plumbing & Handyman' },
    { href: '/services/roller-shutter-repair', label: 'Roller Shutter Repair' },
];

const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
];

export default function FrontFooter() {
    return (
        <footer style={{ background: 'var(--ink)', padding: '80px 0 40px', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(176,137,79,.14)' }}>
            <div style={{
                position: 'absolute',
                bottom: -48,
                right: -16,
                fontFamily: "'Fraunces',serif",
                fontSize: 180,
                fontWeight: 400,
                color: 'rgba(246,242,236,.022)',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
                letterSpacing: '-.025em',
                fontOpticalSizing: 'auto',
            }}
            >
                Quality Work
            </div>
            <div className="qw-container" style={{ position: 'relative' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.1fr .72fr 1fr', gap: 56, paddingBottom: 56, borderBottom: '1px solid var(--line-dark)' }}>
                    <div>
                        <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.2rem', color: 'var(--text-onDark)', letterSpacing: '-.015em', marginBottom: 12, fontOpticalSizing: 'auto' }}>
                            Quality Work Interior
                        </div>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', lineHeight: 1.72, color: 'rgba(246,242,236,.38)', maxWidth: 240, marginBottom: 24 }}>
                            Singapore&apos;s trusted renovation partner. Licensed contractor. UEN 202531526C.
                        </p>
                        <div style={{ display: 'flex', gap: 9 }}>
                            <a href="#" style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--line-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(246,242,236,.32)' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="#" style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--line-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(246,242,236,.32)' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--line-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(246,242,236,.32)' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l-.01-8.43a8.22 8.22 0 004.79 1.52V5.02a4.85 4.85 0 01-1.02-.33z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'rgba(246,242,236,.26)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {serviceLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'rgba(246,242,236,.42)' }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'rgba(246,242,236,.26)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {companyLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'rgba(246,242,236,.42)' }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.6rem', fontWeight: 700, color: 'rgba(246,242,236,.26)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(246,242,236,.24)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Address</div>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'rgba(246,242,236,.48)', lineHeight: 1.65 }}>194 Rivervale Drive<br />Singapore 540194</p>
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(246,242,236,.24)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Phone</div>
                                <a href="tel:+6598683650" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'var(--brass)' }}>+65 9868 3650</a>
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(246,242,236,.24)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Email</div>
                                <a href="mailto:hello@qualitywork.sg" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'var(--brass)' }}>hello@qualitywork.sg</a>
                            </div>
                            <div>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.58rem', color: 'rgba(246,242,236,.24)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Hours</div>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.79rem', color: 'rgba(246,242,236,.48)' }}>Mon – Sun · 8am – 11pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, flexWrap: 'wrap', gap: 12 }}>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'rgba(246,242,236,.2)' }}>
                        © 2025 Quality Work Interior Pte. Ltd. · UEN 202531526C
                    </p>
                    <div style={{ display: 'flex', gap: 18 }}>
                        <Link href="/privacy" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'rgba(246,242,236,.2)' }}>Privacy</Link>
                        <Link href="/terms" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'rgba(246,242,236,.2)' }}>Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
