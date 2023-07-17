import { Link } from 'react-router-dom';
import logo from '../../assets/logo-v2.png';
import BasicMenu from './BasicMenu/BasicMenu';

import './AppHeader.scss';

function AppHeader() {
  return (
    <div className="appheader">
      <div className="appheader-logo">
        <Link to="/">
          <img src={logo} alt="logo tok tok" />
        </Link>
      </div>
      <div className="appheader-searchbar">
        <form role="search">
          <label htmlFor="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            required
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <BasicMenu />
    </div>
  );
}

export default AppHeader;
