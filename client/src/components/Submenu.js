import { FaBars } from 'react-icons/fa';
import { useNavigationContext } from '../contexts/navigation';
function Submenu() {
  const { isSubmenuOpen } = useNavigationContext();
  return isSubmenuOpen ? (
    <div className='submenu submenu--large'>
      <a href='' className='submenu__title'>
        Klienci
      </a>
      <ul className='submenu__list'>
        <li className='submenu__item'>
          <a className='submenu__link' href='/'>
            <FaBars />
            <img
              className='submenu__image'
              src='hotele.png'
              alt='obraz A'
              width='150px'
              height='93px'
            />
            <div className='submenu__description'>
              <p className='submenu__title'>Hotele</p>
              <p className='submenu__content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                hic doloremque ullam sunt ...
              </p>
            </div>
          </a>
        </li>
        <li className='submenu__item'>
          <a className='submenu__link' href='/'>
            <img
              className='submenu__image'
              src='opieka-dlugotermninowa.png'
              alt='obraz B'
              width='150px'
              height='93px'
            />
            <div className='submenu__description'>
              <p className='submenu__title'>Opieka długoterminowa</p>
              <p className='submenu__content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                hic doloremque ullam sunt ...
              </p>
            </div>
          </a>
        </li>
        <li className='submenu__item'>
          <a className='submenu__link' href='/'>
            <img
              className='submenu__image'
              src='szpitale.png'
              alt='obraz C'
              width='150px'
              height='93px'
            />
            <div className='submenu__description'>
              <p className='submenu__title'>Szpitale</p>
              <p className='submenu__content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                hic doloremque ullam sunt ...
              </p>
            </div>
          </a>
        </li>
        <li className='submenu__item'>
          <a className='submenu__link' href='/'>
            <img
              className='submenu__image'
              src='zaklad-pracy.png'
              alt='obraz D'
              width='150px'
              height='93px'
            />
            <div className='submenu__description'>
              <p className='submenu__title'>Zakłady pracy</p>
              <p className='submenu__content'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                hic doloremque ullam sunt ...
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  ) : null;
}

export default Submenu;
