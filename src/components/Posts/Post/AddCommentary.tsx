import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';

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
            <Button
              sx={{
                ml: 'auto',
                fontSize: 13,
                backgroundColor: '#49c1ad',
                '&:hover': {
                  bgcolor: '#82d4c6',
                },
              }}
            >
              Send
            </Button>
          </Box>
        }
        sx={{
          m: 1,
          minWidth: 300,
          fontSize: 13,
        }}
      />
    </FormControl>
  );
}
