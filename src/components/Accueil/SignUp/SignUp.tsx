import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { signup } from '../../../store/reducers/user';
import FormField from '../FormField/FormField';
import axios from 'axios';

export default function SignUp() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const [addressValue, setAddressValue] = useState('');
  const [addressProps, setAddressProps] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchAddress() {
      try {
        const { data } = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${addressValue}&limit=5&autocomplete=0`
        );
        setAddressProps(data.features);
        console.log(addressProps);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAddress();
  }, [addressValue]);

  const addressPropsList = addressProps.map((e: any) => {
    const handleClickAddressItem = (e: any) => {
      setLatitude(e.currentTarget.dataset.latitude);
      setLongitude(e.currentTarget.dataset.longitude);
      setCity(e.currentTarget.dataset.city);
      setAddressValue(e.currentTarget.dataset.address);
      setIsEmpty(false);
    };

    return (
      <ListItemButton
        onClick={handleClickAddressItem}
        data-latitude={e.geometry.coordinates[1]}
        data-longitude={e.geometry.coordinates[0]}
        data-city={e.properties.city}
        data-address={e.properties.label}
      >
        <ListItemText primary={e.properties.label} />
      </ListItemButton>
    );
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(signup(formData));
  };

  const handleChange = (event: any) => {
    setAddressValue(event.target.value);
  };

  useEffect(() => {
    if (!isLogged) {
      // return <Navigate to="/" replace />;
      navigate('/', { replace: true });
    } else {
      navigate('/profil', { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <FormField
        name="firstname"
        label="Nom"
        type="text"
        autoComplete="family-name"
      />
      <FormField
        name="lastname"
        label="Prénom"
        type="text"
        autoComplete="given-name"
      />
      <FormField
        name="address"
        label="Adresse"
        type="text"
        autoComplete="none"
        value={addressValue}
        onChange={handleChange}
      />

      {isEmpty && addressPropsList}

      {/* ---------- champs cachés ---------- */}
      <input
        type="text"
        name="city"
        aria-label="city"
        value={city}
        hidden
        readOnly={true}
      />
      <input
        type="text"
        name="latitude"
        aria-label="latitude"
        value={latitude}
        hidden
        readOnly={true}
      />
      <input
        type="text"
        name="longitude"
        aria-label="longitude"
        value={longitude}
        hidden
        readOnly={true}
      />

      <FormField name="email" label="Email" type="mail" autoComplete="" />
      <FormField
        name="password"
        label="Mot de passe"
        type="password"
        autoComplete="new-password"
      />
      <FormField
        name="confirmation"
        label="Confirmation de mot de passe"
        type="password"
        autoComplete="new-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, color: 'white', fontSize: '1.3rem' }}
      >
        S&apos;inscrire
      </Button>
    </Box>
  );
}
