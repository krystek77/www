import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
  Toolbar,
  Navigation,
  Submenu,
  Sidebar,
  Hero,
  ButtonLink,
  ContactForm,
  NewsletterForm,
  Gallery,
  Divider,
  Footer,
  Modal,
  Button,
} from '../components';
import { PostCards } from '../containers';

function App() {
  const [handleCookie, setHandleCookie] = React.useState(() => {
    const isCookiesClause = window.localStorage.getItem('isCookiesClause');
    return isCookiesClause === null ? true : false;
  });
  const handleCookies = () => {
    window.localStorage.setItem('isCookiesClause', false);
    setHandleCookie(false);
  };

  return (
    <Fragment>
      <Router>
        <Modal isShow={handleCookie} type='modal--cookies'>
          <p className='modal__text'>
            Serwis wykorzystuje pliki cookies. Korzystając ze strony wyrażasz
            zgodę na wykorzystywanie plików cookies.
            <Link to='/polityka-prywatnosci' className='modal__link'>
              Więcej w polityce prywatności.
            </Link>
          </p>
          <Button
            label='Nie pokazuj'
            btnType='button'
            handleClick={handleCookies}
          />
        </Modal>
        <Toolbar />
        <Navigation />
        <Hero />
        <Submenu />
        <Sidebar />
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Polski producent</h2>
            <h3>Pralma zawsze jest o krok od konkurencji, więc Ty też</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Komu świadczymy suługi</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Nasze technologie</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
            <Divider />
            <ButtonLink to='/' label='Poznaj wszystkie' />
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Nasze produkty</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
            <Divider />
            <ButtonLink to='/produkty' label='Zobacz wszystkie' />
          </div>
        </section>
        <section className='section section--news'>
          <div className='container'>
            <h2 className='title'>Najnowsze wiadomości</h2>
            <PostCards />
            <Divider />
            <ButtonLink to='/wiadomosci' label='Zobacz wszystkie' />
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Formularz kontaktowy</h2>
            <ContactForm />
          </div>
        </section>
        <section className='section section--banner'>
          <div className='conatiner'>
            <p>BANNER</p>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Popularne pytania</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
            <Divider />
            <ButtonLink to='/' label='Wszystkie pytania' />
          </div>
        </section>
        <section className='section section--gallery'>
          <div className='container'>
            <h2 className='title'>Galeria zdjęć zrealizowanych pralni</h2>
          </div>
          <Gallery />
        </section>
        <section className='section section--newsletter'>
          <div className='container'>
            <h2 className='title'>Chcesz być na bieżąco</h2>
            <p className='text'>
              Zapisz się na newsletter, aby otrzymywać najnowsze wiadomości od
              Pralma oraz informacje o specjalnych ofertach i promocjach.
            </p>
            <small className='info'>Gwarantujemy zero spamu</small>
            <NewsletterForm />
          </div>
        </section>
        <Footer />
      </Router>
    </Fragment>
  );
}
export default App;
