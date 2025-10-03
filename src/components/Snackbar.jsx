import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const BasicSnackbar = ({ children, message, variant }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div>
        <div onClick={handleClick}>{children}</div>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={message}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          ContentProps={{
            sx: {
              top: 8,
              backgroundColor: variant === 'error' ? '#D32F2F' : '#4CAF50',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '12px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            },
          }}
        />
      </div>
    </>
  );
};

export default BasicSnackbar;
