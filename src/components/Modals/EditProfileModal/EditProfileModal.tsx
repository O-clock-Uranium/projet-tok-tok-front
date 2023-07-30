import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from '../../../hooks/redux';
import { edit } from '../../../store/reducers/user';
import EditProfileModalForm from './EditProfileModalForm';
import { fetchProfile } from '../../../store/reducers/profile';
import { useParams } from 'react-router-dom';

interface EditProfileModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditProfileModal({
  open,
  setOpen,
}: EditProfileModalProps) {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    dispatch(edit(formData));
    dispatch(fetchProfile(id));
  };

  const handleCloseModal = () => setOpen(false);
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
          // onSubmit={handleSubmit}
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
