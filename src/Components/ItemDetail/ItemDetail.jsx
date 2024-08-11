import React from "react";
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({ product, previo, next }) => {
    const { nombre, imagen, categoria, descripcion, precio, cantidad } = product;

    return (
        <article className="CardItem2">
            <div className="CardItemHeader">
                <h2 className="ItemTitulo">
                    {nombre}
                </h2>
            </div>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section className="cardTexto">
                <p className="Info">Categoría: {categoria}</p>
                <p className="Info">Descripción: {descripcion}</p>
                <p className="Info">Precio: ${precio}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={cantidad} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />
            </footer>
            <div className="cambiarProd">
                <button className="botonProd" onClick={previo}>Ver Anterior</button>
                <button className="botonProd" onClick={next}>Ver Siguiente</button>
            </div>
        </article>
    );
}

export default ItemDetail;
