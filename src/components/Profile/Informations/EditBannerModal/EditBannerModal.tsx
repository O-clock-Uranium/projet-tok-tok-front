import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Box, Button, Chip, Modal, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchProfile } from '../../../../store/reducers/profile';
import { editBanner } from '../../../../store/reducers/user';

interface EditBannerModalProps {
  openBanner: boolean;
  setOpenBanner: Dispatch<SetStateAction<boolean>>;
}

export default function EditBannerModal({
  openBanner,
  setOpenBanner,
}: EditBannerModalProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const handleCloseBanner = () => setOpenBanner(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(editBanner(formData));
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 800));
    dispatch(fetchProfile(user.slug));
    setOpenBanner(false);
  };

  return (
    <Modal
      open={openBanner}
      onClose={handleCloseBanner}
      component="form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      aria-labelledby="modal-modal-profile"
      aria-describedby="modal-modal-edit"
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
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="2rem"
          >
            {/* Image actuelle de bannière */}
            <img
              src={user.banner}
              alt="profile_banner"
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '4rem',
                border: '0.5rem solid #FFF',
              }}
            />
            {/* L'input caché pour soumettre une photo */}
            <input
              type="file"
              id="banner"
              name="banner"
              accept="image/*"
              hidden
            />
            {/* La "chip" affiché comme label de l'input */}
            <label htmlFor="banner">
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
            {/* Bouton submit */}
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
              Enregister la bannière
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}
