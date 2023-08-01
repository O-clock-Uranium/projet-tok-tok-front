import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Accueil from '../Accueil/Accueil';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

function App() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const userState = useAppSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // console.log(userState);
  }, [location]);

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
