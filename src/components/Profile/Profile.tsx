import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import AdvertCard from '../Adverts/Advert/Advert';
// import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import { User } from '../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavourites } from '../../store/reducers/adverts';
import Informations from './Informations/Informations';

export default function Profile() {
  const dispatch = useAppDispatch();

  return (
    <Stack paddingTop="12rem" gap="2rem">
      <Informations />
      {/* <ToggleButton /> */}
      {/* <AdvertCard /> */}
    </Stack>
  );
}
