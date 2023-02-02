import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/dashboard/Dashboard";
import Clientes from "./components/pages/clientes/Clientes";

const { join } = require("path");
const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

app.listen(3000);
console.log("localhost:3000");

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
