import { carousellFormStatusOptions, carousellServiceOptions } from '@/data/carousellLeadsData';

export default function CarousellLeadFormSection({ form, formError, onChange, onSubmit }) {
    return (
        <div className="admin-card admin-carousell-form-card admin-carousell-fade">
            <div className="admin-carousell-form-head">
                <div className="admin-carousell-form-dot" />
                <h3 className="admin-carousell-form-title">Add Carousell Lead</h3>
            </div>

            {formError && (
                <p className="admin-carousell-form-error" role="alert">{formError}</p>
            )}

            <div className="admin-carousell-form-fields">
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-name">Full Name *</label>
                    <input id="cf-name" className="admin-carousell-fi" placeholder="Ahmad Razif" value={form.name} onChange={onChange('name')} />
                </div>
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-phone">Phone / WhatsApp *</label>
                    <input id="cf-phone" type="tel" className="admin-carousell-fi" placeholder="+65 9123 4567" value={form.phone} onChange={onChange('phone')} />
                </div>
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-service">Listing / Service</label>
                    <select id="cf-service" className="admin-carousell-fi" value={form.service} onChange={onChange('service')}>
                        <option value="">Select service…</option>
                        {carousellServiceOptions.filter(Boolean).map((service) => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-message">Enquiry Message</label>
                    <textarea
                        id="cf-message"
                        className="admin-carousell-fi admin-carousell-fi--area"
                        placeholder="Paste or type the enquiry from Carousell…"
                        value={form.message}
                        onChange={onChange('message')}
                        rows={3}
                    />
                </div>
                <div className="admin-carousell-form-row">
                    <div>
                        <label className="admin-carousell-lbl" htmlFor="cf-date">Date Received</label>
                        <input id="cf-date" type="date" className="admin-carousell-fi" value={form.date} onChange={onChange('date')} />
                    </div>
                    <div>
                        <label className="admin-carousell-lbl" htmlFor="cf-value">Est. Value</label>
                        <input id="cf-value" className="admin-carousell-fi" placeholder="S$8,000" value={form.value} onChange={onChange('value')} />
                    </div>
                </div>
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-status">Initial Status</label>
                    <select id="cf-status" className="admin-carousell-fi" value={form.status} onChange={onChange('status')}>
                        {carousellFormStatusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="admin-carousell-lbl" htmlFor="cf-notes">Notes</label>
                    <textarea
                        id="cf-notes"
                        className="admin-carousell-fi admin-carousell-fi--area admin-carousell-fi--notes"
                        placeholder="Any additional notes…"
                        value={form.notes}
                        onChange={onChange('notes')}
                        rows={2}
                    />
                </div>
                <button type="button" className="admin-carousell-submit" onClick={onSubmit}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Lead
                </button>
            </div>
        </div>
    );
}
