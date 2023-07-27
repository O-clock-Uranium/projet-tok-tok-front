import { Avatar, Typography } from '@mui/material';
import { useAppSelector } from '../../../../hooks/redux';

export default function UserIdentity() {
  const loggedPseudo = useAppSelector(
    (state) => `Bienvenue ${state.user.firstname} ${state.user.lastname}`
  );
  const picture = useAppSelector(state => state.user.thumbnail);
  
  return (
    <>
      <Avatar
        alt="profile-picture"
        src={picture}
        sx={{ mx: 2, p: 0, width: '4.7rem', height: '4.7rem' }}
      />
      <Typography
        sx={{
          mb: 0,
          pb: 0,
          fontFamily: 'Manrope',
          fontSize: '1.8rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      >
        {loggedPseudo}
      </Typography>
    </>
  );
}
