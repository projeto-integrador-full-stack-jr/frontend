import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    sm: 500,
    md: 750,
  },
  p: { xs: 3, sm: 4, md: 6 },
  bgcolor: '#FFFF',
  borderRadius: '16px',
  border: '2px solid #D9D9D9',
};

export default function BasicModal({ trigger, children }) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div onClick={handleOpenModal}>{trigger}</div>

      <Modal
        open={openModal}
        onClose={(event, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') return; // impede fechar clicando fora ou ESC
          handleCloseModal();
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
            },
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            {typeof children === 'function'
              ? children({ handleCloseModal: handleCloseModal })
              : children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
