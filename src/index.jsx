import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWithRouter from './App'
import { BrowserRouter, Route, Routes,Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <AppWithRouter />
  </BrowserRouter>
  </React.StrictMode>
)
