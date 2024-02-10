// src/App.js
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import MensajeWhatsapp from './components/MensajeWhatsapp';

function App() {
  const [mensajeWhatsapp, setMensajeWhatsapp] = useState('');
  const [currentPage, setCurrentPage] = useState('formulario');



  const handleNextPage = () => {
    console.log("Mensaje enviado a la siguiente página:", mensajeWhatsapp);
    setCurrentPage('mensajeWhatsapp');
  };

  const handleMensajeWhatsapp = (mensaje) => {
    setMensajeWhatsapp(mensaje);
  };

  return (
    <div>
      {currentPage === 'formulario' && (
        <Formulario 
          handleClick={handleNextPage} 
          handleMensajeWhatsapp={handleMensajeWhatsapp} 
        />
      )}
      {currentPage === 'mensajeWhatsapp' && (
        <MensajeWhatsapp mensaje={mensajeWhatsapp} />
      )}
    </div>
  );
};

export default App;