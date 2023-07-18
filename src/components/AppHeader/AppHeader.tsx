import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Avatar,
  Badge,
  Box,
  Button,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: 100,
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
        <Stack spacing={2} direction="row">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={17} color="primary">
              <img alt="notification icon" src={bell} height={26} width={26} />
            </Badge>
          </IconButton>

          {/* Avatar */}
          <Avatar
            alt="Jean-Jacques"
            src="public/fakedata/jjg.jpg"
            sx={{ width: 47, height: 47, mr: 10 }}
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
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {/* Button + Menu = menu déroulant */}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <ExpandMoreIcon sx={{ fontSize: '25px', color: 'black' }} />
              </Button>
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
                  <IconButton type="button" sx={{}} aria-label="paramètres">
                    <img
                      alt="search icon"
                      src={profile}
                      height={18}
                      width={18}
                    />
                  </IconButton>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <IconButton type="button" sx={{}} aria-label="paramètres">
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
                  <IconButton type="button" sx={{}} aria-label="paramètres">
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
            </ExpandMore>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
