import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useNavigationContext } from '../contexts/navigation';
import { menu } from '../fixtures';

function Navigation() {
  const navigationRef = React.useRef(null);
  const { openSubmenu, closeSubmenu } = useNavigationContext();
  const displaySubmenu = (e) => {
    const menuId = e.target.dataset.page;
    openSubmenu(menuId);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', function (e) {
      if (this.scrollY > 70) {
        navigationRef.current.classList.add('navigation--fixed');
      } else {
        if (navigationRef.current.classList.contains('navigation--fixed')) {
          navigationRef.current.classList.remove('navigation--fixed');
        }
      }
    });
  }, []);
  return (
    <nav className='navigation' ref={navigationRef}>
      <ul className='menu'>
        {menu.map((item) => {
          return (
            <li
              className='menu__item'
              key={item.id}
              onMouseOver={(e) => displaySubmenu(e)}
            >
              <Link
                className='menu__link'
                to={item.to}
                data-page={item.id}
                onClick={closeSubmenu}
              >
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
