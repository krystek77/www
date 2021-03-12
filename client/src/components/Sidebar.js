import { NavLink as Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
import { connectedMenuAndLinks } from '../fixtures';
import { Authmenu } from '../components';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useNavigationContext();
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
        {connectedMenuAndLinks.map((item) => {
          const { id, label, to, links } = item;

          return (
            <div className='submenu' key={id}>
              <Link to={to} className='submenu__title' onClick={closeSidebar}>
                {label}
              </Link>
              {links.length > 0 ? (
                <ul className='submenu__list'>
                  {links.map((item) => {
                    return (
                      <li className='submenu__item' key={item.id}>
                        <Link
                          className='submenu__link'
                          to={`${to}${item.to}`}
                          onClick={closeSidebar}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
        <Authmenu sidebar={true} />
      </div>
      <div className='backdrop'></div>
    </aside>
  ) : null;
}
export default Sidebar;
