import React from 'react';
import { pages, links } from '../fixtures';
import { connectPageAndLinks } from '../utils/func';
const result = connectPageAndLinks(pages, links);
console.log(result);
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
  const openSubmenu = (pageId) => {
    const page = pages.find((page) => page.id === pageId);
    const { label, to } = page;
    const allSublinks = page.links.map((linkId) => {
      return links.find((link) => link.id === linkId);
    });
    const currentPage = { page: { label, to }, links: [...allSublinks] };
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
