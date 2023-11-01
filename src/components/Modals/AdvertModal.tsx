import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
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
import { useEffect } from 'react';
import axiosInstance from '../../utils/axios';

import '../App/style.scss';

export default function AdvertModal2() {
  const [open, setOpen] = React.useState(false);
  const [categorie, setCategorie] = React.useState('');
  const [categorieList, setCategorieList] = React.useState([]);

  const dispatch = useAppDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const { data } = await axiosInstance.get('/categories');
        setCategorieList(data);
      };
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(addAdvert(formData));
    // SetTimeout pour permettre au back de processer une image
    await new Promise((resolve) => setTimeout(resolve, 800));
    dispatch(fetchAdverts());
    setOpen(false);
    setCategorie('');
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
          color: '#fff',
          fontSize: '1.5rem',
          borderRadius: '2rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          p: '1rem 2rem',
          height: '7rem',
          // boxShadow: 0,
          border: '0px',
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
          className="edit-modal"
          sx={{
            backgroundColor: 'transparent',
            margin: 'auto',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            //minWidth: '400px'
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
            <IconButton
              component="label"
              type="button"
              aria-label="images"
              sx={{
                alignItems: 'center',
                gap: '1rem',
                '&:hover': {
                  borderRadius: '5rem',
                },
              }}
            >
              <img alt="add pictures" src={picture} />
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
                  hidden
                />
                Ajouter une image
              </Typography>
            </IconButton>
            {/* Placement image */}
            <Stack py="2rem" direction="row" justifyContent="space-around">
              {/* <Typography>apercu 1</Typography>
              <Typography>apercu 2</Typography>
              <Typography>apercu 2</Typography> */}
            </Stack>
            {/* Selecteur de catégories */}
            <FormControl sx={{ backgroundColor: '#F5F6FA' }} size="small">
              <InputLabel id="select-categorie">Catégories</InputLabel>
              <Select
                labelId="select-categorie"
                name="tag_id"
                id="select-categorie"
                value={categorie}
                label="Catégories"
                onChange={handleChangeCategories}
                input={<OutlinedInput />}
                inputProps={{ 'aria-label': 'Without label' }}
                required
              >
                {categorieList.map((cat: any) => {
                  return (
                    <MenuItem key={cat.name} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <AddAdvertField
              name="price"
              label="Prix"
              type="number"
              min="0"
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
