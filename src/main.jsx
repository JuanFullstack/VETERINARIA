import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from "react-router-dom "
import Layout from './components/Layout'
import Index from './Pages'
import Nosotros from './Pages/Nosotros'
import Blog from './Pages/Blog'
import Administrador from './Pages/Administrador'
import Contacto from './Pages/Contacto'
import Tienda from './Pages/Tienda'
import Carrito from './components/Carrito'
import './index.css'
// You can specify which plugins you need



const router = createBrowserRouter ([ 
  {
  path:"/",
  element : <Layout/>,
  children: [
    {
      index : true ,
      element: <Index/> 
     
    },
    {
      path: "/nosotros",
      element: <Nosotros/>
     
    },
    {
      path: "/administrador",
      element: <Administrador/>
     
    },
    {
      path: "/blog",
      element: <Blog/>
     
    },
    {
      path: "/Contacto",
      element: <Contacto/>
     
    },
    {
      path: "/tienda",
      element: <Tienda/>
     
    },
    {
      path: "/carrito",
      element: <Carrito/>
     
    }
 
  ]}


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider    router={ router }   />
  </React.StrictMode>
)
