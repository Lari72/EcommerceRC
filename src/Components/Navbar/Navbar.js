// import CartWidget from "../CartWidget/CartWidget"

import CartWidget from "../CartWidget/CartWidget"
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <header className="NavBar">
            <h1>Almacenes</h1>
            <nav className="NavBar-menu">
                <NavLink to ="/">Inicio</NavLink>
                <NavLink to ="/Categoria/Frutas">Frutas</NavLink>
                <NavLink to ="/Categoria/Verduras">Verduras</NavLink>
                <NavLink to ="/Categoria/Otras">Otras</NavLink>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar