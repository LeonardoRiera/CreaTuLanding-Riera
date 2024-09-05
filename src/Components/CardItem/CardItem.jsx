import React, { useContext } from 'react'
import { CartContext } from '../../Contex/CartContex'
import './CardItem.css'

const CardItem = ({producto}) => {

   const {eliminarProducto} = useContext(CartContext)
  return (
    <div className='carritoContenedor'>
      
      <div className='cardItemContainer'>

        <img src={producto.imagen} alt="imagen del producto comprado" />
        <h2>Producto: {producto.nombre}</h2> 
        <p>Precio (x unid): {producto.precio}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Total: ${producto.precio * producto.quantity}</p>
        <button onClick={()=> eliminarProducto(producto.id)} className='botonSecundario'>Eliminar</button>
        
      </div>

    </div>
  )
}

export default CardItem