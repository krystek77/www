import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import {
  Toolbar,
  Navigation,
  Submenu,
  Sidebar,
  Hero,
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
            <h2 className='title'>Wiadomości</h2>
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
              voluptatibus totam ipsum dolores. Ut labore, sed, ex nam veritatis
              deserunt delectus officia sint esse ab dolor non et nihil
              reprehenderit voluptas quas iure! Corrupti quasi ipsum perferendis
              enim velit veritatis doloribus accusamus consectetur.
            </p>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className='title'>Kontakt</h2>
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
              voluptatibus totam ipsum dolores. Ut labore, sed, ex nam veritatis
              deserunt delectus officia sint esse ab dolor non et nihil
              reprehenderit voluptas quas iure! Corrupti quasi ipsum perferendis
              enim velit veritatis doloribus accusamus consectetur.
            </p>
          </div>
        </section>
        <Footer />
      </Router>
    </Fragment>
  );
}
export default App;
