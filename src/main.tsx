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
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';
import Adverts from './components/Averts/Adverts';
import Messages from './components/Messages/Messages';

import './styles/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<Posts />} />
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
