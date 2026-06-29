export default function IntegrationToggle({ enabled, onToggle, label }) {
    return (
        <button
            type="button"
            className={`admin-integrations-toggle${enabled ? ' admin-integrations-toggle--on' : ''}`}
            role="switch"
            aria-checked={enabled}
            aria-label={label}
            onClick={onToggle}
        />
    );
}
