import { Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import AppHeader from '../AppHeader/AppHeader';
import Post from '../Homepage/Posts/Post/Post';
import Menu from '../Menu/Menu';
import Informations from './Informations/Informations';

export default function Profile() {
  return (
    <>
      <AppHeader />
      <Menu />
      {/* //! Ne marche pas ! Forcément... p'tit soucis, il faut redécouper tout les composants au plus petit !! */}
      <Stack paddingTop="12rem" gap="2rem">
        <Informations />
        <ToggleButton />
        <Post />
        <AdvertCard />
      </Stack>
    </>
  );
}
