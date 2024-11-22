import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';
import { CartContext } from "../../Contex/CartContex";

function CartWidget() {

    const {mostrarCantidad} = useContext(CartContext)
    return (

       <div className="Widget-contenedor">
         <FaShoppingCart className="carrito" />
         <p>{mostrarCantidad()}</p>

        </div> 
    )
}

export default CartWidget;