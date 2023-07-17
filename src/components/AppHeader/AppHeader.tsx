import { Icon } from '@iconify/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Avatar,
  Badge,
  Box,
  CardMedia,
  IconButton,
  IconButtonProps,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import * as React from 'react';
import logo from '../../assets/toktok_logo.svg';
import SearchBar from './SearchBar';

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

export default function AppHeader() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: 100,
        p: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <CardMedia
          component="img"
          height="55.75"
          width="85"
          image={logo}
          alt="Logo TokTok"
          sx={{ width: '85px' }}
        />

        <SearchBar />

        {/* Icone */}
        <Stack spacing={2} direction="row">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={17} color="primary">
              <Icon icon="lucide:bell" />
            </Badge>
          </IconButton>

          {/* Avatar */}
          <Avatar
            alt="Jean-Jacques"
            src="public/fakedata/jjg.jpg"
            sx={{ width: 47, height: 47, mr: 10 }}
          />

          {/* Nom du gars + flèche */}
          <Typography
            sx={{
              mb: 0,
              pb: 0,
              fontFamily: 'Manrope',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            JJ Goldman
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ fontSize: '25px', color: 'black' }} />
            </ExpandMore>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
