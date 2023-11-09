import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { User } from '../../../@types';
import EditProfileModal from '../../Modals/EditProfileModal/EditProfileModal';
import EditBannerModal from './EditBannerModal/EditBannerModal';

interface InformationsProps {
  userInfo: User;
  currentUserSlug: string;
}

export default function Informations({
  userInfo,
  currentUserSlug,
}: InformationsProps) {
  const [open, setOpen] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);

  const isMine = (slugToTest: string) => {
    return userInfo.slug === slugToTest;
  };
  const handleSettings = () => {
    setOpen(true);
  };
  const handleOpenBanner = () => {
    setOpenBanner(true);
  };

  return (
    <Stack
      sx={{
        width: '100%',
        padding: '3rem',
        margin: 'auto',
        direction: 'column',
        alignItmes: 'center',
        gap: '2.6rem',
        backgroundColor: '#fff',
        borderRadius: '2rem',
      }}
    >
      {/* Bannière */}
      <Stack sx={{ position: 'relative' }}>
        <img
          className="profile-banner"
          src={userInfo?.banner}
          alt="banner"
          style={{
            height: '17rem',
            objectFit: 'cover',
            borderRadius: '2rem',
          }}
        />
        {/* On vérifie si on est sur notre propre profil */}
        {isMine(currentUserSlug) && (
          <IconButton
            onClick={handleOpenBanner}
            component="label"
            sx={{
              position: 'absolute',
              left: '94%',
              top: '5%',
              color: '#02B8AC',
            }}
          >
            <ModeEditIcon
              className="profile-edit-banner"
              sx={{ fontSize: '2rem !important' }}
            />
          </IconButton>
        )}

        {/* Fermée par défaut et s'affiche au click sur l'icon au-dessus */}
        <EditBannerModal
          openBanner={openBanner}
          setOpenBanner={setOpenBanner}
        />
      </Stack>

      {/* Photo de profil + nom + bouton edit */}
      <Stack
        className="profile-informartions-container"
        direction="row"
        flex="1"
        alignItems="start"
        justifyContent="space-between"
      >
        <Stack
          className="profile-information"
          direction="row"
          paddingLeft="2rem"
          gap="2rem"
          alignItems="start"
          height="5rem"
          position="relative"
        >
          {/* Photo de profil */}
          <img
            className="profile-avatar"
            src={userInfo?.thumbnail}
            alt="profile_picture"
            style={{
              position: 'relative',
              top: '-8rem',
              width: '12.2rem',
              height: '12.2rem',
              objectFit: 'cover',
              borderRadius: '4rem',
              border: '0.5rem solid #FFF',
            }}
          />
          <Stack
            direction="column"
            justifyContent="center"
            className="profile-name-city"
            /* className="profile-information-name"
            direction="column"
            justifyContent="center"
*/
          >
            {/* Nom de l'utilisateur */}
            <Typography
              fontFamily="Manrope"
              fontSize="2rem"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
            >
              {userInfo.firstname} {userInfo.lastname}
            </Typography>
            {/* Ville de l'utilisateur */}
            <Typography
              className="profile-city"
              fontFamily="Manrope"
              fontSize="1.6rem"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              color="#888"
              sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RoomTwoToneIcon sx={{ fontSize: '1.8rem', color: '#888' }} />
              {userInfo.city}
            </Typography>
          </Stack>
        </Stack>

        {/* Boutton edit s'il s'agit du profil user loggued sinon bouton message ?? */}
        {isMine(currentUserSlug) && (
          <>
            <Button
              onClick={handleSettings}
              sx={{
                px: '2rem',
                py: '1rem',
                backgroundColor: 'primary.dark',
                color: 'white',
                fontSize: '1.8rem',
                borderRadius: '5rem',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <Typography
                className="edit-typo"
                fontFamily="Manrope"
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="normal"
                color="#fff"
              >
                Editer Profil
              </Typography>
              <ModeEditIcon
                className="edit-icon"
                sx={{
                  display: 'none',
                  fontSize: '2rem',
                }}
              />
            </Button>
            <EditProfileModal open={open} setOpen={setOpen} />
          </>
        )}
      </Stack>

      {/* Description de l'utilisateur */}
      <Stack direction="row">
        <Typography
          className="profile-information-description"
          fontFamily="Manrope"
          fontSize="1.8rem"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="150%"
          px="1rem"
          width="100%"
        >
          {/* Blabla descriptif */}
          {userInfo.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
