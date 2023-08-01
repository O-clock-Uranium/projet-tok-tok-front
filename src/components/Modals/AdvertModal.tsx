import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import picture from '../../assets/icons/picture.svg';
import { useAppDispatch } from '../../hooks/redux';
import { addAdvert, fetchAdverts } from '../../store/reducers/adverts';
import AddAdvertField from './AddAdvertField/AddAdvertField';

export default function AdvertModal2() {
  const [open, setOpen] = React.useState(false);
  const [categorie, setCategorie] = React.useState('');

  const dispatch = useAppDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(addAdvert(formData));
    dispatch(fetchAdverts());
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          color: '#fff',
          textTransform: 'none',
          fontSize: '1.5rem',
          borderRadius: '2rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          p: '2rem',
          height: '6rem',
          boxShadow: 0,
        }}
      >
        Créer une Annonce
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        component="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            margin: 'auto',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              width: '80%',
              m: 'auto',
              p: '5rem',
              borderRadius: '2rem',
            }}
          >
            {/* Titre */}
            <Typography id="modal-modal-title" fontSize="1.6rem">
              Créer une nouvelle annonce
            </Typography>
            {/* Champ Titre */}
            <AddAdvertField
              name="title"
              label="Titre"
              type="text"
              autoComplete="none"
            />
            {/* Champ contenu */}
            <AddAdvertField
              name="content"
              label="Description"
              type="text"
              autoComplete="none"
              multiline
              rows={8}
            />
            {/* Bouton ajout d'image */}
            <IconButton type="button" aria-label="images" sx={{ gap: '1rem' }}>
              <img alt="search icon" src={picture} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                <input
                  style={{ fontSize: '1.8rem' }}
                  type="file"
                  name="thumbnails"
                  multiple
                />
              </Typography>
            </IconButton>
            {/* Placement image */}
            <Stack py="2rem" direction="row" justifyContent="space-around">
              <Typography>apercu 1</Typography>
              <Typography>apercu 2</Typography>
              <Typography>apercu 2</Typography>
            </Stack>
            {/* Selecteur de catégories */}
            <FormControl sx={{ backgroundColor: '#F5F6FA' }} size="small">
              <Select
                labelId="select-categorie"
                name="tag_id"
                id="select-categorie"
                value={categorie}
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
            <AddAdvertField
              name="price"
              label="Prix"
              type="text"
              autoComplete="none"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: 'primary.dark',
                color: '#fff',
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
              Créer l&apos;annonce
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
