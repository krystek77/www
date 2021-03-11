import { NavLink as Link } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
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
          <FiLogOut />
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/login' onClick={close}>
          <FiLogIn />
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
