import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

export default function OneComment() {
  return (
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
          src="../../../src/fakedata/ps.jpg"
          sx={{ marginLeft: 1, marginBottom: 1, width: 35, height: 35 }}
        />
        <Stack spacing={0} direction="column" flexGrow="1" alignItems="start">
          <Typography
            fontWeight="bold"
            sx={{ fontSize: '13px', color: 'primary' }}
          >
            Patrick Sébastien
          </Typography>
          <Typography sx={{ fontSize: '13px', color: 'primary' }}>
            il y a x minutes
          </Typography>
        </Stack>

        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <Typography sx={{ fontSize: '13px', color: 'primary' }} paragraph>
        Je te donne toutes mes différences Tous ces défauts qui sont autant de
        chance On sera jamais des standards, des gens bien comme il faut Je te
        donne ce que j&apos;ai, ce que je vaux
      </Typography>
    </Box>
  );
}
