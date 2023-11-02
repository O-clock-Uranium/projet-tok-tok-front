import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { useState } from 'react';
// import { useAppDispatch } from '../../../hooks/redux';
// import { fetchAdverts } from '../../../store/reducers/adverts';

export default function SortBar() {
  const [categorie, setCategorie] = useState('');
  const [distance, setDistance] = useState('');
  const [sort, setSort] = useState('');

  // const dispatch = useAppDispatch();

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
    // dispatch(fetchAdverts(category));
  };
  const handleChangeDistance = (event: SelectChangeEvent) => {
    setDistance(event.target.value);
    // dispatch(fetchAdverts(distance));
  };
  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    // dispatch(fetchAdverts(sortby));
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
      flex="1"
      sx={{
        width: '100%',
        height: '7rem',
        my: '2rem',
        borderRadius: '2rem',
        backgroundColor: 'white',
      }}
    >
      <Stack
        className="adverts-sortbar"
        direction="row"
        display="flex"
        alignItems="center"
        gap="2rem"
      >
        <FormControl
          className="adverts-formcontrol"
          sx={{
            m: 1,
            width: '10rem',
            backgroundColor: '#F5F6FA',
          }}
          size="small"
        >
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
            MenuProps={{
              disableScrollLock: true,
            }}
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
          className="adverts-formcontrol"
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
            MenuProps={{
              disableScrollLock: true,
            }}
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
        <FormControl
          className="adverts-formcontrol"
          sx={{
            m: 1,
            width: '10rem',
            backgroundColor: '#F5F6FA',
          }}
          size="small"
        >
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
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            <MenuItem value="">
              <em>Prix</em>
            </MenuItem>
            <MenuItem value={1}>Pas cher</MenuItem>
            <MenuItem value={2}>Cher</MenuItem>
            <MenuItem value={3}>Très cher</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <FormControl
        className="adverts-formcontrol"
        sx={{ m: 1, width: '10rem', backgroundColor: '#F5F6FA' }}
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
          MenuProps={{
            disableScrollLock: true,
          }}
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
