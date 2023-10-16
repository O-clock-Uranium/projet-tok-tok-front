import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import settings from '../../assets/icons/settings.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  delAdvert,
  fetchAdverts,
  fetchFavourites,
} from '../../store/reducers/adverts';
import { fetchProfile } from '../../store/reducers/profile';
import { delPost, fetchPosts } from '../../store/reducers/publications';
import EditAdvertModal from '../Modals/EditAdvertModal/EditAdvertModal';

interface MenuProps {
  id: number;
  advert_creator: [];
  post_creator: [];
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
  const { slug } = useParams();

  const location = useLocation();
  const isAdvertPage =
    location.pathname.startsWith('/adverts') ||
    location.pathname === '/favoris';

  const isHomePage = location.pathname === '/';

  const isCurrentUserCreator =
    post_creator?.id === userInfo.id || advert_creator?.id === userInfo.id;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDel = async () => {
    if (context === 'posts') {
      dispatch(delPost(id));
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 800));
      dispatch(fetchPosts());
      dispatch(fetchProfile());
    } else if (context === 'adverts') {
      dispatch(delAdvert(id));
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 800));
      dispatch(fetchFavourites());
      dispatch(fetchAdverts());
    } else if (context === 'advert') {
      dispatch(delAdvert(id));
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 800));
      navigate('/adverts');
    } else if (context === 'profile') {
      dispatch(delAdvert(id));
      dispatch(fetchProfile(slug));
    }
  };

  const handleClickUpd = () => {
    setOpenModal(true);
    handleClose();
  };

  return (
    <div>
      <IconButton
        id="triple-point-button"
        aria-controls={open ? 'triple-point-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
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

          {/* {isHomePage && (
            <MenuItem
              component="form"
              onClick={handleClickDel}
              data-id={id}
              sx={{ justifyContent: 'start' }}
            >
              <DeleteForeverOutlinedIcon sx={{ color: 'red', fontSize: 20 }} />
              <Typography sx={{ pl: '1rem', fontSize: '1.5rem' }}>
                Supprimer
              </Typography>
            </MenuItem>
          )} */}
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
