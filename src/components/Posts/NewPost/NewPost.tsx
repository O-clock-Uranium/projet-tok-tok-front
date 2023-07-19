import { Avatar, Box, Button, InputBase, Stack } from "@mui/material";

function NewPost() {
  return (
    <Box sx={{ width: '99%', py: '2.5rem', px: '0.8rem' }}>
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
            borderRadius: '50rem',
            backgroundColor: '#F5F6FA',
            display: 'flex',
          }}
        >
          <InputBase
            multiline
            maxRows={6}
            fullWidth
            sx={{ ml: 1, p: 1, flex: 1, fontSize: '1.3rem' }}
            placeholder="Ecrire un commentaire...."
            inputProps={{ 'aria-label': 'search google maps' }}
          />

          <Button
            sx={{
              px: '1rem',
              py: '0.8rem',
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
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default NewPost;
