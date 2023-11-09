import { Box, Modal } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchProfile } from '../../../store/reducers/profile';
import { edit } from '../../../store/reducers/user';
import EditProfileModalForm from './EditProfileModalForm';

interface EditProfileModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditProfileModal({
  open,
  setOpen,
}: EditProfileModalProps) {
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  const handleCloseModal = () => setOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    dispatch(edit(formData));
    setTimeout(async () => {
      if (slug) {
        dispatch(fetchProfile(slug));
      }
    }, 800);
    handleCloseModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      component="form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      aria-labelledby="modal-modal-profile"
      aria-describedby="modal-modal-edit"
    >
      <Box
        className="edit-modal"
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
          <EditProfileModalForm />
        </Box>
      </Box>
    </Modal>
  );
}
