import {
  Badge,
  ListItemButton,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import bookmark from '../../assets/icons/bookmark.svg';
import conversation from '../../assets/icons/conversation.svg';
import home from '../../assets/icons/home.svg';
import megaphone from '../../assets/icons/megaphone.svg';
import profile from '../../assets/icons/profile.svg';
import { useAppSelector } from '../../hooks/redux';

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
              p: '1.7rem',
              borderRadius: '1.5rem',
            }}
            component={NavLink}
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#03665C',
                    borderRadius: '1.5rem',
                    // transitionDelay: '180ms', //! A revoir la transition
                  }
                : null
            }
          >
            <img alt="search icon" src={home} />
          </ListItemButton>
          <ListItemButton
            sx={{ p: '1.7rem', borderRadius: '1.5rem' }}
            component={NavLink}
            to={`/profil/${userSlug}`}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#03665C',
                    borderRadius: '1.5rem',
                  }
                : null
            }
          >
            <img style={{ fill: 'blue' }} alt="search icon" src={profile} />
          </ListItemButton>
          <ListItemButton
            sx={{ p: '1.7rem', borderRadius: '1.5rem' }}
            component={NavLink}
            to="/adverts"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#03665C',
                    borderRadius: '1.5rem',
                  }
                : null
            }
          >
            <img alt="search icon" src={megaphone} />
          </ListItemButton>
          <ListItemButton
            sx={{ p: '1.7rem', borderRadius: '1.5rem' }}
            component={NavLink}
            to="/favoris"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#03665C',
                    borderRadius: '1.5rem',
                  }
                : null
            }
          >
            <img alt="search icon" src={bookmark} />
          </ListItemButton>
          <ListItemButton
            sx={{ p: '1.7rem', borderRadius: '1.5rem' }}
            component={NavLink}
            to="/messagerie"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#03665C',
                    borderRadius: '1.5rem',
                  }
                : null
            }
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
              <img alt="search icon" src={conversation} />
            </Badge>
          </ListItemButton>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
