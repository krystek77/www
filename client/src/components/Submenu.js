import { useNavigationContext } from '../contexts/navigation';
import { NavLink as Link } from 'react-router-dom';

function Submenu() {
  const { isSubmenuOpen, allSubpages } = useNavigationContext();
  const { menu, links } = allSubpages;

  return isSubmenuOpen && links.length > 0 ? (
    <div className='submenu submenu--large'>
      <Link to={menu.to} className='submenu__title'>
        {menu.label}
      </Link>
      <ul className='submenu__list'>
        {links.map((link) => {
          return (
            <li className='submenu__item' key={link.id}>
              <Link className='submenu__link' to={`${menu.to}${link.to}`}>
                {link.isIcon ? (
                  <img
                    className='submenu__icon'
                    src={`${link.image.src}.svg`}
                    alt={link.image.alt}
                    width='150px'
                    height='150px'
                  />
                ) : (
                  <img
                    className='submenu__image'
                    src={`${link.image.src}.png`}
                    alt={link.image.alt}
                    width='150px'
                    height='93px'
                  />
                )}

                <div className='submenu__description'>
                  <p className='submenu__title'>{link.label}</p>
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
