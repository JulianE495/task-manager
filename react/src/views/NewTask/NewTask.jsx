import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios-client.js';
import './NewTask.css';

const NewTaskPage = ({ onClose, onCancel }) => {
    const titleRef = React.createRef();
    const descriptionRef = React.createRef();
    const passwordRef = React.createRef();
    const dueDateRef = React.createRef();
    const stateRef = React.createRef();
    const userIdRef = React.createRef();
    const { user, token, setUser, setToken, notification } = useStateContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userIdRef = user.id;
        const payload = {
            title: titleRef.current?.value,
            description: descriptionRef.current?.value,
            dueDate: dueDateRef.current?.value,
            state: stateRef.current?.value,
            userId: userIdRef.current?.value,
        };
        debugger
        axiosClient.post('/add-task', payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });

        console.log('Datos del formulario:', payload);
    };

    return (
        <div className="login popup-overlay">
            <div className="login__container popup-container">
                <div className="login__container__body">
                    <div className="login__container__body__title">
                        <h1>Añadir tarea {user.id}</h1>
                    </div>
                    <div className="login__container__body__form">
                        <form onSubmit={handleSubmit}>
                            <div className="login__container__body__form__input">
                                <input
                                    type="text"
                                    name="title"
                                    ref={titleRef}
                                    className="input"
                                    placeholder="Titulo de la tarea"
                                />
                            </div>

                            <div className="login__container__body__form__input">
                                <input
                                    type="text"
                                    ref={descriptionRef}
                                    name="description"
                                    className="input"
                                    placeholder="Descripcion de la tarea"
                                />
                            </div>

                            <div className="login__container__body__form__input">
                                <input
                                    type="datetime-local"
                                    ref={dueDateRef}
                                    name="expirationDate"
                                    className="input"
                                    placeholder="Hora de vencimiento"
                                />
                            </div>

                            <div className="login__container__body__form__input">
                                <input
                                    type="text"
                                    ref={stateRef}
                                    name="taskState"
                                    className="input"
                                    placeholder="Estado de la tarea"
                                />
                            </div>

                            <div className="login__container__body__form__input">
                                <button type="submit" onClick={onClose}>Añadir</button>
                            </div>

                            <div className="login__container__body__form__input cancel__button">
                                <button onClick={onCancel}>Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTaskPage;