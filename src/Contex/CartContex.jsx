import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);


    

    const agregarCarrito = (product) => {
        const productoRepetido = cart.find((p) => p.id === product.id)
        if(productoRepetido) {
            setCart(cart.map((p) => 
            p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p
            
           )); 
        } else {
        setCart([...cart, product])}
    }

    console.log(cart)

    const vaciarCarrito = () => {
        setCart([]);
    }


    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id);
        setCart(newCart);
    }

    const mostrarCantidad = () => {
        return cart.reduce((acum, num) => acum + num.quantity, 0)
    }

    const reiniciarCantidad = () => {
        setQuantity(1);
    }

   
    const mostrarTotal = ()=> {
       return cart.reduce((acum, prod) => acum + (prod.precio * prod.quantity), 0)
    }
    

    return (
    <CartContext.Provider value={{cart, setCart, agregarCarrito, vaciarCarrito, eliminarProducto, mostrarCantidad, reiniciarCantidad, quantity, setQuantity, mostrarTotal}}>
        {children}
    </CartContext.Provider>)
}