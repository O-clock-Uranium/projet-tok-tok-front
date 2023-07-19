import { Avatar, Box, IconButton, InputBase, Stack } from '@mui/material';
import send from '../../../assets/icons/paper_plane.svg';

export default function AddCommentary2() {
  return (
    <Box sx={{ width: '99%', pt: '4.5rem', pb: '2rem', px: '0.8rem' }}>
      <Stack spacing={2} direction="row">
        <Avatar
          alt="Jean-Jacques Goldman"
          src="src/fakedata/jjg.jpg"
          sx={{ width: 45, height: 45 }}
        />
        <Box
          component="form"
          sx={{
            width: '100%',
            borderRadius: '2rem',
            backgroundColor: '#F5F6FA',
            display: 'flex',
          }}
        >
          <InputBase
            multiline
            maxRows={6}
            fullWidth
            sx={{
              px: '2rem',
              py: '1rem',
              flex: 0.98,
              fontSize: '1.3rem',
            }}
            placeholder="Ecrire un commentaire...."
            inputProps={{ 'aria-label': 'Ajouter un commentaire' }}
          />

          <IconButton
            sx={{
              my: 'auto',
              maxHeight: '5.2rem',
              p: '0.1rem',
              borderRadius: '5rem',
              backgroundColor: 'primary.dark',
              '&:hover': {
                bgcolor: 'primary.light',
              },
              '&:active': {
                bgcolor: 'primary',
              },
            }}
          >
            <img alt="Send" src={send} style={{ padding: '1rem' }} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
