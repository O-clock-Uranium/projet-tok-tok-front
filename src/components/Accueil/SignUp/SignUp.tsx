import {
  Alert,
  Box,
  Button,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  useEffect,
  useState,
  MouseEvent,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { signup } from '../../../store/reducers/user';
import FormField from '../FormField/FormField';

interface AddressProps {
  properties: {
    label: string;
    city: string;
  };
  geometry: {
    coordinates: [number, number];
  };
}

export default function SignUp() {
  const errorMessage = useAppSelector((state) => state.user.error);

  // Stockage des valeurs à renseigner lors des appels API
  const [addressValue, setAddressValue] = useState('');
  const [addressProps, setAddressProps] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  /* State pour afficher ou non la liste des propositions */

  const dispatch = useAppDispatch();
  // Cet effet de bord se déclenche chaque fois que la valeur de l'input "adress" est modifiée
  useEffect(() => {
    // On recherche les 5 premières addresses correspondant à la valeur
    async function fetchAddress() {
      try {
        const { data } = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${addressValue}&limit=5&autocomplete=0`
        );
        // et on les stock dans un state pour les afficher ensuite
        setAddressProps(data.features);
      } catch (error) {
        // console.log(error);
      }
    }
    fetchAddress();
  }, [addressValue]);

  // On boucle sur la liste de 5 adresses pour les afficher
  const addressPropsList = addressProps.map((e: AddressProps) => {
    // Au clic sur l'une des adresses, on stocke les valeurs
    const handleClickAddressItem = (
      event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
    ) => {
      const target = event.currentTarget;
      setLatitude(target.dataset.latitude || '');
      setLongitude(target.dataset.longitude || '');
      setCity(target.dataset.city || '');
      setAddressValue(target.dataset.address || '');
      setIsEmpty(false);
    };

    // Gestion des événements clavier
    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        handleClickAddressItem(event);
      }
    };

    // On affiche un item pour chaque adresse de la liste
    return (
      <ListItemButton key={e.properties.label}>
        <div
          role="button"
          onClick={handleClickAddressItem}
          onKeyUp={handleKeyPress}
          onKeyDown={handleKeyPress}
          data-latitude={e.geometry.coordinates[1]}
          data-longitude={e.geometry.coordinates[0]}
          data-city={e.properties.city}
          data-address={e.properties.label}
          tabIndex={0}
        >
          <ListItemText primary={e.properties.label} />
        </div>
      </ListItemButton>
    );
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(signup(formData));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <FormField
        name="firstname"
        label="Prénom"
        type="text"
        autoComplete="family-name"
        required
      />
      <FormField
        name="lastname"
        label="Nom"
        type="text"
        autoComplete="given-name"
        required
      />
      <FormField
        name="address"
        label="Adresse"
        type="text"
        autoComplete="none"
        value={addressValue}
        onChange={handleChange}
        required
      />

      {isEmpty && addressPropsList}

      {/* ---------- input = champs cachés ---------- */}
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

      <FormField
        name="email"
        label="Email"
        type="mail"
        autoComplete=""
        required
      />
      <FormField
        name="password"
        label="Mot de passe"
        type="password"
        autoComplete="new-password"
        required
      />
      <FormField
        name="confirmation"
        label="Confirmation de mot de passe"
        type="password"
        autoComplete="new-password"
        required
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
