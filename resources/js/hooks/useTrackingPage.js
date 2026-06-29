import { useMemo, useState } from 'react';
import { allTrackingEvents, enrichTrackingEvent } from '@/data/trackingData';

export function useTrackingPage() {
    const [activeType, setActiveType] = useState('all');

    const events = useMemo(() => {
        const filtered = activeType === 'all'
            ? allTrackingEvents
            : allTrackingEvents.filter((event) => event.type === activeType);

        return filtered.map(enrichTrackingEvent);
    }, [activeType]);

    return {
        activeType,
        setActiveType,
        events,
    };
}
