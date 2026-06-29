import { trackingTypeTabs } from '@/data/trackingData';

export default function TrackingTypeTabsSection({
    tabs = trackingTypeTabs,
    activeType,
    onTypeChange,
}) {
    return (
        <div className="admin-tracking-tabs admin-fade-section" style={{ animationDelay: '0.25s' }}>
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    type="button"
                    className={`admin-tracking-tab${activeType === tab.key ? ' admin-tracking-tab--active' : ''}`}
                    onClick={() => onTypeChange(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
