import React, { useContext, useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/juniorRowBlack.png';
import { getProducts, /* getProductsByCategory */ } from "../../../asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';



function ItemListContainer( { titulo, texto } ) {
    const [products, setProducts] = useState([])

    

    const { categoria } = useParams()

   
    

    useEffect(() => {
        /* const asyncFunc = categoriaId ? getProductsByCategory : getProducts

        asyncFunc(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            }) */

        if(categoria){
            const prodsPorCat = query(collection(db, "productos"), where("categoria", "==", categoria))
            getDocs(prodsPorCat).then(snapshot => {
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                    
                })
                setProducts(prods)
            })
        }else {
            const prodsRef = collection(db, "productos")
            getDocs(prodsRef).then(snapshot => {
                console.log("snap", snapshot)
                const prods = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                    
                })
                setProducts(prods)
                console.log(prods)
            })
        }

    }, [categoria])

    /* useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[]) */

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