import { NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/profil/{id}">Profil</a>
        </li>
        <li>
          <a href="/annonces">annonces</a>
        </li>
        <li>
          <a href="/favoris">Favoris</a>
        </li>
        <li>
          <a href="/messagerie">Messages Privées</a>
        </li>
      </ul>
      {/* <NavLink to="/home"> home </NavLink>
      <NavLink to="/profile"> profile </NavLink> */}
    </nav>
  );
}

export default Menu;
