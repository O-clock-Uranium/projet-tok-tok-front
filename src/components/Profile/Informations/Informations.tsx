import { Button, Stack, Typography } from '@mui/material';
import { User } from '../../../@types';
import React from 'react';
import { useParams } from 'react-router-dom';

interface InformationsProps {
  userInfo: User;
}

export default function Informations({ userInfo }: InformationsProps) {
  const { id } = useParams();

  const isMine = (idToTest:string) => {
    return userInfo.id === Number(idToTest);
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
      <Stack>
        <img
          src="../../../src/fakedata/banner.jpg"
          alt="banner"
          style={{
            width: '76rem',
            height: '17rem',
            objectFit: 'cover',
            borderRadius: '2rem',
          }}
        />
      </Stack>
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
        >
          <img
            src={userInfo.thumbnail}
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
          <Typography
            fontFamily="Manrope"
            fontSize="2rem"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            {' '}
            {userInfo.firstname} {userInfo.lastname}
          </Typography>
        </Stack>

        {isMine(id) && (
          <Button
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
        )}
      </Stack>
      <Stack direction="row" width="75rem">
        <Typography
          fontFamily="Manrope"
          fontSize="1.8rem"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="150%"
          px="1rem"
        >
          {userInfo.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
