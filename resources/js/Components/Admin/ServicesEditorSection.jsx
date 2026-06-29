import ServicesChecklistSection from '@/Components/Admin/ServicesChecklistSection';
import ServicesRelatedSection from '@/Components/Admin/ServicesRelatedSection';
import ServicesEmptyState from '@/Components/Admin/ServicesEmptyState';

export default function ServicesEditorSection({
    hasSelected,
    draft,
    onFieldChange,
    onUpdateChecklistItem,
    onRemoveChecklistItem,
    onAddChecklistItem,
    onRemoveRelated,
    onAddRelated,
    onSave,
    onDiscard,
}) {
    if (!hasSelected || !draft) {
        return <ServicesEmptyState />;
    }

    return (
        <div className="admin-services-editor admin-fade-section" style={{ animationDelay: '0.08s' }}>
            <div className="admin-services-editor-head">
                <h2 className="admin-services-editor-title">{draft.name}</h2>
                <span className="admin-services-editor-path">/services/{draft.slug}</span>
            </div>

            <div className="admin-card admin-services-card admin-services-card--fields">
                <div>
                    <label className="admin-services-lbl" htmlFor="svc-title">Page Title</label>
                    <input id="svc-title" className="admin-services-fi" value={draft.name} onChange={onFieldChange('name')} />
                </div>
                <div>
                    <label className="admin-services-lbl" htmlFor="svc-slug">Slug</label>
                    <input id="svc-slug" className="admin-services-fi admin-services-fi--mono" value={draft.slug} onChange={onFieldChange('slug')} />
                </div>
                <div>
                    <label className="admin-services-lbl" htmlFor="svc-excerpt">Excerpt (shown in cards)</label>
                    <textarea id="svc-excerpt" className="admin-services-fi admin-services-fi--excerpt" value={draft.excerpt} onChange={onFieldChange('excerpt')} rows={3} />
                </div>
                <div>
                    <label className="admin-services-lbl" htmlFor="svc-body">Body (Markdown)</label>
                    <textarea id="svc-body" className="admin-services-fi admin-services-fi--body" value={draft.body} onChange={onFieldChange('body')} rows={8} />
                </div>
            </div>

            <ServicesChecklistSection
                items={draft.checklist}
                onUpdateItem={onUpdateChecklistItem}
                onRemoveItem={onRemoveChecklistItem}
                onAddItem={onAddChecklistItem}
            />

            <div className="admin-card admin-services-card">
                <label className="admin-services-lbl admin-services-lbl--section">Hero Image</label>
                <div className="admin-services-upload-zone">
                    <p>Drop image or click to upload · JPG / PNG / WebP</p>
                </div>
            </div>

            <ServicesRelatedSection
                related={draft.related}
                onRemove={onRemoveRelated}
                onAdd={onAddRelated}
            />

            <div className="admin-services-editor-actions">
                <button type="button" className="admin-services-save-btn" onClick={onSave}>Save Changes</button>
                <button type="button" className="admin-services-discard-btn" onClick={onDiscard}>Discard</button>
            </div>
        </div>
    );
}
