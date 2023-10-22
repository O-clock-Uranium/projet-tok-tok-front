import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import search from '../../../assets/icons/search.svg';

import './style.scss'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  // TODO le submit après une recherche
  /* // function handleSubmit(event: any) {
  //   if (!searchTerm.trim().length) {
  //    return;
  //   }
  //   fetchqqc();  Changer quand branché au back
  // }
 */

  return (
    <Paper
    className='searchbar-container'
      elevation={0}
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
