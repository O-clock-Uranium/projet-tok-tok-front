import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import store from './store';

import App from './components/App/App';
import Adverts from './components/Averts/Adverts';
import Error from './components/Error/Error';
import Favourites from './components/Favourites/Favourites';
import Messages from './components/Messages/Messages';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import SignInSide from './components/SignInSide/SignInSide';

import './styles/index.scss';
import theme from './styles/theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<SignInSide />} />
        <Route path="/home" element={<Posts />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/annonces" element={<Adverts />} />
        <Route path="/favoris" element={<Favourites />} />
        <Route path="/messagerie" element={<Messages />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
