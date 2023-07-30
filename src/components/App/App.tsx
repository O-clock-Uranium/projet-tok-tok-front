import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Accueil from '../Accueil/Accueil';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import axiosInstance from '../../utils/axios';

function App() {
  const isLogged = useAppSelector((state) => state.user.logged);
  // const state = useAppSelector((state) => state.user)
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // console.log(state)
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
