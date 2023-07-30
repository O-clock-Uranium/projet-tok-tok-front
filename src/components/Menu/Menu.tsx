import {
  Badge,
  ListItemButton,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import AdvertsSVG from './MenuSVG/AdvertsSVG';
import FavouritesSVG from './MenuSVG/FavouritesSVG';
import Home from './MenuSVG/HomeSVG';
import MessagerieSVG from './MenuSVG/MessagerieSVG';
import ProfileSVG from './MenuSVG/ProfileSVG';

const listItemButtonStyles = {
  p: '1.5rem',
  borderRadius: '1.5rem',
  '&.active': {
    p: '1.5rem',
    backgroundColor: '#03665C',
    borderRadius: '1.5rem',
    '& #filled': {
      fill: 'white',
    },
  },
  '#filled': {
    fill: 'black',
  },
};

export default function Menu() {
  const userSlug = useAppSelector((state)=> state.user.slug)
  return (
    <Paper
      elevation={0}
      sx={{
        width: '9rem',
        borderRadius: 4,
        backgroundColor: '#FFF',
        position: 'fixed',
        top: 250,
        left: '10rem',
      }}
    >
      <MenuList sx={{ gap: '2rem' }}>
        <MenuItem
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <ListItemButton
            sx={{
              ...listItemButtonStyles,
            }}
            component={NavLink}
            to="/"
          >
            <Home />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...listItemButtonStyles,
            }}
            component={NavLink}
            to={`/profil/${userSlug}`}
          >
            <ProfileSVG />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...listItemButtonStyles,
            }}
            component={NavLink}
            to="/adverts"
          >
            <AdvertsSVG />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...listItemButtonStyles,
            }}
            component={NavLink}
            to="/favoris"
          >
            <FavouritesSVG />
          </ListItemButton>
          <ListItemButton
            sx={{
              ...listItemButtonStyles,
            }}
            component={NavLink}
            to="/messagerie"
          >
            <Badge
              sx={{
                '& .MuiBadge-badge': {
                  color: 'WHITE',
                  fontSize: '1.15rem',
                },
              }}
              badgeContent={5477}
              color="primary"
            >
              <MessagerieSVG />
            </Badge>
          </ListItemButton>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
