import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import CardItem from "../CardItem/CardItem";
import './Cart.css';
import tarjetas from '../../img/tarjetas.png'
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
                <div className="compraContainer">

                    <button onClick={vaciarCarrito} className="vaciarCarrito botonSecundario">Vaciar Carrito</button>
                    <p className="total">El Total de su Compra es: ......... $ {mostrarTotal()} </p>
                    <div className="metodosDePago">
                        <p>métodos de Pago disponibles</p>
                        <img src={tarjetas} alt="tarjetas" className="tarjetas" />
                    </div>

                    <Link to='/CheckOut'><button className="botonComprar botonGeneral">Comprar</button></Link>
                </div>
                : 
                <>
                    <h4 className="carrito2">Tu Carrito está Vacío!!</h4>
                    <Link to='/'><button className="botonGeneral botonInicio "><span>Volver a Inicio</span></button></Link>
                </>     
                }
                
            </div>
        </div>
    )
}

export default Cart;