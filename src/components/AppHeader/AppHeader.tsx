import {
  AccordionSummary,
  Avatar,
  Badge,
  Box,
  CardMedia,
  IconButton,
  IconButtonProps,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import bell from '../../assets/icons/bell.svg';
import down from '../../assets/icons/down.svg';
import profile from '../../assets/icons/profile.svg';
import settings from '../../assets/icons/settings.svg';
import signout from '../../assets/icons/signout.svg';
import logo from '../../assets/logo.svg';

import SearchBar from './SearchBar/SearchBar';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AppHeader() {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '10rem',
        py: '3rem',
        px: '10rem',
        position: 'fixed',
        width: 1,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        {/* logo */}
        {/* // TODO A changer en simple <img /> */}
        <NavLink to="/home">
          <CardMedia
            component="img"
            height="55.75"
            width="85"
            image={logo}
            alt="Logo TokTok"
          />
        </NavLink>
        <SearchBar />
        {/* Icone cloche */}
        <Stack direction="row" alignItems="center">
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

          {/* Avatar */}
          <Avatar
            alt="Jean-Jacques"
            src="src/fakedata/jjg.jpg"
            sx={{ mx: 2, p: 0, width: '4.7rem', height: '4.7rem' }}
          />

          {/* Nom du gars + flèche */}
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
            JJ Goldman
          </Typography>

          {/* Button + Menu = menu déroulant */}
          <ExpandMore
            sx={{ m: 0, p: 0 }}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <AccordionSummary
              sx={{ m: 0, p: 0 }}
              expandIcon={
                <IconButton
                  onClick={handleClick}
                  aria-label="down arrow icon"
                  sx={{ alignItems: 'center', gap: '1rem' }}
                >
                  <img alt="down arrow icon" src={down} />
                </IconButton>
              }
              aria-controls="menu dropdown header"
              id="menu-dropdown-header"
            >
              <Menu
                anchorReference="anchorPosition"
                anchorPosition={{ top: 135, left: 1700 }}
                elevation={0}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableScrollLock
                sx={{
                  '& .MuiMenu-paper': {
                    borderRadius: '2rem',
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/profil"
                  onClick={handleClose}
                  sx={{ fontSize: '1.8rem' }}
                >
                  {' '}
                  <IconButton type="button" aria-label="paramètres">
                    <img
                      alt="search icon"
                      src={profile}
                      height={18}
                      width={18}
                    />
                  </IconButton>
                  Profile
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/messagerie"
                  onClick={handleClose}
                  sx={{ fontSize: '1.8rem' }}
                >
                  <IconButton type="button" aria-label="paramètres">
                    <img
                      alt="search icon"
                      src={settings}
                      height={18}
                      width={18}
                    />
                  </IconButton>
                  Settings
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/"
                  onClick={handleClose}
                  sx={{ color: 'secondary.main', fontSize: '1.8rem' }}
                >
                  <IconButton type="button" aria-label="paramètres">
                    <img
                      alt="search icon"
                      src={signout}
                      height={18}
                      width={18}
                    />
                  </IconButton>
                  Logout
                </MenuItem>
              </Menu>
            </AccordionSummary>
          </ExpandMore>
        </Stack>
      </Stack>
    </Box>
  );
}
