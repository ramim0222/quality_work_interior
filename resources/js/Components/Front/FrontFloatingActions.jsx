import { useEffect, useState } from 'react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';
import { contactAgents } from '@/data/contactData';

function agentSubtitle(role) {
    const part = role.split('·')[0]?.trim();
    return part || role;
}

export default function FrontFloatingActions() {
    const [waOpen, setWaOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowBackToTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="front-floating-actions" aria-live="polite">
            {waOpen && (
                <div className="front-wa-panel">
                    <div className="front-wa-panel-header">
                        <div className="front-wa-panel-title">
                            <span className="front-wa-panel-dot" aria-hidden="true" />
                            Chat with us
                        </div>
                        <p className="front-wa-panel-subtitle">Typically replies within 1 hour</p>
                    </div>
                    <div className="front-wa-panel-agents">
                        {contactAgents.map((agent) => (
                            <a
                                key={agent.name}
                                href={agent.wa}
                                target="_blank"
                                rel="noreferrer"
                                className="front-wa-agent-row"
                            >
                                <div className="front-wa-agent-avatar">{agent.initials}</div>
                                <div className="front-wa-agent-info">
                                    <div className="front-wa-agent-name">{agent.name}</div>
                                    <div className="front-wa-agent-role">{agentSubtitle(agent.role)}</div>
                                </div>
                                <WhatsAppIcon size={18} color="#25D366" />
                            </a>
                        ))}
                    </div>
                    <div className="front-wa-panel-footer">
                        <p>Mon – Sun · 8am – 11pm</p>
                    </div>
                </div>
            )}

            {showBackToTop && (
                <button
                    type="button"
                    className="front-back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </button>
            )}

            <button
                type="button"
                className="front-wa-fab"
                onClick={() => setWaOpen((open) => !open)}
                aria-label={waOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
                aria-expanded={waOpen}
            >
                {waOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF8EE" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <>
                        <WhatsAppIcon size={22} color="#FFF8EE" />
                        <span className="front-wa-fab-badge" aria-hidden="true">1</span>
                    </>
                )}
            </button>
        </div>
    );
}
