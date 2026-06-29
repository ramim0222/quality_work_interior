import SettingsTabIcon from '@/Components/Admin/SettingsTabIcon';
import { settingsTabs } from '@/data/settingsData';

export default function SettingsTabsSection({ activeTab, onTabChange }) {
    return (
        <nav className="admin-settings-tabs admin-fade-section" aria-label="Settings sections">
            {settingsTabs.map((tab, index) => (
                <button
                    key={tab.key}
                    type="button"
                    className={`admin-settings-tab${activeTab === tab.key ? ' admin-settings-tab--active' : ''}`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => onTabChange(tab.key)}
                >
                    <SettingsTabIcon name={tab.icon} active={activeTab === tab.key} />
                    <span>{tab.label}</span>
                </button>
            ))}
        </nav>
    );
}
