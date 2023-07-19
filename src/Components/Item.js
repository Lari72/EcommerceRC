import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Item = ({ data }) => {
  console.log(data);
  const [itemQty, setItemQty] = useState(1);

  const navegate = useNavigate();

  const handleClick = (id) => {
    navegate(`/item-detail/${id}`);
  };

  const handleAdd = () => {
    setItemQty(itemQty + 1);
  };

  const handleLess = () => {
    setItemQty(itemQty - 1);
  };

  return (
    <div className="centered-container">
      <div className="card">
        <img
          src={data.imagen}
          alt={`imagen del producto ${data.title}`}
          style={{ width: "25rem", height: "auto" }}
        />
        <div className="card-text">
          <h3>{data.nombre}</h3>
          <p>{data.descripcion}</p>
        </div>
        <div className="card-price">
          <p>{data.precio}</p>
        </div>
        <div className="card-buttons">
          <button onClick={handleLess} disabled={itemQty <= 1}>
            -
          </button>
          <p>{itemQty}</p>
          <button onClick={handleAdd}>+</button>
        </div>
        <div className="card-cart">
          <button onClick={() => handleClick(data.id)}>Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
