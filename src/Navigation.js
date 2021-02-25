import React from 'react'
import logo from "./logo.png"
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useStateValue } from "./StateProvider"
import "./Navigation.css";
import { auth } from "./firebase"
function Navigation() {
    const [{ basket, user }] = useStateValue();
    console.log(basket)
    const login = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <>
            <nav className="header">
                <Link to="/"><img className="amazon__logo" src={logo} alt="" /></Link>
                <div className="header_search">
                    <input type="text" className="header__input" />
                    <button className="header__searchicon"><FaSearch /></button>
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__link">
                        <div onClick={login} className="header__option">
                            <span className="header__option1">Hello {user?.email}</span>
                            <span className="header__option2">{user ? "Sign Out" : "Sign In"}</span>
                        </div>

                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__option1">Return</span>
                            <span className="header__option2">Order</span>
                        </div>

                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__option1">Your </span>
                            <span className="header__option2">Prime</span>
                        </div>

                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBaslket">
                            <FaShoppingBasket />
                            <span className="header__option2 basket_count">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navigation
