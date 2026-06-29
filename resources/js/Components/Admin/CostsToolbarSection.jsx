import { costsMonthOptions } from '@/data/costsData';

export default function CostsToolbarSection({ monthFilter, onMonthChange, onLogSpend }) {
    return (
        <div className="admin-costs-toolbar admin-fade-section">
            <select
                className="admin-costs-fi admin-costs-fi--compact"
                value={monthFilter}
                onChange={(e) => onMonthChange(e.target.value)}
                aria-label="Filter by month"
            >
                {costsMonthOptions.map((month) => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <button type="button" className="admin-costs-log-btn" onClick={onLogSpend}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Log Spend
            </button>
        </div>
    );
}
