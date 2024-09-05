import React from "react";
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({id, nombre, imagen, precio, cantidad}) => {

    return (
        <article className="CardItem">
            <main className="Main">
                <h2 className="ItemMain">
                    {nombre}
                </h2>    
            </main>
            
            <picture>
                <hr></hr>
                <img src={imagen} alt={nombre} className="ItemImg1" />
            </picture>
            <section className="precioCantidad">
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {cantidad} 
                </p>
                <hr></hr>
            </section>
            <div className="ItemFooter">
                <Link to={`/item/${id}`} className='botonGeneral'>Ver Detalle</Link>
            </div>
        </article>
    )
}

export default Item;