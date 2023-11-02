import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Accueil from '../Accueil/Accueil';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

import './style.scss';

function App() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/', { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <div className="App">
      {!isLogged && <Accueil />}
      {isLogged && (
        <>
          <AppHeader />
          <Menu />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
