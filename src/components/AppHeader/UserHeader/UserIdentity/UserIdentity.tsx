import { Avatar, Typography } from '@mui/material';
import { useAppSelector } from '../../../../hooks/redux';

import '../../style.scss';

export default function UserIdentity() {
  const loggedPseudo = useAppSelector((state) => {
    const fullName = `${state.user.firstname} ${state.user.lastname}`;
    const capitalizeFirstLetter = (str: string) => {
      return str.replace(/\b\w/g, (match) => match.toUpperCase());
    };
    const formattedName = capitalizeFirstLetter(fullName);
    return `Bienvenue ${formattedName}`;
  });

  const picture = useAppSelector((state) => state.user.thumbnail);

  return (
    <>
      <Avatar
        alt="profile-picture"
        src={picture}
        sx={{ mx: 2, p: 0, width: '4.7rem', height: '4.7rem' }}
      />
      <Typography
        className="user-identity"
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
