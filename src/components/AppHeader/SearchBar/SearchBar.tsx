import { SetStateAction, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import search from '../../../assets/icons/search.svg';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Paper
      className="searchbar-container"
      elevation={0}
      sx={{
        p: '0px 0px 0px 10px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        borderRadius: 95,
        border: 1,
        borderColor: 'rgba(85,85,85,0.2)',
      }}
    >
      <IconButton
        type="button"
        sx={{ m: '0px 0px 0px 10px', color: 'primary.dark' }}
        aria-label="search"
      >
        <img alt="search icon" src={search} height={18} width={18} />
      </IconButton>
      <InputBase
        sx={{
          fontFamily: 'Manrope',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: 300,
          lineHeight: '2.6rem',
          letterSpacing: -0.15,
          width: 1,
        }}
        placeholder="Rechercher..."
        inputProps={{ 'aria-label': 'Rechercher...' }}
        value={searchTerm}
        onChange={handleChange}
        // onSubmit={handleSubmit}
      />
    </Paper>
  );
}
