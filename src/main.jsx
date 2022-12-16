import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom ";
import Layout from "./components/Layout";
import Index from "./Pages/Index";
import Nosotros from "./Pages/Nosotros";
import Blog from "./Pages/Blog";
import Contacto from "./Pages/Contacto";
import Tienda from "./Pages/Tienda";
import Carrito from "./components/Carrito";
import "./index.css";
import Gallery from "./components/Gallery/Gallery";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import CrudTurnos from "./components/Login/admin/CrudTurnos";
import Show from "./data/Show";
import Edit from "./data/Edit";
import Create from "./data/Create";
import Administrador from "./Pages/Administrador";
import Clientes from "./data/Clientes";
import EditarClientes from "./data/EditarClientes";
import CrearClientes from "./data/CrearClientes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/show",
        element: <Show />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/Contacto",
        element: <Contacto />,
      },
      {
        path: "/clientes",
        element: <Clientes />,
      },
      {
        path: "/crearClientes",
        element: <CrearClientes />,
      },
      {
        path: "/editarClientes/:id",
        element: <EditarClientes />,
      },
      {
        path: "/tienda",
        element: <Tienda />,
      },
      {
        path: "/carrito",
        element: <Carrito />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Register />,
      },
      {
        path: "/abmturnos",
        element: <CrudTurnos />,
      },
      {
        path: "/administrador",
        element: <Administrador />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
