import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Accueil from '../Accueil/Accueil';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

function App() {
  // const isLogged = useAppSelector((state) => state.user.logged);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
      <Navigate to="/" />;
      // navigate('/profil');
    }
  }, []);

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
