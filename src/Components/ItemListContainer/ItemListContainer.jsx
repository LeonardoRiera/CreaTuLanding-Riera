import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css';
import '@fontsource/black-han-sans';
import '@fontsource/do-hyeon';
import logoHeader from '../../img/structure.png';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';


function ItemListContainer( { titulo, texto } ) {

    const [products, setProducts] = useState([])
    const { categoria } = useParams()

   
    useEffect(() => {
       

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

    

    return (
        <div id='productos' className='backPrincipal'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='ola'>
            <path fill="#DFDFDF" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,101.3C672,107,768,181,864,192C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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