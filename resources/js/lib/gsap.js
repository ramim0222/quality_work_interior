import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export function refreshScrollTriggers(hard = true) {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => ScrollTrigger.refresh(hard));
}

export { gsap, ScrollTrigger };
