import { useMemo, useState } from 'react';
import {
    buildCarousellSummary,
    formatLeadDate,
    initialCarousellLeads,
    leadInitials,
    statusFromFormKey,
    statusStyles,
} from '@/data/carousellLeadsData';

const emptyForm = {
    name: '',
    phone: '',
    service: '',
    message: '',
    date: '',
    value: '',
    status: 'new',
    notes: '',
};

export function useCarousellLeadsPage() {
    const [leads, setLeads] = useState(initialCarousellLeads);
    const [statusFilter, setStatusFilter] = useState('');
    const [monthFilter, setMonthFilter] = useState('Jun 2025');
    const [form, setForm] = useState(emptyForm);
    const [formError, setFormError] = useState('');

    const filteredLeads = useMemo(() => {
        if (!statusFilter) return leads;
        return leads.filter((lead) => lead.status === statusFilter);
    }, [leads, statusFilter]);

    const summary = useMemo(() => buildCarousellSummary(leads), [leads]);

    const updateForm = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
        if (formError) setFormError('');
    };

    const addLead = () => {
        const name = form.name.trim();
        const phone = form.phone.trim();

        if (!name || !phone) {
            setFormError('Name and phone are required.');
            return;
        }

        const status = statusFromFormKey(form.status);
        const styles = statusStyles[status];

        const newLead = {
            id: Date.now(),
            initials: leadInitials(name),
            name,
            phone,
            service: form.service || 'General Enquiry',
            status,
            ...styles,
            value: form.value.trim() || '—',
            date: formatLeadDate(form.date),
            message: form.message,
            notes: form.notes,
        };

        setLeads((prev) => [newLead, ...prev]);
        setForm(emptyForm);
        setFormError('');
    };

    const updateLeadStatus = (leadId, status) => {
        const styles = statusStyles[status];
        if (!styles) return;

        setLeads((prev) => prev.map((lead) => (
            lead.id === leadId ? { ...lead, status, ...styles } : lead
        )));
    };

    return {
        leads: filteredLeads,
        leadCount: filteredLeads.length,
        totalCount: leads.length,
        summary,
        statusFilter,
        monthFilter,
        form,
        formError,
        setStatusFilter,
        setMonthFilter,
        updateForm,
        addLead,
        updateLeadStatus,
    };
}
