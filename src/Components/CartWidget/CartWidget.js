import cart from './assets/cart.jpg'

const CartWidget = () => {
    return (
        <div className="cart-widget-img">
            <img src={cart} alt="cart-widget"  style={{ width: "30px", height: "30px" }}/>
            

        </div>
    )
}

export default CartWidget

