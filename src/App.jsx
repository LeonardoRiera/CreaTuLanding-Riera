import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Card/Cart.jsx';
import { CartContextProvider } from './Contex/CartContex.jsx';


function App() {

  return (

        <CartContextProvider>

          <BrowserRouter>

            <Navbar />
            <Routes>
              <Route path='/' element={< ItemListContainer 
              titulo="Bienvenidos a Junior Sport!"
              texto=" Todo lo que necesitas para estar siempre en movimiento."
              />} 
              />
              <Route path='/categoria/:categoria' element={< ItemListContainer 
                titulo="Bienvenidos a Junior Sport!"
                texto=" Todo lo que necesitas para estar siempre en movimiento."
              />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='/cart/Cart' element={<Cart/>} />
              <Route path='' element={<h1>404 NOT FOUND</h1>} />
            </Routes>


          </BrowserRouter>

        </CartContextProvider>    

  
  )
}

export default App