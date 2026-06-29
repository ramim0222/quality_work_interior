import { costsPlatforms, costsTotalSpend } from '@/data/costsData';

export default function CostsPlatformBreakdownSection({ platforms = costsPlatforms, totalSpend = costsTotalSpend }) {
    return (
        <div className="admin-card admin-costs-platform-card admin-fade-section" style={{ animationDelay: '0.12s' }}>
            <div className="admin-costs-platform-head">
                <h3 className="admin-costs-section-title">Spend by Platform</h3>
                <span className="admin-costs-platform-total">{totalSpend} total</span>
            </div>
            <div className="admin-costs-platform-list">
                {platforms.map((platform, index) => (
                    <div key={platform.name} className="admin-costs-platform-item" style={{ animationDelay: `${index * 0.08}s` }}>
                        <div className="admin-costs-platform-row">
                            <div className="admin-costs-platform-brand">
                                <div
                                    className="admin-costs-platform-icon"
                                    style={{ background: platform.iconBg, color: platform.iconColor }}
                                >
                                    {platform.abbr}
                                </div>
                                <span className="admin-costs-platform-name">{platform.name}</span>
                            </div>
                            <span className="admin-costs-platform-spend">S${platform.spend}</span>
                        </div>
                        <div className="admin-costs-platform-bar-track">
                            <div
                                className="admin-costs-platform-bar-fill"
                                style={{
                                    width: `${platform.pct}%`,
                                    background: platform.barColor,
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            />
                        </div>
                        <div className="admin-costs-platform-meta">
                            <span>{platform.leads} leads · S${platform.cpl} CPL</span>
                            <span style={{ color: platform.cplColor }}>{platform.pct}% of budget</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
