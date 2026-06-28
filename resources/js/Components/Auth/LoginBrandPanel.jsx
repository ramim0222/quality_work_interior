import { loginFeatures } from '@/data/loginData';

export default function LoginBrandPanel() {
    return (
        <div className="auth-brand-panel">
            <div className="auth-brand-deco auth-brand-deco--1" />
            <div className="auth-brand-deco auth-brand-deco--2" />
            <div className="auth-brand-deco auth-brand-deco--3" />
            <div className="auth-brand-grid" />

            <div className="auth-brand-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 34, height: 34, background: 'var(--brass)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: '.88rem', color: '#FFF8EE', fontOpticalSizing: 'auto' }}>Q</span>
                    </div>
                    <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.05rem', color: 'var(--text-onDark)', letterSpacing: '-.01em', fontOpticalSizing: 'auto' }}>
                        Quality Work Interior
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 44 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem', color: 'rgba(246,242,236,.28)', letterSpacing: '.08em' }}>Admin Portal</span>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(176,137,79,.35)', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem', color: 'rgba(246,242,236,.22)' }}>UEN 202531526C</span>
                </div>
            </div>

            <div className="auth-brand-center">
                <div className="auth-brand-wordmark">
                    Quality<br />
                    Work<br />
                    <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Interior</em>
                </div>
            </div>

            <div className="auth-brand-bottom auth-brand-features">
                {loginFeatures.map((feature) => (
                    <div key={feature} className="auth-brand-feature">
                        <div className="auth-brand-feature-icon">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2.5" strokeLinecap="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', color: 'rgba(246,242,236,.42)' }}>
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
