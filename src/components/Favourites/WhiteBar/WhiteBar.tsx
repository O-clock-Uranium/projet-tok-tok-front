import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import { Stack, Typography } from '@mui/material';

function WhiteBar() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
      flex="1 0 0"
      //! 100% width pour facilitier les choses
      sx={{
        width: '100rem',
        height: '6.7rem',
        my: '2rem',
        borderRadius: '2rem',
        backgroundColor: 'white',
      }}
    >
      <BookmarkSharpIcon sx={{ fontSize: '3rem', color: '#03665C' }} />
      {/* //! craquage sur les icons... j'avoue */}
      <Typography
        sx={{
          alignItems: 'center',
          fontSize: '1.8rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          p: '1rem',
        }}
      >
        Favoris
      </Typography>
    </Stack>
  );
}

export default WhiteBar;
