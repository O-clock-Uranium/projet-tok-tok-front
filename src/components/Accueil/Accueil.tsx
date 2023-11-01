import { Stack } from '@mui/material';
import AccueilFooter from './AccueilFooter/AccueilFooter';
import AccueilLogo from './AccueilLogo/AccueilLogo';
import ButtonToggle from './AccueilToggle/AccueilToggle';
import Carrousel from './Carrousel/Carrousel';

import './style.scss';

export default function Accueil() {
  return (
    <Stack direction="row" width="100%">
      <Carrousel />
      <Stack direction="column">
        <div className="authform-container">
          <AccueilLogo />
          <div className="authform">
            <ButtonToggle />
          </div>
          <AccueilFooter />
        </div>
      </Stack>
    </Stack>
  );
}
