import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import {
  Toolbar,
  Navigation,
  Submenu,
  Sidebar,
  Hero,
  ButtonLink,
  ContactForm,
  Footer,
} from '../components';

function App() {
  return (
    <Fragment>
      <Router>
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
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Najnowsze wiadomości</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem, quod recusandae laudantium in voluptate illum, esse
              adipisci assumenda reiciendis illo et quam facilis animi
              consequuntur impedit optio tempore officiis! Molestiae expedita
              quia beatae iusto enim. Magnam autem, blanditiis iusto temporibus
              ullam, aut debitis ad placeat ipsa unde aliquam doloremque
              deleniti rem id delectus quia modi, cupiditate perspiciatis
              voluptatum in. Blanditiis, voluptatem architecto mollitia
              assumenda eaque at dignissimos, laboriosam perferendis reiciendis
              cupiditate voluptas praesentium deleniti modi, provident velit
              harum aliquid autem. Adipisci doloremque alias, iure soluta
              voluptatem maiores explicabo tempora. Repellendus explicabo facere
              vero omnis consequuntur doloribus ratione dolorem deleniti iste
              sequi! Repudiandae laborum sed veritatis? Modi perferendis
              nesciunt ducimus molestiae eum magnam, magni culpa est
              voluptatibus totam ipsum dolores. Ut labore.
            </p>
            <ButtonLink to='/' label='Czytaj wszystkie' />
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Formularz kontaktowy</h2>
            <ContactForm />
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
            <ButtonLink to='/' label='Wszystkie pytania' />
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Bądź na bieżąco</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure
              perferendis ipsum eius laboriosam delectus id, libero dolore,
              praesentium excepturi facilis nisi tempora nostrum aspernatur quam
              est, doloremque quisquam sit.
            </p>
            <ButtonLink to='/' label='Zapisz się' />
          </div>
        </section>
        <Footer />
      </Router>
    </Fragment>
  );
}
export default App;
