import { Box, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/messagerie';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';

import { Icon } from '@iconify/react';

import '../App/style.scss';

export default function Messagerie() {
  const [destinataireId, setDestinataireId] = useState(0);
  const [destinataireName, setDestinataireName] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.messagerie.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="messages-container">
        {contacts.length > 0 ? (
          <Stack
            direction="row"
            sx={{
              height: '100%',
              borderRadius: '1rem',
            }}
          >
            {/* Liste de contacts */}
            <div
              style={{
                backgroundColor: '#03665c',
                borderRadius: '12px',
                maxWidth: '30%',
              }}
              className={
                isOpen ? 'messages-contacts--open' : 'messages-contacts'
              }
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                  marginTop: '10px',
                }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon
                  className={
                    !isOpen
                      ? 'open-contact-button'
                      : 'open-contact-button--is-open'
                  }
                  icon="solar:alt-arrow-right-line-duotone"
                  color="#fff"
                  fontSize={'42px'}
                />
              </div>
              <div
                style={
                  isOpen
                    ? {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        width: '300px',
                        height: '100%',
                        padding: '1rem',
                      }
                    : { display: 'none' }
                }
              >
                <div>
                  <MenuContact
                    contacts={contacts}
                    destinataireId={destinataireId}
                    setDestinataireId={setDestinataireId}
                    destinataireName={destinataireName}
                    setDestinataireName={setDestinataireName}
                  />
                </div>
              </div>
            </div>

            <div
              className={
                isOpen ? 'messages-content--close' : 'messages-content'
              }
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '70%',
                height: '100%',
              }}
            >
              <Stack
                direction="row"
                sx={{
                  backgroundColor: '#fff',
                  p: '1rem',
                  mb: '0.5rem',
                  pl: '2rem',
                  borderRadius: '1rem',
                }}
              >
                <Typography
                  sx={{
                    color: 'primary.dark',
                    height: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '2rem',
                    fontFamily: 'DM Sans',
                  }}
                >
                  {destinataireName}
                </Typography>
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  p: '2rem',
                  borderRadius: '1rem',
                  height: '89.2%',

                  // '&::-webkit-scrollbar': {
                  //   width: '1rem',
                  //   backgroundColor: '#F5F5F5',
                  // },
                  // '&::-webkit-scrollbar-track': {
                  //   '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
                  //   backgroundColor: '#49c1ad',
                  //   borderRadius: '10px',
                  // },
                  // '&::-webkit-scrollbar-thumb': {
                  //   backgroundColor: '#03665C',
                  //   borderRadius: '25px',
                  // },
                }}
              >
                <Messages />
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                >
                  <Form destinataireId={destinataireId} />
                </Stack>
              </Paper>
            </div>

            <div></div>
          </Stack>
        ) : (
          /* Composant quand pas de messages ------------------------*/
          <Box
            width="80%"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '2rem',
              margin: 'auto',
              padding: '2rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                p: '1rem',
              }}
            >
              Vous navez pas encore de messages ? <br />
              Cliquez sur le bouton "contacter le vendeur" dans une annonce pour
              que vos différentes conversations s&apos;affichent ici.
            </Typography>
          </Box>
        )}
      </div>
    </>

    // <Box
    //   sx={{
    //     height: '80vh',
    //     width: '100rem',
    //     position: 'relative',
    //     top: '15rem',
    //     margin: 'auto',
    //   }}
    // >
    //   {contacts.length > 0 ? (
    //     <Stack direction="row">
    //       <MenuContact
    //         contacts={contacts}
    //         destinataireId={destinataireId}
    //         setDestinataireId={setDestinataireId}
    //         destinataireName={destinataireName}
    //         setDestinataireName={setDestinataireName}
    //       />
    //       <Stack>
    //         <div className="chat">
    //           {/* barre du haut */}
    //           <Stack
    //             direction="row"
    //             sx={{
    //               backgroundColor: '#fff',
    //               p: '1rem',
    //               mb: '0.5rem',
    //               pl: '2rem',
    //               borderRadius: '1rem',
    //             }}
    //           >
    //             <Typography
    //               sx={{
    //                 color: 'primary.dark',
    //                 height: '4rem',
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 fontSize: '2rem',
    //                 fontFamily: 'DM Sans',
    //               }}
    //             >
    //               {destinataireName}
    //             </Typography>
    //           </Stack>
    //           {/* Bloc */}
    //           <Paper
    //             elevation={0}
    //             sx={{
    //               width: '80rem',
    //               // display: 'flex',
    //               position: 'relative',
    //               p: '2rem',
    //               borderRadius: '1rem',
    //               backgroundColor: '#fff',
    //               height: '60rem',
    //               overflowY: 'auto',
    //               '&::-webkit-scrollbar': {
    //                 width: '1rem',
    //                 backgroundColor: '#F5F5F5',
    //               },
    //               '&::-webkit-scrollbar-track': {
    //                 '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
    //                 backgroundColor: '#49c1ad',
    //                 borderRadius: '10px',
    //               },
    //               '&::-webkit-scrollbar-thumb': {
    //                 backgroundColor: '#03665C',
    //                 borderRadius: '25px',
    //               },
    //             }}
    //           >
    //             <Messages />
    //             <Stack
    //               direction="row"
    //               alignItems="flex-end"
    //               justifyContent="flex-end"
    //             >
    //               <Form destinataireId={destinataireId} />
    //             </Stack>
    //           </Paper>
    //         </div>
    //       </Stack>
    //     </Stack>
    //   ) : (
    //     <Box
    //       width="100rem"
    //       sx={{ backgroundColor: '#fff', borderRadius: '2rem' }}
    //     >
    //       <Stack direction="column" padding="3rem">
    //         <Typography
    //           sx={{
    //             fontSize: '1.8rem',
    //             fontFamily: 'DM Sans',
    //             fontStyle: 'normal',
    //             fontWeight: '500',
    //             lineHeight: 'normal',
    //             p: '1rem',
    //           }}
    //         >
    //           Vous navez pas encore de messages ? <br />
    //           Cliquez sur le bouton "contacter le vendeur" dans une annonce pour
    //           que vos différentes conversations s&apos;affichent ici.
    //         </Typography>
    //       </Stack>
    //     </Box>
    //   )}
    // </Box>
  );
}

{
  /* <Stack>
              <div className="chat">
                <Stack
                  direction="row"
                  sx={{
                    backgroundColor: '#fff',
                    p: '1rem',
                    mb: '0.5rem',
                    pl: '2rem',
                    borderRadius: '1rem',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'primary.dark',
                      height: '4rem',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '2rem',
                      fontFamily: 'DM Sans',
                    }}
                  >
                    {destinataireName}
                  </Typography>
                </Stack>

                
                <Paper
                  elevation={0}
                  sx={{
                    // width: '80rem',
                    display: 'flex',
                    position: 'relative',
                    p: '2rem',
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    height: '60rem',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                      width: '1rem',
                      backgroundColor: '#F5F5F5',
                    },
                    '&::-webkit-scrollbar-track': {
                      '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
                      backgroundColor: '#49c1ad',
                      borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#03665C',
                      borderRadius: '25px',
                    },
                  }}
                >
                  <Messages />
                  <Stack
                    direction="row"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <Form destinataireId={destinataireId} />
                  </Stack>
                </Paper>
              </div>
            </Stack> */
}
