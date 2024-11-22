import React, { useContext } from "react";
import "../ItemCount/ItemCount.css";
import { CartContext } from "../../Contex/CartContex";
import { Link } from "react-router-dom";
import { useEffect } from "react";



const ItemCount = ({stock, pulsarComprar})=> {
    const { quantity, setQuantity, cart, reiniciarCantidad} = useContext(CartContext)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    useEffect(() => {
        reiniciarCantidad();
    }, [])

    return(
        <div className="Counter">
            <h4 className="tituloDeCantidad">Cantidad</h4>
            <div className="Controls">
                
                <button className="ButtonContador" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="ButtonContador" onClick={increment}>+</button>
            </div>
            <div className="botonesAlCarrito">
                <button className="botonGeneral botCorrect" onClick={ ()=> pulsarComprar(quantity)}>
                    Agregar al Carrito
                </button>
                {cart.length > 0 && 
                <Link to='/cart/Cart' ><button className="botonSecundario modificacion">Ir al Carrito</button></Link>}
            </div>
        </div>

    )
}





export default ItemCount;

