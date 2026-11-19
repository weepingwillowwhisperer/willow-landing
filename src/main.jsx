import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Nest from './pages/Nest.jsx'
import Whisperer from './pages/Whisperer.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nest" element={<Nest />} />
        <Route path="/whisperer" element={<Whisperer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
