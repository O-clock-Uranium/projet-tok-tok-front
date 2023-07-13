import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import * as React from 'react';

export default function AddCommentary() {
  return (
    <FormControl>
      <Textarea
        placeholder="Ecrire un commentaire..."
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
              margin: '1px',
            }}
          >
            <Button sx={{ ml: 'auto' }}>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
        }}
      />
    </FormControl>
  );
}
