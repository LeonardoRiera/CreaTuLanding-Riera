import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);


    

    const agregarCarrito = (product) => {
        setCart([...cart, product])
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

    return (
    <CartContext.Provider value={{cart, setCart, agregarCarrito, vaciarCarrito, eliminarProducto, mostrarCantidad}}>
        {children}
    </CartContext.Provider>)
}