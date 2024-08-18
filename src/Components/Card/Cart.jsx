import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";

const Cart = () => {

    const { contexto, cart } = useContext(CartContext)

    return (
        <div>{contexto}</div>
    )
}

export default Cart;