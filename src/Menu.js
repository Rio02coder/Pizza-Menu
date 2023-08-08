import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "./data";
import "./index.css";

const Menu = () => {
    return <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
            {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} />)}
        </ul>
    </main>
}

export default Menu;