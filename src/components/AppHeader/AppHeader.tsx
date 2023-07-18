import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  Typography,
  styled,
} from '@mui/material';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import bell from '../../assets/icons/bell.svg';
import profile from '../../assets/icons/profile.svg';
import settings from '../../assets/icons/settings.svg';
import signout from '../../assets/icons/signout.svg';
import logo from '../../assets/logo.svg';

import SearchBar from './SearchBar';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
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
        py: 3, // padding haut/bas
        px: 10, // padding gauche/droite
        position: 'fixed',
        width: 1,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        {/* logo */}
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
                <ExpandMoreIcon
                  onClick={handleClick}
                  sx={{ fontSize: '2rem', color: 'black' }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  mt: 5.5,
                }}
              >
                <MenuItem
                  component={Link}
                  to="profil"
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
                  to="settings"
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
                  to="settings"
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
