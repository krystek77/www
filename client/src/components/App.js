import { BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import Toolbar from './Toolbar';
import Navigation from './Navigation';
import Submenu from './Submenu';
import Sidebar from './Sidebar';
import Hero from './Hero';

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
