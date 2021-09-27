import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import About from "../assets/TFSA1.svg"

const About = () => {
    return (
        <section >
            <div className="button-container">
                <img src={About} alt="about" style={{ opacity: '.95' }}></img>
                <Link to="/Home">
                    <button>Shop the collection</button>
                </Link>
            </div>           
            <Cart />
        </section>
    )
}

export default About;