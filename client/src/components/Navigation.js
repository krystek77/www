import { NavLink as Link } from 'react-router-dom';
import { useNavigationContext } from '../contexts/navigation';
import { menu, connectedMenuAndLinks } from '../fixtures';
console.log(connectedMenuAndLinks);

function Navigation() {
  const { openSubmenu } = useNavigationContext();
  const displaySubmenu = (e) => {
    const menuId = e.target.dataset.page;
    openSubmenu(menuId);
  };
  return (
    <nav className='navigation'>
      <ul className='menu'>
        {menu.map((item) => {
          return (
            <li
              className='menu__item'
              key={item.id}
              onMouseOver={(e) => displaySubmenu(e)}
            >
              <Link className='menu__link' to={item.to} data-page={item.id}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
