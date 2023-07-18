import React, { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>Contador: {count}</p>
    
    </div>
  )
}

export default ItemCount
