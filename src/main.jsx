import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projetos from './pages/Projetos.jsx'
import ArteDeCozinhar from './pages/ArteDeCozinhar.jsx'
import QiDosSonhos from './pages/QiDosSonhos.jsx'
import Futebol from './pages/Futebol.jsx'
import Projeto from './componentes/Projeto.jsx'
import Incentive from './pages/Incentive.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
  },
  {
    path:'/projetos',
    element: <Projetos />
  },
  {
    path: '/qi-dos-sonhos',
    element: <QiDosSonhos />
  },
  {
    path: '/arte-de-cozinhar',
    element: <ArteDeCozinhar />
  },
  {
    path: '/futebol',
    element: <Futebol />
  },
  {
    path: '/incentive',
    element: <Incentive />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
