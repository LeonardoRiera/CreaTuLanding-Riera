import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import CardItem from "../CardItem/CardItem";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, vaciarCarrito, mostrarTotal } = useContext(CartContext)

    

    return (
        <div className="cartContainerPrincipal">
            <h4 className="carrito">Carrito de Compras</h4>
            {
                cart?.map(e=> {
                    return (
                        <CardItem key={e.id} producto={e}/>
                    )
                })
            }
            <div className="totalBotones">
                {cart.length > 0 ? 
                <div>

                    <button onClick={vaciarCarrito} className="vaciarCarrito">Vaciar Carrito</button>
                    <p className="total">Total: $ {mostrarTotal()} </p>

                    <Link to='/CheckOut'><button className="botonComprar">Comprar</button></Link>
                </div>
                : 
                <>
                    <h4 className="carrito2">Tu Carrito está Vacío!!</h4>
                    <Link to='/'><button className="botonComprar">Volver a Inicio</button></Link>
                </>     
                }
                
            </div>
        </div>
    )
}

export default Cart;