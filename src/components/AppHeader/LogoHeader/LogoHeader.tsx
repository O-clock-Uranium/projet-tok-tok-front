import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

export default function LogoHeader() {
  return (
    <NavLink to="/">
      <img src={logo} height="55.75" width="85" alt="Logo TokTok" />
    </NavLink>
  );
}
