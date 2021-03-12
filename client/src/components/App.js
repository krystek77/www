import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import { Toolbar, Navigation, Submenu, Sidebar, Hero } from '../components';

function App() {
  return (
    <Fragment>
      <Router>
        <Toolbar />
        <Navigation />
        <Hero />
        <Submenu />
        <Sidebar />
      </Router>
    </Fragment>
  );
}
export default App;
