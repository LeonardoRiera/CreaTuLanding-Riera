import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contex/CartContex'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'


const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [orden, setOrden] = useState("")
    const [isSumbmiting, setIsSubmiting] =  useState(false)

    const { cart, setCart } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmiting(true)

        const usuario = {
            nombre,
            mail,
            direccion
        }

        const orden = {
            cart, usuario
        }

        

        const orderRef = collection(db, "ordenes")
        const orderID = await addDoc(orderRef, orden)

        setOrden(orderID.id)
        setIsSubmiting(false)
        console.log(orderID)

        setDireccion("")
        setMail("")
        setNombre("")
        setCart([])
    }


    console.log("ORDEN", orden)
    if (orden) {
        return (
            <h1>
                Gracias por tu elegirnos, el id de tu compra es {orden}
            </h1>
        )
    }


    return (
        <div>
            <h3>Ingresa los datos para terminar tu compra</h3>

            <form className='form' onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="nombre">  Nombre  </label>
                <input type="text" name='nombre'  onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="email">  Email  </label>
                <input type="email" name='email' onChange={(e) => setMail(e.target.value)} />
                <label htmlFor="direccion"> Dirección </label>
                <input type="text" name='direccion' onChange={(e) => setDireccion(e.target.value)} />
                <button type='submit' disabled={isSumbmiting}  > Enviar </button>
            </form>
        </div>
    )
}

export default Checkout