import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import './Menu.scss';

function Menu() {
  return (
    <div className="menu-container">
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="/profil/{id}">Profil</a>
          </li>
          <li>
            <NavLink to="/posts">annonces</NavLink>
          </li>
          <li>
            <NavLink to="/favoris">Favoris</NavLink>
          </li>
          <li>
            <a href="/messagerie">Messages Privées</a>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default Menu;
