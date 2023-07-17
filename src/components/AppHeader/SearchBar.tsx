import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function SearchBar() {
  //   const [searchTerm, setSearchTerm] = useState('');

  //   const handleChange = (event: {
  //     target: { value: SetStateAction<string> };
  //   }) => {
  //     setSearchTerm(event.target.value);
  //   };

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        p: '0px 0px 0px 10px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        borderRadius: 95,
        border: 1,
        borderColor: 'rgba(85,85,85,0.2)',
      }}
      //   value={searchTerm}
      //   onChange={handleChange}
    >
      <IconButton
        type="button"
        sx={{ m: '0px 0px 0px 10px', color: 'primary.dark' }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          fontFamily: 'Manrope',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 26 /* 173.333% */,
          letterSpacing: -0.15,
        }}
        placeholder="Rechercher..."
        inputProps={{ 'aria-label': 'Rechercher...' }}
      />
    </Paper>
  );
}
