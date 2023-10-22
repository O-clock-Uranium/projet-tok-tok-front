import { AccordionSummary, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import down from '../../../../assets/icons/down.svg';
import profile from '../../../../assets/icons/profile.svg';
import settings from '../../../../assets/icons/settings.svg';
import signout from '../../../../assets/icons/signout.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { logout } from '../../../../store/reducers/user';
import EditProfileModal from '../../../Modals/EditProfileModal/EditProfileModal';

export default function UserMenu() {
  const dispatch = useAppDispatch();

  const userSlug = useAppSelector((state) => state.user.slug);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
            to={`/profil/${userSlug}`}
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
            onClick={() => {
              dispatch(logout());
              setAnchorEl(null);
            }}
            sx={{ color: '#F46F6F', fontSize: '1.8rem' }}
          >
            <IconButton type="button" aria-label="paramètres">
              <img alt="search icon" src={signout} height={18} width={18} />
            </IconButton>
            Logout
          </MenuItem>
        </Menu>
      </AccordionSummary>

      <EditProfileModal open={open} setOpen={setOpen} />
    </>
  );
}
