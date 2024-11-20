import React, { useEffect, useState } from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { getDoc, doc, getDocs, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]); 
    const { itemId } = useParams(); // para el ID actual del producto desde la URL
    const navigate = useNavigate(); // este Hook es para redireccionar
    

    useEffect(() => {
       
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




    useEffect(() => {
        // Función para obtener todos los productos
        const fetchAllProducts = async () => {
            try {
                const prodsRef = collection(db, "productos");
                const snapshot = await getDocs(prodsRef);
                const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(prods);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchAllProducts();
    }, []);
    
   
    const previo = () => {
        const currentIndex = products.findIndex(prod => prod.id === itemId);
        const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        navigate(`/item/${products[newIndex].id}`);
    };

    const next = () => {
        const currentIndex = products.findIndex(prod => prod.id === itemId);
        const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
        navigate(`/item/${products[newIndex].id}`);
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
