import { Badge, IconButton } from '@mui/material';
import bell from '../../../assets/icons/bell.svg';

export default function NotificationHeader() {
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      {/* // TODO changer dans le thème la couleur du texte des badges */}
      <Badge
        badgeContent={17}
        color="primary"
        sx={{
          textAlign: 'center',
          fontFamily: 'Manrope',
          color: 'white',
          fontWeight: 500,
          '& .MuiBadge-badge': {
            color: 'WHITE',
            fontSize: '0.96rem',
          },
        }}
      >
        <img alt="notification icon" src={bell} />
      </Badge>
    </IconButton>
  );
}
