import { Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import Informations from './Informations/Informations';
import Post2 from '../Homepage/Posts/Post/Post2';

export default function Profile() {
  return (
    <>
      {/* //! Ne marche pas ! Forcément... p'tit soucis, il faut redécouper tout les composants au plus petit !! */}
      <Stack paddingTop="12rem" gap="2rem">
        <Informations />
        {/* <ToggleButton /> */}
        <Post2 />
        <AdvertCard />
      </Stack>
    </>
  );
}
