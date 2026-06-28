import { Head, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import AdminSidebar from '@/Components/Admin/AdminSidebar';
import AdminTopbar from '@/Components/Admin/AdminTopbar';
import { AdminLayoutContext } from '@/contexts/AdminLayoutContext';
import '../../css/admin.css';

export default function AdminLayout({
    title,
    subtitle,
    activeNav = 'dashboard',
    layout = 'default',
    children,
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [sidebarOpen]);

    useEffect(() => {
        setSidebarOpen(false);
    }, [url]);

    const layoutContext = useMemo(() => ({
        onMenuToggle: () => setSidebarOpen((open) => !open),
        menuOpen: sidebarOpen,
    }), [sidebarOpen]);

    const isLeadsLayout = layout === 'leads';

    return (
        <AdminLayoutContext.Provider value={layoutContext}>
            <div className={`qw-admin${sidebarOpen ? ' admin-sidebar-open' : ''}`}>
                <Head title={title}>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div className="admin-shell">
                    <button
                        type="button"
                        className="admin-sidebar-backdrop"
                        aria-label="Close menu"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <AdminSidebar
                        activeNav={activeNav}
                        open={sidebarOpen}
                        onNavigate={() => setSidebarOpen(false)}
                    />
                    <div className={`admin-main${isLeadsLayout ? ' admin-main--leads' : ''}`}>
                        {!isLeadsLayout && (
                            <AdminTopbar
                                title={title}
                                subtitle={subtitle}
                                onMenuToggle={layoutContext.onMenuToggle}
                                menuOpen={sidebarOpen}
                            />
                        )}
                        <div className={`admin-content${isLeadsLayout ? ' admin-content--leads' : ''}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayoutContext.Provider>
    );
}
