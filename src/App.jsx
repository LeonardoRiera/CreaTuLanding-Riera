import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Card/Cart.jsx';
import { CartContextProvider } from './Contex/CartContex.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx';
import Footer from './Components/Footer/Footer.jsx';
import logo from './img/logo-travel-devs.png'


function App() {

  return (

        <CartContextProvider>

          <BrowserRouter>

            <Navbar />
            <Routes>
              <Route path='/' element={< ItemListContainer 
              titulo="Travel Devs"
              texto="Soluciones Reales para Nomades Digitales."
              />} 
              />
              <Route path='/categoria/:categoria' element={< ItemListContainer 
                titulo="Travel Devs"
                texto=" Soluciones Reales para Nomades Digitales."
              />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='/CheckOut' element={<CheckOut/>} />
              <Route path='/cart/Cart' element={<Cart/>} />
              <Route path='' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <Footer/>


          </BrowserRouter>

        </CartContextProvider>    

  
  )
}

export default App