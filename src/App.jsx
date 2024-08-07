import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './Components/ItemCount/ItemCount.jsx';

function App() {
  
  return (
    <>
      <div className='App'>

        <Navbar />
        <ItemListContainer  
          titulo = 'Bienvenidos a Junior Sport!'
          texto = 'Todo lo que necesitas para estar siempre en movimiento.'
        />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      </div>
    
    </>
  )
}

export default App
