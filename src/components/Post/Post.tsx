import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

import { Icon } from '@iconify/react';

import { red } from '@mui/material/colors';

function Post() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Icon
              icon="mingcute:more-2-fill"
              color="#ddd"
              width="48"
              height="48"
            />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Icon icon="uil:heart" color="#ddd" width="48" height="48" />
        </IconButton>
        <IconButton aria-label="share">
          <Icon
            icon="material-symbols:share"
            color="#ddd"
            width="48"
            height="48"
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
