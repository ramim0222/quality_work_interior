import { useEffect } from 'react';
import { gsap, refreshScrollTriggers } from '@/lib/gsap';

/**
 * Run GSAP animations inside a scoped context after layout is ready.
 * Pass a ref to the section root element.
 */
export function useGsapContext(scopeRef, createAnimations, deps = []) {
    useEffect(() => {
        const scope = scopeRef.current;
        if (!scope || typeof window === 'undefined') return;

        let ctx;
        let refreshTimer;
        let cancelled = false;

        const init = () => {
            if (cancelled) return;

            ctx?.revert();
            ctx = gsap.context(() => {
                createAnimations(scope);
            }, scope);

            refreshScrollTriggers(true);
            refreshTimer = window.setTimeout(() => {
                if (!cancelled) refreshScrollTriggers(true);
            }, 250);
        };

        const raf = requestAnimationFrame(init);

        const onLoad = () => refreshScrollTriggers(true);
        window.addEventListener('load', onLoad);

        return () => {
            cancelled = true;
            cancelAnimationFrame(raf);
            clearTimeout(refreshTimer);
            window.removeEventListener('load', onLoad);
            ctx?.revert();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
