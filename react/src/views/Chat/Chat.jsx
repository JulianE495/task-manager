import React, { useRef, useState, useEffect } from 'react';
import '../Chat/ChatStyles.css';
import PilierImg from '../../assets/perfiles/Pilier.webp';
import MujerPerfil from '../../assets/perfiles/avatar2.webp';
import HombrePerfil from '../../assets/perfiles/avatar1.webp';
import axiosClient from "../../axios-client.js";
import { BsSearch, BsPaperclip, BsSend } from 'react-icons/bs';
import MensajeEnviado from '../BubbleMensajeEnviado/MensajeEnviado';
import MensajeRecibido from '../BubbleMensajeRecibido/MensajeRecibido';
import ContactChat from './ContactChat';
import Carga from '../Carga/Carga'; // Asegúrate de importar el componente Carga
import MeyPic from '../../assets/perfiles/meyperfil.webp';
import { useStateContext } from "../../context/ContextProvider";

const Chat = () => {
  const [contenidoInput, setContenidoInput] = useState('');
  const [mensajes, setMensajes] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, setUser, setToken, } = useStateContext();
  const [chatSeleccionado, setChatSeleccionado] = useState({
    imgContact: PilierImg,
    contactName: 'Robert Pillier',
  });
  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  };

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setContenidoInput(e.target.value);
  };

  const enviarMensaje = () => {
    if (contenidoInput.trim() !== '') {
      setMensajes([...mensajes, { contenido: contenidoInput, tipo: 'enviado' }]);
      setContenidoInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      enviarMensaje();
    }
  };

  const cambiarChat = (imgContact, contactName) => {
    setChatSeleccionado({ imgContact, contactName });
  };

  const fullImagePath = user.image_path ? `http://localhost:8000/${user.image_path}` : MeyPic;

  return (

    <div className="chat__container">
      {loading ? (
        <Carga /> // Muestra la pantalla de carga si está en progreso
      ) : (
        <div className="sides__container">
          <div className="left__container">
            <div className="cont__title">
              <h1 className="chat__title">Chat</h1>
              <hr className="line" />
            </div>

            <label className="search-button">
              <div className="input-container">
                <BsSearch className="search-icon" />
                <input type="text" placeholder="Buscar un chat" className="search-input" />
              </div>
            </label>

            <div className="chats__container">
              {users.map(u => (
                <ContactChat
                  key={u.id}
                  imgContact={`http://localhost:8000/${u.image_path}`}
                  contactName={u.name}
                  onClick={() => cambiarChat(`http://localhost:8000/${u.image_path}`, u.name)}
                />
              ))}
            </div>

          </div>

          <div className="right__container">
            <div className="cont__title">
              <div className="name__container">
                <h2 className="name__text">{chatSeleccionado.contactName}</h2>
                <img src={chatSeleccionado.imgContact} alt="Imagen de perfil" className="profile-image" />
              </div>
              <hr className="line" />
            </div>

            <div className="messages__container">
              <div className="chat-messages">
                {mensajes.map((mensaje, index) =>
                  mensaje.tipo === 'enviado' ? (
                    <MensajeEnviado key={index} contenido={mensaje.contenido} />
                  ) : (
                    <MensajeRecibido key={index} />
                  )
                )}
              </div>
            </div>

            <div className="form__element__chat">
              <BsPaperclip className="add-icon" />
              <label className="ref__input">
                <input
                  className="input__chat"
                  ref={inputRef}
                  type="text"
                  placeholder="Escribe tu mensaje"
                  value={contenidoInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
              </label>
              <BsSend className="send-icon" onClick={enviarMensaje} />
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default Chat;
