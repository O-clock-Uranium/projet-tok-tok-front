import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { delPost } from '../../store/reducers/publications';

export default function TriplePointButton({ id }) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(delPost(id));
  };

  return (
    <div>
      <IconButton
        id="triple-point-button"
        aria-controls={open ? 'triple-point-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ Size: '14rem' }}
      >
        <MoreVertSharpIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiMenu-paper': {
            borderRadius: '2rem',
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{ justifyContent: 'start' }}>
          <ReportGmailerrorredOutlinedIcon
            sx={{ color: 'red', fontSize: 20 }}
          />
          <Typography
            align="left"
            sx={{ pl: '1rem', fontSize: '1.5rem', color: 'noir' }}
          >
            Report
          </Typography>
        </MenuItem>
        <MenuItem
          component="form"
          onSubmit={handleSubmit}
          onClick={handleClose}
          data-id={id}
          sx={{ justifyContent: 'start' }}
        >
          <DeleteForeverOutlinedIcon sx={{ color: 'red', fontSize: 20 }} />
          <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
            Supprimer
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
