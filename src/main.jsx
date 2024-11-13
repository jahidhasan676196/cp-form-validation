import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Layout/Root.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthContext from './Component/Layout/AuthContext/AuthContext.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContext>
        <RouterProvider router={router} />
     </AuthContext>
  </StrictMode>,
)
