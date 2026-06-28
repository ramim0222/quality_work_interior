export default function AuthCheckbox({ id, checked, onChange, label }) {
    return (
        <label className="auth-cb-wrap" htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <div className="auth-cb-box">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF8EE" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--text-muted)' }}>
                {label}
            </span>
        </label>
    );
}
