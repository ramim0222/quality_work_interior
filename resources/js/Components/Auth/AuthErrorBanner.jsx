export default function AuthErrorBanner({ message, shakeKey }) {
    if (!message) return null;

    return (
        <div key={shakeKey} className="auth-error-banner" role="alert">
            <div className="auth-error-banner-inner">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--err)" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', fontWeight: 500, color: 'var(--err)' }}>
                    {message}
                </span>
            </div>
        </div>
    );
}
