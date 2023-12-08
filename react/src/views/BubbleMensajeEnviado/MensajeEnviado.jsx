import React from 'react';
import '../../views/BubbleMensajeEnviado/MEStyles.css'

const MensajeEnviado = ({ contenido }) => {
    return (
      <div className="me__container fade-in">
        <div className="ME">
          {contenido}
        </div>
      </div>
    );
  };
  
  export default MensajeEnviado;