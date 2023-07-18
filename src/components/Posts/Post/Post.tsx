import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import AddCommentary from './AddCommentary';
import OneComment from './OneComment';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OneCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <Card sx={{ maxWidth: 500, minWidth: 600, boxShadow: 0 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Jean-Jacques"
            src="src/fakedata/jjg.jpg"
            sx={{ width: 45, height: 45 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{
          fontFamily: 'Manrope',
          fontSize: '1.6rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
        subheaderTypographyProps={{
          fontFamily: 'Manrope',
          fontSize: '1.2rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
        title="Jean-Jacques Goldman"
        subheader="12 Septembre 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="../../../src/fakedata/banane-chat.jpg"
        alt="banana cat"
        sx={{
          x: '2rem',
          borderRadius: '2rem',
          borderColor: 'grey.200',
        }}
      />
      <CardContent sx={{ mb: 0, pb: 0 }}>
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
          color="text.primary"
        >
          Je te donne mes notes, je te donne mes mots Quand ta voix les emporte
          à ton propre tempo Une épaule fragile et solide à la fois Ce que
          j&apos;imagine et ce que je crois
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 1, pt: 0 }} disableSpacing>
        <IconButton
          aria-label="Like"
          onClick={handleLikeClick}
          color={like ? 'error' : 'default'}
        >
          <FavoriteIcon sx={{ fontSize: '30px' }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ fontSize: '30px' }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* Debut commentaire */}
        <OneComment />
        <OneComment />
        <OneComment />
        {/* <AddCommentary /> */}
      </Collapse>
    </Card>
  );
}
