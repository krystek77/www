import React from 'react';
import { connectedMenuAndLinks } from '../fixtures';

const NavigationContext = React.createContext();

function NavigationContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [menu, setMenu] = React.useState({});
  const [submenuRectDOM, setSubmenuRectDOM] = React.useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (menuId) => {
    const currentMenuItem = connectedMenuAndLinks.find(
      (item) => item.id === menuId
    );
    setIsSubmenuOpen(true);
    setMenu(currentMenuItem);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const submenuDimension = React.useCallback((coordinates) => {
    setSubmenuRectDOM(coordinates);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        menu,
        submenuDimension,
        setSubmenuRectDOM,
        submenuRectDOM,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigationContext = () => React.useContext(NavigationContext);
export { NavigationContext, NavigationContextProvider, useNavigationContext };
