import React from "react";
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/juniorRowBlack.png';


function ItemListContainer( { titulo, texto } ) {
    return (
        <header>
            <h1>{titulo}</h1>
            <p className="texto-bienvenida">{texto}</p>
            <img
                className="logo-header" 
                src={logoHeader}
                alt="logo e-commerce negro" 
            />
        </header>
    )
}

export default ItemListContainer;