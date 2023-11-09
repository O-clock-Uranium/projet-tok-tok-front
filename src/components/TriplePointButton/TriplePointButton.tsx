import { useState, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import settings from '../../assets/icons/settings.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  delAdvert,
  fetchAdverts,
  fetchFavourites,
} from '../../store/reducers/adverts';
import { delPost, fetchPosts } from '../../store/reducers/publications';
import EditAdvertModal from '../Modals/EditAdvertModal/EditAdvertModal';
import { AdvertCreator } from '../../@types';
import { Creator } from '../../@types/publication';
import { fetchProfile } from '../../store/reducers/profile';

interface MenuProps {
  id: number;
  // eslint-disable-next-line react/require-default-props
  advert_creator?: AdvertCreator;
  // eslint-disable-next-line react/require-default-props
  post_creator?: Creator;
  context: string;
}

export default function TriplePointButton({
  id,
  context,
  advert_creator,
  post_creator,
}: MenuProps) {
  const userInfo = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const isAdvertPage =
    location.pathname.startsWith('/adverts') ||
    location.pathname === '/favoris';

  const isCurrentUserCreator =
    post_creator?.id === userInfo.id || advert_creator?.id === userInfo.id;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDel = async () => {
    if (context === 'posts' || context === 'comment') {
      await dispatch(delPost(id));
      await dispatch(fetchPosts());
    } else if (context === 'adverts') {
      await dispatch(delAdvert(id));
      await dispatch(fetchFavourites());
      await dispatch(fetchAdverts());
    } else if (context === 'profile') {
      await dispatch(delAdvert(id));
      await dispatch(fetchProfile(userInfo.slug));
    } else if (context === 'advert') {
      await dispatch(delAdvert(id));
      navigate('/adverts');
    }
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(resolve);
    //   }, 800);
    // });
  };

  const handleClickUpd = () => {
    setOpenModal(true);
    handleClose();
  };

  return (
    <div>
      <IconButton
        id="triple-point-button"
        onClick={handleClick}
        sx={{ padding: '0.2rem' }}
      >
        <MoreVertSharpIcon style={{ fontSize: '2rem' }} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiMenu-paper': {
            borderRadius: '2rem',
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div>
          {isCurrentUserCreator && (
            <>
              {isAdvertPage && (
                <MenuItem
                  component="form"
                  onClick={handleClickUpd}
                  data-id={id}
                  sx={{ justifyContent: 'start' }}
                >
                  <img
                    alt="settings icon"
                    src={settings}
                    height={20}
                    width={20}
                    style={{ paddingLeft: '0.1rem' }}
                  />
                  <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
                    Modifier
                  </Typography>
                </MenuItem>
              )}
              <MenuItem
                component="form"
                onClick={handleClickDel}
                data-id={id}
                sx={{ justifyContent: 'start' }}
              >
                <DeleteForeverOutlinedIcon
                  sx={{ color: 'red', fontSize: 20 }}
                />
                <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
                  Supprimer
                </Typography>
              </MenuItem>
            </>
          )}
        </div>
        <MenuItem
          onClick={handleClickDel}
          sx={{ justifyContent: 'start', pr: '3rem' }}
        >
          <ReportGmailerrorredOutlinedIcon
            sx={{ color: 'red', fontSize: 20 }}
          />
          <Typography
            align="left"
            sx={{ pl: '1rem', fontSize: '1.5rem', color: 'noir' }}
          >
            Report
          </Typography>
        </MenuItem>
      </Menu>
      <EditAdvertModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        id={id}
      />
    </div>
  );
}
