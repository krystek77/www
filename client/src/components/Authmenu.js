import { NavLink as Link } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { useNavigationContext } from '../contexts/navigation';
function Authmenu({ place = '' }) {
  const { closeSidebar, closeSubmenu } = useNavigationContext();
  const close = () => {
    closeSidebar();
    closeSubmenu();
  };
  return (
    <ul className={`auth-menu ${place}`}>
      <li className='auth-menu__item'>
        <Link
          className='auth-menu__link'
          to='/logout'
          onClick={close}
          title='log out'
        >
          <button type='button' className='btn btn--auth'>
            <FiLogOut />
          </button>
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link
          className='auth-menu__link'
          to='/login'
          onClick={close}
          title='log in'
        >
          <button type='button' className='btn btn--auth'>
            <FiLogIn />
          </button>
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/signup' onClick={close}>
          <button type='button' className='btn btn--auth'>
            sign up
          </button>
        </Link>
      </li>
    </ul>
  );
}
export default Authmenu;
