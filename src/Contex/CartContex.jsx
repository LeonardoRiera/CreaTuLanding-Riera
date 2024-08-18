import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);


    

    const agregarCarrito = (product) => {
        setCart([...cart, product])
    }

    console.log(cart)

    return (
    <CartContext.Provider value={{cart, setCart, agregarCarrito}}>
        {children}
    </CartContext.Provider>)
}