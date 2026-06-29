export default function SettingsBusinessProfileSection({ profile, onFieldChange, onSave }) {
    return (
        <div className="admin-settings-panel admin-fade-section">
            <div className="admin-settings-panel-head">
                <h2 className="admin-settings-panel-title">Business Profile</h2>
                <p className="admin-settings-panel-desc">Shown on public pages, emails and lead notifications.</p>
            </div>
            <div className="admin-card admin-settings-card">
                <div className="admin-settings-form-row">
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-name">Business Name</label>
                        <input id="biz-name" className="admin-settings-fi" value={profile.businessName} onChange={onFieldChange('businessName')} />
                    </div>
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-uen">UEN</label>
                        <input id="biz-uen" className="admin-settings-fi admin-settings-fi--mono" value={profile.uen} onChange={onFieldChange('uen')} />
                    </div>
                </div>
                <div>
                    <label className="admin-settings-lbl" htmlFor="biz-reg">Registered Address</label>
                    <input id="biz-reg" className="admin-settings-fi" value={profile.registeredAddress} onChange={onFieldChange('registeredAddress')} />
                </div>
                <div>
                    <label className="admin-settings-lbl" htmlFor="biz-ops">Operations Address</label>
                    <input id="biz-ops" className="admin-settings-fi" value={profile.operationsAddress} onChange={onFieldChange('operationsAddress')} />
                </div>
                <div className="admin-settings-form-row">
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-email">Email</label>
                        <input id="biz-email" type="email" className="admin-settings-fi" value={profile.email} onChange={onFieldChange('email')} />
                    </div>
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-phone">Phone</label>
                        <input id="biz-phone" type="tel" className="admin-settings-fi" value={profile.phone} onChange={onFieldChange('phone')} />
                    </div>
                </div>
                <div className="admin-settings-form-row">
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-hours">Opening Hours</label>
                        <input id="biz-hours" className="admin-settings-fi" value={profile.openingHours} onChange={onFieldChange('openingHours')} />
                    </div>
                    <div>
                        <label className="admin-settings-lbl" htmlFor="biz-web">Website</label>
                        <input id="biz-web" className="admin-settings-fi" value={profile.website} onChange={onFieldChange('website')} />
                    </div>
                </div>
                <div>
                    <label className="admin-settings-lbl" htmlFor="biz-about">About Blurb (shown in footer / about page)</label>
                    <textarea id="biz-about" className="admin-settings-fi admin-settings-fi--about" value={profile.aboutBlurb} onChange={onFieldChange('aboutBlurb')} rows={4} />
                </div>
            </div>
            <button type="button" className="admin-settings-save-btn" onClick={onSave}>Save Business Profile</button>
        </div>
    );
}
