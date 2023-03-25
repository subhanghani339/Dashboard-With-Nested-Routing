import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Screens/Dashboard'
import Home from '../Screens/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard/*" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter