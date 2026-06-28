export default function DashboardPlatformCostsSection({ platforms }) {
    return (
        <div className="admin-card admin-fade-section admin-section-pad" style={{ animationDelay: '0.25s' }}>
            <div className="admin-section-head">
                <h3 className="admin-section-title">Cost per Platform</h3>
                <a href="#" className="admin-section-link">Manage</a>
            </div>
            <div className="admin-platform-list">
                {platforms.map((platform) => (
                    <div key={platform.name} className="admin-platform-item">
                        <div className="admin-platform-row">
                            <div className="admin-platform-name-wrap">
                                <div className="admin-platform-icon" style={{ background: platform.iconBg }}>
                                    <span style={{ color: platform.iconColor }}>{platform.abbr}</span>
                                </div>
                                <span className="admin-platform-name">{platform.name}</span>
                            </div>
                            <div className="admin-platform-stats">
                                <div className="admin-platform-cpl">S${platform.cpl} CPL</div>
                                <div className="admin-platform-spend">S${platform.spend} spend</div>
                            </div>
                        </div>
                        <div className="admin-platform-bar-track">
                            <div className="admin-platform-bar-fill" style={{ width: `${platform.barPct}%`, background: platform.barColor }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
