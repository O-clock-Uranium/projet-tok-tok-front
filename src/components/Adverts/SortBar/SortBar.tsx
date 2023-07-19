import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Stack
} from '@mui/material';
import * as React from 'react';

function SortBar() {
  const [categorie, setCategorie] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [sort, setSort] = React.useState('');

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
  };
  const handleChangeDistance = (event: SelectChangeEvent) => {
    setDistance(event.target.value);
  };
  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <Paper
      sx={{
        width: '105rem',
        position: 'fixed',
        top: '21rem',
        left: '23rem',
        height: '5rem',
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-categorie-label">Catégories</InputLabel>
          <Select
            labelId="select-categorie"
            id="select-categorie"
            value={categorie}
            label="Catégories"
            onChange={handleChangeCategories}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Voitures</MenuItem>
            <MenuItem value={20}>Jouets</MenuItem>
            <MenuItem value={30}>Cuisine</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-distance-label">Distance</InputLabel>
          <Select
            labelId="select-distance"
            id="select-distance"
            value={distance}
            label="Distance"
            onChange={handleChangeDistance}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1km</MenuItem>
            <MenuItem value={20}>2km</MenuItem>
            <MenuItem value={30}>3km</MenuItem>
            <MenuItem value={40}>4km</MenuItem>
            <MenuItem value={50}>5km</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-sort-by-label">Sort by</InputLabel>
          <Select
            labelId="select-sort-by"
            id="select-sort-by"
            value={sort}
            label="Sort by"
            onChange={handleChangeSortBy}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>Prix</MenuItem>
            <MenuItem value={30}>Distance</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
}

export default SortBar;
