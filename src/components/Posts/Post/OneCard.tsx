import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { Stack } from '@mui/system';
import AddCommentary from './AddCommentary';

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
    <Card sx={{ maxWidth: 500, minWidth: 600 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Jean-Jacques"
            src="public/fakedata/jjg.jpg"
            sx={{ width: 45, height: 45 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ fontWeight: 'bold', fontSize: 16 }}
        subheaderTypographyProps={{ fontSize: 14 }}
        title="Jean-Jacques Goldman"
        subheader="12 Septembre 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="fakedata/banane-chat.jpg"
        alt="banana cat"
        sx={{ borderTop: 1, borderBottom: 1, borderColor: 'grey.200' }}
      />
      <CardContent>
        <Typography sx={{ fontSize: 16 }} variant="body2" color="text.primary">
          Je te donne mes notes, je te donne mes mots Quand ta voix les emporte
          à ton propre tempo Une épaule fragile et solide à la fois Ce que
          j'imagine et ce que je crois
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Like"
          onClick={handleLikeClick}
          color={like ? 'error' : 'disabled'}
        >
          {/* il est pas content au dessus à cause du "disabled", p'tet faire
          des variables pour "like" "notlike" */}
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
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'grey.200',
            paddingTop: 1,
            marginLeft: 1,
          }}
        >
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Avatar
              src="public/fakedata/ps.jpg"
              sx={{ marginLeft: 1, marginBottom: 1, width: 35, height: 35 }}
            />
            <Stack
              spacing={0}
              direction="column"
              flexGrow="1"
              alignItems="start"
            >
              <Typography
                fontWeight="bold"
                sx={{ fontSize: '13px', color: 'neutral.darkBlue' }}
              >
                Patrick Sébastien
              </Typography>
              <Typography sx={{ color: 'neutral.grayishBlue' }}>
                14/07/2023
              </Typography>
            </Stack>

            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Stack>

          <Typography paragraph>
            Je te donne toutes mes différences Tous ces défauts qui sont autant
            de chance On sera jamais des standards, des gens bien comme il faut
            Je te donne ce que j'ai, ce que je vaux
          </Typography>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'grey.200', paddingTop: 2 }}>
          <Typography paragraph>
            I can give you the force of my ancestral pride The will to go on
            when I'm hurt deep inside Whatever the feeling, whatever the way It
            helps me go on from day to day
          </Typography>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'grey.200', paddingTop: 2 }}>
          <Typography paragraph>
            Je te donne nos doutes et notre indicible espoir Les questions que
            les routes ont laissées dans l'histoire Nos filles sont brunes et
            l'on parle un peu fort Et l'humour et l'amour sont nos trésors
          </Typography>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'grey.200', paddingTop: 2 }}>
          <Typography paragraph>
            Je te donne toutes mes différences Tous ces défauts qui sont autant
            de chance On sera jamais des standards, des gens bien comme il faut
            Je te donne ce que j'ai, ce que je vaux
          </Typography>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'grey.200', paddingTop: 2 }}>
          <Typography paragraph>
            Je te donne, donne, donne ce que je suis I can give you my voice,
            bred with rhythm and soul Je te donne mes notes, je te donne ma voix
            The songs that I love, and the stories I've told Ce que j'imagine et
            ce que je crois
          </Typography>
        </Box>

        <AddCommentary />
      </Collapse>
    </Card>
  );
}
