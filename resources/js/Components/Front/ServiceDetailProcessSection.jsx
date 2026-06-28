export default function ServiceDetailProcessSection({ service }) {
    return (
        <section style={{ background: 'var(--paper-2)', padding: 'clamp(72px,10vh,120px) 0' }}>
            <div className="qw-container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Our Process</span>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.6vw,2.5rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto' }}>
                        How we handle your<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>{service.processTitle}</em>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 900, margin: '0 auto' }}>
                    {service.steps.map((step) => (
                        <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 28, padding: '32px 0', borderBottom: '1px solid var(--line)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', fontWeight: 500, color: '#FFF8EE' }}>{step.num}</span>
                                </div>
                            </div>
                            <div style={{ paddingTop: 12 }}>
                                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', fontWeight: 700, color: 'var(--brass)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 6 }}>{step.phase}</div>
                                <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.18rem', color: 'var(--text)', letterSpacing: '-.01em', fontOpticalSizing: 'auto', marginBottom: 8 }}>{step.title}</h3>
                                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', lineHeight: 1.72, color: 'var(--text-muted)' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
