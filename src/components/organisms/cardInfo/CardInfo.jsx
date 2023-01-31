import React from "react";
import { data } from "../kanBan/KanbanData";
import "./CardInfo.css";

export default function CardInfo() {
  const [clientes, setClientes] = React.useState([]);
  const QtdTasks = data.length;

  React.useEffect(() => {
    fetch("http://localhost:5000/clientes")
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
      });
  }, []);

  return (
    <div className="cardsDeInformações">
      <div className="tasks">{QtdTasks} Tasks abertas</div>
      <div className="clientes">{clientes.length} Clientes</div>
    </div>
  );
}
