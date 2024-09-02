import React, { useContext, useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/structure.png';


import {productos} from "../../../asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';



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
        <div className='backPrincipal'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='ola'>
             <path fill="#DFDFDF" fillOpacity="1" d="M0,192L80,213.3C160,235,320,277,480,277.3C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <header className='headerCont'>

                <div className='tituloH1'>
                    <h1>{titulo}</h1>
                    <p className="texto-bienvenida">{texto}</p>
               </div>
                <img
                    className="logo-header" 
                    src={logoHeader}
                    alt="logo e-commerce negro" 
                />
               
                
                
            </header>
            <ItemList products={products} />
            
           
        </div>
    )
}

export default ItemListContainer;