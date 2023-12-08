import React from 'react';
import './HeaderUserStyles.css';
import BackIcon from '../../assets/back.svg';
import GUSER from '../../assets/gplogo.png';

export const HeaderUser = () => {

  return (
    <header className='cabecera'>
      <a className="back-ico" href='/dashboard'>
        <img src={BackIcon} alt="Icono_Volver" className="icono-retorno" />
      </a>

      <div className="grupo-logo">
        <img src={GUSER} alt="Cadena" className="imagen-cadena" />
      </div>
    </header>
  );
};

export default HeaderUser;
