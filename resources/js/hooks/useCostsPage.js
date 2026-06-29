import { useMemo, useState } from 'react';
import { costsEntries } from '@/data/costsData';

export function useCostsPage() {
    const [monthFilter, setMonthFilter] = useState('Jun 2025');
    const [platformFilter, setPlatformFilter] = useState('');

    const filteredEntries = useMemo(() => {
        if (!platformFilter) return costsEntries;
        return costsEntries.filter((entry) => entry.platform === platformFilter);
    }, [platformFilter]);

    const logSpend = () => {};

    return {
        monthFilter,
        platformFilter,
        entries: filteredEntries,
        setMonthFilter,
        setPlatformFilter,
        logSpend,
    };
}
