import { FaWindowClose } from 'react-icons/fa';
function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar__content'>
        <button className='btn btn--close' type='button'>
          <FaWindowClose />
        </button>
        <div className='submenu'>
          <a href='' className='submenu__title'>
            Klienci
          </a>
          <ul className='submenu__list'>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Hotele
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Opieka długoterminowa
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Szpitale
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Zakłady pracy
              </a>
            </li>
          </ul>
        </div>
        <div className='submenu'>
          <a href='' className='submenu__title'>
            Urządzenia pralnicze
          </a>
          <ul className='submenu__list'>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Pralnice
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Pralnicowirówki
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Suszarki
              </a>
            </li>
            <li className='submenu__item'>
              <a className='submenu__link' href='/'>
                Prasownice
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='backdrop'></div>
    </aside>
  );
}
export default Sidebar;
