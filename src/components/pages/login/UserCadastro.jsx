import React from 'react'
import { Link } from "react-router-dom";
import "./login.css";
import logoimg from "../../../images/Dream_Sale_logo-removebg-preview.png"
import { FormLabel } from '@mui/material';

export default function UserCadastroserCadastro() {
  return (
    <div id="login">
    <div className='logo'>
        <img src={logoimg} alt="logo do crm dream sale" />
    </div>
    <form className="card">

        <div className="card-header">

            <h2>Cadastro</h2>

        </div>

        <div className="card-content">

            <div className="card-content-area">

                <FormLabel for="usuario">E-mail corporativo</FormLabel>

                <input type="email" id="usuario" autocomplete="off" />

                <FormLabel for="telefone">Telefone</FormLabel>

                <input type="tel" id="telefone" autocomplete="off" />

                <FormLabel for="empresa">Empresa</FormLabel>

                <input type="text" id="empresa" autocomplete="off" />

                <FormLabel for="tamanhoEmpresa">tamanho da empresa</FormLabel>

                <select>
                  <option value='10'>1 - 20 Funcionários</option>
                  <option value='35'>21 - 50 Funcionários</option>
                  <option value='150'>51 - 300 Funcionários</option>
                  <option value='600'>301 - 1.000 Funcionários</option>
                  <option value='1500'>1.001 - 2.000 Funcionários</option>
                  <option value='2500'>2.001 + Funcionários</option>
                </select>

            </div>

            <div className="card-content-area">

                <FormLabel for="password">Senha</FormLabel>

                <input type="password" id="password" autocomplete="off" />

            </div>

        </div>

        <div className="card-footer">

           <Link to="/dashboard">
           <input type="submit" value="Entrar" className="submit" />
           </Link>

            <Link to="/" className="criar_cadastro"><h3>Já tem cadastro? efetue login</h3></Link>

        </div>

    </form>

</div>
  )
}
