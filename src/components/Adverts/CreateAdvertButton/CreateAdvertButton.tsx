import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useState } from 'react';
import picture from '../../../assets/icons/picture.svg';
import { useAppDispatch, useAppSelector } from '../../../store/index';

export default function CreateAdvertButton() {
  const [Open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // catégories select
  const [categorie, setCategorie] = useState('');

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
  };

  // const dispatch = useAppDispatch();
  // // Submit
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   setOpen(false);

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   // TODO changer le nom en dessous
  //   dispatch(create(formData));
  // }

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(!Open)}
        sx={{
          backgroundColor: 'primary.dark',
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
      {/* <AdvertModal /> */}
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-advert-form"
        aria-describedby="modal-advert-form"
      >
        <Paper
          elevation={0}
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
            component="form"
            noValidate
            // onSubmit={handleSubmit}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Titre"
              name="title"
              sx={{ fontSize: '1.3rem' }}
            />
            {/* Champ contenu */}
            <TextField
              multiline
              rows={8}
              margin="normal"
              required
              fullWidth
              id="content"
              label="Description"
              name="content"
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
                Ajouter une ou des image(s)
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
                <MenuItem value={10}>Voitures</MenuItem>
                <MenuItem value={20}>Jouets</MenuItem>
                <MenuItem value={30}>Cuisine</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Prix"
              name="price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />

            <form
              // onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
              action="uploaddufichier"
            >
              <input
                style={{ fontSize: '1.8rem' }}
                type="file"
                name="monfichier"
                // onChange={(e) => setFile(e.target.files)}
                multiple
              />
            </form>

            <Button
              variant="contained"
              // onSubmit={handleSubmit}
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
        </Paper>
      </Modal>
    </>
  );
}
