import { Link, Stack } from '@mui/material';
import Copyright from '../Copyright/Copyright';

export default function AccueilFooter() {
  return (
    <>
      <Stack direction="row">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Link href="/" variant="body2">
            Mot de passe oublié ?
          </Link>
          <Link href="/" variant="body2">
            Pas encore de compte ?
          </Link>
        </div>
      </Stack>
      <Copyright />
    </>
  );
}
