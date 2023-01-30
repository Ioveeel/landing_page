import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails'



const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='home' />} />
    <Route path='home' element={<Home/>} />
    <Route path='shop' element={<Shop/>} />
    <Route path='shop/:id' element={<ProductDetails/>} />
   
  </Routes>
  )
}

export default Routers