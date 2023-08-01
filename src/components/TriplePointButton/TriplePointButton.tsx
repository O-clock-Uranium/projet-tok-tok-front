import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Publication } from '../../@types/publication';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  delAdvert,
  fetchAdverts,
  fetchFavourites,
} from '../../store/reducers/adverts';
import { delPost, fetchPosts } from '../../store/reducers/publications';

interface MenuProps {
  id: number;
  context: string;
}

export default function TriplePointButton({ id, context }: MenuProps) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const location = useLocation();
  const isAdvertsPage = location.pathname === '/adverts';
  const isFavouritePage = location.pathname === '/favoris';
  const isProfilePage = location.pathname === '/';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDel = async () => {
    if (context === 'posts') {
      dispatch(delPost(id));
      await new Promise((resolve) => setTimeout(resolve, 800));
      dispatch(fetchPosts());
      // console.log('post', id);
    } else if (context === 'adverts') {
      dispatch(delAdvert(id));
      await new Promise((resolve) => setTimeout(resolve, 800));
      dispatch(fetchFavourites());
      dispatch(fetchAdverts());
      // console.log('adv', id);
    }
  };

  return (
    <div>
      <IconButton
        id="triple-point-button"
        aria-controls={open ? 'triple-point-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ padding: '0.2rem' }}
      >
        <MoreVertSharpIcon style={{ fontSize: '2rem' }} />
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
        <MenuItem onClick={handleClickDel} sx={{ justifyContent: 'start' }}>
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
          onClick={handleClickDel}
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
