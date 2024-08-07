import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/juniorRowBlack.png';
import { getProducts } from "../../../asyncMock";
import ItemList from '../ItemList/ItemList';


function ItemListContainer( { titulo, texto } ) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    })

    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <p className="texto-bienvenida">{texto}</p>
                <img
                    className="logo-header" 
                    src={logoHeader}
                    alt="logo e-commerce negro" 
                />
                
            </header>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;