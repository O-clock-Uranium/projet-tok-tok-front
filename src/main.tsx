import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { useEffect } from 'react';
import store from './store';

import App from './components/App/App';
import Error from './components/Error/Error';
import Favourites from './components/Favourites/Favourites';
import Posts from './components/Homepage/Posts/Posts';
import Messagerie from './components/Messagerie/Messagerie';
import Profile from './components/Profile/Profile';
import './styles/index.scss';

import Accueil from './components/Accueil/Accueil';
import Adverts from './components/Adverts/Adverts';
import Annonce from './components/Annonce/Annonce';
import theme from './styles/theme';

function Root() {
  useEffect(() => {
    // Your useEffect logic here
    // You can perform any side effects or setup you need for your application
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Accueil />} />
        <Route element={<App />} errorElement={<Error />} />
        <Route errorElement={<Error />}>
          <Route path="/home" element={<Posts />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/annonces" element={<Adverts />} />
          <Route path="/annonces/:id" element={<Annonce />} />
          <Route path="/favoris" element={<Favourites />} />
          <Route path="/messagerie" element={<Messagerie />} />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
