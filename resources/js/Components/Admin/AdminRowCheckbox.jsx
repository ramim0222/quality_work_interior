function CheckIcon() {
    return (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#FFF8EE" strokeWidth="3" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export default function AdminRowCheckbox({ checked, onToggle, className = '' }) {
    return (
        <button
            type="button"
            className={`admin-leads-cb${checked ? ' on' : ''}${className ? ` ${className}` : ''}`}
            aria-checked={checked}
            onClick={(e) => {
                e.stopPropagation();
                onToggle(e);
            }}
        >
            {checked && <CheckIcon />}
        </button>
    );
}
