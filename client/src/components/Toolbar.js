import { FaBars } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
import { NavLink as Link } from 'react-router-dom';
import { Authmenu } from '../components';
function Toolbar() {
  const { openSidebar, closeSubmenu } = useNavigationContext();
  return (
    <div className='toolbar'>
      <Link to='/' className='logo' onClick={closeSubmenu}>
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
      <Authmenu />
    </div>
  );
}

export default Toolbar;
