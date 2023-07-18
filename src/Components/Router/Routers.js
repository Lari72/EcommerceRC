
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../Components/ItemListContainer'
import ItemDetailContainer from '../Components/ItemDetailContainer'
import Categorias from '../Components/Categorias'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/item-detail/:id' element={<ItemDetailContainer />} />
      <Route path='/categoria/:nombre' element={<Categorias />} />
    </Routes>
  )
}

export default Routers