import { Badge, IconButton } from '@mui/material';
import bell from '../../../assets/icons/bell.svg';

export default function NotificationHeader() {
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge
        badgeContent={17}
        color="primary"
        sx={{
          textAlign: 'center',
          fontFamily: 'Manrope',
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
