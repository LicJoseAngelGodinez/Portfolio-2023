import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home'
import Test from './pages/test/test'
import NotFound from './pages/notfound/not-found'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/testeini",
    element: <Test />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
