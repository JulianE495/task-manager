import './css/tareasPendientes.css'
import { TareaPendiente, ReunionPendiente } from '../components/Tarea'
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";

const ResumenTareas = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks();
        console.log('desde tasks: ', tasks)
    }, [])

    const getTasks = async () => {
        const response = await axiosClient.get('/tasks')
        console.log('desde respobse: ', response)
        setTasks(response)
    }



    return (
        <>
            <div className='resumen-tareas-container'>
                <h2>Resumen de tareas</h2>
                {/* {tasks.map(task => (
                    <div>
                        <TareaPendiente key={task.id}
                            titulo={task.title}
                            fecha={task.date}
                            hora={task.time}
                        />
                    </div>
                ))} */}
                <ReunionPendiente
                    titulo='Añadir funciones a la pantalla registro'
                    fecha='Oct. 10, 2023'
                    hora=' 4:00 pm - 5:00 pm'
                />
                <TareaPendiente
                    titulo='Reunion con el equipo de desarrollo'
                    fecha='Oct. 10, 2023'
                    hora='4:00 pm - 5:00 pm' />
                <TareaPendiente
                    titulo='Reunion con el equipo de desarrollo'
                    fecha='Oct. 10, 2023'
                    hora='4:00 pm - 5:00 pm' />
                <TareaPendiente
                    titulo='Reunion con el equipo de desarrollo'
                    fecha='Oct. 10, 2023'
                    hora='4:00 pm - 5:00 pm' />
                <TareaPendiente
                    titulo='Reunion con el equipo de desarrollo'
                    fecha='Oct. 10, 2023'
                    hora='4:00 pm - 5:00 pm' />
                <TareaPendiente
                    titulo='Reunion con el equipo de desarrollo'
                    fecha='Oct. 10, 2023'
                    hora='4:00 pm - 5:00 pm' />
            </div>
        </>
    )
}

export default ResumenTareas;