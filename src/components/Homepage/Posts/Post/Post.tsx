import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Collapse from '@mui/material/Collapse';
import comment from '../../../../assets/icons/comment.svg';
import OneComment from './OneComment/OneComment';

import { Creator, Likes, Reply } from '../../../../@types/publication';
import TriplePointButton from '../../../TriplePointButton/TriplePointButton';
import AddCommentary from './AddComment/AddComment';

interface PublicationProps {
  id: number | null;
  content: string | null;
  thumbnail: string | null;
  user_id: number | null;
  created_at: number | null;
  reply_to: number | null;
  post_creator: Creator | null;
  users_liked: Likes[] | null;
  replies: Reply[] | null;
}

export default function Post({
  id,
  content,
  thumbnail,
  user_id,
  created_at,
  reply_to,
  post_creator,
  users_liked,
  replies,
}: PublicationProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLike(!like);
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
          src="src/fakedata/cd.jpg"
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
            Jean-Jacques Goldman
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
          <TriplePointButton />
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
            {/* // ! Problème c'est tout le bouton qui devient rouge et pas seulement le coeur */}
            <FavoriteIcon sx={{ fontSize: '2rem' }} />

            {/* // ! Je n'arrive pas à fill color le svg :/ */}
            {/* <img alt="Like" src={heart} /> */}

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
              450
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
             230
            </Typography>
          </IconButton>
        </Stack>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AddCommentary />
        <OneComment />
        <OneComment />
        <OneComment />
      </Collapse>
    </Paper>
  );
}
