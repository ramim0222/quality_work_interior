import { Head } from '@inertiajs/react';
import FrontNavbar from '@/Components/Front/FrontNavbar';
import FrontFooter from '@/Components/Front/FrontFooter';
import FrontScrollRefresh from '@/Components/Front/FrontScrollRefresh';
import FrontFloatingActions from '@/Components/Front/FrontFloatingActions';
import '../../css/front.css';

export default function FrontLayout({
    title,
    children,
    navbarVariant = 'transparent',
    activePath = null,
    scrollRefresh = true,
    mainProps = {},
}) {
    return (
        <div className="qw-front">
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <FrontNavbar variant={navbarVariant} activePath={activePath} />
            {scrollRefresh && <FrontScrollRefresh />}
            <main {...mainProps}>{children}</main>
            <FrontFooter />
            <FrontFloatingActions />
        </div>
    );
}
