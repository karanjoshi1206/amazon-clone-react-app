import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import "./checkout.css"
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <>
            <img className="checkout__banner" src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" alt="" />

            <div className="checkout">

                <div className="checkout_left">

                    {basket?.length === 0 ? (
                        <div className="checkout_nothing_to_show">
                            <h2>Shopping Basket is empty</h2>
                            <p>Please purchase something to checkout</p>
                        </div>
                    ) : (
                            <div>
                                {/* <h2 className="checkout_title">Here you go</h2> */}
                                {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}

                                    />
                                ))}
                            </div>
                        )}

                </div>
                {basket.length > 0 && (
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout
