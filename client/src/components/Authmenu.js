import { NavLink as Link } from 'react-router-dom';
function Authmenu() {
  return (
    <ul className='auth-menu'>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/logout'>
          log out
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/login'>
          log in
        </Link>
      </li>
      <li className='auth-menu__item'>
        <Link className='auth-menu__link' to='/signup'>
          sign up
        </Link>
      </li>
    </ul>
  );
}
export default Authmenu;
