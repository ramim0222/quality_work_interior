import { useEffect } from 'react';
import { refreshScrollTriggers } from '@/lib/gsap';

/** Refreshes ScrollTrigger after page mount and when layout settles (fonts, images). */
export default function FrontScrollRefresh() {
    useEffect(() => {
        refreshScrollTriggers(true);

        const timers = [
            window.setTimeout(() => refreshScrollTriggers(true), 100),
            window.setTimeout(() => refreshScrollTriggers(true), 400),
        ];

        const onLoad = () => refreshScrollTriggers(true);
        window.addEventListener('load', onLoad);

        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('load', onLoad);
        };
    }, []);

    return null;
}
