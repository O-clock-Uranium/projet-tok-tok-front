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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import picture from '../../../assets/icons/picture.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { editAdvert, fetchAdverts } from '../../../store/reducers/adverts';
import FormField from '../../Accueil/FormField/FormField';

export default function EditAdvertModalForm() {
  const [categorie, setCategorie] = useState('');
  const advert = useAppSelector((state) => state.adverts);
  const { slug } = useParams();

  const dispatch = useAppDispatch();
  //   const handleOpen = () => setOpen(true);

  const handleChangeCategories = (event: SelectChangeEvent) => {
    setCategorie(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // SetTimeout pour permettre au back de processer une image
    dispatch(editAdverts(formData));
    await new Promise((resolve) => setTimeout(resolve, 800));
    // if (slug) {
    //   dispatch(fetchAdverts(slug));
    // }
    // dispatch(fetchAdverts());
  };

  return (
    <div>
      <Stack direction="column" justifyContent="center">
        {/* Titre */}
        <Typography id="modal-modal-title" fontSize="1.6rem">
          Editer l&apos;annonce
        </Typography>
        {/* Champ Titre */}
        <FormField
          name="title"
          label="Titre"
          type="text"
          autoComplete="none"
          placeholder={advert.title}
        />
        {/* Champ contenu */}
        <FormField
          name="content"
          label="Description"
          type="text"
          autoComplete="none"
          multiline
          rows={8}
          placeholder={advert.content}
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
            Ajouter une/des image(s)
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
            <MenuItem value={advert.tag}>
              <em>Catégories</em>
            </MenuItem>
            <MenuItem value={1}>maison</MenuItem>
            <MenuItem value={2}>jardin</MenuItem>
            <MenuItem value={3}>vetements</MenuItem>
          </Select>
        </FormControl>
        <FormField
          name="price"
          label="Prix"
          type="number"
          min="0"
          autoComplete="none"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
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
          Enregister les modifications
        </Button>
      </Stack>
    </div>
  );
}
