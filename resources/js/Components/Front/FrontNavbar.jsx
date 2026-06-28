import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function FrontNavbar() {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const onScroll = () => {
            const scrolled = window.scrollY > 80;
            header.style.background = scrolled ? '#F6F2EC' : 'transparent';
            header.style.boxShadow = scrolled ? '0 1px 20px rgba(20,17,15,.08)' : 'none';
            header.style.borderBottom = scrolled ? '1px solid rgba(20,17,15,.12)' : 'none';

            const logo = document.getElementById('header-logo');
            const phone = document.getElementById('header-phone');
            if (logo) logo.style.color = scrolled ? '#14110F' : '#F6F2EC';
            if (phone) phone.style.color = scrolled ? '#6B635A' : 'rgba(246,242,236,.38)';

            document.querySelectorAll('[data-nav]').forEach((el) => {
                el.style.color = scrolled ? 'rgba(20,17,15,.55)' : 'rgba(246,242,236,.55)';
            });
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            id="qw-header"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 200,
                transition: 'background .35s, box-shadow .35s, border-bottom .35s',
            }}
        >
            <div className="qw-container" style={{ display: 'flex', alignItems: 'center', height: 80, gap: 0 }}>
                <Link
                    href="/"
                    id="header-logo"
                    style={{
                        fontFamily: "'Fraunces',serif",
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        color: 'var(--text-onDark)',
                        letterSpacing: '-.015em',
                        flexShrink: 0,
                        marginRight: 16,
                        transition: 'color .3s',
                        fontOpticalSizing: 'auto',
                    }}
                >
                    Quality Work
                </Link>
                <span style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: '.58rem',
                    fontWeight: 700,
                    color: 'var(--brass)',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(176,137,79,.45)',
                    borderRadius: 999,
                    padding: '3px 9px',
                    flexShrink: 0,
                    marginRight: 'auto',
                }}
                >
                    24/7
                </span>
                <nav style={{ display: 'flex', gap: 28, alignItems: 'center', marginRight: 40 }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            data-nav
                            href={link.href}
                            style={{
                                fontFamily: "'Inter',sans-serif",
                                fontSize: '.83rem',
                                color: 'rgba(246,242,236,.55)',
                                fontWeight: 400,
                                transition: 'color .3s',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                    <a
                        id="header-phone"
                        data-nav
                        href="tel:+6598683650"
                        style={{
                            fontFamily: "'Inter',sans-serif",
                            fontSize: '.78rem',
                            color: 'rgba(246,242,236,.38)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            transition: 'color .3s',
                        }}
                    >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        9868 3650
                    </a>
                    <a
                        href="https://wa.me/6598683650"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 7,
                            background: 'var(--brass)',
                            color: '#FFF8EE',
                            fontFamily: "'Inter',sans-serif",
                            fontWeight: 600,
                            fontSize: '.78rem',
                            padding: '9px 20px',
                            borderRadius: 999,
                            letterSpacing: '.015em',
                        }}
                    >
                        <WhatsAppIcon size={13} color="#FFF8EE" />
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </header>
    );
}
