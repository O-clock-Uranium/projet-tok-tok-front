import { NavLink } from 'react-router-dom';
import { Badge, ListItemButton, MenuItem, MenuList } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import AdvertsSVG from './MenuSVG/AdvertsSVG';
import FavouritesSVG from './MenuSVG/FavouritesSVG';
import Home from './MenuSVG/HomeSVG';
import MessagerieSVG from './MenuSVG/MessagerieSVG';
import ProfileSVG from './MenuSVG/ProfileSVG';

import './style.scss';

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
  const userSlug = useAppSelector((state) => state.user.slug);
  return (
    <div className="floating-menu">
      <MenuList sx={{ gap: '2rem' }}>
        <MenuItem
          className="floating-menu--list"
          sx={{
            margin: 'auto',
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
    </div>
  );
}
