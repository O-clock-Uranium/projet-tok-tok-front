import {
  Alert,
  Button,
  Chip,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import FormField from '../../Accueil/FormField/FormField';

export default function EditProfile() {
  const errorMessage = useAppSelector((state) => state.user.error);
  const user = useAppSelector((state) => state.user);

  const [addressValue, setAddressValue] = useState('');
  const [addressProps, setAddressProps] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    async function fetchAddress() {
      try {
        const { data } = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${addressValue}&limit=5&autocomplete=0`
        );
        setAddressProps(data.features);
      } catch (error) {
        // console.log(error);
      }
    }
    fetchAddress();
  }, [addressValue, addressProps]);

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
        key={e.properties.label}
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

  return (
    <>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <img
          src={user.thumbnail}
          alt="profile_picture"
          style={{
            width: '12.2rem',
            height: '12.2rem',
            objectFit: 'cover',
            borderRadius: '4rem',
            border: '0.5rem solid #FFF',
          }}
        />
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          hidden
        />
        <label htmlFor="thumbnail">
          <Chip
            sx={{
              cursor: 'pointer',
              color: '#03665C',
              borderColor: '#03665C',
              fontSize: '1.3rem',
            }}
            variant="outlined"
            color="primary"
            label="Changer la photo"
          />
        </label>
      </Stack>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Stack direction="row" gap={2}>
        <FormField
          name="lastname"
          label="Nom"
          type="text"
          autoComplete="family-name"
          placeholder={user.lastname}
        />
        <FormField
          name="firstname"
          label="Prénom"
          type="text"
          autoComplete="given-name"
          placeholder={user.firstname}
        />
      </Stack>

      <FormField
        name="description"
        label="Description"
        type="text"
        autoComplete="none"
        multiline
        rows={4}
        placeholder={user.description}
      />
      <FormField
        name="address"
        label="Adresse"
        type="text"
        autoComplete="none"
        placeholder={user.address}
        value={addressValue}
        onChange={(event: any) => {
          setAddressValue(event.currentTarget.value);
        }}
      />

      {isEmpty && addressPropsList}

      {/* ---------- champs cachés ---------- */}
      <input
        type="text"
        name="city"
        aria-label="city"
        value={city}
        hidden
        readOnly
      />
      <input
        type="text"
        name="latitude"
        aria-label="latitude"
        value={latitude}
        hidden
        readOnly
      />
      <input
        type="text"
        name="longitude"
        aria-label="longitude"
        value={longitude}
        hidden
        readOnly
      />

      <Stack direction="row" gap={2}>
        <FormField
          name="email"
          label="Email"
          type="mail"
          autoComplete="none"
          placeholder={user.email}
        />

        <FormField
          name="password"
          label="Mot de passe"
          type="password"
          autoComplete="none"
        />
      </Stack>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: 'primary.dark',
          textTransform: 'none',
          fontSize: '1.5rem',
          borderRadius: '1.3rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          mt: '1rem',
          p: '1.2rem',
          boxShadow: 0,
        }}
      >
        Enregister les modifications
      </Button>
    </>
  );
}
