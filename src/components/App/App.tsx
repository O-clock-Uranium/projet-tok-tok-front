import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default App;
