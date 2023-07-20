import { Stack } from '@mui/material';
import ButtonToggle from './AccueilButtonToggle/AccueilButtonToggle';
import AccueilLogo from './AccueilLogo/AccueilLogo';
import Carrousel from './Carroussel/Carrousel';

export default function Accueil() {
  // const ToggleButton = () => {
  //   const [isOpen, setIsOpen] = useState(true);
  // };

  return (
    <Stack direction="row" width="100vw">
      <Carrousel />
      <Stack direction="column" width="1/3">
        <AccueilLogo />
        <ButtonToggle />
      </Stack>
    </Stack>
  );
}
