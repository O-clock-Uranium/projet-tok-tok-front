import chantier from '../../fakedata/chantier.gif';
import AppHeader from '../Homepage/AppHeader/AppHeader';
import Menu from '../Menu/Menu';

export default function Profile() {
  return (
    <>
      <AppHeader />
      <Menu />
      <img
        src={chantier}
        alt="chantier"
        style={{ margin: 'auto', paddingTop: '13rem' }}
      />
    </>
  );
}
