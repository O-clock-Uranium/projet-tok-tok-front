import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import { Advert } from '../../../@types';
import {
  addFavourite,
  delAdvert,
  delFavourite,
  fetchAdverts,
  fetchFavourites,
} from '../../../store/reducers/adverts';
import TriplePointButton from '../../TriplePointButton/TriplePointButton';

export default function FavoriteButton({
  id,
  slug,
  title,
  content,
  price,
  user_id,
  tag_id,
  created_at,
  advert_creator,
  images,
}: Advert) {
  const [expanded, setExpanded] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(false);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const isBookmarked = favourites_by
  //   ?.map((user) => user.id === userId)
  //   .some((ele) => ele === true);

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    bookmark ? dispatch(delFavourite(id)) : dispatch(addFavourite(id));
    dispatch(fetchAdverts());
  };

  return (
    <div>
      <IconButton
        aria-label="Like"
        sx={{
          px: '2rem',
          py: '1rem',
          border: 1,
          borderColor: 'rgba(85, 85, 85, 0.20)',
          borderRadius: '9.5rem',
          gap: '1rem',
        }}
        onClick={handleLikeClick}
        color={isBookmarked ? 'error' : 'default'}
      >
        {' '}
        test{' '}
      </IconButton>
      <TriplePointButton id={id} />
      {/* <IconButton
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
      </Menu> */}
    </div>
  );
}
function setExpanded(arg0: boolean) {
  throw new Error('Function not implemented.');
}

