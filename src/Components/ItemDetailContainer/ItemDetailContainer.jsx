import React, { useEffect, useState } from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { getProductsById } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()


    

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    /* {...product}  ...son propiedades del producto */
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} /> 
        </div>
    )
}

export default ItemDetailContainer