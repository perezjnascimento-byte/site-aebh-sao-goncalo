import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Doencas } from "./pages/Doencas";
import { Acessibilidade } from "./pages/Acessibilidade";
import { Doacoes } from "./pages/Doacoes";
import { Voluntario } from "./pages/Voluntario";
import { Blog } from "./pages/Blog";
import { Contato } from "./pages/Contato";
import { Login } from "./pages/Login";
import { Associados } from "./pages/Associados";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: Sobre },
      { path: "doencas", Component: Doencas },
      { path: "acessibilidade", Component: Acessibilidade },
      { path: "doacoes", Component: Doacoes },
      { path: "voluntario", Component: Voluntario },
      { path: "blog", Component: Blog },
      { path: "contato", Component: Contato },
      { path: "login", Component: Login },
      { path: "associados", Component: Associados },
    ],
  },
]);
