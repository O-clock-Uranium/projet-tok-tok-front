import { Icon } from '@iconify/react';
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
            <NavLink to="/home">
              <Icon icon="la:home" color="black" width="36" height="36" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil">
              <Icon icon="prime:user" color="black" width="36" height="36" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/annonces">
              <Icon
                icon="mdi:tag-outline"
                color="black"
                width="36"
                height="36"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoris">
              <Icon
                icon="mdi:heart-outline"
                color="black"
                width="36"
                height="36"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/messagerie">
              {' '}
              <Icon
                icon="pepicons-pencil:letter"
                color="black"
                width="36"
                height="36"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default Menu;
