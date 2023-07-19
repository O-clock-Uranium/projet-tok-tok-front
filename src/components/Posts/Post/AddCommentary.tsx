import { Box, Button, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

export default function AddCommentary() {
  return (
    <FormControl>
      <Box
        sx={{
          width: 780,
          mx: 'auto',
          p: '2.5rem',
          borderRadius: '95rem',
          backgroundColor: '#F5F6FA',
        }}
      >
        <TextField
          multiline
          maxRows={4}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button
                sx={{
                  ml: 'auto',
                  fontSize: 13,
                  backgroundColor: 'primary.dark',
                  color: 'white',
                  '&:active': {
                    bgcolor: 'primary.light',
                  },
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Send
              </Button>
            ),
          }}
        />
      </Box>
    </FormControl>
  );
}
