import React from 'react'
import PopupEditar from '../popupEditar/PopupEditar'
import PopupExcluir from '../popupExcluir/PopupExcluir'
import "./ListaDeClientes.css"

export default function ListaDeClientes(props) {
  return (
    <div className='listacliente'>
      <div>
        <div>Nome</div>
        <h4 key={props.id}>{props.nome}</h4>
      </div>
        <div>
          <div>Email</div>
          <h4>{props.email}</h4>
        </div>
        <div>
          <div>Telefone</div>
          <h4>{props.tel}</h4>
        </div>
        <div>
          <div>Nascimento</div>
          <h4>{props.data}</h4>
        </div>
        <div>
          <div>CPF</div>
          <h4>{props.cpf}</h4>
        </div>
        <div className='icones'>
        <PopupEditar
        id={props.id}
        nome={props.nome}
        email={props.email}
        tel={props.tel}
        data={props.data}
        cpf={props.cpf}
        />
        <PopupExcluir 
        nome={props.nome}
        id={props.id}
        />
        </div>
    </div>
  )
}
