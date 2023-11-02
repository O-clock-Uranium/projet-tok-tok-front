import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Box, Modal } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { editAdvert } from '../../../store/reducers/adverts';
import EditAdvertModalForm from './EditAdvertModalForm';

interface EditAdvertModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: number;
}

export default function EditProfileModal({
  openModal,
  setOpenModal,
  id,
}: EditAdvertModalProps) {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(editAdvert({ id, formData }));
    // SetTimeout pour permettre au back de processer une image
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 800));
    // console.log(id, Object.fromEntries(formData));
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
          <EditAdvertModalForm id={id} />
        </Box>
      </Box>
    </Modal>
  );
}
