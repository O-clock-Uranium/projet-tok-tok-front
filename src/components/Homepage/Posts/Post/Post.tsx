import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import comment from '../../../../assets/icons/comment.svg';
import OneComment from './OneComment/OneComment';

import AddCommentary from './AddComment/AddComment';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// TODO Je ne sais pas ce que l'on fait de ce "theme" et "expand"
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

export default function Postv2() {
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
      <Stack paddingBottom="2.5rem" spacing={2} direction="row">
        <Avatar
          alt="Céline Dion"
          src="src/fakedata/cd.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <Stack direction="column">
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.6rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            Céline Dion
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
            Il y a 1 heure
          </Typography>
        </Stack>
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
        Hey regardez cette image de chat que j&apos;ai trouvé, c&apos;est trop
        des barres, non ? <br />
        Souuuuus le veeeeent~ Mes blessures, mes faiblesses /mes faiblesses/
        celles que j&apos;avouuuue, à demi mots...
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
        <img
          src="../../../src/fakedata/banane-chat.jpg"
          alt="Un chat à titre d'exemple"
          style={{ borderRadius: '2rem' }}
        />
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
              5.4k
            </Typography>
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center">
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
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
              238
            </Typography>
          </ExpandMore>
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
