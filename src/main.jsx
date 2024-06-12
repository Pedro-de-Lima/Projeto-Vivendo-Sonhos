import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MenuPrincipal from './componentes/MenuPrincipal.jsx'
import Home from './componentes/Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuPrincipal />
    <Home/>
  </React.StrictMode>,
)
