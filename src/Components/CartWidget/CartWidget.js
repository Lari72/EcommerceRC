import cart from './assets/cart.jpg'

const CartWidget = () => {
    return (
        <div className="cart-widget-img">
            <img src={cart} alt="cart-widget"/>
            0

        </div>
    )
}

export default CartWidget

// import { BsCartFill } from "react-icons/bs";
// import { ChakraProvider} from "@chakra-ui/react"


// function CartWidget() {
//     return (
//         <ChakraProvider>
//                 <BsCartFill /> 
//                  0
//         </ChakraProvider>
//     )
// }
// export default CartWidget