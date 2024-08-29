import React, { useEffect, useState, useContext } from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { getProductsById, getProducts } from '../../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
/* import { CartContext } from '../../Contex/CartContex'; */
import { db } from '../../services/firebaseConfig';
import { getDoc, doc, getDocs, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [totalProducts, setTotalProducts] = useState(0);
    
    const { itemId } = useParams(); // para el ID actual del producto desde la URL
    const navigate = useNavigate(); // este Hook es para redireccionar
    

   /*  useEffect(() => {
        // Obtenemos todos los productos para conocer el total de productos disponibles
        getProducts()
            .then(products => {
                setTotalProducts(products.length);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); */


    useEffect(() => {
       /*  getProductsById(Number(itemId))
            .then(response => {
                setProduct(response);
                
            })
            .catch(error => {
                console.error(error);
            }); */
            const fetchProduct = async () => {
                try{
                    const productoRef = doc(db, "productos", itemId)
                    const res = await getDoc(productoRef)
                    const data = res.data()
                    const productoFormateado = {id: res.id , ...data}
                    setProduct(productoFormateado)
                }catch (error){
                    setError(error)
                }
            } 
            fetchProduct()




    }, [itemId]);
    
   
    const previo = () => {
        const newId = Number(itemId) === 1 ? totalProducts : Number(itemId) - 1; // Si el ID es 1, pasa al último producto
        navigate(`/item/${newId}`); // Cambia la URL con el nuevo ID
    };

    const next = () => {
        const newId = Number(itemId) === totalProducts ? 1 : Number(itemId) + 1; // Si el ID es el último, pasa al primer producto
        navigate(`/item/${newId}`); // Cambia la URL con el nuevo ID
    };

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail 
                product={product} 
                previo={previo} 
                next={next} 
            />
        </div>
    );
}

export default ItemDetailContainer;
