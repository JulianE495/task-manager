import React, { useState, useEffect } from 'react';
import MeyPic from '../../assets/perfiles/meyperfil.webp';
import MedallaEsmeralda from '../../assets/medallas/esmeralda.png';
import AjustesIcon from '../../assets/ajustes.png';
import './UserBodyStyles.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import Trofeo from '../../assets/trofeo.png';
import HeaderUser from './HeaderUser';
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client.js";
import Carga from '../Carga/Carga.jsx'; // Ajusta la ruta a tu componente de carga
import { format, render, cancel, register } from 'timeago.js';


export const UserBody = () => {
  const { user, setUser, setToken, } = useStateContext();
  const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial
  const [logoutLoading, setLogoutLoading] = useState(false); // Estado para controlar la carga durante el logout

  useEffect(() => {
    // Simula una carga inicial (puedes reemplazar esto con tu lógica real de carga)
    const fakeInitialLoad = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(fakeInitialLoad); // Limpiar el temporizador al desmontar el componente
  }, []);

  const onLogout = ev => {
    ev.preventDefault();

    setLogoutLoading(true); // Activar la pantalla de carga al iniciar el logout

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      })
      .finally(() => {
        setLogoutLoading(false); // Desactivar la pantalla de carga al finalizar el logout
      });
  }

  const fullImagePath = user.image_path ? `http://localhost:8000/${user.image_path}` : MeyPic;

  register('es_ES', (number, index, total_sec) => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'in %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
  ][index]);

  return (<>
    {loading && <Carga />} {/* Mostrar la pantalla de carga durante la carga inicial */}
    <div className='all'>
      <HeaderUser />
      <div className='container-profile__main'>
        <div className="Icon-Perfil">
          <div className="icono-container">
            <img src={fullImagePath} alt="Icono-Usuario" className="icono-perfil" />
          </div>

          <div className="texto-usuario">
            <h2>{user.name} {user.last_name}</h2>
            <p className='puesto-text'>Pasante</p>
            <h3>{user.department}</h3>
            <p className='funcion-text'>Desarrolladora de Software</p>
          </div>

          <div className='IconosAdd'>
            <img src={MedallaEsmeralda} alt="Icono-Medalla" className="icono-medalla" />
            <img src={AjustesIcon} alt="Icono-Ajustes" className="icono-ajustes" />
          </div>
        </div>

        <div className="rectangulo-gris">
          <div className="info-cont">
            <div className="first-part">
              <div className="info-section">
                <h2 className="correo-t">Correo</h2>
                <p className="correo-u">{user.email}</p>
              </div>

              <div className="info-section">
                <h2 className="fecha-t">Fecha de nacimiento</h2>
                <p className="fecha-u">{user.birth_date}</p>
              </div>
            </div>

            <div className="second-part">
              <div className="info-section">
                <h2 className="telefono-t">Teléfono</h2>
                <p className="telefono-u">809-200-3234</p>
              </div>

              <div className="info-section">
                <h2 className="trayectoria-t">Trayectoria en la empresa</h2>
                <p className="trayectoria-u">{format(user.contract_date, 'es_ES')}
                </p>
              </div>
            </div>

            <div className="trofeos-cont">
              <div className="trofeo-section">
                <img src={Trofeo} alt="Icono-Trofeo" className="icono-trofeo" />
                <h4 className="t1">Puntualidad</h4>
                <h5 className="e1">(10)</h5>
              </div>

              <div className="trofeo-section">
                <img src={Trofeo} alt="Icono-Trofeo" className="icono-trofeo" />
                <h4 className="t2">Rapidez</h4>
                <h5 className="e2">(10)</h5>
              </div>

              <div className="trofeo-section">
                <img src={Trofeo} alt="Icono-Trofeo" className="icono-trofeo" />
                <h4 className="t3">Empeño</h4>
                <h5 className="e3">(40)</h5>
              </div>
            </div>
          </div>

          <div className="cs-cont">
            <button className="cs-button" onClick={onLogout}>
              Cerrar Sesión
            </button>

          </div>
        </div>
      </div>
      {/* {logoutLoading && <Carga />} */}
    </div>
  </>
  );
}

export default UserBody;
