import { NavLink as Link } from 'react-router-dom';
import { useNavigationContext } from '../contexts/navigation';
function Authmenu({ sidebar }) {
  const { closeSidebar, closeSubmenu } = useNavigationContext();
  const close = () => {
    closeSidebar();
    closeSubmenu();
  };
  return (
    <ul className={`auth-menu ${sidebar && 'auth-menu--sidebar'}`}>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/logout' onClick={close}>
          log out
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/login' onClick={close}>
          log in
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/signup' onClick={close}>
          sign up
        </Link>
      </li>
    </ul>
  );
}
export default Authmenu;
