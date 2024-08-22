import React, { useContext } from 'react'
import { CartContext } from '../../Contex/CartContex'

const CardItem = ({producto}) => {

   const {eliminarProducto} = useContext(CartContext)
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt="" />
        <p>{producto.precio}</p>
        <p>{producto.quantity}</p>
        <p>Total: {producto.precio * producto.quantity}</p>
        <button onClick={()=> eliminarProducto(producto.id)}>Eliminar Producto</button>
    </div>
  )
}

export default CardItem