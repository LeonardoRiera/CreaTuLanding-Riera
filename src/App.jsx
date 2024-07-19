import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

function App() {
  
  return (
    <>
      <div className='App'>

        <Navbar />
        <ItemListContainer  
          titulo = 'Bienvenidos a Junior Sport!'
          texto = 'Todo lo que necesitas para estar siempre en movimiento.'
        />

      </div>
    
    </>
  )
}

export default App
