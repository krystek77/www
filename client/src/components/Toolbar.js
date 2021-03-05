import { FaBars } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
import { Link } from 'react-router-dom';
function Toolbar() {
  const { openSidebar } = useNavigationContext();
  return (
    <div className='toolbar'>
      <Link to='/' className='logo'>
        <img
          className='logo__image'
          src='../assets/images/logo.svg'
          alt='logo'
          width='80'
          height='50'
        />
      </Link>
      <button className='btn btn--hamburger' onClick={openSidebar}>
        <FaBars />
      </button>
      <ul className='auth-menu'>
        <li className='auth-menu__item'>
          <a className='auth-menu__link' href='/'>
            log out
          </a>
        </li>
        <li className='auth-menu__item'>
          <a className='auth-menu__link' href='/'>
            log in
          </a>
        </li>
        <li className='auth-menu__item'>
          <a className='auth-menu__link' href='/'>
            sign up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
