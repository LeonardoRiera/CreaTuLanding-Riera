import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contex/CartContex'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { Link } from 'react-router-dom'
import './CheckOut.css'
import solologo from '../../img/solologo.png'


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

        
        /* enviar formulario a firebase */
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


   
    if (orden) {
        return (
            < div className='checkoutIdCompra'>
                <h3 className='mensajeCheckOut'>
                    Gracias por tu elegirnos, <br></br> Tu pedido está siendo despachado,<br></br> el id de tu compra es <br></br>
                    <span className='idFinal'>{orden}</span>
                </h3>
                <Link to='/' className='linkCheckOut'><button className='botonGeneral '>Volver al Inicio</button ></Link>
            </div>
        )
    }


    return (
        <div className='checkoutContainer'>
           
            <div className='formContainer'>
                <h3 className='tituloFinDeCompra'>Ingresa los datos para terminar tu compra</h3>

                <form className='form' onSubmit={(e) => handleSubmit(e)}>

                    <label htmlFor="nombre" className='formularioDatos'>  Nombre  </label>
                    <input type="text" name='nombre'  onChange={(e) => setNombre(e.target.value)} className='formularioDatosT' />
                    <label htmlFor="email" className='formularioDatos'>  Email  </label>
                    <input type="email" name='email' onChange={(e) => setMail(e.target.value)} className='formularioDatosT' />
                    <label htmlFor="direccion" className='formularioDatos'> Dirección </label>
                    <input type="text" name='direccion' onChange={(e) => setDireccion(e.target.value)}  className='formularioDatosT'/>
                    <button type='submit' disabled={isSumbmiting} className='botonFormularioDatos botonGeneral' > Enviar </button>
                </form>
            </div>

            <div className='complementoForm'>
                <img src={solologo} alt="logo solo" className='solologo' />
            </div>
        </div>
    )
}

export default Checkout