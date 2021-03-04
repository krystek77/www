import { Fragment } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
function App() {
  return (
    <Fragment>
      {/* toolbar */}
      <div className='toolbar'>
        <img
          className='logo'
          src='logo.svg'
          alt='logo'
          width='80'
          height='50'
        />
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
      {/* navigation */}
      <nav className='navigation'>
        <ul className='menu'>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Klienci
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Urządzenia pralnicze
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Transport
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Składowanie prania
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Prasowanie fasonowe
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Pompy
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Chemia
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Technologie
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Wiadomości
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              O nas
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='/'>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
      {/** sidebar */}
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
      {/** submenu */}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum hic doloremque ullam sunt ...
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum hic doloremque ullam sunt ...
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum hic doloremque ullam sunt ...
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum hic doloremque ullam sunt ...
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
export default App;
