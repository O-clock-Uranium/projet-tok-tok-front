import { Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import Post from '../Homepage/Posts/Post/Post';
import Informations from './Informations/Informations';

export default function Profile() {
  return (
    <>
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
