import { useCallback, useState } from 'react';
import { initialIntegrations, integrationToggleState } from '@/data/integrationsData';

export function useIntegrationsPage() {
    const [integrations, setIntegrations] = useState(initialIntegrations);

    const toggleIntegration = useCallback((id) => {
        setIntegrations((prev) => prev.map((integration) => {
            if (integration.id !== id) return integration;
            const nextEnabled = !integration.enabled;
            return { ...integration, ...integrationToggleState(integration, nextEnabled) };
        }));
    }, []);

    const updateField = useCallback((id, field, value) => {
        setIntegrations((prev) => prev.map((integration) => (
            integration.id === id ? { ...integration, [field]: value } : integration
        )));
    }, []);

    const testIntegration = useCallback((id) => {
        setIntegrations((prev) => prev.map((integration) => {
            if (integration.id !== id) return integration;
            const now = new Date();
            const tested = now.toLocaleDateString('en-SG', { day: 'numeric', month: 'short' })
                + ' '
                + now.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit', hour12: false });
            return { ...integration, lastTested: tested };
        }));
    }, []);

    const saveIntegration = useCallback(() => {}, []);

    const addIntegration = useCallback(() => {}, []);

    return {
        integrations,
        toggleIntegration,
        updateField,
        testIntegration,
        saveIntegration,
        addIntegration,
    };
}
