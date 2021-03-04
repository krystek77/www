import { FaBars } from 'react-icons/fa';
function Toolbar() {
  return (
    <div className='toolbar'>
      <img className='logo' src='logo.svg' alt='logo' width='80' height='50' />
      <button className='btn btn--hamburger'>
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
