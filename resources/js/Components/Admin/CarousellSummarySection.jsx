export default function CarousellSummarySection({ summary }) {
    return (
        <div className="admin-carousell-summary">
            {summary.map((item, index) => (
                <div
                    key={item.label}
                    className="admin-card admin-carousell-summary-card"
                    style={{ animationDelay: `${index * 0.06}s` }}
                >
                    <div className="admin-carousell-summary-label">{item.label}</div>
                    <div className="admin-carousell-summary-value" style={{ color: item.color }}>{item.value}</div>
                    <div className="admin-carousell-summary-note">{item.note}</div>
                </div>
            ))}
        </div>
    );
}
