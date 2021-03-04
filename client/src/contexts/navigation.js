import React from 'react';
const NavigationContext = React.createContext();

function NavigationContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
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
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

const useNavigationContext = () => React.useContext(NavigationContext);
export { NavigationContext, NavigationContextProvider, useNavigationContext };
