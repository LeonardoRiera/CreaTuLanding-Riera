import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import CardItem from "../CardItem/CardItem";
import './Cart.css'

const Cart = () => {

    const { cart, vaciarCarrito, mostrarTotal } = useContext(CartContext)

    

    return (
        <div className="cartContainerPrincipal">
            {
                cart?.map(e=> {
                    return (
                        <CardItem key={e.id} producto={e}/>
                    )
                })
            }
            <div className="totalBotones">
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <p>`Total: $ {mostrarTotal()} </p>
                <button /* onClick={comprarTotal} */>Comprar</button>
            </div>
        </div>
    )
}

export default Cart;