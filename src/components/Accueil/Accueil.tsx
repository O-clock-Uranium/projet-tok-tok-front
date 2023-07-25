import { Stack } from '@mui/material';
import AccueilFooter from './AccueilFooter/AccueilFooter';
import AccueilLogo from './AccueilLogo/AccueilLogo';
import ButtonToggle from './AccueilToggle/AccueilToggle';
import Carrousel from './Carrousel/Carrousel';

export default function Accueil() {
  return (
    <Stack direction="row" width="100%">
      <Carrousel />
      <Stack direction="column" sx={{ width: '33%' }}>
        <AccueilLogo />
        <ButtonToggle />
        <AccueilFooter />
      </Stack>
    </Stack>
  );
}
