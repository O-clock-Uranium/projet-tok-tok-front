import { Box } from '@mui/material';
import React from 'react';

function Error() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img src="/illustatus.svg" alt="Error_404" style={{ width: '100rem' }} />
    </Box>
  );
}

export default Error;
