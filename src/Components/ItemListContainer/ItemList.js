import React from 'react'
import Item from '../Item'
const ItemList = ({data}) => {
    console.log(data)
    return (
    <> 
    {data.map((ele) => { 
                return <Item key={ele.id} data={ele} />
            })}
    </>
  )
}

export default ItemList
