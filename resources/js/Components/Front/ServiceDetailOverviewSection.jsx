import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';

export default function ServiceDetailOverviewSection({ service }) {
    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div className="service-detail-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start' }}>
                    <div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 18 }}>Overview</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.5rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 28 }}>
                            {service.overviewHeadline}
                        </h2>
                        {service.overviewParas.map((para, i) => (
                            <p key={i} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.98rem', lineHeight: 1.82, color: 'var(--text-muted)', marginBottom: 20 }}>{para}</p>
                        ))}
                        <div style={{ marginTop: 32 }}>
                            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>Scope includes</div>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {service.scopeChips.map((chip) => (
                                    <span key={chip} style={{ fontFamily: "'Inter',sans-serif", fontSize: '.75rem', color: 'var(--text)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 999, padding: '6px 14px' }}>{chip}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--paper)', borderRadius: 18, padding: '36px 32px', border: '1px solid var(--line)', boxShadow: '0 8px 32px -10px rgba(20,17,15,.1)' }}>
                        <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 24 }}>What&apos;s included</div>
                        <div>
                            {service.checklist.map((item) => (
                                <div key={item.title} className="check-item">
                                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(176,137,79,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.85rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{item.title}</div>
                                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.75rem', color: 'var(--text-muted)', marginTop: 2, lineHeight: 1.5 }}>{item.detail}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                            <a href={service.waLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--brass)', color: '#FFF8EE', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.85rem', padding: '12px 20px', borderRadius: 999 }}>
                                <WhatsAppIcon size={14} color="#FFF8EE" />
                                Get a Quote via WhatsApp
                            </a>
                            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 10 }}>Free site assessment · No obligation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
