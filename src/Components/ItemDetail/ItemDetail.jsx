import React, { useContext } from "react";
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { CartContext } from "../../Contex/CartContex.jsx";
import { Link } from "react-router-dom";



const ItemDetail = ({ product, previo, next }) => {
    const { nombre, imagen, categoria, descripcion, precio, cantidad } = product;
    const { agregarCarrito, quantity, reiniciarCantidad } = useContext(CartContext)

    const pulsarComprar = (quantity) => {
        agregarCarrito({...product, quantity: quantity })
       
    }

   const funcionalidadBotonesPrevio = () => {
    reiniciarCantidad();
    previo();
   }

   const funcionalidadBotonesNext = () => {
    reiniciarCantidad();
    next();
   }

    return (
        <article className="CardItem2">
            <div className="CardItemHeader">
                <h2 className="ItemTitulo">
                    {nombre}
                </h2>
            </div>
            <div className="pikInfoContainer">
                <picture>
                    <img src={imagen} alt={nombre} className="ItemImg" />
                </picture>
                <section className="cardTexto">
                    <p className="Info">Categoría: {categoria}</p>
                    <p className="Info">Descripción: {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>

                    <div className="ItemFooter">
                    <ItemCount initial={quantity} stock={cantidad} pulsarComprar={pulsarComprar}/>
                    </div>
                    
                </section>
            </div>
            
            <div className="cambiarProd">
                <button className="botonProd2 botonSecundario" onClick={funcionalidadBotonesPrevio}>Anterior</button>
                <button className="botonProd2 botonSecundario" onClick={funcionalidadBotonesNext}>Siguiente</button>
            </div>
            <Link to='/'><button className="botonSecundario botonProd">Volver al Inicio</button></Link>
        </article>
    );
}

export default ItemDetail;
