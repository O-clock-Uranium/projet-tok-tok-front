import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Publication } from '../../../@types/publication';
import {
  addLike,
  delLike,
  fetchPosts,
} from '../../../store/reducers/publications';
import comment from '../../../assets/icons/comment.svg';
import TriplePointButton from '../../TriplePointButton/TriplePointButton';
import AddCommentary from './AddComment/AddComment';
import ContentComment from './Comment/ContentComment/ContentComment';
import formatDate from '../../../utils/date2';

export default function Post({
  id,
  content,
  thumbnail,
  created_at,
  post_creator,
  users_liked,
  replies,
}: Publication) {
  const [expanded, setExpanded] = useState(false);

  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();

  const context = 'posts';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isLiked = users_liked
    ?.map((user) => user.id === userId)
    .some((ele) => ele === true);
  const [like, setLike] = useState(isLiked);

  const handleLikeClick = async () => {
    setLike(!like);
    if (like) {
      dispatch(delLike(id));
    } else {
      dispatch(addLike(id));
    }
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 200);
  };

  const date = formatDate(created_at);

  return (
    <Box
      sx={{
        width: '100%',
        p: '3rem',
        backgroundColor: 'white',
        mx: 'auto',
        borderRadius: '2rem',
      }}
    >
      <Stack
        paddingBottom="2.5rem"
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        {/* Photo de profil */}
        <Avatar
          alt={`${post_creator?.firstname} ${post_creator?.lastname} avatar`}
          src={`${post_creator?.thumbnail}`}
          sx={{ width: 60, height: 60 }}
        />
        <Stack direction="column" flex="1" justifyContent="center">
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.6rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {/* Nom et prénom */}
            <Link
              to={`/profil/${post_creator?.slug}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {post_creator?.firstname} {post_creator?.lastname}
            </Link>
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.2rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              color: '#A5A5A5',
            }}
          >
            {/* Date de création */}
            {date}
          </Typography>
        </Stack>
        <TriplePointButton
          id={id}
          post_creator={post_creator}
          context={context}
        />
      </Stack>
      <Typography
        sx={{
          mb: 0,
          pb: 0,
          fontFamily: 'DM Sans',
          fontSize: '1.5rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '150%',
        }}
      >
        {/* Contenu du post */}
        {content}
      </Typography>
      {/* Image du post si dispo  */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '76rem',
          borderRadius: '2rem',
          pt: '2rem',
          pb: '2.5rem',
        }}
      >
        <img
          src={thumbnail}
          alt=""
          style={{ objectFit: 'contain', borderRadius: '2rem' }}
        />
      </Box>
      <Stack direction="row" justifyContent="flex-start" gap="2rem">
        <Stack direction="row" alignItems="center">
          {/* Un p'tit like <3 */}
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
            color={isLiked ? 'error' : 'default'}
          >
            <FavoriteIcon sx={{ fontSize: '2rem' }} />
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.5rem',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '2.6rem',
                letterSpacing: '-0.15px',
                color: 'primary.dark',
              }}
            >
              {/* Nombre de likes */}
              {users_liked?.length}
            </Typography>
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center">
          {/* Bouton commentaires */}
          <IconButton
            onClick={handleExpandClick}
            aria-label="down arrow icon"
            sx={{
              px: '2rem',
              py: '1rem',
              border: 1,
              borderColor: 'rgba(85, 85, 85, 0.20)',
              borderRadius: '9.5rem',
              gap: '1rem',
            }}
          >
            <img alt="Like" src={comment} />

            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.5rem',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '2.6rem',
                letterSpacing: '-0.15px',
                color: 'primary.dark',
              }}
            >
              {/* Nombre de commentaires */}
              {replies?.length}
            </Typography>
          </IconButton>
        </Stack>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AddCommentary id={id} />
        <ContentComment replies={replies} />
      </Collapse>
    </Box>
  );
}
