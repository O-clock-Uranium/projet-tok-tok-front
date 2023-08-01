import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import * as React from 'react';

export default function SortBar() {
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
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
      flex="1 0 0"
      //! 100% width pour facilitier les choses
      sx={{
        width: '100rem',
        height: '7rem',
        my: '2rem',
        borderRadius: '2rem',
        backgroundColor: 'white',
      }}
    >
      <Stack direction="row" display="flex" alignItems="center" gap="2rem">
        <FormControl
          sx={{
            m: 1,
            width: '10rem',
            backgroundColor: '#F5F6FA',
          }}
          size="small"
        >
          {/* //! Attention, scroll bar au click qui apparait */}
          <Select
            labelId="select-categorie"
            id="select-categorie"
            value={categorie}
            name="tag_id"
            label="Catégories"
            onChange={handleChangeCategories}
            displayEmpty
            input={<OutlinedInput />}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>Catégories</em>
            </MenuItem>
            <MenuItem value={1}>maison</MenuItem>
            <MenuItem value={2}>jardin</MenuItem>
            <MenuItem value={3}>vetements</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            width: '10rem',
            backgroundColor: '#F5F6FA',
          }}
          size="small"
        >
          <Select
            labelId="select-distance"
            id="select-distance"
            value={distance}
            label="Distance"
            onChange={handleChangeDistance}
            displayEmpty
            input={<OutlinedInput />}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>Distance</em>
            </MenuItem>
            <MenuItem value={10}>1km</MenuItem>
            <MenuItem value={20}>2km</MenuItem>
            <MenuItem value={30}>3km</MenuItem>
            <MenuItem value={40}>4km</MenuItem>
            <MenuItem value={50}>5km</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <FormControl
        sx={{ m: 1, minWidth: 120, backgroundColor: '#F5F6FA' }}
        size="small"
      >
        <Select
          labelId="select-sort-by"
          id="select-sort-by"
          value={sort}
          label="Sort by"
          onChange={handleChangeSortBy}
          displayEmpty
          input={<OutlinedInput />}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Sort By</em>
          </MenuItem>
          <MenuItem value={10}>Date</MenuItem>
          <MenuItem value={20}>Prix</MenuItem>
          <MenuItem value={30}>Distance</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
