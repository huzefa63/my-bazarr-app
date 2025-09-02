import { FaCartShopping } from "react-icons/fa6"
import CartItem from "./CartItem"

function CartContainer() {
    return (
        <div className="w-[65%] overflow-auto rounded-md shadow-sm py-5 bg-white">
            <header className="text-4xl pl-5 flex items-center gap-3"><FaCartShopping /> Cart</header>
            <hr className="my-3 text-gray-300"/>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

export default CartContainer
