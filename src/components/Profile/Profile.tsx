import { Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
// import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import Informations from './Informations/Informations';

export default function Profile() {
  // const adverts = useAppSelector((state) => state.adverts)
  return (
    <Stack paddingTop="12rem" gap="2rem">
      <Informations />
      {/* <ToggleButton /> */}
      <AdvertCard />
    </Stack>
  );
}
