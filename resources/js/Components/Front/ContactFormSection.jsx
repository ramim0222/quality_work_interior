import { useRef, useState } from 'react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';
import { gsap } from '@/lib/gsap';
import { useGsapContext } from '@/hooks/useGsapContext';
import { serviceCatalog } from '@/data/servicesData';

const initialForm = { name: '', phone: '', email: '', service: '', message: '' };

export default function ContactFormSection() {
    const sectionRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useGsapContext(sectionRef, (scope) => {
        gsap.from(scope.querySelectorAll('[data-field]'), {
            y: 24,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.3,
        });
        gsap.from(scope.querySelector('.contact-submit-btn'), {
            y: 20,
            autoAlpha: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.8,
        });
    }, []);

    const updateField = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: false }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = true;
        if (!form.phone.trim()) nextErrors.phone = true;
        if (!form.service) nextErrors.service = true;
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            return;
        }

        const serviceLabel = serviceCatalog.find((s) => s.slug === form.service)?.name ?? form.service;
        const waText = encodeURIComponent(
            `Hi Quality Work, I'd like a quote.\n\n`
            + `Name: ${form.name.trim()}\n`
            + `Phone: ${form.phone.trim()}\n`
            + (form.email.trim() ? `Email: ${form.email.trim()}\n` : '')
            + `Service: ${serviceLabel}\n`
            + (form.message.trim() ? `\nMessage: ${form.message.trim()}` : ''),
        );

        setSubmitted(true);
        setTimeout(() => {
            window.open(`https://wa.me/6598683650?text=${waText}`, '_blank');
        }, 600);
    };

    const resetForm = () => {
        setForm(initialForm);
        setErrors({});
        setSubmitted(false);
    };

    return (
        <div ref={sectionRef}>
            {!submitted ? (
                <>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.7rem', color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 8 }}>Send us a message</h2>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', color: 'var(--text-muted)', marginBottom: 36 }}>
                        Fill in the form below — we&apos;ll reach out via WhatsApp or call to discuss your project.
                    </p>

                    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            <div className="field-wrap" data-field>
                                <label className="field-label" htmlFor="f-name">Full Name *</label>
                                <input id="f-name" type="text" className={`field-input${errors.name ? ' err' : ''}`} placeholder="Ahmad Razif" required value={form.name} onChange={updateField('name')} />
                            </div>
                            <div className="field-wrap" data-field>
                                <label className="field-label" htmlFor="f-phone">Phone / WhatsApp *</label>
                                <input id="f-phone" type="tel" className={`field-input${errors.phone ? ' err' : ''}`} placeholder="9123 4567" required value={form.phone} onChange={updateField('phone')} />
                            </div>
                        </div>
                        <div className="field-wrap" data-field>
                            <label className="field-label" htmlFor="f-email">Email Address</label>
                            <input id="f-email" type="email" className="field-input" placeholder="you@example.com" value={form.email} onChange={updateField('email')} />
                        </div>
                        <div className="field-wrap" data-field>
                            <label className="field-label" htmlFor="f-service">Service Interested In *</label>
                            <select id="f-service" className={`field-input${errors.service ? ' err' : ''}`} required value={form.service} onChange={updateField('service')}>
                                <option value="" disabled>Select a service…</option>
                                {serviceCatalog.map((s) => (
                                    <option key={s.slug} value={s.slug}>{s.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field-wrap" data-field>
                            <label className="field-label" htmlFor="f-message">Tell us about your project</label>
                            <textarea id="f-message" className="field-input" placeholder="E.g. HDB 4-room flat in Sengkang — looking to renovate the master bathroom and kitchen. Budget approx $15k–$20k." style={{ minHeight: 120 }} value={form.message} onChange={updateField('message')} />
                        </div>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            By submitting, your details are saved securely and used only to follow up on your enquiry. We never share your data with third parties.
                        </p>
                        <button type="submit" className="contact-submit-btn">
                            <WhatsAppIcon size={18} color="#fff" />
                            Send via WhatsApp
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
                            <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--text-muted)' }}>or contact directly</span>
                            <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                        </div>
                    </form>
                </>
            ) : (
                <div className="contact-success-state">
                    <div className="contact-success-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '1.8rem', color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 10 }}>Message sent!</h3>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.92rem', color: 'var(--text-muted)', maxWidth: 340, lineHeight: 1.7, marginBottom: 28 }}>
                        Your enquiry has been received. Our team will reach out via WhatsApp or phone within 1 hour.
                    </p>
                    <button type="button" onClick={resetForm} className="contact-reset-btn">Send another enquiry</button>
                </div>
            )}

            <div style={{ marginTop: 36, background: 'var(--paper-2)', borderRadius: 16, padding: '8px 20px' }}>
                <div className="contact-row">
                    <div className="contact-icon" style={{ background: 'rgba(37,211,102,.1)' }}>
                        <WhatsAppIcon size={18} color="#25D366" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>WhatsApp</div>
                        <a href="https://wa.me/6598683650" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--wa)', fontWeight: 600 }}>+65 9868 3650</a>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'var(--text-muted)' }}>Replies &lt; 1hr</span>
                </div>
                <div className="contact-row">
                    <div className="contact-icon" style={{ background: 'rgba(176,137,79,.1)' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.22a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>Call Us</div>
                        <a href="tel:+6598683650" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--brass)', fontWeight: 600 }}>+65 9868 3650</a>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.65rem', color: 'var(--text-muted)' }}>24 hours</span>
                </div>
                <div className="contact-row">
                    <div className="contact-icon" style={{ background: 'rgba(176,137,79,.1)' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>Email</div>
                        <a href="mailto:hello@qualitywork.sg" style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--brass)', fontWeight: 600 }}>hello@qualitywork.sg</a>
                    </div>
                </div>
                <div className="contact-row">
                    <div className="contact-icon" style={{ background: 'rgba(176,137,79,.1)' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.78rem', fontWeight: 600, color: 'var(--text)' }}>Hours</div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '.82rem', color: 'var(--text-muted)' }}>Mon – Sun · 8am – 11pm</div>
                    </div>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.62rem', fontWeight: 700, color: 'var(--brass)', background: 'rgba(176,137,79,.1)', border: '1px solid rgba(176,137,79,.2)', borderRadius: 999, padding: '3px 10px', letterSpacing: '.06em' }}>24HR SERVICE</span>
                </div>
            </div>
        </div>
    );
}
