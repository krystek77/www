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
    console.log('[submenu useEffect]', menu);
    if (submenuRef.current) {
      console.log(submenuRef.current);
      const rectDOM = submenuRef.current.getBoundingClientRect();
      const coordinates = {
        left: rectDOM.left,
        right: rectDOM.right,
        bottom: rectDOM.bottom,
      };
      submenuDimension(coordinates);
    }
  }, [menu, submenuDimension]);
  console.log('[submenu]');
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
                {link.isIcon ? (
                  <img
                    className='submenu__icon'
                    // src={`${link.image.src}.svg`}
                    src='../assets/images/icon_test.svg'
                    alt={link.image.alt}
                    width='96px'
                    height='96px'
                  />
                ) : (
                  <img
                    className='submenu__image'
                    // src={`${link.image.src}.png`}
                    src='../assets/images/client_thumbnail_test.png'
                    alt={link.image.alt}
                    width='150px'
                    height='93px'
                  />
                )}

                <div className='submenu__description'>
                  <p className='submenu__subtitle'>{link.label}</p>
                  <p className='submenu__content'>{link.description}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
}

export default Submenu;
