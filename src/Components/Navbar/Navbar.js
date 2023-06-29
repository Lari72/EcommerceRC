import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav>
            <h3>ecommerce</h3>
            <div>
                <button>Verduras</button>
                <button>Frutas</button>
                <button>Otras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar