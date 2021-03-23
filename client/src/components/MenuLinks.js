import { MenuLink } from '../components';

function MenuLinks({ children }) {
  return <ul className='submenu__list'>{children}</ul>;
}
MenuLinks.MenuLink = MenuLink;
export default MenuLinks;
