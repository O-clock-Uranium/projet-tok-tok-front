import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
