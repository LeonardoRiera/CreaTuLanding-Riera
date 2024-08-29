import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import CardItem from "../CardItem/CardItem";
import './Cart.css'
import { Link } from "react-router-dom";

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
            {cart.length > 0 && 
            <>

                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <p>`Total: $ {mostrarTotal()} </p>

                 <Link to='/CheckOut'>  <button>Comprar</button>
                </Link>
             </>    
                }
                
            </div>
        </div>
    )
}

export default Cart;