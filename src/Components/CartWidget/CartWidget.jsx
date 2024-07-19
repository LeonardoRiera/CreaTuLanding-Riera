import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';

function CartWidget() {
    return (

       <div className="Widget-contenedor">
         <FaShoppingCart />
         <p>0</p>

        </div> 
    )
}

export default CartWidget;