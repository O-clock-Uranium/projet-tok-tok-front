import { Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
// import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import Informations from './Informations/Informations';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { fetchFavourites } from '../../store/reducers/adverts';

export default function Profile({id}) {
  const dispatch = useAppDispatch();

  return (
    <Stack paddingTop="12rem" gap="2rem">
      <Informations />
      {/* <ToggleButton /> */}
      {/* <AdvertCard /> */}
    </Stack>
  );
}
