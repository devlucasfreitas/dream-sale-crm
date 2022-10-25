import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/login.css";
import logoimg from "../../images/Dream_Sale_logo-removebg-preview.png"

export default function Login() {
  return (
    <div id="login">
    <div className='logo'>
        <img src={logoimg} alt="logo do crm dream sale" />
    </div>
    <form className="card">

        <div className="card-header">

            <h2>Login</h2>

        </div>

        <div className="card-content">

            <div className="card-content-area">

                <label for="usuario">E-mail</label>

                <input type="text" id="usuario" autocomplete="off" />

            </div>

            <div className="card-content-area">

                <label for="password">Senha</label>

                <input type="password" id="password" autocomplete="off" />

            </div>

        </div>

        <div className="card-footer">

           <Link to="/dashboard">
           <input type="submit" value="login" className="submit" />
           </Link>

            <Link to="/cadastro" className="criar_cadastro"><h3>Criar Cadastro</h3></Link>

        </div>

    </form>

</div>
  )
}
