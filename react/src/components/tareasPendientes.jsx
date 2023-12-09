import './css/tareasPendientes.css'
import { TareaPendiente, ReunionPendiente } from '../components/Tarea'
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

const ResumenTareas = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useStateContext();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosClient.get(`/tasks/${user.id}`);
                setTasks(response.data.tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [user.id]);
    return (
        <>
            <div className='resumen-tareas-container'>
                <h2>Resumen de tareas</h2>
                {tasks.map(t => (
                    <TareaPendiente key={t.id} title={t.title} />
                ))}
            </div>
        </>
    )
}

export default ResumenTareas;