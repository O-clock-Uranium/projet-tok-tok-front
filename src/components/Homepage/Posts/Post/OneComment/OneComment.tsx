import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import TriplePointButton from '../../../../TriplePointButton/TriplePointButton';

export default function OneComment() {
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
            Patrick Sébastien
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
            Il y a 20 minutes
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
          J&apos;ai qu&apos;une chose à te dire Céline : <br />
          Ah si tu pouvais fermer ta gueule
          <br />
          Ça nous f&apos;rait des vacances
          <br />
          Ah si tu pouvais fermer ta gueule
          <br />
          Ça f&apos;rait du bien à la France
          <br />
        </Typography>
      </Box>
    </Paper>
  );
}
