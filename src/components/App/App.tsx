import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Accueil from '../Accueil/Accueil';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

function App() {
  const isLogged = useAppSelector((state) => state.user.logged);
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
