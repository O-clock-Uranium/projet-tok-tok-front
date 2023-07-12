import logo from '../../assets/Tok-Tok-Logo.png';
import BasicMenu from '../BasicMenu/BasicMenu';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

import './AppHeader.scss';

function AppHeader() {
  return (
    <>
      <div className="appheader">
        <div className="appheader-logo">
          <img src={logo} alt="logo tok tok" />
        </div>
        <div className="appheader-searchbar">
          <form onSubmit="event.preventDefault();" role="search">
            <label htmlFor="search">Search for stuff</label>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              autoFocus
              required
            />
            <button type="submit">Go</button>
          </form>
        </div>
        <BasicMenu />
      </div>
      <Menu />
      <Footer />
    </>
  );
}

export default AppHeader;
