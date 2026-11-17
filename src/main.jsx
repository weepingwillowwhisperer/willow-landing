import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Nest from './pages/Nest.jsx'
import { titleFor } from './seo-pages.js'
import './styles.css'

// Keep the tab title in step with in-app navigation.
function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => { document.title = titleFor(pathname) }, [pathname])
  return null
}

function NotFound() {
  return (
    <main className="wrap" style={{ padding: '96px 0' }}>
      <h1>This page isn’t here.</h1>
      <p><Link to="/">Return to Willow</Link></p>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nest" element={<Nest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
