import React from "react"
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'



const ItemDetail = ({ id, nombre, imagen, categoria, descripcion, precio, cantidad}) => {

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
                    <p className="Info">Categoria = {categoria}</p>
                    <p className="Info">Descripcion = {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>
                </section>
                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={cantidad} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />
                </footer>
                <button className="botonProd">Ver Anterior</button>
                <button className="botonProd">Ver Siguiente</button>
            </article>
        )
}

export default ItemDetail