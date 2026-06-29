export default function ProjectToggle({ enabled, onToggle, label }) {
    return (
        <button
            type="button"
            className={`admin-projects-toggle${enabled ? ' admin-projects-toggle--on' : ''}`}
            role="switch"
            aria-checked={enabled}
            aria-label={label}
            onClick={onToggle}
        />
    );
}
