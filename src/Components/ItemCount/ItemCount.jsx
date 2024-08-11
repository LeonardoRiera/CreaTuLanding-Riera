import React from "react";
import "../ItemCount/ItemCount.css";
import { useState } from "react";



const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

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

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="ButtonContador" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="ButtonContador" onClick={increment}>+</button>
            </div>
            <div>
                <button className="ButtonContador" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>

    )
}





export default ItemCount;

