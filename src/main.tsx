import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from '@mui/material/styles';

import App from './components/App/App';
import Error from './components/Error/Error';
import Favourites from './components/Favourites/Favourites';
import Messagerie from './components/Messagerie/Messagerie';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import store from './store/store';
import './styles/index.scss';

import Accueil from './components/Accueil/Accueil';
import Annonce from './components/Advert/Advert';
import Adverts from './components/Adverts/Adverts';
import theme from './styles/theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Accueil />} />
      <Route element={<App />} errorElement={<Error />}>
        <Route errorElement={<Error />}>
          <Route index element={<Posts />} />
          <Route path="/profil/:slug" element={<Profile />} />
          <Route path="/adverts" element={<Adverts />} />
          <Route path="/adverts/:slug" element={<Annonce />} />
          <Route path="/favoris" element={<Favourites />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const persistor = persistStore(store);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
