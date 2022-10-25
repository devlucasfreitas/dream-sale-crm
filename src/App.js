import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import UserCadastro from "./components/pages/UserCadastro";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/cadastro",
      element: <UserCadastro />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
