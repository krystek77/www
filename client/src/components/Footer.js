import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connectedMenuAndLinks as data } from '../fixtures';
import { MenuLinksContainer } from '../containers';
import { Authmenu } from '../components';

console.log(data);
function Footer() {
  const [submenus, setSubmenus] = React.useState([]);

  React.useEffect(() => {
    setSubmenus(data);
    return () => {};
  }, []);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__submenus'>
          {submenus.map((item) => {
            const { id, label, to, links } = item;
            return (
              <div className='submenu submenu--footer' key={id}>
                <Link to={to} className='submenu__title'>
                  {label}
                </Link>
                <MenuLinksContainer links={links} mainTo={to} />
              </div>
            );
          })}
        </div>
        <Authmenu place='auth-menu--footer' />
        <p className='footer__copyright'>
          &copy; 2021 by Krystian Wrona. Wszystkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}
export default Footer;
