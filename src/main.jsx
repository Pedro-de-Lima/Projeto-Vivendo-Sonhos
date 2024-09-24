import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projetos from './pages/Projetos.jsx'
import Diretoria from './pages/Diretoria.jsx'
import Parceiro from './pages/Parceiro.jsx'
import Contatos from './pages/Contatos.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/parceiros',
    element: <Parceiro/>
  },
  {
    path:'/diretoria',
    element: <Diretoria />
  },
  {
    path:'/projetos',
    element: <Projetos />
  },
  {
    path:'/contatos',
    element: <Contatos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
