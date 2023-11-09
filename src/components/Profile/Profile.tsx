import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProfile } from '../../store/reducers/profile';
import ContentAdvert from '../Adverts/ContentAdvert/ContentAdvert';
import ContentPost from '../Posts/Post/ContentPost/ContentPost';
import Informations from './Informations/Informations';
import Toggle from './Toggle';

export default function Profile() {
  const user = useAppSelector((state) => state.profile);
  const currentUserSlug = useAppSelector((state) => state.user.slug);
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const [display, setDisplay] = useState('publications');
  const context = 'profile';

  // On filtre les réponses parmi toutes les publications
  const userPosts = user.posts.filter((p) => {
    return p.reply_to === null;
  });

  if (!slug) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  useEffect(() => {
    dispatch(fetchProfile(slug));
  }, [dispatch, slug]);

  return (
    <Stack
      className="profile-container"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ py: '13rem' }}
      width="82rem"
      mx="auto"
    >
      {/* Banniere + infos profil + bouton edit */}
      <Informations userInfo={user} currentUserSlug={currentUserSlug} />

      {/* Toggle button Publications / Annonces */}
      <Stack className="profile-toggle-button" direction="row" paddingY="2rem">
        <Toggle display={display} setDisplay={setDisplay} />
      </Stack>
      <Stack width="100%">
        {/* Publications ou Adverts */}
        {display === 'publications' &&
          // Publications ou non
          (user.posts.length === 0 ? (
            <Typography
              variant="h5"
              component="p"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                fontSize: '2rem',
              }}
            >
              Il semble que cet utilisateur n&apos;ait rien posté pour le moment
              !
            </Typography>
          ) : (
            <ContentPost publications={userPosts} />
          ))}

        {display === 'annonces' &&
          (user.adverts.length === 0 ? (
            <Typography
              variant="h5"
              component="p"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                fontSize: '2rem',
              }}
            >
              Il semble que cet utilisateur n&apos;ait pas d&apos;annonces pour
              le moment !
            </Typography>
          ) : (
            <ContentAdvert adverts={user.adverts} context={context} />
          ))}
      </Stack>
    </Stack>
  );
}
