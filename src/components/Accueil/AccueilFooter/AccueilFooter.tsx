import { Link, Stack } from '@mui/material';
import Copyright from '../Copyright/Copyright';

export default function AccueilFooter() {
  return (
    <>
      <Stack direction="row" justifyContent="space-evenly">
        <Link href="/" variant="body2">
          Mot de passe oublié ?
        </Link>
        <Link href="/" variant="body2">
          Pas encore de compte ?
        </Link>
      </Stack>
      <Copyright sx={{ mt: '2rem' }} />
    </>
  );
}
