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

export default function PopupCriar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [date, setDate] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    return fetch(`http://localhost:5000/clientes`,
    { method: 'POST',
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ name, email, tel, date, cpf }),
   })
   .then(window.location.reload())
  }
  return (
    <div>
      <div onClick={handleOpen} className="botaoadd">
      <h4>Adicionar Cliente</h4>
      </div>
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
              Adicionar Cliente
            </Typography>

            <div>
                <form onSubmit={handleFormSubmit}>
                    <div className='campos'>
                        <label htmlFor="nomecliente">Nome do Cliente</label>
                        <input type="text" name="nome" id='nomecliente' onChange={(event) => setName(event.target.value)} value={name} />
                    </div>
                     <div className='campos'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id='email' onChange={(event) => setEmail(event.target.value)} value={email} />
                     </div>
                    <div className='campos'>
                        <label htmlFor="tel">Telefone</label>
                        <input type="text" name="tel" id='tel' onChange={(event) => setTel(event.target.value)} value={tel} />
                    </div>
                    <div className='campos'>
                        <label htmlFor="data">Data de Nascimento</label>
                        <input type="text" name="data" id='data' onChange={(event) => setDate(event.target.value)} value={date} />
                    </div>
                    <div className='campos'>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" id='cpf' onChange={(event) => setCpf(event.target.value)} value={cpf} />
                    </div>
                    <div className="botoes">
                      <div onClick={handleClose} className='secondary-button'>Voltar</div>
                      <input className='primary-button' type="submit" name="adicionar" value={'Adicionar'} />
                    </div>
                </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}