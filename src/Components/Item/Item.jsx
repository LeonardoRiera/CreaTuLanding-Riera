import React from "react";
import './Item.css';


const Item = ({id, nombre, imagen, precio, cantidad}) => {

    return (
        <article className="CardItem">
            <main className="Main">
                <h2 className="ItemMain">
                    {nombre}
                </h2>
            </main>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {cantidad} 
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="option">
                    Ver Detalle
                </button>
            </footer>
        </article>
    )
}

export default Item;