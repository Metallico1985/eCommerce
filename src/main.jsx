import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Components/Main/Main'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
// import Register from './Components/Register/Register'
// import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import Detail from './Components/Detail/Detail'
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Contexts/cartContext';
import '/main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  
  {
  //   path: "/registro",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/detalle/:id",
    element: <CartProvider><Detail /></CartProvider>,
  },
  {
    path: "/carrito",
    element: <CartProvider><Cart /></CartProvider>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);