import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAdverts } from '../../store/reducers/adverts';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

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
