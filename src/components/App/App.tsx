import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Posts from '../Posts/Posts';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
      <Posts />
    </div>
  );
}

export default App;
