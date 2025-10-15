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

export default function BasicModal({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <Modal
        open={open}
        // onClose={handleClose}
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
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                mb: 2,
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#3F3D56',
              }}
            >
              Tem certeza de que deseja deletar sua conta?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mb: 4,
                color: '#939393',
                fontSize: '1rem',
                fontWeight: 'semi-bold',
              }}
            >
              Essa ação é permanente e todos os seus dados serão removidos de
              forma definitiva.
            </Typography>
            <div className="flex justify-end gap-4">
              <button className="cursor-pointer px-4 py-2 font-semibold text-[#939393] hover:text-[#555]">
                Deletar conta
              </button>
              <button
                onClick={handleClose}
                className="cursor-pointer rounded-md bg-red-500 px-8 py-3 text-white hover:bg-red-700"
              >
                Cancelar
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
