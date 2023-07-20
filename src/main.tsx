import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import store from './store';

import App from './components/App/App';
import Error from './components/Error/Error';
import Favourites from './components/Favourites/Favourites';
import Posts from './components/Homepage/Posts/Posts';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import SignInSide from './components/SignInSide/SignInSide';
import './styles/index.scss';

import Adverts from './components/Adverts/Adverts';
import theme from './styles/theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignInSide />} />
      <Route element={<App />} errorElement={<Error />} />
      <Route errorElement={<Error />}>
        <Route path="/home" element={<Posts />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/annonces" element={<Adverts />} />
        <Route path="/favoris" element={<Favourites />} />
        <Route path="/messagerie" element={<Messages />} />
      </Route>
    </>
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
