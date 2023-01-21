import React from 'react'
import ListaDeClientes from '../../organisms/ListaDeClientes/ListaDeClientes';
import PopupCriar from '../../organisms/popupCriar/PopupCriar'
import {Link} from "react-router-dom"
import "./clientes.css"

export default function Clientes() {

  const [clientes, setClientes] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/clientes")
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
      });
  }, []);

  return (
    <div>
      <div className="listaclientes">
        <div className="titulo">
          <Link to="/dashboard" className='btnVoltar'>
            Voltar
          </Link>
          <h1>Lista de Clientes</h1>
        </div>
        <div>
         {clientes.map((cliente) =>(
          <ListaDeClientes
          key={cliente.id}
          id={cliente.id}
          nome={cliente.name}
          email={cliente.email}
          tel={cliente.tel}
          data={cliente.date}
          cpf={cliente.cpf}
          />
         ))}
        </div>
        <PopupCriar />
      </div>
    </div>
  )
}
