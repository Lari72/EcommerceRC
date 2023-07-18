import React from 'react'
import {Routes,Route} from "react-router-dom"
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Routers = () => {
  return (
    <Routes>
<Route path='/'element ={ <ItemListContainer/>}/>
    </Routes>
  )
}

export default Routers
