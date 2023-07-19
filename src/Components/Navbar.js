// import CartWidget from "../CartWidget/CartWidget"

import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (


    
    <header className="NavBar">
      <div className="titulo">
        <h1>Almacenes</h1>
      </div>

      <nav className="NavBar-menu">
         <CartWidget />        
        <div className="inicio">
          <NavLink to="/">Inicio </NavLink>
        </div>

        <div className="inicio">
          <NavLink to="/Categoria/Verduras">Verduras </NavLink>
        </div>

        <div className="inicio">
          <NavLink to="/Categoria/Otras">Otras </NavLink>
        </div>

        

       

        
      </nav>
    </header>
  );
}

export default NavBar;
