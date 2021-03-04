import React from 'react';
import { menu, links } from '../fixtures';

const NavigationContext = React.createContext();

function NavigationContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [allSubpages, setAllSubpages] = React.useState({
    page: { label: '', to: '' },
    links: [],
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (menuId) => {
    const page = menu.find((item) => item.id === menuId);
    const { label, to } = page;
    const allSublinks = page.links.map((linkId) => {
      return links.find((link) => link.id === linkId);
    });
    const currentPage = { menu: { label, to }, links: [...allSublinks] };
    setAllSubpages(currentPage);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        allSubpages,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigationContext = () => React.useContext(NavigationContext);
export { NavigationContext, NavigationContextProvider, useNavigationContext };
