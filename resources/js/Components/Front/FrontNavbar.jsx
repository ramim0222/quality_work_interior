import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function FrontNavbar({ variant = 'transparent', activePath = null }) {
    const isSolid = variant === 'solid';
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [activePath]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        const header = document.getElementById('qw-header');
        if (!header) return;

        const applyNavColors = (scrolled) => {
            const logo = document.getElementById('header-logo');
            const phone = document.getElementById('header-phone');
            if (logo) logo.style.color = scrolled ? '#14110F' : '#F6F2EC';
            if (phone) phone.style.color = scrolled ? '#6B635A' : 'rgba(246,242,236,.38)';

            header.querySelectorAll('[data-nav]').forEach((el) => {
                const isActive = el.dataset.active === 'true';
                if (scrolled) {
                    el.style.color = isActive ? '#14110F' : 'rgba(20,17,15,.55)';
                    el.style.fontWeight = isActive ? '600' : '400';
                    el.style.borderBottom = isActive ? '1.5px solid var(--brass)' : 'none';
                    el.style.paddingBottom = isActive ? '2px' : '0';
                } else {
                    el.style.color = isActive ? 'var(--text-onDark)' : 'rgba(246,242,236,.55)';
                    el.style.fontWeight = isActive ? '600' : '400';
                    el.style.borderBottom = isActive ? '1.5px solid var(--brass)' : 'none';
                    el.style.paddingBottom = isActive ? '2px' : '0';
                }
            });
        };

        const onScroll = () => {
            if (isSolid) {
                const solidScrolled = window.scrollY > 20;
                setScrolled(solidScrolled);
                header.style.background = '';
                header.style.boxShadow = solidScrolled ? '0 2px 20px rgba(20,17,15,.08)' : 'none';
                header.style.borderBottom = '';
                return;
            }

            const isScrolled = window.scrollY > 80 || menuOpen;
            setScrolled(isScrolled);
            header.style.background = isScrolled ? '#F6F2EC' : 'transparent';
            header.style.boxShadow = isScrolled ? '0 1px 20px rgba(20,17,15,.08)' : 'none';
            header.style.borderBottom = isScrolled ? '1px solid rgba(20,17,15,.12)' : 'none';
            applyNavColors(isScrolled);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            header.style.background = '';
            header.style.boxShadow = '';
            header.style.borderBottom = '';
            const logo = document.getElementById('header-logo');
            const phone = document.getElementById('header-phone');
            if (logo) logo.style.color = '';
            if (phone) phone.style.color = '';
            header.querySelectorAll('[data-nav]').forEach((el) => {
                el.style.color = '';
                el.style.fontWeight = '';
                el.style.borderBottom = '';
                el.style.paddingBottom = '';
            });
        };
    }, [isSolid, activePath, menuOpen]);

    const navStyle = (href, mobile = false) => {
        const isActive = activePath === href;
        if (mobile) {
            return {
                fontFamily: "'Inter',sans-serif",
                fontSize: '1rem',
                color: isActive ? 'var(--text)' : 'var(--text-muted)',
                fontWeight: isActive ? 600 : 500,
                borderLeft: isActive ? '3px solid var(--brass)' : '3px solid transparent',
                paddingLeft: 16,
            };
        }
        if (isSolid) {
            return {
                fontFamily: "'Inter',sans-serif",
                fontSize: '.83rem',
                color: isActive ? 'var(--text)' : 'var(--text-muted)',
                fontWeight: isActive ? 600 : 400,
                borderBottom: isActive ? '1.5px solid var(--brass)' : 'none',
                paddingBottom: isActive ? 2 : 0,
            };
        }
        return {
            fontFamily: "'Inter',sans-serif",
            fontSize: '.83rem',
            color: isActive ? 'var(--text-onDark)' : 'rgba(246,242,236,.55)',
            fontWeight: isActive ? 600 : 400,
            borderBottom: isActive ? '1.5px solid var(--brass)' : 'none',
            paddingBottom: isActive ? 2 : 0,
            transition: 'color .3s',
        };
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            id="qw-header"
            className={`front-header${isSolid ? ' front-header--solid' : ''}${scrolled || menuOpen ? ' front-header--scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 200,
                background: isSolid ? 'var(--paper)' : undefined,
                borderBottom: isSolid ? '1px solid var(--line)' : undefined,
                transition: 'background .35s, box-shadow .35s, border-bottom .35s',
            }}
        >
            <div className="qw-container front-navbar-inner">
                <Link
                    href="/"
                    id="header-logo"
                    className="front-navbar-logo"
                    onClick={closeMenu}
                >
                    Quality Work
                </Link>
                <span className="front-navbar-badge">24/7</span>

                <nav className="front-navbar-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            data-nav
                            data-active={activePath === link.href ? 'true' : 'false'}
                            href={link.href}
                            style={navStyle(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="front-navbar-actions">
                    <a
                        id="header-phone"
                        data-nav
                        href="tel:+6598683650"
                        className="front-navbar-phone"
                    >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span className="front-navbar-phone-text">9868 3650</span>
                    </a>
                    <a href="https://wa.me/6598683650" target="_blank" rel="noreferrer" className="front-navbar-wa-btn">
                        <WhatsAppIcon size={13} color="#FFF8EE" />
                        <span className="front-navbar-wa-text">WhatsApp Us</span>
                    </a>
                </div>

                <button
                    type="button"
                    className="front-navbar-toggle"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className={`front-navbar-toggle-bar${menuOpen ? ' open' : ''}`} />
                    <span className={`front-navbar-toggle-bar${menuOpen ? ' open' : ''}`} />
                    <span className={`front-navbar-toggle-bar${menuOpen ? ' open' : ''}`} />
                </button>
            </div>

            <div className={`front-navbar-mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
                <nav className="front-navbar-mobile-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            data-nav
                            data-active={activePath === link.href ? 'true' : 'false'}
                            href={link.href}
                            style={navStyle(link.href, true)}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="front-navbar-mobile-actions">
                    <a href="tel:+6598683650" className="front-navbar-mobile-phone" onClick={closeMenu}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                        Call 9868 3650
                    </a>
                    <a href="https://wa.me/6598683650" target="_blank" rel="noreferrer" className="front-navbar-mobile-wa" onClick={closeMenu}>
                        <WhatsAppIcon size={16} color="#fff" />
                        WhatsApp Us Now
                    </a>
                </div>
            </div>
        </header>
    );
}
