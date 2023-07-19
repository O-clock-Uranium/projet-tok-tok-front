import { Paper, Stack } from '@mui/material';
import ColorToggleButton from '../Adverts/ToggleButton/ToggleButton';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

export default function Favourites() {
  return (
    <>
      <AppHeader />
      <Menu />

      <Paper>
        <Stack justifyContent="center" alignItems="center">
          <ColorToggleButton />
        </Stack>
      </Paper>
      <div className="favoris">
        <p>PAGE DES FAVORIS</p>
      </div>
    </>
  );
}
