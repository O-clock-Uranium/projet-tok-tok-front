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
        {/* //! Signup et Login sont tout pareil (sauf le nombre de champ)
        Et pourtant il y a un décalage lorsque l'on passe de l'un à l'autre */}
        <AccueilLogo />
        <ButtonToggle />
        <AccueilFooter />
      </Stack>
    </Stack>
  );
}
