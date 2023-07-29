import {
  AccordionSummary,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import down from '../../../../assets/icons/down.svg';
import profile from '../../../../assets/icons/profile.svg';
import settings from '../../../../assets/icons/settings.svg';
import signout from '../../../../assets/icons/signout.svg';
import { edit, logout } from '../../../../store/reducers/user';
import { useAppDispatch } from '../../../../hooks/redux';
import EditProfileModal from '../../../Modals/EditProfileModal';
import SignUp from '../../../Accueil/SignUp/SignUp';
import EditProfile from '../../../Modals/EditProfileModal';

export default function UserMenu() {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  // Modal edit profile --------------------------
  const handleSettings = () => {
    setOpen(true);
    handleClose();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    dispatch(edit(formData));
    // setOpen(false);
  };

  const handleCloseModal = () => setOpen(false);
  // Modal edit profile --------------------------

  return (
    <>
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
        {/* //! Check pour ancrer le menu en position relative (pb actuel la pos change selon la résolution du user) */}
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
            <IconButton type="button" aria-label="paramètres">
              <img alt="search icon" src={profile} height={18} width={18} />
            </IconButton>
            Profile
          </MenuItem>
          <MenuItem
            component={Link}
            to="#"
            onClick={handleSettings}
            sx={{ fontSize: '1.8rem' }}
          >
            <IconButton type="button" aria-label="paramètres">
              <img alt="search icon" src={settings} height={18} width={18} />
            </IconButton>
            Settings
          </MenuItem>
          <MenuItem
            // component={Link}
            // to="/"
            onClick={handleLogout}
            sx={{ color: 'secondary.main', fontSize: '1.8rem' }}
          >
            <IconButton type="button" aria-label="paramètres">
              <img alt="search icon" src={signout} height={18} width={18} />
            </IconButton>
            Logout
          </MenuItem>
        </Menu>
      </AccordionSummary>

      <Modal
        open={open}
        onClose={handleCloseModal}
        component="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        aria-labelledby="modal-modal-profile"
        aria-describedby="modal-modal-edit"
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            margin: 'auto',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            // onSubmit={handleSubmit}
            sx={{
              backgroundColor: 'white',
              width: '80%',
              m: 'auto',
              p: '5rem',
              borderRadius: '2rem',
            }}
          >
            {/* Titre */}
            <Typography id="modal-modal-title" fontSize="1.6rem">
              Editer mon profil
            </Typography>

            <EditProfile />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
