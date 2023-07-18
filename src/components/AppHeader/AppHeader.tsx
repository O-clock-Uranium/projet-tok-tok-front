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
import { NavLink } from 'react-router-dom';

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
            sx={{ width: '85px' }}
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
            <Badge badgeContent={17} color="primary">
              <img alt="notification icon" src={bell} height={26} width={26} />
            </Badge>
          </IconButton>

          {/* Avatar */}
          <Avatar
            alt="Jean-Jacques"
            src="src/fakedata/jjg.jpg"
            sx={{ mx: 2, p: 0, width: 47, height: 47 }}
          />

          {/* Nom du gars + flèche */}
          <Typography
            sx={{
              mb: 0,
              pb: 0,
              fontFamily: 'Manrope',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            JJ Goldman
          </Typography>

          {/* Button + Menu = menu déroulant */}
          <ExpandMore
            sx={{ m: 0, p: 0, height: 25 }}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <AccordionSummary
              sx={{ ml: 0, p: 0 }}
              expandIcon={
                <ExpandMoreIcon onClick={handleClick} sx={{ color: 'black' }} />
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
                <MenuItem onClick={handleClose}>
                  {' '}
                  <NavLink to="/profile">
                    <IconButton type="button" aria-label="paramètres">
                      <img
                        alt="search icon"
                        src={profile}
                        height={18}
                        width={18}
                      />
                    </IconButton>
                    Profile
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
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
                <MenuItem onClick={handleClose}>
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
