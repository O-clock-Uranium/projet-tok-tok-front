import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';

import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import { Advert } from '../../../@types';
import {
  addFavourite,
  delFavourite,
  fetchAdverts,
  fetchFavourites,
} from '../../../store/reducers/adverts';

export default function FavoriteButton({ id, favorited_by }: Advert) {
  const location = useLocation();
  const isAdvertsPage = location.pathname === '/adverts';

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  // Boucle sur favorited_by pour vérifier si le user loggué a mis en favoris l'annonce
  const isBookmarked = favorited_by
    ?.map((fav) => fav.id === userId)
    .some((ele) => ele === true);
  console.log(isBookmarked);
  const [bookmark, setBookmark] = useState(isBookmarked);

  const handleBookmarkClick = async () => {
    setBookmark(!bookmark);
    console.log(bookmark);
    if (bookmark === true) {
      dispatch(addFavourite(id));
      await new Promise((resolve) => setTimeout(resolve, 200));
      dispatch(fetchAdverts());
      dispatch(fetchFavourites());
    } else {
      dispatch(delFavourite(id));
      await new Promise((resolve) => setTimeout(resolve, 200));
      dispatch(fetchAdverts());
      dispatch(fetchFavourites());
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
        {isAdvertsPage &&
          (isBookmarked ? (
            <BookmarkSharpIcon sx={{ fontSize: '3rem' }} />
          ) : (
            <BookmarkBorderSharpIcon sx={{ fontSize: '3rem' }} />
          ))}
        {!isAdvertsPage && (
          <BookmarkSharpIcon sx={{ fontSize: '3rem', color: '#03665C' }} />
        )}
      </IconButton>
    </div>
  );
}
