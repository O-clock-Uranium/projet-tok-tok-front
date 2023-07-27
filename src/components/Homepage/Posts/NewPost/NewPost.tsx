import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import video from '../../../../assets/icons/camera.svg';
import picture from '../../../../assets/icons/picture.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addPost } from '../../../../store/reducers/publications';

function NewPost() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log('coucou');
    setValue('');

    const formData = new FormData(event.currentTarget);
    dispatch(addPost(formData));
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Box
      sx={{
        width: '82rem',
        p: '3rem',
        backgroundColor: 'white',
        mx: 'auto',
        borderRadius: '2rem',
      }}
    >
      <Stack gap="2rem" direction="row">
        <Avatar
          alt="Jean-Jacques Goldman"
          src={user.thumbnail}
          sx={{ width: 60, height: 60 }}
        />
        <Stack
          width="100%"
          direction="column"
          alignItems="flex-start"
          gap="2rem"
        >
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            sx={{
              width: '100%',
              borderRadius: '5rem',
              backgroundColor: '#F5F6FA',
              display: 'flex',
            }}
          >
            <InputBase
              name="content"
              multiline
              maxRows={6}
              fullWidth
              value={value}
              onChange={(event) => setValue(event.target.value)}
              sx={{
                fontFamily: 'DM Sans',
                ml: '2rem',
                p: '1.5rem',
                flex: 0.98,
                fontSize: '1.5rem',
                backgroundColor: '#F5F6FA',
                borderRadius: '9.5rem',
                color: '#888888',
                border: 'none',
                '& fieldset': { border: 'none' },
              }}
              placeholder="Quoi de neuf, Jean-Jacques ?"
              inputProps={{
                'aria-label': 'Champ de publication',
              }}
            />
            <Button
              type="submit"
              sx={{
                my: 'auto',
                p: '1rem 2rem',
                borderRadius: '5rem',
                backgroundColor: 'primary.dark',
                '&:hover': {
                  bgcolor: 'primary.light',
                },
                '&:active': {
                  bgcolor: 'primary',
                },
              }}
            >
              <Typography
                fontSize="1.5rem"
                color="white"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                fontFamily="DM Sans"
              >
                Publier
              </Typography>
            </Button>
          </Stack>
          <Stack direction="row" pl="2rem">
            <IconButton
              type="button"
              aria-label="images"
              sx={{ alignItems: 'center', gap: '1rem' }}
            >
              <img alt="search icon" src={picture} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Images
              </Typography>
            </IconButton>
            <IconButton
              type="button"
              aria-label="vidéos"
              sx={{ alignItems: 'center', gap: '1rem' }}
            >
              <img alt="search icon" src={video} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Vidéos
              </Typography>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NewPost;
