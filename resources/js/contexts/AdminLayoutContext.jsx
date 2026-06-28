import { createContext, useContext } from 'react';

export const AdminLayoutContext = createContext({
    onMenuToggle: () => {},
    menuOpen: false,
});

export function useAdminLayout() {
    return useContext(AdminLayoutContext);
}
