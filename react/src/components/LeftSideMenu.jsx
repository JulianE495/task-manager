import { useState } from 'react';
import { ButtonOptionSelected, ButtonOptionSelected2, ButtonLogout } from './Button';
import { IoAddCircle } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider";
import toast, { Toaster } from 'react-hot-toast';

import './css/leftSideMenu.css';
import logo from './images/Logo.png'
import NewTaskPage from '../views/NewTask/NewTask';


const LeftSideMenu = () => {
    const { user, setUser, setToken, } = useStateContext();
    const [showPopup, setShowPopup] = useState(false);
    const [logoutLoading, setLogoutLoading] = useState(false); // Estado para controlar la carga durante el logout

    const handleCreateTaskClick = () => {
        setShowPopup(true);
    };

    const handleSavePopup = async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
        setShowPopup(false);
        toast.success('Tarea creada exitosamente');
    };

    const handleCancelPopup = () => {
        setShowPopup(false);
    };

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

    return (
        <>
            <Toaster />
            <div className='menu-container'>
                <div className='menu-content'>
                    <div className='logo-container'>
                        <img src={logo} alt="Logo"></img>
                        <h1>TaskManager</h1>
                    </div>

                    <div className='menu-options'>
                        {/* Usa la función handleCreateTaskClick al hacer clic en el botón */}
                        <ButtonOptionSelected
                            icon={<IoAddCircle className='svg-icon' style={{ color: 'red' }} />}
                            label='Añadir tarea'
                            onClick={handleCreateTaskClick} />
                        <ButtonOptionSelected2
                            icon={<BiSolidDashboard className='svg-icon' style={{ color: 'red' }}></BiSolidDashboard>}
                            label='Dashboard'
                            link='/dashboard'></ButtonOptionSelected2>
                        <ButtonOptionSelected2
                            icon={<BiSolidDashboard className='svg-icon' style={{ color: 'red' }}></BiSolidDashboard>}
                            label='Lista de tareas' ></ButtonOptionSelected2>
                    </div>
                </div>
                <ButtonOptionSelected
                    onClick={onLogout}
                    icon={<RiLogoutCircleLine className='svg-icon' style={{ color: 'red' }}></RiLogoutCircleLine>}
                    label='Cerrar sesion' ></ButtonOptionSelected>

                {/* Muestra el popup si showPopup es true */}
                {showPopup && <NewTaskPage onClose={handleSavePopup} onCancel={handleCancelPopup} className="active" />}
            </div>
        </>
    );
}

export default LeftSideMenu;