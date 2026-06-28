import { useEffect, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AuthCheckbox from '@/Components/Auth/AuthCheckbox';
import AuthErrorBanner from '@/Components/Auth/AuthErrorBanner';
import AuthPasswordField from '@/Components/Auth/AuthPasswordField';

export default function LoginFormSection({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [clientError, setClientError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({ email: false, password: false });
    const [shakeKey, setShakeKey] = useState(0);

    const serverError = errors.email || errors.password || '';
    const errorMessage = clientError || serverError;

    const showError = (message) => {
        setClientError(message);
        setShakeKey((key) => key + 1);
    };

    const clearFieldError = (field) => {
        setFieldErrors((prev) => ({ ...prev, [field]: false }));
        if (clientError) setClientError('');
        if (errors[field]) clearErrors(field);
    };

    useEffect(() => {
        if (serverError) {
            setShakeKey((key) => key + 1);
            setFieldErrors({ email: true, password: true });
        }
    }, [serverError]);

    const submit = (e) => {
        e.preventDefault();
        setClientError('');
        clearErrors();

        const email = data.email.trim();
        const password = data.password;

        if (!email || !password) {
            showError('Please enter your email and password.');
            setFieldErrors({ email: !email, password: !password });
            return;
        }

        if (!email.includes('@')) {
            showError('Please enter a valid email address.');
            setFieldErrors({ email: true, password: false });
            return;
        }

        post(route('login'), {
            onError: () => {
                setFieldErrors({ email: true, password: true });
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="auth-form-panel">
            <div className="auth-form-inner">
                <h1 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: '2rem', color: 'var(--text)', letterSpacing: '-.02em', fontOpticalSizing: 'auto', marginBottom: 6 }}>
                    Welcome back
                </h1>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.88rem', color: 'var(--text-muted)', marginBottom: 36 }}>
                    Sign in to the Quality Work admin portal.
                </p>

                {status && (
                    <div className="auth-status-banner" role="status">
                        <div className="auth-status-banner-inner">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2" strokeLinecap="round">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            {status}
                        </div>
                    </div>
                )}

                <AuthErrorBanner message={errorMessage} shakeKey={shakeKey} />

                <form className="auth-login-form" onSubmit={submit} noValidate>
                    <div>
                        <label className="auth-field-label" htmlFor="l-email">Email address</label>
                        <input
                            id="l-email"
                            type="email"
                            className={`auth-field-input${fieldErrors.email ? ' err' : ''}`}
                            placeholder="admin@qualitywork.sg"
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => {
                                setData('email', e.target.value);
                                clearFieldError('email');
                            }}
                            required
                        />
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                            <label className="auth-field-label" htmlFor="l-pass" style={{ marginBottom: 0 }}>Password</label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    style={{ fontFamily: "'Inter',sans-serif", fontSize: '.72rem', color: 'var(--brass)', fontWeight: 500 }}
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>
                        <AuthPasswordField
                            id="l-pass"
                            value={data.password}
                            hasError={fieldErrors.password}
                            onChange={(e) => setData('password', e.target.value)}
                            onInput={() => clearFieldError('password')}
                        />
                    </div>

                    <AuthCheckbox
                        id="l-remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        label="Remember me for 30 days"
                    />

                    <button type="submit" className="auth-sign-in-btn" disabled={processing}>
                        {processing ? (
                            <span className="auth-sign-in-btn-inner">
                                <svg className="auth-sign-in-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".2" />
                                    <path d="M21 12a9 9 0 00-9-9" />
                                </svg>
                                Signing in…
                            </span>
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>

                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '.7rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 28, lineHeight: 1.6 }}>
                    This portal is restricted to authorised Quality Work Interior staff.
                    <br />
                    Having trouble? Contact{' '}
                    <a href="mailto:admin@qualitywork.sg" style={{ color: 'var(--brass)' }}>admin@qualitywork.sg</a>
                </p>
            </div>
        </div>
    );
}
