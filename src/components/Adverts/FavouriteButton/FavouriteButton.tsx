import { useState } from 'react';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { AdvertSubset } from '../../../@types';
import {
  addFavourite,
  delFavourite,
  fetchAdverts,
  fetchFavourites,
} from '../../../store/reducers/adverts';

export default function FavouriteButton({ id, favorited_by }: AdvertSubset) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  // Boucle sur favorited_by pour vérifier si le user loggué a mis en favoris l'annonce
  const isBookmarked = favorited_by
    ?.map((fav) => fav.id === userId)
    .some((ele) => ele === true);
  const [bookmark, setBookmark] = useState(isBookmarked);

  const handleBookmarkClick = async () => {
    setBookmark(!bookmark);
    if (bookmark === true) {
      await dispatch(addFavourite(id));
      await dispatch(fetchFavourites());
      await dispatch(fetchAdverts());
    } else {
      await dispatch(delFavourite(id));
      await dispatch(fetchAdverts());
      await dispatch(fetchFavourites());
    }
  };

  return (
    <div>
      <IconButton
        aria-label="bookmark"
        sx={{
          p: '0.2rem',
        }}
        onClick={handleBookmarkClick}
        color={isBookmarked ? 'secondary' : 'default'}
      >
        {isBookmarked ? (
          <BookmarkSharpIcon sx={{ fontSize: '3rem' }} />
        ) : (
          <BookmarkBorderSharpIcon sx={{ fontSize: '3rem' }} />
        )}
      </IconButton>
    </div>
  );
}
