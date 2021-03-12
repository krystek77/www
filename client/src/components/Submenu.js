import React from 'react';
import { useNavigationContext } from '../contexts/navigation';
import { NavLink as Link } from 'react-router-dom';

function Submenu() {
  const {
    isSubmenuOpen,
    menu,
    closeSubmenu,
    submenuDimension,
  } = useNavigationContext();
  const submenuRef = React.useRef(null);

  React.useEffect(() => {
    if (submenuRef.current) {
      const rectDOM = submenuRef.current.getBoundingClientRect();
      const coordinates = {
        left: rectDOM.left,
        right: rectDOM.right,
        bottom: rectDOM.bottom,
      };
      submenuDimension(coordinates);
    }
  }, [menu, submenuDimension]);
  return isSubmenuOpen && menu && menu.links.length > 0 ? (
    <div className='submenu submenu--large' ref={submenuRef}>
      <Link to={menu.to} className='submenu__title' onClick={closeSubmenu}>
        {menu.label}
      </Link>
      <ul className='submenu__list'>
        {menu.links.map((link) => {
          return (
            <li className='submenu__item' key={link.id}>
              <Link
                className='submenu__link'
                to={`${menu.to}${link.to}`}
                onClick={closeSubmenu}
              >
                <p className='submenu__subtitle'>{link.label}</p>
                {link.isIcon ? (
                  <img
                    className='submenu__icon'
                    // src={`../assets/images/${link.image.src}.svg`}
                    src='../assets/images/icon_test.svg'
                    alt={link.image.alt}
                    width='96px'
                    height='96px'
                  />
                ) : (
                  <img
                    className='submenu__image'
                    src={`../assets/images/${link.image.src}.png`}
                    // src='../assets/images/client_thumbnail_test.png'
                    alt={link.image.alt}
                    width='225px'
                    height='140px'
                  />
                )}

                <p className='submenu__description'>{link.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
}

export default Submenu;
