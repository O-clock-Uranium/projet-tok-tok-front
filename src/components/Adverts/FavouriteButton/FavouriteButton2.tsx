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
  favorited_by,
}: Advert) {
  const location = useLocation();
  const isAdvertsPage = location.pathname === '/adverts';

  const [bookmark, setBookmark] = useState(false);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  // Boucle sur favorited_by pour vérifier si le user loggué a mis en favoris l'annonce
  const isBookmarked = favorited_by
    ?.map((fav) => fav.id === userId)
    .some((ele) => ele === true);

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    bookmark ? dispatch(delFavourite(id)) : dispatch(addFavourite(id));
    dispatch(fetchAdverts());
    dispatch(fetchFavourites());
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
