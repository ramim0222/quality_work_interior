import AuthLayout from '@/Layouts/AuthLayout';
import LoginBrandPanel from '@/Components/Auth/LoginBrandPanel';
import LoginFormSection from '@/Components/Auth/LoginFormSection';

export default function Login({ status, canResetPassword }) {
    return (
        <AuthLayout title="Sign in">
            <div className="auth-login-split">
                <LoginBrandPanel />
                <LoginFormSection status={status} canResetPassword={canResetPassword} />
            </div>
        </AuthLayout>
    );
}
