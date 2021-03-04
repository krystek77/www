import { NavLink as Link } from 'react-router-dom';
import { useNavigationContext } from '../contexts/navigation';
import { pages } from '../fixtures';

function Navigation() {
  const { openSubmenu } = useNavigationContext();
  const displaySubmenu = (e) => {
    const pageId = e.target.dataset.page;
    openSubmenu(pageId);
  };
  return (
    <nav className='navigation'>
      <ul className='menu'>
        {pages.map((page) => {
          return (
            <li
              className='menu__item'
              key={page.id}
              onMouseOver={(e) => displaySubmenu(e)}
            >
              <Link className='menu__link' to={page.to} data-page={page.id}>
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
