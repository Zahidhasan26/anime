import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Details from './pages/Details'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
