import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
import { connectedMenuAndLinks as data } from '../fixtures';
import { Authmenu } from '../components';
import { MenuLinksContainer } from '../containers';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useNavigationContext();
  const [submenus, setSubmenus] = React.useState([]);
  React.useEffect(() => {
    setSubmenus(data);
    return () => {};
  }, []);
  return isSidebarOpen ? (
    <aside className='sidebar'>
      <div className='sidebar__content'>
        <button
          className='btn btn--close'
          type='button'
          onClick={closeSidebar}
          title='close'
        >
          <FaWindowClose />
        </button>
        {submenus.map((item) => {
          const { id, label, to, links } = item;

          return (
            <div className='submenu' key={id}>
              <Link to={to} className='submenu__title' onClick={closeSidebar}>
                {label}
              </Link>
              <MenuLinksContainer
                links={links}
                mainTo={to}
                callback={closeSidebar}
              />
            </div>
          );
        })}
        <Authmenu place='auth-menu--sidebar' />
      </div>
      <div className='backdrop'></div>
    </aside>
  ) : null;
}
export default Sidebar;
