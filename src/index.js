import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Shoppage from './Pages/Shoppage/Shoppage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ticket from './Pages/Ticket';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Shop",
    element: <Shoppage/>
  },
  {
    path: "Ticket",
    element: <Ticket/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Register",
    element: <Register/>
  },
  {
    path: "ShopCategory",
    element: <ShopCategory/>
  },
  {
    path: "Cart",
    element: <Cart/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
