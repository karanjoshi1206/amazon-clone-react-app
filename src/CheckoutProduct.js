import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from "./StateProvider";
import { FaRegStar } from "react-icons/fa";
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {

        // add item to the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id

        })
    }
    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title" >{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (<p><FaRegStar /></p>))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
