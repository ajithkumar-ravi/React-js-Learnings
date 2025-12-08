import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Settings from './Pages/Settings'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App