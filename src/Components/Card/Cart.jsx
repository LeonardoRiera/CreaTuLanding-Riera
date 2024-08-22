import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import CardItem from "../CardItem/CardItem";

const Cart = () => {

    const { contexto, cart, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            {
                cart?.map(e=> {
                    return (
                        <CardItem key={e.id} producto={e}/>
                    )
                })
            }
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;