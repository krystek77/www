import { Fragment } from 'react';
import Toolbar from './Toolbar';
import Navigation from './Navigation';
import Submenu from './Submenu';
import Sidebar from './Sidebar';
function App() {
  return (
    <Fragment>
      <Toolbar />
      <Navigation />
      <Submenu />
      <Sidebar />
    </Fragment>
  );
}
export default App;
