import React from 'react'
import { useStateValue } from './StateProvider'
import "./subtotal.css"
import { getBasketTotal } from "./reducer"
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <>
            <div className="subtotal">
                <p>Subtotal ({basket.length} items) : <strong> ₹ {getBasketTotal(basket)}</strong></p>
                <button>Proceed to checkout</button>

            </div>
        </>
    )
}

export default Subtotal
