import './css/tareasPendientes.css'
import { TareaPendiente, ReunionPendiente } from '../components/Tarea'

const ResumenTareas = () => {
    return (
        <>
            <div className='resumen-tareas-container'>
                <h2>Resumen de tareas</h2>
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