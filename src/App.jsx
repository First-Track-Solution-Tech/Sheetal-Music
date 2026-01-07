import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Applayout from './layout/Applayout'
import Display_home from './components/Display_home'
import Album_display from './components/Album_display'
import Aesthetic_display from './components/Aesthetic_display'
import Register from './pages/Register'
import SignIn from './pages/Sign_in'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />}>
      <Route index element={<Display_home />} />
        <Route path="album/:id" element={<Album_display />} />
        <Route path="aesthetic/:id" element={<Aesthetic_display />} />
      </Route> 
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}