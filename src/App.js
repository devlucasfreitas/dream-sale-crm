import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/dashboard/Dashboard";
import UserCadastro from "./components/pages//login/UserCadastro";
import Clientes from "./components/pages/clientes/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastro" element={<UserCadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
