import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../../images/Dream_Sale_logo-removebg-preview.png";
import "./BarraLateral.css";

export default function BarraLateral() {
  return (
    <div className="barra">
      <img className="imagem" src={logoimg} alt="logo do crm dream sale" />

      <div className="links">
        <Link to="/clientes" className="link">
          Clientes
        </Link>
        <Link to="/" className="link">
          Sair
        </Link>
      </div>
    </div>
  );
}
