import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Collapse from '@mui/material/Collapse';
import comment from '../../../../assets/icons/comment.svg';

import { Publication } from '../../../../@types/publication';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addLike, delLike } from '../../../../store/reducers/publications';
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

  const hasLiked = users_liked.find((user) => user.user_id == userId);
  console.log(hasLiked);

  const handleLikeClick = () => {
    setLike(!like);
    like ? dispatch(delLike(id)) : dispatch(addLike(id));
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
            {created_at}
          </Typography>
        </Stack>
        <IconButton sx={{ fontSize: '4.5rem', color: 'Black' }}>
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
        {content}
      </Typography>
      <Box
        sx={{
          maxWidth: 760,
          mx: 'auto',
          borderRadius: '2rem',
          pt: '2rem',
          pb: '2.5rem',
        }}
      >
        <img src={thumbnail} alt="" style={{ borderRadius: '2rem' }} />
      </Box>
      <Stack direction="row" justifyContent="flex-start" gap="2rem">
        <Stack direction="row" alignItems="center">
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
            color={like ? 'error' : 'default'}
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
              {users_liked?.length}
            </Typography>
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center">
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
