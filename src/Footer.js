import React from "react";
import "./index.css";
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = openHour <= hour && hour <= closeHour;
    return <footer className="footer">{isOpen ? "We're currently open !!" : "Sorry !! we are closed"} </footer>
}

export default Footer;