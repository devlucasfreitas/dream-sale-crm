import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import "../popupEditar/PopupEditar.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};


export default function PopupExcluir(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function Delete() {
    return fetch(`http://localhost:5000/clientes/${props.id}`, { method: 'DELETE' })
      .then(window.location.reload())
  }

  return (
    <div>
      <i onClick={handleOpen} className="fi fi-rr-trash"></i>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
  
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Tem certeza que quer excluir o cliente {props.nome}?
                    <div className="botoes">
                      <div onClick={handleClose} className='secondary-button'>Voltar</div>
                      <input onClick={Delete} className='primary-button' value={'Excluir'}/>
                    </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}