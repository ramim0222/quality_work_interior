import { useState } from 'react';
import WhatsAppIcon from '@/Components/icons/WhatsAppIcon';
import { faqs } from '@/data/homeData';

export default function FaqSection() {
    const [openIdx, setOpenIdx] = useState(null);

    const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

    return (
        <section style={{ background: 'var(--paper)', padding: 'clamp(80px,12vh,140px) 0' }}>
            <div className="qw-container">
                <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
                    <div style={{ position: 'sticky', top: 100 }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.68rem', fontWeight: 600, color: 'var(--brass)', letterSpacing: '.22em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>FAQs</span>
                        <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(1.8rem,2.8vw,2.6rem)', lineHeight: 1.04, color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 20 }}>
                            Questions<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>answered</em>
                        </h2>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.87rem', lineHeight: 1.72, color: 'var(--text-muted)', marginBottom: 28 }}>
                            Can&apos;t find what you&apos;re looking for? Chat with us directly.
                        </p>
                        <a
                            href="https://wa.me/6598683650"
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--wa)', color: '#fff', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '.83rem', padding: '11px 22px', borderRadius: 999 }}
                        >
                            <WhatsAppIcon size={14} color="#fff" />
                            Ask on WhatsApp
                        </a>
                    </div>

                    <div>
                        {faqs.map((faq, i) => {
                            const isOpen = openIdx === i;
                            return (
                                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                                    <button
                                        type="button"
                                        onClick={() => toggle(i)}
                                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '22px 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                                    >
                                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '.95rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.45, flex: 1 }}>{faq.q}</span>
                                        <span style={{
                                            width: 28, height: 28, borderRadius: '50%', border: '1.5px solid var(--line)',
                                            flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: isOpen ? '#fff' : 'var(--text-muted)',
                                            background: isOpen ? 'var(--brass)' : 'transparent',
                                            borderColor: isOpen ? 'var(--brass)' : 'var(--line)',
                                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                            transition: 'transform .3s, background .2s, border-color .2s, color .2s',
                                        }}
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                                        </span>
                                    </button>
                                    <div className="faq-answer" style={{ maxHeight: isOpen ? 400 : 0 }}>
                                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.875rem', lineHeight: 1.78, color: 'var(--text-muted)', paddingBottom: 22 }}>{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
