import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../../@types';
import { fetchProfile } from '../../../store/reducers/profile';
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
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);
  console.log(slug);
  console.log(userInfo);

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
        width: '82rem',
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
          src={userInfo?.banner}
          alt="banner"
          style={{
            width: '76rem',
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
            <ModeEditIcon sx={{ fontSize: '2rem' }} />
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
        direction="row"
        flex="1"
        alignItems="start"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          paddingLeft="2rem"
          gap="2rem"
          alignItems="start"
          height="5rem"
          position="relative"
        >
          {/* Photo de profil */}
          <img
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
          <Stack direction="column" justifyContent="center">
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
              Editer Profil
            </Button>
            <EditProfileModal open={open} setOpen={setOpen} />
          </>
        )}
      </Stack>

      {/* Description de l'utilisateur */}
      <Stack direction="row" width="75rem">
        <Typography
          fontFamily="Manrope"
          fontSize="1.8rem"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="150%"
          px="1rem"
        >
          {/* Blabla descriptif */}
          {userInfo.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
