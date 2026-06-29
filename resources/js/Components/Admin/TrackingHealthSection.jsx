import { trackingHealthCards } from '@/data/trackingData';

export default function TrackingHealthSection({ cards = trackingHealthCards }) {
    return (
        <div className="admin-tracking-health-grid">
            {cards.map((card, index) => (
                <div
                    key={card.label}
                    className="admin-card admin-tracking-health-card"
                    style={{ animationDelay: `${index * 0.06}s` }}
                >
                    <div className="admin-tracking-health-head">
                        <span className="admin-tracking-health-label">{card.label}</span>
                        <div className="admin-tracking-dot" style={{ background: card.color }} />
                    </div>
                    <div className="admin-tracking-health-value">{card.value}</div>
                    <div className="admin-tracking-health-note">{card.note}</div>
                </div>
            ))}
        </div>
    );
}
