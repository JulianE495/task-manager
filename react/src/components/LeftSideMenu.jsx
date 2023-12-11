import { useState } from 'react';
import { ButtonOptionSelected, ButtonOptionSelected2, ButtonLogout } from './Button';
import { IoAddCircle } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider";


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
        console.log('Logout');
    }

    return (
        <>

            <div className='menu-container'>
                <div className='menu-content'>
                    <div className='logo-container'>
                        <img src={logo} alt="Logo"></img>
                        <h1>TaskManager</h1>
                    </div>

                    <div className='menu-options'>
                        <ButtonOptionSelected
                            icon={<IoAddCircle className='svg-icon' style={{ color: 'red' }} />}
                            label='Añadir tarea'
                            onClick={handleCreateTaskClick} />
                        <ButtonOptionSelected2
                            icon={<BiSolidDashboard className='svg-icon' style={{ color: 'red' }}></BiSolidDashboard>}
                            label='Dashboard'
                            link='/dashboard'></ButtonOptionSelected2>
                        <ButtonOptionSelected2
                            icon={<FaUser className='svg-icon' style={{ color: 'red' }}></FaUser>}
                            label='Perfil' link='/profile'></ButtonOptionSelected2>
                        <ButtonOptionSelected
                            onClick={onLogout}
                            icon={<RiLogoutCircleLine
                                className='svg-icon'
                                style={{ color: 'red' }}></RiLogoutCircleLine>}
                            label='Cerrar sesion' ></ButtonOptionSelected>
                    </div>
                </div>

                {showPopup && <NewTaskPage onClose={handleSavePopup} onCancel={handleCancelPopup} className="active" />}
            </div>
        </>
    );
}

export default LeftSideMenu;