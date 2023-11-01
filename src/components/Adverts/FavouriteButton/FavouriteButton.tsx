import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';

import { Advert } from '../../../@types';
import {
  addFavourite,
  delAdvert,
  delFavourite,
  fetchAdverts,
  fetchFavourites,
} from '../../../store/reducers/adverts';

export default function FavoriteButton({ id }: Advert) {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickAddFavourite = () => {
    dispatch(addFavourite(id));
    setAnchorEl(null);
  };
  const handleClickDelFavourite = () => {
    dispatch(delFavourite(id));
    dispatch(fetchFavourites());
    setAnchorEl(null);
  };
  const handleClickDelAdvert = () => {
    dispatch(delAdvert(id));
    dispatch(fetchFavourites());
    dispatch(fetchAdverts());
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="triple-point-button"
        aria-controls={open ? 'triple-point-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          Size: '14rem',
        }}
      >
        <MoreVertSharpIcon sx={{}} />
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
        <MenuItem
          component="form"
          data-id={id}
          onClick={handleClickAddFavourite}
          sx={{ justifyContent: 'start' }}
        >
          <BookmarkAddIcon sx={{ color: '#49c1ad', fontSize: 20 }} />
          <Typography
            align="left"
            sx={{ pl: '1rem', fontSize: '1.5rem', color: 'noir' }}
          >
            Ajouter l&apos;annonce à mes favoris
          </Typography>
        </MenuItem>
        <MenuItem
          component="form"
          onClick={handleClickDelFavourite}
          data-id={id}
          sx={{ justifyContent: 'start' }}
        >
          <BookmarkRemoveIcon sx={{ color: '#03665C', fontSize: 20 }} />
          <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
            Retirer l&apos;annonce de mes favoris
          </Typography>
        </MenuItem>
        <MenuItem
          component="form"
          onClick={handleClickDelAdvert}
          data-id={id}
          sx={{ justifyContent: 'start' }}
        >
          <DeleteForeverOutlinedIcon sx={{ color: 'red', fontSize: 20 }} />
          <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
            Supprimer l&apos;annonce
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
