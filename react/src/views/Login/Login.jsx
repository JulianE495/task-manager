import axiosClient from "../../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../../context/ContextProvider.jsx";
import { useState } from "react";
import './LoginStyles.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" && formData.password === "") {
      toast.error('Debe ingresar un correo electronico y una contraseña');
    }
    else if (formData.email === "") {
      toast.error('Debe ingresar un correo electronico');
    }
    else if (formData.password === "") {
      toast.error('Debe ingresar una contraseña');
    }
    else {
      toast.success('Inicio de sesion exitoso');
      axiosClient.post('/login', formData)
        .then(({ data }) => {
          setUser(data.user)
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          setMessage(response.data.message);
          notify(message);
        })
    }

    // Aquí puedes realizar la lógica de inicio de sesión con los datos almacenados en formData
  };

  return (
    <>
      <Toaster />
      <div className="login">
        <div className="login__container">
          <div className="login__container__body">
            <div className="login__container__body__title">
              <h1>Inicio de Sesión</h1>
            </div>
            <div className="login__container__body__form">
              <form onSubmit={handleSubmit}>
                <div className="login__container__body__form__input">
                  <input
                    type="text"
                    name="email"
                    className="input"
                    placeholder="Correo electrónico"
                    // value={formData.email}
                    ref={emailRef}
                    onChange={handleChange}
                  />
                </div>
                <div className="login__container__body__form__input">
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Contraseña"
                    // value={formData.password}
                    ref={passwordRef}
                    onChange={handleChange}
                  />
                </div>
                <div className="login__container__body__form__input">
                  <button type="submit">Iniciar sesión</button>
                </div>
                <div className="login__container__body__form__input">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="login__container__body__register">
                  <p>
                    ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
