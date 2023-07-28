import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import { Reply } from '../../../../../@types/publication';
import TriplePointButton from '../../../../TriplePointButton/TriplePointButton';

// export interface ReplyProps {
//   id: number | null;
//   content: string | null;
//   thumbnail: string | null;
//   user_id: number | null;
//   created_at: number | null;
//   reply_to: number | null;
//   post_creator: Creator | null;
//   users_liked: Likes[] | null;
//   replies: Reply[] | null;
// }

export default function OneComment({
  id,
  content,
  thumbnail,
  user_id,
  created_at,
  reply_to,
  post_creator,
  users_liked,
  replies,
}: Reply) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '99%',
        py: '2.5rem',
        px: '0.8rem',
        borderRadius: '2rem',
      }}
    >
      <Stack
        paddingBottom="2.5rem"
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        <Avatar
          alt="Patrick Sebastien"
          src="../../src/fakedata/ps.jpg"
          sx={{ width: 45, height: 45 }}
        />
        <Stack direction="column" flex="1">
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.6rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            {user_id}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '1.2rem',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              color: '#A5A5A5',
            }}
          >
            {created_at}
          </Typography>
        </Stack>
        <TriplePointButton />
      </Stack>
      <Box
        sx={{
          py: '1rem',
          px: '2rem',
          alignItems: 'center',
          borderRadius: '2rem',
          backgroundColor: '#F5F6FA',
          w: '80rem',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'DM Sans',
            fontSize: '1.5rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '2.6rem',
            letterSpacing: '-0.15px',
          }}
        >
          {content}
        </Typography>
      </Box>
    </Paper>
  );
}
