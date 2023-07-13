import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import './Menu.scss';

function Menu() {
  return (
    // menu-container est là parce que Footer doit être entouré d'une div parente... <></> marcherait tout aussi bien
    // mais vu que l'on va fixé la position du menu et du Footer, la div est inutile.
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
