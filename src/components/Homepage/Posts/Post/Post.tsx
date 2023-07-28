import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

import { Publication } from '../../../../@types/publication';
import {
  addLike,
  delLike,
  fetchPosts,
} from '../../../../store/reducers/publications';

import comment from '../../../../assets/icons/comment.svg';
import TriplePointButton from '../../../TriplePointButton/TriplePointButton';

import AddCommentary from './AddComment/AddComment';
import ContentComment from './OneComment/ContentComment/ContentComment';

export default function Post({
  id,
  content,
  thumbnail,
  created_at,
  post_creator,
  users_liked,
  replies,
}: Publication) {
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const userId = useAppSelector((state) => state.user.id);

  const dispatch = useAppDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isLiked = users_liked
    ?.map((user) => user.id === userId)
    .some((ele) => ele === true);

  const handleLikeClick = () => {
    setLike(!like);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    like ? dispatch(delLike(id)) : dispatch(addLike(id));
    dispatch(fetchPosts());
  };

  return (
    <Paper
      elevation={0}
      sx={{ width: '82rem', mx: 'auto', p: '3rem', borderRadius: '2rem' }}
    >
      <Stack
        paddingBottom="2.5rem"
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        {/* Photo de profil */}
        <Avatar
          alt="Céline Dion"
          src={post_creator?.thumbnail}
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
            {post_creator?.firstname} {post_creator?.lastname}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.2rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {/* Date de création */}
            {created_at}
          </Typography>
        </Stack>
        <IconButton
          sx={{
            fontSize: '4.5rem',
            color: 'Black',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <TriplePointButton id={id} />
        </IconButton>
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
        variant="body2"
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
          // maxHeight: '65rem',
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
    </Paper>
  );
}
