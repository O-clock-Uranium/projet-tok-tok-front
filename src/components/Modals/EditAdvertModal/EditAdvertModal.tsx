import { Box, Modal } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { editAdvert } from '../../../store/reducers/adverts';
import EditAdvertModalForm from './EditAdvertModalForm';

interface EditAdvertModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export default function EditProfileModal({
  openModal,
  setOpenModal,
  id,
}: EditAdvertModalProps) {
  const dispatch = useAppDispatch();
  //   const { slug } = useParams();

  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // SetTimeout pour permettre au back de processer une image
    dispatch(editAdvert(formData));
    await new Promise((resolve) => setTimeout(resolve, 800));
    // if (slug) {
    //   dispatch(fetchAdverts(id));
    // }
    // dispatch(fetchAdverts(id));
    handleCloseModal();
  };

  return (
    <Modal
      open={openModal}
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
          sx={{
            backgroundColor: 'white',
            width: '80%',
            m: 'auto',
            p: '5rem',
            borderRadius: '2rem',
          }}
        >
          <EditAdvertModalForm />
        </Box>
      </Box>
    </Modal>
  );
}
