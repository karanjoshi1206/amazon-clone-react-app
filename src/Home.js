import React from 'react'
import "./Home.css"
import banner from "./banner.jpg"
import { Link } from "react-router-dom"
import Product from "./Product"

function Home() {
    return (

        <div className="home">
            <Link to="/login"><img className="home_image" src={banner} alt="" /> </Link>

            <div className="home__row">
                <Product id="123" title="Best selling airpods" price={3000} rating={4} image="https://m.media-amazon.com/images/I/41VPAkJ3v-L.__AC_SY200_.jpg" />
                <Product id="123" title="Iphone X" price={64000} rating={5} image="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg" />

            </div>
            <div className="home__row">
                <Product id="124" title="Best selling watches" price={500} rating={5} image="https://m.media-amazon.com/images/I/41VloMir72L.__AC_SY200_.jpg" />
                <Product id="125" title="Home appliances" price={300} rating={4} image="https://m.media-amazon.com/images/I/315AO4OdIZL._AC_SY200_.jpg" />
                <Product id="126" title="Best selling novel" price={250} rating={5} image="https://m.media-amazon.com/images/I/813eYwNgZ8L._AC_UY218_.jpg" />

            </div>  <div className="home__row">
                <Product id="127" title="Best selling Televisions" price={15000} rating={5} image="https://m.media-amazon.com/images/I/81qtALn+GpL._AC_UY218_.jpg" />


            </div>

        </div>
    )
}

export default Home
