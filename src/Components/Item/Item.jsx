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
                <img src={imagen} alt={nombre} className="ItemImg1" />
            </picture>
            <section className="precioCantidad">
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {cantidad} 
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item;